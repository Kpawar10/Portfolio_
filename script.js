const typingText = document.querySelector('.typing-text');
const words = ['Data Scientist', 'Machine Learning', 'Data Visualizer', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isWaiting) {
        setTimeout(() => {
            isWaiting = false;
            isDeleting = true;
            type();
        }, 1500); // Reduced wait time for better rhythm
        return;
    }

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isWaiting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = isDeleting ? 50 : 150; // Adjusted typing speed
    setTimeout(type, typingSpeed);
}

// Start the typing animation when the page loads
window.onload = type;
const sections = document.querySelectorAll("section");

sections.forEach(sec => {
    sec.classList.add("hidden"); // initially hide
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.remove("hidden");
        }
    });
});