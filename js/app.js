// Logic untuk Scroll Progress & Interaktif HerAI Presentation

document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.querySelector('.story-container');
    const slides = document.querySelectorAll('.slide');
    const progressFill = document.getElementById('progressFill');
    const rocketIcon = document.getElementById('rocketIcon');
    const mascotText = document.getElementById('mascotText');

    // Dialog Persona berurutan sesuai slide
    const mascotMessages = [
        "Hai, selamat datang! Scroll ke bawah ya! ✨",
        "Pemanasan dulu! Pastikan T4 GPU aktif 💻",
        "Waktunya coding pertama kamu! Klik tombol Run! 🐍",
        "Ingat ya, variabel itu ibarat kardus! 📦",
        "Uji logika kamu! Bantu aku jawab kuis ini 🤔",
        "Kalian luar biasa! Saatnya sesi tanya jawab! 🎉"
    ];

    storyContainer.addEventListener('scroll', () => {
        // Hitung progress scroll persentase
        const scrollPosition = storyContainer.scrollTop;
        const totalHeight = storyContainer.scrollHeight - storyContainer.clientHeight;
        
        let scrollPercentage = 0;
        if(totalHeight > 0) {
            scrollPercentage = (scrollPosition / totalHeight) * 100;
        }
        
        // Update garis progress dan posisi ikon roket
        progressFill.style.width = `${scrollPercentage}%`;
        rocketIcon.style.left = `calc(${scrollPercentage}% - 10px)`; 

        // Update Pesan Mascot berdasarkan Slide yg aktif
        let currentIndex = Math.round(scrollPosition / storyContainer.clientHeight);
        if (currentIndex >= 0 && currentIndex < mascotMessages.length) {
            if (mascotText.innerText !== mascotMessages[currentIndex]) {
                mascotText.style.opacity = 0;
                setTimeout(() => {
                    mascotText.innerText = mascotMessages[currentIndex];
                    mascotText.style.opacity = 1;
                }, 300); // 300ms transition delay
            }
        }
    });
});

// Fungsi untuk Fake Playground Python
function runFakeCode(outputId, resultString) {
    const outputDiv = document.getElementById(outputId);
    outputDiv.innerHTML = "> <em>Menjalankan di server Google Colab...</em>";
    
    // Simulate network delay
    setTimeout(() => {
        outputDiv.innerHTML = `> ${resultString}`;
    }, 800);
}

// Fungsi untuk Kuis Interaktif (Logika Keputusan)
function checkQuiz(isCorrect) {
    const resultDiv = document.getElementById('quizResult');
    resultDiv.classList.remove('hidden');
    
    if (isCorrect) {
        resultDiv.innerHTML = '🎉 <span class="result-success">Jawaban Benar! Karena 80 lebih besar dari 70, maka Lulus.</span>';
        resultDiv.style.background = '#e8f8f5';
        resultDiv.style.padding = '15px';
        resultDiv.style.borderRadius = '10px';
    } else {
        resultDiv.innerHTML = '❌ <span class="result-error">Kurang tepat, coba ingat lagi 80 itu lebih besar dari 70 nggak?</span>';
        resultDiv.style.background = '#fdedec';
        resultDiv.style.padding = '15px';
        resultDiv.style.borderRadius = '10px';
    }
}