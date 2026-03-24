document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.querySelector('.typing-text');

    const words = [
        'Data Scientist',
        'Machine Learning Engineer',
        'Data Analyst',
        'AI Problem Solver'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingText.textContent = currentWord.substring(0, charIndex);

        // when word completed
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }

        // when word deleted
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        let speed = isDeleting ? 50 : 120;
        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
