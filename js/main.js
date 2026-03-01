// ============================================================
// js/main.js  —  Application entry point
//
// Imports every feature module and wires them together.
// Loaded dynamically by js/component-loader.js after all
// HTML components have been injected into the DOM.
// ============================================================

import { initMobileMenu } from "./mobileMenu.js";
import { initTypingAnimation } from "./typingAnimation.js";
import { initColorPicker } from "./colorPicker.js";
import { initTheme, registerThemeChangeCallback } from "./theme.js";
import { initNavigation } from "./navigation.js";
import { initContactForm } from "./contactForm.js";
import { initScrollAnimations } from "./scrollAnimations.js";
import { initServiceModal, refreshModalIfOpen } from "./serviceModal.js";
import { initDownloadCV } from "./downloadCV.js";
import { initSkillTabs } from "./skillTabs.js";
import { renderProjects } from "./projectRenderer.js";

// Wire theme changes → modal refresh
registerThemeChangeCallback(refreshModalIfOpen);

// Initialise all features now that the full DOM is assembled
initMobileMenu();
initTypingAnimation();
initColorPicker();
initTheme();
initNavigation();
initContactForm();
initScrollAnimations();
initServiceModal();
initDownloadCV();
initSkillTabs();

// Render featured projects on the homepage
const portfolioGrid = document.getElementById("portfolio-grid");
if (portfolioGrid) renderProjects(portfolioGrid, true);

// Dynamic copyright year
const yearEl = document.getElementById("current-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll to hash section if navigated from another page (e.g. projects.html)
// Components are injected async, so the element exists now that main.js runs.
const hash = window.location.hash?.slice(1);
if (hash) {
    const target = document.getElementById(hash);
    if (target) {
        // Small delay ensures layout is fully painted before scrolling
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
}
