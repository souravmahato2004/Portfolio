// ============================================================
// js/projects-main.js  —  Entry point for projects.html
// ============================================================

import { initTheme } from "./theme.js";
import { initMobileMenu } from "./mobileMenu.js";
import { initDownloadCV } from "./downloadCV.js";
import { getProjects, renderCards } from "./projectRenderer.js";
import { restoreAccentColor } from "./colorPicker.js";

// Apply theme + accent color from localStorage immediately (prevents flash)
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
restoreAccentColor();


initTheme();
initMobileMenu();
initDownloadCV();

// Nav links redirect to index.html#section
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const section = link.getAttribute("data-section");
        window.location.href = section === "home" ? "index.html" : `index.html#${section}`;
    });
});

// Footer links also redirect to index.html#section
document.querySelectorAll(".footer-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const hash = link.getAttribute("href"); // e.g. "#about"
        window.location.href = hash === "#home" || !hash
            ? "index.html"
            : `index.html${hash}`;
    });
});

// ── Filter system ─────────────────────────────────────────────
const grid = document.getElementById("projects-all-grid");
const filterBar = document.getElementById("filter-bar");
let allProjects = [];
let activeFilter = "All";

// Apply active/inactive styles directly via inline style (Tailwind CDN
// can't track dynamically toggled utility classes, so we avoid them here)
function setActivePill(pill, active) {
    if (active) {
        pill.style.background = "var(--current)";
        pill.style.color = "#fff";
        pill.style.borderColor = "var(--current)";
    } else {
        pill.style.background = "transparent";
        pill.style.color = "var(--current)";
        pill.style.borderColor = "var(--current)";
    }
}

function applyFilter(category) {
    activeFilter = category;
    filterBar.querySelectorAll(".filter-pill").forEach((pill) =>
        setActivePill(pill, pill.dataset.filter === category)
    );
    const filtered = category === "All"
        ? allProjects
        : allProjects.filter(p => p.type === category);
    renderCards(filtered, grid);
}

function buildFilterBar(projects) {
    const types = ["All", ...new Set(projects.map(p => p.type))];

    // Build pills with only layout classes — colors applied via setActivePill
    filterBar.innerHTML = types.map(t =>
        `<button class="filter-pill px-5 py-2 rounded-full text-sm font-medium border-2 transition-colors duration-200 cursor-pointer"
            data-filter="${t}">${t}</button>`
    ).join("");

    filterBar.querySelectorAll(".filter-pill").forEach((pill) => {
        setActivePill(pill, pill.dataset.filter === "All");

        pill.addEventListener("mouseover", () => {
            if (pill.dataset.filter !== activeFilter)
                pill.style.background = "var(--currentShade)";
        });
        pill.addEventListener("mouseout", () => {
            if (pill.dataset.filter !== activeFilter)
                pill.style.background = "transparent";
        });
        pill.addEventListener("click", () => applyFilter(pill.dataset.filter));
    });
}

// Boot: fetch once → build filter bar → render all
(async () => {
    try {
        allProjects = await getProjects();
        buildFilterBar(allProjects);
        renderCards(allProjects, grid);
    } catch (e) {
        console.error("[projects-main] Failed to load projects:", e);
    }
})();

// Dynamic copyright year
const yearEl = document.getElementById("current-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
