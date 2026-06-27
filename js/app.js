// App Logic - Dynamic Slides & Python Playground (Skulpt)

document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('storyContainer');
    
    // Inject Dynamic Slides from COURSE array (from content.js)
    if (typeof COURSE !== 'undefined') {
        COURSE.forEach((lesson, index) => {
            const slideIndex = index + 1; // +1 because slide 0 is welcome
            
            // Build Playground HTML if code exists
            let playgroundHTML = '';
            if (lesson.playground) {
                playgroundHTML = `
                <div class="playground-ui mt-4">
                    <div class="playground-header">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                        <span class="playground-title"><i class="fas fa-terminal"></i> code.py</span>
                        <span style="margin-left:auto; color:#858585; font-size:0.8rem">Ctrl+Enter to Run</span>
                    </div>
                    <div class="playground-body">
                        <textarea id="code-${slideIndex}" class="code-textarea" spellcheck="false">${lesson.playground}</textarea>
                        <button class="btn-run" onclick="runSkulptCode(${slideIndex})"><i class="fas fa-play"></i> Run</button>
                    </div>
                    <div class="playground-output" id="output-${slideIndex}">> _ </div>
                </div>`;
            }

            const slideHTML = `
            <section class="slide" id="slide-${slideIndex}">
                <div class="glass-card ${lesson.playground ? 'w-large' : ''}">
                    <div class="badge-part">${lesson.breadcrumb}</div>
                    <div class="lesson-content">
                        ${lesson.content}
                    </div>
                    ${playgroundHTML}
                </div>
            </section>`;
            
            storyContainer.insertAdjacentHTML('beforeend', slideHTML);
        });
    }

    // Scroll Progress Logic
    const progressFill = document.getElementById('progressFill');
    const rocketIcon = document.getElementById('rocketIcon');
    const mascotText = document.getElementById('mascotText');
    const slideCountText = document.getElementById('slideCountText');

    const totalSlides = (typeof COURSE !== 'undefined') ? COURSE.length + 1 : 1;

    storyContainer.addEventListener('scroll', () => {
        const scrollPosition = storyContainer.scrollTop;
        const totalHeight = storyContainer.scrollHeight - storyContainer.clientHeight;
        
        let scrollPercentage = 0;
        if(totalHeight > 0) {
            scrollPercentage = (scrollPosition / totalHeight) * 100;
        }
        
        progressFill.style.width = `${scrollPercentage}%`;
        rocketIcon.style.left = `calc(${scrollPercentage}% - 10px)`; 

        // Update Slide count
        let currentIndex = Math.round(scrollPosition / storyContainer.clientHeight);
        slideCountText.innerText = `Slide ${currentIndex} / ${totalSlides - 1}`;

        // Dynamic Mascot Messages
        let msg = "Hebat! Terus lanjutkan ✨";
        if (currentIndex === 0) msg = "Hai, selamat datang! Scroll ke bawah ya! ✨";
        else if (currentIndex === totalSlides - 1) msg = "Kamu berhasil menyelesaikan semuanya! 🎉";
        else if (COURSE[currentIndex - 1] && COURSE[currentIndex - 1].playground) {
            msg = "Ada kodenya tuh! Coba klik tombol Run 🐍";
        } else {
            msg = "Baca pelan-pelan ya materinya 📖";
        }

        if (mascotText.innerText !== msg) {
            mascotText.style.opacity = 0;
            setTimeout(() => {
                mascotText.innerText = msg;
                mascotText.style.opacity = 1;
            }, 300);
        }
    });
    
    // Keyboard shortcut for running code (Ctrl+Enter)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            const scrollPosition = storyContainer.scrollTop;
            let currentIndex = Math.round(scrollPosition / storyContainer.clientHeight);
            if (currentIndex > 0 && COURSE[currentIndex - 1] && COURSE[currentIndex - 1].playground) {
                runSkulptCode(currentIndex);
            }
        }
    });
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
    outputDiv.style.color = '#00FF00'; // Success green
    
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
            if (outputDiv.innerHTML === '') outputDiv.innerHTML = '> (Tidak ada output)'; 
        },
        function(err) {
            outputDiv.style.color = '#FF5F56'; // Error red
            outputDiv.innerHTML = err.toString();
        }
    );
}