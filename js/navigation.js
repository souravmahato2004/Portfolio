// ============================================================
// js/navigation.js  —  Smooth-scroll for nav & footer links
// ============================================================

export function initNavigation() {
    // Desktop / mobile nav buttons with data-section attribute
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute("data-section");

            if (targetSection === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Footer anchor links
    document.querySelectorAll(".footer-nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute("href").substring(1);

            if (!targetSection || targetSection === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // "View Portfolio" CTA buttons
    const viewPortfolioBtn = document.getElementById("view-portfolio-btn");
    if (viewPortfolioBtn) {
        viewPortfolioBtn.addEventListener("click", () => {
            document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    const aboutViewPortfolioBtn = document.getElementById("about-view-portfolio-btn");
    if (aboutViewPortfolioBtn) {
        aboutViewPortfolioBtn.addEventListener("click", () => {
            document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    // "Get Started" scrolls to contact
    const getStartedBtn = document.getElementById("get-started-btn");
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", () => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
}
