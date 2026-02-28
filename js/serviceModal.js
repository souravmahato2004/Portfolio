// ============================================================
// js/serviceModal.js  —  Service "Read More" modal
// ============================================================

// --------------- Service Data ---------------
const serviceData = {
  "web-development": {
    title: "Web Development",
    icon: "ri-code-s-slash-line",
    details: `
      <h3 class="text-2xl font-bold mb-4 modal-title">Web Development Services</h3>
      <p class="modal-text mb-6">I specialize in creating modern, responsive, and high-performance websites and web applications that deliver exceptional user experiences across all devices.</p>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Technologies I Work With:</h4>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex items-center gap-2"><i class="ri-check-line text-[var(--current)]"></i><span class="modal-text">React.js &amp; Next.js</span></div>
          <div class="flex items-center gap-2"><i class="ri-check-line text-[var(--current)]"></i><span class="modal-text">Node.js &amp; Express</span></div>
          <div class="flex items-center gap-2"><i class="ri-check-line text-[var(--current)]"></i><span class="modal-text">HTML5 &amp; CSS3</span></div>
          <div class="flex items-center gap-2"><i class="ri-check-line text-[var(--current)]"></i><span class="modal-text">JavaScript &amp; TypeScript</span></div>
          <div class="flex items-center gap-2"><i class="ri-check-line text-[var(--current)]"></i><span class="modal-text">Tailwind CSS</span></div>
          <div class="flex items-center gap-2"><i class="ri-check-line text-[var(--current)]"></i><span class="modal-text">MongoDB &amp; MySQL</span></div>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">What I Deliver:</h4>
        <ul class="space-y-2 modal-text">
          <li>• Responsive web applications that work on all devices</li>
          <li>• Fast-loading websites optimized for performance</li>
          <li>• Clean, maintainable, and scalable code</li>
          <li>• Modern UI/UX design implementation</li>
          <li>• Cross-browser compatibility</li>
          <li>• SEO-friendly website structure</li>
          <li>• Deployment to cloud platforms (Vercel, Netlify, AWS, Railway)</li>
          <li>• Bug fixing, debugging, and ongoing maintenance</li>
        </ul>
      </div>
    `,
  },
  "ai-ml": {
    title: "AI / ML Engineer",
    icon: "ri-brain-line",
    details: `
      <h3 class="text-2xl font-bold mb-4 modal-title">AI / ML Engineering</h3>
      <p class="modal-text mb-6">I build intelligent systems using machine learning and AI techniques — from data preprocessing and model training to integrating predictions into production-ready applications.</p>

      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">What I Work On:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">Supervised Learning</h5>
            <p class="text-sm modal-text">Classification &amp; regression models — linear regression, decision trees, SVMs, and ensemble methods using scikit-learn.</p>
          </div>
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">Deep Learning</h5>
            <p class="text-sm modal-text">Building neural networks with TensorFlow / Keras for image recognition, NLP, and sequence modelling tasks.</p>
          </div>
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">Data Engineering</h5>
            <p class="text-sm modal-text">End-to-end pipelines: data cleaning, feature engineering, EDA, and model evaluation using Pandas, NumPy &amp; Matplotlib.</p>
          </div>
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">AI Integration</h5>
            <p class="text-sm modal-text">Embedding trained models into web apps via REST APIs — bridging the gap between ML research and real-world deployment.</p>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Core Skills:</h4>
        <div class="flex flex-wrap gap-3">
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Model Training &amp; Evaluation</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Feature Engineering</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Data Visualisation</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Neural Networks</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> NLP Basics</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> API Deployment</span>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Technologies &amp; Tools:</h4>
        <div class="flex flex-wrap gap-2">
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Python</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">TensorFlow</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">scikit-learn</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Pandas</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">NumPy</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Matplotlib</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Jupyter</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">FastAPI</span>
        </div>
      </div>
    `,
  },
  "data-science": {
    title: "Data Science",
    icon: "ri-bar-chart-line",
    details: `
      <h3 class="text-2xl font-bold mb-4 modal-title">Data Science</h3>
      <p class="modal-text mb-6">As a beginner in data science, I work on projects involving data cleaning, visualization, and basic predictive modeling.</p>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Approach to Learning &amp; Projects:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">Data Analysis</h5>
            <p class="text-sm modal-text">Exploring and visualizing datasets to identify trends, patterns, and insights using Python libraries like Pandas and Matplotlib.</p>
          </div>
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">Machine Learning</h5>
            <p class="text-sm modal-text">Building simple predictive models using scikit-learn and experimenting with basic algorithms like regression and classification.</p>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Key Skills I'm Developing:</h4>
        <div class="flex flex-wrap gap-3">
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Data Cleaning &amp; Preprocessing</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Data Visualization</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Exploratory Data Analysis (EDA)</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Basic Machine Learning Models</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Python Programming</span>
          <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm"><i class="ri-check-line"></i> Data-driven Problem Solving</span>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Technologies &amp; Tools:</h4>
        <div class="flex flex-wrap gap-2">
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Python</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Pandas</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">NumPy</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Matplotlib</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Seaborn</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">scikit-learn</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Jupyter Notebook</span>
        </div>
      </div>
    `,
  },
};

// --------------- Modal Logic ---------------
let savedScrollY = 0;

function openModal(serviceType) {
  const service = serviceData[serviceType];
  if (!service) return;

  const serviceModal = document.getElementById("serviceModal");
  const modalContent = document.getElementById("modalContent");

  savedScrollY = window.scrollY;

  modalContent.innerHTML = `
    <div class="flex items-center gap-4 mb-6">
      <div class="w-16 h-16 bg-[var(--current)] rounded-full flex items-center justify-center flex-shrink-0">
        <i class="${service.icon} text-3xl text-white"></i>
      </div>
      <h2 class="text-3xl font-bold modal-title">${service.title}</h2>
    </div>
    ${service.details}
  `;

  serviceModal.classList.remove("hidden");
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = "100%";
}

function closeModal() {
  const serviceModal = document.getElementById("serviceModal");

  serviceModal.classList.add("hidden");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";

  window.scrollTo(0, savedScrollY);
}

export function initServiceModal() {
  const closeModalBtn = document.getElementById("closeModalBtn");
  const serviceModal = document.getElementById("serviceModal");
  const serviceButtons = document.querySelectorAll(".service-button");

  serviceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      openModal(e.currentTarget.dataset.service);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

  if (serviceModal) {
    serviceModal.addEventListener("click", (e) => {
      if (e.target === serviceModal) closeModal();
    });
  }
}

/**
 * Re-open the modal with current theme applied.
 * Exported so theme.js can call it on theme change.
 */
export function refreshModalIfOpen() {
  const serviceModal = document.getElementById("serviceModal");
  const modalContent = document.getElementById("modalContent");

  if (!serviceModal || serviceModal.classList.contains("hidden")) return;

  const modalTitle = modalContent.querySelector(".modal-title");
  if (!modalTitle) return;

  const titleText = modalTitle.textContent.trim();
  let currentServiceType = null;

  if (titleText.includes("Web Development")) currentServiceType = "web-development";
  else if (titleText.includes("AI / ML")) currentServiceType = "ai-ml";
  else if (titleText.includes("Data Science")) currentServiceType = "data-science";

  if (currentServiceType) openModal(currentServiceType);
}
