// App Logic - PPT Mode & Real Python Execution

let currentSlideIndex = 0;
let totalSlides = 1; // Termasuk slide welcome (0)

document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('storyContainer');
    
    // Inject Dynamic Slides from COURSE array
    if (typeof COURSE !== 'undefined') {
        totalSlides = COURSE.length + 1;
        
        COURSE.forEach((lesson, index) => {
            const slideIndex = index + 1; 
            
            let playgroundHTML = '';
            if (lesson.playground) {
                playgroundHTML = `
                <div class="playground-ui mt-4">
                    <div class="playground-header">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                        <span class="playground-title"><i class="fas fa-code"></i> editor.py</span>
                        <span style="margin-left:auto; color:#858585; font-size:0.8rem">Tekan Ctrl+Enter untuk Run</span>
                    </div>
                    <div class="playground-body">
                        <textarea id="code-${slideIndex}" class="code-textarea" spellcheck="false">${lesson.playground}</textarea>
                        <button class="btn-run" onclick="runSkulptCode(${slideIndex})"><i class="fas fa-play" style="margin-right:5px"></i> Run Code</button>
                    </div>
                    <div class="playground-output" id="output-${slideIndex}">> Siap dijalankan... </div>
                </div>`;
            }

            // Bersihkan teks konten lama yang ada emoji lebay
            let cleanContent = lesson.content.replace(/🤔|🐍|📦|🎉|✨|🚀|🔥|🌟/g, "");

            const slideHTML = `
            <section class="slide" id="slide-${slideIndex}">
                <div class="glass-card ${lesson.playground ? 'w-large' : ''}">
                    <div class="badge-part">${lesson.breadcrumb}</div>
                    <div class="lesson-content">
                        ${cleanContent}
                    </div>
                    ${playgroundHTML}
                </div>
            </section>`;
            
            storyContainer.insertAdjacentHTML('beforeend', slideHTML);
        });
    }

    updateUI();
});

// PPT Navigation Logic
function changeSlide(direction) {
    const oldSlide = document.getElementById(`slide-${currentSlideIndex}`);
    if(oldSlide) oldSlide.classList.remove('active');
    
    currentSlideIndex += direction;
    
    if (currentSlideIndex < 0) currentSlideIndex = 0;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = totalSlides - 1;
    
    const newSlide = document.getElementById(`slide-${currentSlideIndex}`);
    if(newSlide) newSlide.classList.add('active');
    
    updateUI();
}

function updateUI() {
    const progressFill = document.getElementById('progressFill');
    const slideCountText = document.getElementById('slideCountText');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const mascotText = document.getElementById('mascotText');
    
    // Update Progress
    const percentage = (currentSlideIndex / (totalSlides - 1)) * 100;
    progressFill.style.width = `${percentage}%`;
    slideCountText.innerText = `Slide ${currentSlideIndex + 1} / ${totalSlides}`;
    
    // Toggle Arrows
    if(currentSlideIndex === 0) btnPrev.classList.add('disabled');
    else btnPrev.classList.remove('disabled');
    
    if(currentSlideIndex === totalSlides - 1) btnNext.classList.add('disabled');
    else btnNext.classList.remove('disabled');
    
    // Update Mascot Message (Professional & Contextual)
    let msg = "Mari kita lanjutkan ke materi berikutnya.";
    if (currentSlideIndex === 0) msg = "Selamat datang! Tekan panah kanan di layar atau keyboard untuk mulai.";
    else if (currentSlideIndex === totalSlides - 1) msg = "Sesi selesai. Saatnya tanya jawab.";
    else if (COURSE[currentSlideIndex - 1] && COURSE[currentSlideIndex - 1].playground) {
        msg = "Silakan ubah kode di atas lalu klik 'Run Code' untuk melihat hasilnya.";
    }

    if (mascotText.innerText !== msg) {
        mascotText.style.opacity = 0;
        setTimeout(() => {
            mascotText.innerText = msg;
            mascotText.style.opacity = 1;
        }, 300);
    }
}

// Keyboard Navigation (Arrow keys & Space)
document.addEventListener('keydown', function(e) {
    if (e.target.tagName.toLowerCase() === 'textarea') {
        // If typing in textarea, only allow Ctrl+Enter for code execution
        if (e.ctrlKey && e.key === 'Enter') {
            e.preventDefault();
            if (currentSlideIndex > 0 && COURSE[currentSlideIndex - 1] && COURSE[currentSlideIndex - 1].playground) {
                runSkulptCode(currentSlideIndex);
            }
        }
        return; // Don't change slide while typing code
    }

    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if(currentSlideIndex < totalSlides - 1) changeSlide(1);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if(currentSlideIndex > 0) changeSlide(-1);
    }
});

// Skulpt Execution Engine
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runSkulptCode(slideIndex) {
    const code = document.getElementById(`code-${slideIndex}`).value;
    const outputDiv = document.getElementById(`output-${slideIndex}`);
    
    outputDiv.innerHTML = '';
    outputDiv.style.color = '#00FF00';
    
    Sk.configure({
        output: function(text) {
            outputDiv.innerHTML += text.replace(/\\n/g, '<br>');
        },
        read: builtinRead
    });
    
    Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, code, true);
    }).then(
        function() { 
            if (outputDiv.innerHTML === '') outputDiv.innerHTML = '> (Proses selesai tanpa output)'; 
        },
        function(err) {
            outputDiv.style.color = '#FF5F56';
            outputDiv.innerHTML = '> ' + err.toString();
        }
    );
}