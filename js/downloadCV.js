// ============================================================
// js/downloadCV.js  —  CV selector dropdown (desktop + mobile)
// ============================================================

export function initDownloadCV() {
    setupDropdown("cv-dropdown-btn", "cv-dropdown-menu", "cv-arrow-icon");
    setupDropdown("cv-dropdown-btn-mobile", "cv-dropdown-menu-mobile", "cv-arrow-icon-mobile");
}

function setupDropdown(btnId, menuId, arrowClass) {
    const btn = document.getElementById(btnId);
    const menu = document.getElementById(menuId);
    if (!btn || !menu) return;

    const arrowIcon = btn.querySelector(`.${arrowClass}`);

    // Toggle on button click
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = !menu.classList.contains("hidden");
        closeAllDropdowns();
        if (!isOpen) {
            menu.classList.remove("hidden");
            if (arrowIcon) arrowIcon.style.transform = "rotate(180deg)";
        }
    });

    // Close when clicking a CV option (download starts automatically via <a>)
    menu.querySelectorAll(".cv-option").forEach((opt) => {
        opt.addEventListener("click", () => closeAllDropdowns());
    });
}

function closeAllDropdowns() {
    document.querySelectorAll(".cv-dropdown-menu").forEach((m) => m.classList.add("hidden"));
    document.querySelectorAll(".cv-arrow-icon, .cv-arrow-icon-mobile").forEach((i) => {
        i.style.transform = "";
    });
}

// Close on outside click
document.addEventListener("click", () => closeAllDropdowns());
