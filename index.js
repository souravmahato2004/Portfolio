// --- Mobile Menu Toggle ---
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const navLinks = mobileMenu.querySelectorAll(".nav-link");

  const openMenu = () => {
    if (mobileMenu && menuOverlay) {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      menuOverlay.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevents background scroll
    }
  };

  const closeMenu = () => {
    if (mobileMenu && menuOverlay) {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
      menuOverlay.classList.add("hidden");
      document.body.style.overflow = ""; // Restores background scroll
    }
  };

  // Event listener for the hamburger icon
  if (menuToggle) {
    menuToggle.addEventListener("click", openMenu);
  }

  // Event listener for the close button inside the menu
  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  // Event listener to close menu when clicking the overlay
  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  // Add event listeners to each nav link to close the menu on click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
      // Your original scroll-to-section logic will still work here
    });
  });
});

// Typing Animation
const phrases = ["Sourav", "Web Developer", "UI/UX Designer"];

const typingElement = document.getElementById("typing-text");
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, letterIndex--);
  } else {
    typingElement.textContent = currentPhrase.substring(0, letterIndex++);
  }

  if (!isDeleting && letterIndex === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000); // Pause before deleting
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300); // Pause before typing next
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Color Box Toggle Button
const toggleColor = document.getElementById("toggleColor");
const colorPanel = document.getElementById("colorPanel");
let isOpen = false;
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
document.addEventListener("click", function (e) {
  if (
    !toggleColor.contains(e.target) &&
    !colorPanel.contains(e.target) &&
    isOpen
  ) {
    isOpen = false;
    toggleColor.classList.remove("translate-x-5");
    colorPanel.classList.remove("translate-x-18");
    toggleColor.classList.add("translate-x-[160px]");
    colorPanel.classList.add("translate-x-[210px]");
  }
});

// change the Theme Color of Page
colorPanel.addEventListener("click", (e) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(e.target.textContent)
    .trim();
  document.documentElement.style.setProperty("--current", value);
  console.log(value);
  switch (value) {
    case "#754ef9":
      document.documentElement.style.setProperty("--currentShade", "#f0edfe");
      break;
    case "#FCCA07":
      document.documentElement.style.setProperty("--currentShade", "#fffbec");
      break;
    case "#FF6D38":
      document.documentElement.style.setProperty("--currentShade", "#fff0eb");
      break;
    case "#004B6A":
      document.documentElement.style.setProperty("--currentShade", "#e5f7ff");
      break;
    case "#E94D88":
      document.documentElement.style.setProperty("--currentShade", "#ffe8f1");
      break;
    case "#45B164":
      document.documentElement.style.setProperty("--currentShade", "#e7ffee");
      break;
  }
});

// Smooth scrolling navigation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = link.getAttribute("data-section");

    if (targetSection === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(targetSection);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Smooth scrolling for footer navigation links
document.querySelectorAll(".footer-nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = link.getAttribute("href").substring(1); // Remove the # from href

    if (targetSection === "home" || targetSection === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.getElementById(targetSection);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  // 1. Prevent the default form submission
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // 2. Perform your validation checks (this part is the same)
  if (!name || !email || !subject || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // 3. Send the data to Formspree using fetch
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        // 4. If submission is successful, show message and reset
        alert("Thank you for your message! I will get back to you soon.");
        form.reset();
      } else {
        // 5. If there's an error, show an error message
        alert(
          "Oops! There was a problem submitting your form. Please try again.",
        );
      }
    })
    .catch((error) => {
      // 6. Handle network errors
      alert("Oops! There was a network error. Please try again.");
    });
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const currentTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
  themeIcon.className = "ri-moon-line text-lg";
} else {
  themeIcon.className = "ri-sun-line text-lg";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    themeIcon.className = "ri-moon-line text-lg";
  } else {
    themeIcon.className = "ri-sun-line text-lg";
  }

  // Update modal content if it's open
  updateModalTheme();
});

// Function to update modal content when theme changes
function updateModalTheme() {
  if (!serviceModal.classList.contains("hidden")) {
    // Find the current service type from the modal content
    const modalTitle = modalContent.querySelector(".modal-title");
    if (modalTitle) {
      const titleText = modalTitle.textContent.trim();
      let currentServiceType = null;

      // Determine service type from title
      if (titleText.includes("Web Development")) {
        currentServiceType = "web-development";
      } else if (titleText.includes("UI/UX Design")) {
        currentServiceType = "ui-ux-design";
      } else if (titleText.includes("App Development")) {
        currentServiceType = "app-development";
      }

      // Reopen modal with updated theme
      if (currentServiceType) {
        openModal(currentServiceType);
      }
    }
  }
}

// Download CV button functionality
document.querySelectorAll("button").forEach((btn) => {
  if (btn.textContent.includes("Download CV")) {
    btn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "assets/B230032CS.pdf"; // Replace with your actual CV file path
      link.download = "Sourav_Mahato_CV.pdf";
      link.click();
    });
  }
});

// --- Service Modal Functionality ---
const serviceModal = document.getElementById("serviceModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");
const serviceButtons = document.querySelectorAll(".service-button");

// Service data for modals
const serviceData = {
  "web-development": {
    title: "Web Development",
    icon: "ri-code-s-slash-line",
    description:
      "Creating responsive and interactive websites using modern technologies like React, Node.js, and modern CSS frameworks to deliver exceptional user experiences.",
    details: `
      <h3 class="text-2xl font-bold mb-4 modal-title">Web Development Services</h3>
      <p class="modal-text mb-6">I specialize in creating modern, responsive, and high-performance websites and web applications that deliver exceptional user experiences across all devices.</p>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Technologies I Work With:</h4>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">React.js & Next.js</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">Node.js & Express</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">HTML5 & CSS3</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">JavaScript & TypeScript</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">Tailwind CSS</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">MongoDB & MySQL</span>
          </div>
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
        </ul>
      </div>
    `,
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: "ri-pencil-ruler-2-line",
    description:
      "Designing intuitive and engaging user interfaces. I focus on creating user-centered designs that are both beautiful and highly functional across all devices.",
    details: `
      <h3 class="text-2xl font-bold mb-4 modal-title">UI/UX Design Services</h3>
      <p class="modal-text mb-6">I create user-centered designs that are not only visually appealing but also highly functional and intuitive. My designs focus on solving real user problems while providing delightful experiences.</p>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Design Process:</h4>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[var(--current)] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h5 class="font-semibold modal-title">Research & Analysis</h5>
              <p class="text-sm modal-text-muted">Understanding user needs, business goals, and market requirements</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[var(--current)] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h5 class="font-semibold modal-title">Wireframing & Prototyping</h5>
              <p class="text-sm modal-text-muted">Creating low-fidelity wireframes and interactive prototypes</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[var(--current)] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h5 class="font-semibold modal-title">Visual Design</h5>
              <p class="text-sm modal-text-muted">Crafting beautiful, consistent, and accessible visual designs</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[var(--current)] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
            <div>
              <h5 class="font-semibold modal-title">Testing & Iteration</h5>
              <p class="text-sm modal-text-muted">User testing and continuous improvement based on feedback</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Tools I Use:</h4>
        <div class="flex flex-wrap gap-2">
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Figma</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Adobe XD</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Sketch</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Principle</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">InVision</span>
        </div>
      </div>
    `,
  },
  "data-science": {
    title: "Data Science",
    icon: "ri-bar-chart-line",
    description:
      "Analyzing and interpreting data to extract insights, build predictive models, and support informed decision-making using modern data science tools and techniques.",
    details: `
      <h3 class="text-2xl font-bold mb-4 modal-title">Data Science</h3>
      <p class="modal-text mb-6">As a beginner in data science, I work on projects involving data cleaning, visualization, and basic predictive modeling to gain hands-on experience and build practical skills.</p>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Approach to Learning & Projects:</h4>
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
  <h4 class="text-lg font-semibold mb-3 modal-title">Key Skills I’m Developing:</h4>
  <div class="flex flex-wrap gap-3">
    <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">
      <i class="ri-check-line"></i> Data Cleaning & Preprocessing
    </span>
    <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">
      <i class="ri-check-line"></i> Data Visualization
    </span>
    <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">
      <i class="ri-check-line"></i> Exploratory Data Analysis (EDA)
    </span>
    <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">
      <i class="ri-check-line"></i> Basic Machine Learning Models
    </span>
    <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">
      <i class="ri-check-line"></i> Python Programming
    </span>
    <span class="flex items-center gap-2 bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">
      <i class="ri-check-line"></i> Data-driven Problem Solving
    </span>
  </div>
</div>

      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Technologies & Tools:</h4>
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

let savedScrollY; // Variable to store scroll position

// --- Open Modal Function ---
const openModal = (serviceType) => {
  const service = serviceData[serviceType];
  if (!service) return;

  // Save the current scroll position
  savedScrollY = window.scrollY;

  // Populate the modal content
  modalContent.innerHTML = `
    <div class="flex items-center gap-4 mb-6">
      <div class="w-16 h-16 bg-[var(--current)] rounded-full flex items-center justify-center flex-shrink-0">
        <i class="${service.icon} text-3xl text-white"></i>
      </div>
      <h2 class="text-3xl font-bold modal-title">${service.title}</h2>
    </div>
    ${service.details}
  `;

  // Show the modal and lock background scroll
  serviceModal.classList.remove("hidden");
  document.body.style.position = "fixed";
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.width = "100%";
};

// --- Close Modal Function ---
const closeModal = () => {
  // Hide the modal and unlock background scroll
  serviceModal.classList.add("hidden");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";

  // Restore the scroll position
  window.scrollTo(0, savedScrollY);
};

// --- Event Listeners ---

// Add a click listener to EACH "Read More" button
serviceButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const serviceType = e.currentTarget.dataset.service;
    openModal(serviceType);
  });
});

// Listener for the close button
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

// Listener to close the modal by clicking the overlay
if (serviceModal) {
  serviceModal.addEventListener("click", (e) => {
    // Check if the click was on the dark overlay itself
    if (e.target === serviceModal) {
      closeModal();
    }
  });
}

// View Portfolio button functionality
document.getElementById("view-portfolio-btn").addEventListener("click", () => {
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

document
  .getElementById("about-view-portfolio-btn")
  .addEventListener("click", () => {
    document.getElementById("portfolio").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

// Get Started button functionality
document.getElementById("get-started-btn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Dynamic copyright year
document.addEventListener("DOMContentLoaded", () => {
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});
