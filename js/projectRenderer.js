// ============================================================
// js/projectRenderer.js
// Fetches data/projects.json and renders project cards.
// Used by both portfolio.html (homepage – 3 cards) and
// projects.html (all-projects page – every card).
// ============================================================

// Tag color map → Tailwind utility pairs
const TAG_COLORS = {
    theme: { bg: "bg-[var(--currentShade)]", text: "text-[var(--current)]" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    orange: { bg: "bg-orange-100", text: "text-orange-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    pink: { bg: "bg-pink-100", text: "text-pink-600" },
};

// Accent colour → button hover pair (Live Demo button)
const ACCENT = {
    theme: { text: "text-[var(--current)]", hover: "hover:bg-[var(--current)]" },
    amber: { text: "text-amber-600", hover: "hover:bg-amber-600" },
    green: { text: "text-green-600", hover: "hover:bg-green-600" },
    blue: { text: "text-blue-600", hover: "hover:bg-blue-600" },
    pink: { text: "text-pink-600", hover: "hover:bg-pink-600" },
};

function buildCard(project) {
    const accent = ACCENT[project.accentColor] ?? ACCENT.theme;

    const tags = project.tags.map((t) => {
        const c = TAG_COLORS[t.color] ?? TAG_COLORS.theme;
        return `<span class="${c.bg} ${c.text} px-3 py-1 rounded-full text-xs font-medium">${t.label}</span>`;
    }).join("\n");

    return `
    <div class="group relative overflow-hidden rounded-[16px] bg-white shadow-[0px_10px_30px_var(--currentShade)] hover:shadow-[0px_20px_50px_var(--currentShade)] transition-all duration-500 hover:-translate-y-2">
        <div class="h-48 relative overflow-hidden">
            <img src="${project.image}" alt="${project.title} preview" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                <div class="flex gap-3 z-30">
                    <a href="${project.liveUrl}" target="_blank"
                        class="bg-white ${accent.text} px-4 py-2 rounded-full font-medium text-sm ${accent.hover} hover:text-white transition-all duration-300 transform hover:scale-105 z-40">
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" target="_blank"
                        class="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-white ${accent.text} transition-all duration-300 transform hover:scale-105 z-40">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-3">
                <h3 class="text-xl font-bold text-gray-800">${project.title}</h3>
                <div class="flex gap-1">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
            </div>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">${tags}</div>
            <div class="flex items-center justify-between text-xs text-gray-500">
                <span>${project.period}</span>
                <span>${project.type}</span>
            </div>
        </div>
    </div>`;
}

/** Fetch and return the raw projects array. */
export async function getProjects() {
    const res = await fetch("data/projects.json");
    return res.json();
}

/** Render an already-filtered array into a container. */
export function renderCards(list, container) {
    container.innerHTML = list.map(buildCard).join("\n");
}

/**
 * Fetch and render projects.
 * @param {HTMLElement} container    - where to inject cards
 * @param {boolean} featuredOnly     - true = only projects with featured:true
 */
export async function renderProjects(container, featuredOnly = false) {
    try {
        const projects = await getProjects();
        const list = featuredOnly ? projects.filter(p => p.featured) : projects;
        container.innerHTML = list.map(buildCard).join("\n");
    } catch (e) {
        console.error("[projectRenderer] Failed to load projects.json:", e);
    }
}
