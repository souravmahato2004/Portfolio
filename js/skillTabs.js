// ============================================================
// js/skillTabs.js  —  Tab-switcher for the domain skills section
// ============================================================

export function initSkillTabs() {
    const tabs = document.querySelectorAll(".skill-tab");
    const row = document.getElementById("skills-panels-row");

    if (!tabs.length || !row) return;

    // Build a map: panel-id → index position in the row
    const panelOrder = ["skill-panel-webdev", "skill-panel-aiml", "skill-panel-ds"];

    function activateTab(clickedTab) {
        const targetPanelId = clickedTab.getAttribute("data-panel");
        const index = panelOrder.indexOf(targetPanelId);
        if (index === -1) return;

        // Slide the row
        row.style.transform = `translateX(-${index * 100}%)`;

        // Update active class on buttons
        tabs.forEach((t) => t.classList.remove("active-skill-tab"));
        clickedTab.classList.add("active-skill-tab");
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => activateTab(tab));
    });

    // Default: show Web Dev (index 0)
    const defaultTab = document.getElementById("skill-tab-webdev");
    if (defaultTab) activateTab(defaultTab);
}
