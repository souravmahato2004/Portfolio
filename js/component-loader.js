/**
 * component-loader.js
 *
 * Finds every element with a [data-component] attribute,
 * fetches the referenced HTML file, and replaces the element's
 * innerHTML with the loaded content.
 *
 * After ALL components have been injected it dynamically
 * imports js/main.js so that every feature module can safely
 * query the fully-assembled DOM.
 *
 * Usage in index.html:
 *   <div data-component="components/navbar.html"></div>
 */

(async function loadComponents() {
    const placeholders = document.querySelectorAll("[data-component]");

    // Fetch all components in parallel for speed
    const fetchJobs = Array.from(placeholders).map(async (el) => {
        const src = el.getAttribute("data-component");
        try {
            const response = await fetch(src);
            if (!response.ok) {
                console.error(`[component-loader] Failed to load "${src}": ${response.status}`);
                return;
            }
            const html = await response.text();
            // Replace the placeholder wrapper with the raw component HTML
            el.outerHTML = html;
        } catch (err) {
            console.error(`[component-loader] Network error loading "${src}":`, err);
        }
    });

    await Promise.all(fetchJobs);

    // All components are now in the DOM — boot the feature modules
    const mainModule = document.createElement("script");
    mainModule.type = "module";
    mainModule.src = "js/main.js";
    document.body.appendChild(mainModule);
})();
