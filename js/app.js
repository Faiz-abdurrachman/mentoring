// Playful Gamified Map Logic & Python Execution

document.addEventListener('DOMContentLoaded', () => {
    const nodesContainer = document.getElementById('nodesContainer');
    const totalLevelSpan = document.getElementById('totalLevel');
    let totalNodes = 1;

    // Inject Dynamic Gamified Nodes from COURSE array
    if (typeof COURSE !== 'undefined') {
        totalNodes = COURSE.length + 1;
        totalLevelSpan.innerText = COURSE.length;

        COURSE.forEach((lesson, index) => {
            const slideIndex = index + 1; 
            const sideClass = (slideIndex % 2 === 1) ? 'left' : 'right'; // Alternating sides

            // Build Arcade Editor HTML if code exists
            let arcadeHTML = '';
            if (lesson.playground) {
                arcadeHTML = `
                <div class="arcade-machine">
                    <div class="arcade-header">
                        <span class="arcade-title"><i class="fas fa-gamepad"></i> CODE.PY</span>
                        <span style="font-size:0.85rem; opacity:0.8;"><i class="fas fa-keyboard"></i> Ctrl+Enter to Run</span>
                    </div>
                    <div class="arcade-body">
                        <textarea id="code-${slideIndex}" class="arcade-textarea" spellcheck="false">${lesson.playground}</textarea>
                        <button class="arcade-btn" onclick="runSkulptCode(${slideIndex})"><i class="fas fa-play"></i> RUN</button>
                    </div>
                    <div class="arcade-output" id="output-${slideIndex}">> Tekan RUN untuk melihat keajaiban... </div>
                </div>`;
            }

            // Clean content to make it professional yet playful
            let cleanContent = lesson.content.replace(/🤔|🐍|📦|🎉|✨|🚀|🔥|🌟/g, "");

            const nodeHTML = `
            <div class="checkpoint ${sideClass}" id="node-${slideIndex}">
                <div class="map-dot">${slideIndex}</div>
                <div class="card-wrapper">
                    <div class="playful-card">
                        <div class="badge-part">${lesson.breadcrumb}</div>
                        <div class="lesson-content">
                            ${cleanContent}
                        </div>
                        ${arcadeHTML}
                    </div>
                </div>
            </div>`;
            
            nodesContainer.insertAdjacentHTML('beforeend', nodeHTML);
        });
    }

    // Scroll Spy for XP Bar & Active States
    const checkpoints = document.querySelectorAll('.checkpoint');
    const xpFill = document.getElementById('xpFill');
    const currentLevelSpan = document.getElementById('currentLevel');
    const mascotBubble = document.getElementById('mascotBubble');

    window.addEventListener('scroll', () => {
        let currentActive = 0;
        const scrollPosition = window.scrollY + (window.innerHeight / 2); // Trigger at middle of screen

        checkpoints.forEach((checkpoint, index) => {
            if (checkpoint.offsetTop <= scrollPosition) {
                currentActive = index;
            }
        });

        // Update Active States
        checkpoints.forEach((cp, idx) => {
            if (idx <= currentActive) {
                cp.classList.add('active');
            } else {
                cp.classList.remove('active');
            }
        });

        // Update XP Bar
        currentLevelSpan.innerText = currentActive;
        const xpPercentage = (currentActive / (totalNodes - 1)) * 100;
        xpFill.style.width = `${xpPercentage}%`;

        // Update Mascot Bubble Text
        updateMascot(currentActive);
    });

    // Keyboard shortcut for running code (Ctrl+Enter)
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName.toLowerCase() === 'textarea') {
            if (e.ctrlKey && e.key === 'Enter') {
                e.preventDefault();
                // Find which textarea we are in
                const idAttr = e.target.getAttribute('id');
                if (idAttr && idAttr.startsWith('code-')) {
                    const idx = idAttr.replace('code-', '');
                    runSkulptCode(idx);
                }
            }
        }
    });
});

// Dynamic Mascot Messages
let currentMascotMsg = "";
function updateMascot(index) {
    const bubble = document.getElementById('mascotBubble');
    let msg = "Terus semangat! Kamu pasti bisa memahaminya.";
    
    if (index === 0) msg = "Selamat datang di Python Quest! Scroll ke bawah untuk memulai petualangan.";
    else if (index === (typeof COURSE !== 'undefined' ? COURSE.length : 0)) msg = "Luar biasa! Kamu berhasil menaklukkan semua level hari ini.";
    else if (COURSE[index - 1] && COURSE[index - 1].playground) {
        msg = "Wah, ada tantangan koding! Modifikasi kodenya sesukamu, lalu klik RUN ya.";
    }

    if (currentMascotMsg !== msg) {
        currentMascotMsg = msg;
        // Re-trigger animation
        bubble.style.animation = 'none';
        bubble.offsetHeight; /* trigger reflow */
        bubble.style.animation = 'popBubble 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        bubble.innerText = msg;
    }
}

// Skulpt Arcade Execution Engine
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runSkulptCode(slideIndex) {
    const code = document.getElementById(`code-${slideIndex}`).value;
    const outputDiv = document.getElementById(`output-${slideIndex}`);
    
    outputDiv.innerHTML = '';
    outputDiv.style.color = '#50FA7B'; // Arcade Green
    
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
            outputDiv.style.color = '#FF5F56'; // Arcade Red
            outputDiv.innerHTML = '> ' + err.toString();
        }
    );
}