// Gamified Journey Logic & Python Execution

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('slidesContainer');
    const journeyProgress = document.getElementById('journeyProgress');
    
    // Inject Dynamic Gamified Nodes from COURSE array
    if (typeof COURSE !== 'undefined') {
        
        // Setup initial Welcome Node in sidebar
        journeyProgress.innerHTML = `
            <div class="node active" id="node-0" onclick="scrollToSlide(0)">
                <div class="node-dot"><i class="fas fa-flag"></i></div>
                <div class="node-title text-bold">Start</div>
            </div>
        `;

        COURSE.forEach((lesson, index) => {
            const slideIndex = index + 1; 
            
            // Add Node to Sidebar Progress
            const nodeHTML = `
                <div class="node" id="node-${slideIndex}" onclick="scrollToSlide(${slideIndex})">
                    <div class="node-dot">${slideIndex}</div>
                    <div class="node-title">${lesson.title}</div>
                </div>
            `;
            journeyProgress.insertAdjacentHTML('beforeend', nodeHTML);

            // Build Editor HTML if code exists
            let playgroundHTML = '';
            if (lesson.playground) {
                playgroundHTML = `
                <div class="playground-ui">
                    <div class="playground-header">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                        <span class="playground-title"><i class="fas fa-code"></i> editor.py</span>
                        <span style="margin-left:auto; color:#858585; font-size:0.8rem">Tekan Ctrl+Enter untuk Run</span>
                    </div>
                    <div class="playground-body">
                        <textarea id="code-${slideIndex}" class="code-textarea" spellcheck="false">${lesson.playground}</textarea>
                        <button class="btn-run" onclick="runSkulptCode(${slideIndex})"><i class="fas fa-play"></i> Run Code</button>
                    </div>
                    <div class="playground-output" id="output-${slideIndex}">> Tekan Run untuk melihat hasil... </div>
                </div>`;
            }

            // Clean standard emojis for professional look
            let cleanContent = lesson.content.replace(/🤔|🐍|📦|🎉|✨|🚀|🔥|🌟/g, "");
            // Fix CSS class names from old content.js to match new gamified design
            cleanContent = cleanContent.replace(/class="card"/g, 'class="sub-card"');

            const slideHTML = `
            <section class="slide" id="slide-${slideIndex}">
                <div class="glass-card">
                    <div class="badge-part">${lesson.breadcrumb}</div>
                    <div class="lesson-content">
                        ${cleanContent}
                    </div>
                    ${playgroundHTML}
                </div>
            </section>`;
            
            slidesContainer.insertAdjacentHTML('beforeend', slideHTML);
        });
    }

    // Scroll & Snap Logic to sync with Gamified Path
    const mainContent = document.getElementById('mainContent');
    const mascotText = document.getElementById('mascotText');
    const totalSlides = (typeof COURSE !== 'undefined') ? COURSE.length + 1 : 1;
    let currentSlideIndex = 0;

    mainContent.addEventListener('scroll', () => {
        const scrollPosition = mainContent.scrollTop;
        const viewportHeight = mainContent.clientHeight;
        
        // Calculate current active slide index based on snap position
        let newIndex = Math.round(scrollPosition / viewportHeight);
        
        if(newIndex !== currentSlideIndex) {
            currentSlideIndex = newIndex;
            updateActiveNode(currentSlideIndex);
            updateMascot(currentSlideIndex);
        }
    });

    // Arrow Key Navigation for snapping
    document.addEventListener('keydown', function(e) {
        // If typing inside the code editor, only listen to Ctrl+Enter
        if (e.target.tagName.toLowerCase() === 'textarea') {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                if (currentSlideIndex > 0 && COURSE[currentSlideIndex - 1] && COURSE[currentSlideIndex - 1].playground) {
                    runSkulptCode(currentSlideIndex);
                }
            }
            return; 
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            if(currentSlideIndex < totalSlides - 1) scrollToSlide(currentSlideIndex + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            if(currentSlideIndex > 0) scrollToSlide(currentSlideIndex - 1);
        }
    });
});

function scrollToSlide(index) {
    const slide = document.getElementById(`slide-${index}`);
    if(slide) {
        slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateActiveNode(activeIndex) {
    // Update Node classes in Sidebar
    document.querySelectorAll('.node').forEach((node, i) => {
        if(i < activeIndex) {
            node.classList.remove('active');
            node.classList.add('completed');
            node.querySelector('.node-dot').innerHTML = '<i class="fas fa-check"></i>';
        } else if (i === activeIndex) {
            node.classList.add('active');
            node.classList.remove('completed');
            node.querySelector('.node-dot').innerHTML = i === 0 ? '<i class="fas fa-flag"></i>' : i;
        } else {
            node.classList.remove('active');
            node.classList.remove('completed');
            node.querySelector('.node-dot').innerHTML = i;
        }
    });

    // Update active visual state for Cards
    document.querySelectorAll('.slide').forEach((slide, i) => {
        if(i === activeIndex) slide.classList.add('active');
        else slide.classList.remove('active');
    });
}

function updateMascot(index) {
    const mascotText = document.getElementById('mascotText');
    let msg = "Mari pelajari materi ini dengan saksama.";
    
    if (index === 0) msg = "Halo! Tekan tombol Panah Bawah atau scroll untuk memulai perjalanan belajarmu.";
    else if (index === (typeof COURSE !== 'undefined' ? COURSE.length : 0)) msg = "Selamat! Kamu telah menyelesaikan semua tahapan.";
    else if (COURSE[index - 1] && COURSE[index - 1].playground) {
        msg = "Bagian ini dilengkapi dengan editor kode. Kamu bebas mengubah nilainya lalu klik 'Run Code'.";
    }

    if (mascotText.innerText !== msg) {
        mascotText.style.opacity = 0;
        setTimeout(() => {
            mascotText.innerText = msg;
            mascotText.style.opacity = 1;
        }, 300);
    }
}

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
            if (outputDiv.innerHTML === '') outputDiv.innerHTML = '> (Selesai tanpa output)'; 
        },
        function(err) {
            outputDiv.style.color = '#FF5F56';
            outputDiv.innerHTML = '> ' + err.toString();
        }
    );
}