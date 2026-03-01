// ============================================================
// js/colorPicker.js  —  Theme-color switcher panel
// ============================================================

const SHADE_MAP = {
    "#754ef9": "#f0edfe",
    "#FCCA07": "#fffbec",
    "#FF6D38": "#fff0eb",
    "#004B6A": "#e5f7ff",
    "#E94D88": "#ffe8f1",
    "#45B164": "#e7ffee",
};

/** Apply a color (and its shade) to the document root and save to localStorage. */
export function applyAccentColor(hex) {
    if (!hex) return;
    document.documentElement.style.setProperty("--current", hex);
    if (SHADE_MAP[hex]) {
        document.documentElement.style.setProperty("--currentShade", SHADE_MAP[hex]);
    }
    localStorage.setItem("accentColor", hex);
}

/** Restore saved accent color — call this as early as possible on every page. */
export function restoreAccentColor() {
    const saved = localStorage.getItem("accentColor");
    if (saved) applyAccentColor(saved);
}

export function initColorPicker() {
    // Restore saved color whenever this page loads
    restoreAccentColor();

    const toggleColor = document.getElementById("toggleColor");
    const colorPanel = document.getElementById("colorPanel");

    if (!toggleColor || !colorPanel) return;

    let isOpen = false;

    // Toggle panel open / close
    toggleColor.addEventListener("click", (e) => {
        e.preventDefault();
        isOpen = !isOpen;

        if (isOpen) {
            toggleColor.classList.remove("translate-x-[160px]");
            colorPanel.classList.remove("translate-x-[210px]");
            toggleColor.classList.add("translate-x-5");
            colorPanel.classList.add("translate-x-18");
        } else {
            toggleColor.classList.remove("translate-x-5");
            colorPanel.classList.remove("translate-x-18");
            toggleColor.classList.add("translate-x-[160px]");
            colorPanel.classList.add("translate-x-[210px]");
        }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!toggleColor.contains(e.target) && !colorPanel.contains(e.target) && isOpen) {
            isOpen = false;
            toggleColor.classList.remove("translate-x-5");
            colorPanel.classList.remove("translate-x-18");
            toggleColor.classList.add("translate-x-[160px]");
            colorPanel.classList.add("translate-x-[210px]");
        }
    });

    // Apply selected color
    colorPanel.addEventListener("click", (e) => {
        const value = getComputedStyle(document.documentElement)
            .getPropertyValue(e.target.textContent)
            .trim();
        if (value) applyAccentColor(value);
    });
}
