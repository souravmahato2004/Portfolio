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

// Dynamic copyright year
const yearEl = document.getElementById("current-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
