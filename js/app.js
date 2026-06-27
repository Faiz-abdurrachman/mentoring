// Neat Gamified Timeline & Python Execution

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

            // Build Elegant IDE Editor HTML if code exists
            let ideHTML = '';
            if (lesson.playground) {
                ideHTML = `
                <div class="ide-machine">
                    <div class="ide-header">
                        <span class="ide-title"><i class="fas fa-terminal" style="color:var(--her-light-pink);"></i> editor.py</span>
                        <span><i class="fas fa-keyboard"></i> Ctrl+Enter</span>
                    </div>
                    <div class="ide-body">
                        <textarea id="code-${slideIndex}" class="ide-textarea" spellcheck="false">${lesson.playground}</textarea>
                        <button class="ide-btn" onclick="runSkulptCode(${slideIndex})"><i class="fas fa-play" style="margin-right:5px;"></i> Run Code</button>
                    </div>
                    <div class="ide-output" id="output-${slideIndex}">> Menunggu instruksi... </div>
                </div>`;
            }

            // Clean content to make it professional
            let cleanContent = lesson.content.replace(/🤔|🐍|📦|🎉|✨|🚀|🔥|🌟/g, "");

            const nodeHTML = `
            <div class="checkpoint" id="node-${slideIndex}">
                <div class="map-dot">${slideIndex}</div>
                <div class="card-wrapper">
                    <div class="elegant-card">
                        <div class="badge-part">${lesson.breadcrumb}</div>
                        <div class="lesson-content">
                            ${cleanContent}
                        </div>
                        ${ideHTML}
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
        const scrollPosition = window.scrollY + (window.innerHeight / 1.5); // Trigger a bit below center

        checkpoints.forEach((checkpoint, index) => {
            if (checkpoint.offsetTop <= scrollPosition) {
                currentActive = index;
            }
        });

        // Update Active States for animation
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
    let msg = "Terus semangat! Setiap baris kode membawa inovasi.";
    
    if (index === 0) msg = "Selamat datang di HerAI. Scroll untuk memulai petualangan belajarmu.";
    else if (index === (typeof COURSE !== 'undefined' ? COURSE.length : 0)) msg = "Luar biasa! Kamu berhasil menaklukkan sesi ini.";
    else if (COURSE[index - 1] && COURSE[index - 1].playground) {
        msg = "Silakan modifikasi kode di atas dan klik 'Run Code' untuk melihat hasilnya.";
    }

    if (currentMascotMsg !== msg) {
        currentMascotMsg = msg;
        bubble.style.animation = 'none';
        bubble.offsetHeight; 
        bubble.style.animation = 'popBubble 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        bubble.innerText = msg;
    }
}

// Skulpt IDE Execution Engine
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

function runSkulptCode(slideIndex) {
    const code = document.getElementById(`code-${slideIndex}`).value;
    const outputDiv = document.getElementById(`output-${slideIndex}`);
    
    outputDiv.innerHTML = '';
    outputDiv.style.color = '#48BB78'; // Success green
    
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
            outputDiv.style.color = '#F56565'; // Error red
            outputDiv.innerHTML = '> ' + err.toString();
        }
    );
}