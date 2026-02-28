// ============================================================
// js/mobileMenu.js  —  Mobile hamburger menu behaviour
// ============================================================

export function initMobileMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuOverlay = document.getElementById("menu-overlay");
    const navLinks = mobileMenu.querySelectorAll(".nav-link");

    const openMenu = () => {
        if (mobileMenu && menuOverlay) {
            mobileMenu.classList.remove("translate-x-full");
            mobileMenu.classList.add("translate-x-0");
            menuOverlay.classList.remove("hidden");
            document.body.style.overflow = "hidden";
        }
    };

    const closeMenu = () => {
        if (mobileMenu && menuOverlay) {
            mobileMenu.classList.remove("translate-x-0");
            mobileMenu.classList.add("translate-x-full");
            menuOverlay.classList.add("hidden");
            document.body.style.overflow = "";
        }
    };

    if (menuToggle) menuToggle.addEventListener("click", openMenu);
    if (menuClose) menuClose.addEventListener("click", closeMenu);
    if (menuOverlay) menuOverlay.addEventListener("click", closeMenu);

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}
