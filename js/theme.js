// ============================================================
// js/theme.js  —  Dark / Light mode toggle with localStorage
// ============================================================

let _themeChangeCallback = null;

/** Register a function to be called whenever the theme changes. */
export function registerThemeChangeCallback(fn) {
    _themeChangeCallback = fn;
}

export function initTheme() {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (!themeToggle || !themeIcon) return;

    // Apply saved theme on load
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeIcon.className = savedTheme === "dark" ? "ri-moon-line text-lg" : "ri-sun-line text-lg";

    themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        themeIcon.className = next === "dark" ? "ri-moon-line text-lg" : "ri-sun-line text-lg";

        // Notify other modules that care about the theme change
        if (typeof _themeChangeCallback === "function") {
            _themeChangeCallback(next);
        }
    });
}
