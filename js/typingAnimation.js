// ============================================================
// js/typingAnimation.js  —  Typewriter effect for hero section
// ============================================================

export function initTypingAnimation() {
    const phrases = ["Sourav", "Web Developer", "AI/ML Engineer","Data Scientist"];
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, letterIndex--);
        } else {
            typingElement.textContent = currentPhrase.substring(0, letterIndex++);
        }

        if (!isDeleting && letterIndex === currentPhrase.length + 1) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 300); // Pause before typing next
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}
