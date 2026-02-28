// ============================================================
// js/contactForm.js  —  Contact form validation & Formspree submit
// ============================================================

export function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        if (!name || !email || !subject || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        })
            .then((response) => {
                if (response.ok) {
                    alert("Thank you for your message! I will get back to you soon.");
                    form.reset();
                } else {
                    alert("Oops! There was a problem submitting your form. Please try again.");
                }
            })
            .catch(() => {
                alert("Oops! There was a network error. Please try again.");
            });
    });
}
