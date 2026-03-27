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
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.project-row, .timeline-item, .skills-box')
.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});
// LOADER
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 2000); // matches animation time
});

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 2 },
    move: { speed: 0.6 },
    line_linked: { enable: false },
    opacity: { value: 0.5 }
  }
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2000);
});