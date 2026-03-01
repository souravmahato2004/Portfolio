// ============================================================
// js/downloadCV.js  —  CV selector dropdown (desktop + mobile)
// ============================================================

export function initDownloadCV() {
    // ── Desktop dropdown ─────────────────────────────────────
    const desktopBtn = document.getElementById("cv-dropdown-btn");
    const desktopMenu = document.getElementById("cv-dropdown-menu");
    const desktopArrow = desktopBtn?.querySelector(".cv-arrow-icon");

    if (desktopBtn && desktopMenu) {
        desktopBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = !desktopMenu.classList.contains("hidden");
            desktopMenu.classList.toggle("hidden", isOpen);
            if (desktopArrow) desktopArrow.style.transform = isOpen ? "" : "rotate(180deg)";
        });

        desktopMenu.querySelectorAll(".cv-option").forEach((opt) => {
            opt.addEventListener("click", () => {
                desktopMenu.classList.add("hidden");
                if (desktopArrow) desktopArrow.style.transform = "";
            });
        });

        // Close desktop dropdown on outside click
        document.addEventListener("pointerdown", (e) => {
            if (!e.target.closest("#cv-dropdown-wrapper")) {
                desktopMenu.classList.add("hidden");
                if (desktopArrow) desktopArrow.style.transform = "";
            }
        });
    }

    // ── Mobile accordion ─────────────────────────────────────
    const mobileBtn = document.getElementById("cv-dropdown-btn-mobile");
    const mobileMenu = document.getElementById("cv-dropdown-menu-mobile");
    const mobileArrow = mobileBtn?.querySelector(".cv-arrow-icon-mobile");

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", () => {
            const isOpen = !mobileMenu.classList.contains("hidden");
            mobileMenu.classList.toggle("hidden", isOpen);
            if (mobileArrow) mobileArrow.style.transform = isOpen ? "" : "rotate(180deg)";
        });

        // Close accordion when a CV option is tapped
        mobileMenu.querySelectorAll(".cv-option").forEach((opt) => {
            opt.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                if (mobileArrow) mobileArrow.style.transform = "";
            });
        });
    }

    // Reset mobile accordion whenever the mobile menu is closed
    const menuClose = document.getElementById("menu-close");
    const menuOverlay = document.getElementById("menu-overlay");
    const resetMobileAccordion = () => {
        if (mobileMenu) mobileMenu.classList.add("hidden");
        if (mobileArrow) mobileArrow.style.transform = "";
    };
    if (menuClose) menuClose.addEventListener("click", resetMobileAccordion);
    if (menuOverlay) menuOverlay.addEventListener("click", resetMobileAccordion);
}
