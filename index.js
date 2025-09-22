// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = mobileMenu.querySelectorAll('.nav-link');
const logoText = document.getElementById('logo-text');

menuToggle.addEventListener('click', () => {
    // Toggle the 'hidden' class on the menu
    mobileMenu.classList.toggle('hidden');

    // Toggle the icon between menu and close
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.className = 'ri-menu-line';
        document.body.classList.remove('menu-open');
        logoText.classList.remove('text-[var(--current)]'); // Revert logo color
    } else {
        icon.className = 'ri-close-line';
        document.body.classList.add('menu-open');
        logoText.classList.add('text-[var(--current)]'); // Highlight logo
    }
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.querySelector('i').className = 'ri-menu-line';
        document.body.classList.remove('menu-open');
        logoText.classList.remove('text-[var(--current)]');
    });
});

// Typing Animation
const phrases = [
    "Sourav",
    "Web Developer",
    "UI/UX Designer",
];

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
      setTimeout(type, isDeleting ?   50 : 100);
    }
}
type();

// Color Box Toggle Button
const toggleColor = document.getElementById('toggleColor');
const colorPanel = document.getElementById('colorPanel');
let isOpen = false;
toggleColor.addEventListener('click',(e)=>{
  e.preventDefault();
  isOpen=!isOpen;

  if(isOpen){
    toggleColor.classList.remove('translate-x-[160px]');
    colorPanel.classList.remove('translate-x-[210px]');
    toggleColor.classList.add('translate-x-5');
    colorPanel.classList.add('translate-x-18');
  }else{
    toggleColor.classList.remove('translate-x-5');
    colorPanel.classList.remove('translate-x-18');
    toggleColor.classList.add('translate-x-[160px]');
    colorPanel.classList.add('translate-x-[210px]');
  }
})
document.addEventListener('click', function(e) {
    if (!toggleColor.contains(e.target) && !colorPanel.contains(e.target) && isOpen) {
        isOpen = false;
        toggleColor.classList.remove('translate-x-5');
        colorPanel.classList.remove('translate-x-18');
        toggleColor.classList.add('translate-x-[160px]');
        colorPanel.classList.add('translate-x-[210px]');
    }
});

// change the Theme Color of Page
colorPanel.addEventListener('click',(e)=>{
  const value = getComputedStyle(document.documentElement).getPropertyValue(e.target.textContent).trim();
  document.documentElement.style.setProperty('--current', value);
  console.log(value)
  switch (value) {
    case '#754ef9':
      document.documentElement.style.setProperty('--currentShade','#f0edfe');
      break;
    case '#FCCA07':
      document.documentElement.style.setProperty('--currentShade','#fffbec');
      break;
    case '#FF6D38':
      document.documentElement.style.setProperty('--currentShade','#fff0eb');
      break;
    case '#004B6A':
      document.documentElement.style.setProperty('--currentShade','#e5f7ff');
      break;
    case '#E94D88':
      document.documentElement.style.setProperty('--currentShade','#ffe8f1');
      break;
    case '#45B164':
      document.documentElement.style.setProperty('--currentShade','#e7ffee');
      break;
  }
})

// Smooth scrolling navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = link.getAttribute('data-section');

    if (targetSection === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const targetElement = document.getElementById(targetSection);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Smooth scrolling for footer navigation links
document.querySelectorAll('.footer-nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = link.getAttribute('href').substring(1); // Remove the # from href

    if (targetSection === 'home' || targetSection === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const targetElement = document.getElementById(targetSection);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  // 1. Prevent the default form submission
  e.preventDefault(); 

  const form = e.target;
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  // 2. Perform your validation checks (this part is the same)
  if (!name || !email || !subject || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // 3. Send the data to Formspree using fetch
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // 4. If submission is successful, show message and reset
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    } else {
      // 5. If there's an error, show an error message
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  }).catch(error => {
    // 6. Handle network errors
    alert('Oops! There was a network error. Please try again.');
  });
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
  themeIcon.className = 'ri-moon-line text-lg';
} else {
  themeIcon.className = 'ri-sun-line text-lg';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  if (newTheme === 'dark') {
    themeIcon.className = 'ri-moon-line text-lg';
  } else {
    themeIcon.className = 'ri-sun-line text-lg';
  }
  
  // Update modal content if it's open
  updateModalTheme();
});

// Function to update modal content when theme changes
function updateModalTheme() {
  if (!serviceModal.classList.contains('hidden')) {
    // Find the current service type from the modal content
    const modalTitle = modalContent.querySelector('.modal-title');
    if (modalTitle) {
      const titleText = modalTitle.textContent.trim();
      let currentServiceType = null;
      
      // Determine service type from title
      if (titleText.includes('Web Development')) {
        currentServiceType = 'web-development';
      } else if (titleText.includes('UI/UX Design')) {
        currentServiceType = 'ui-ux-design';
      } else if (titleText.includes('App Development')) {
        currentServiceType = 'app-development';
      }
      
      // Reopen modal with updated theme
      if (currentServiceType) {
        openModal(currentServiceType);
      }
    }
  }
}

// Download CV button functionality
document.querySelectorAll('button').forEach(btn => {
  if (btn.textContent.includes('Download CV')) {
    btn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'assets/B230032CS.pdf'; // Replace with your actual CV file path
      link.download = 'Sourav_Mahato_CV.pdf';
      link.click();
    });
  }
});

// Service Modal functionality
const serviceModal = document.getElementById('serviceModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Service data for modals
const serviceData = {
  'web-development': {
    title: 'Web Development',
    icon: 'ri-code-s-slash-line',
    description: 'Creating responsive and interactive websites using modern technologies like React, Node.js, and modern CSS frameworks to deliver exceptional user experiences.',
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
    `
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    icon: 'ri-pencil-ruler-2-line',
    description: 'Designing intuitive and engaging user interfaces. I focus on creating user-centered designs that are both beautiful and highly functional across all devices.',
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
    `
  },
  'app-development': {
    title: 'App Development',
    icon: 'ri-smartphone-line',
    description: 'Building fast, scalable, and secure mobile applications for both iOS and Android platforms, ensuring a seamless experience from start to finish.',
    details: `
      <h3 class="text-2xl font-bold mb-4 modal-title">Mobile App Development</h3>
      <p class="modal-text mb-6">I develop native and cross-platform mobile applications that provide excellent user experiences while maintaining high performance and security standards.</p>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Development Approach:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">Cross-Platform Development</h5>
            <p class="text-sm modal-text">Using React Native and Flutter to build apps that work on both iOS and Android with a single codebase.</p>
          </div>
          <div class="modal-card-bg p-4 rounded-lg">
            <h5 class="font-semibold mb-2 modal-title">Native Development</h5>
            <p class="text-sm modal-text">Building platform-specific apps using Swift (iOS) and Kotlin (Android) for optimal performance.</p>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Key Features I Implement:</h4>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">User Authentication</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">Push Notifications</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">Offline Functionality</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">Real-time Updates</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">Payment Integration</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="ri-check-line text-[var(--current)]"></i>
            <span class="modal-text">Data Synchronization</span>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="text-lg font-semibold mb-3 modal-title">Technologies:</h4>
        <div class="flex flex-wrap gap-2">
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">React Native</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Flutter</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Swift</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Kotlin</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Firebase</span>
          <span class="bg-[var(--currentShade)] text-[var(--current)] px-3 py-1 rounded-full text-sm">Redux</span>
        </div>
      </div>
    `
  }
};

// Open modal function
function openModal(serviceType) {
  const service = serviceData[serviceType];
  if (service) {
    // Store current scroll position
    const scrollY = window.scrollY;
    
    modalContent.innerHTML = `
      <div class="modal-fade-in">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 bg-[var(--current)] rounded-full flex items-center justify-center">
            <i class="${service.icon} text-2xl text-white"></i>
          </div>
          <h2 class="text-3xl font-bold modal-title">${service.title}</h2>
        </div>
        ${service.details}
      </div>
    `;
    serviceModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  }
}

// Close modal function
function closeModalFunc() {
  // Get the scroll position that was stored
  const scrollY = document.body.style.top;
  
  serviceModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.overflow = '';
  
  // Restore scroll position
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// Event listeners for service buttons
document.querySelectorAll('[data-service]').forEach(button => {
  button.addEventListener('click', () => {
    const serviceType = button.getAttribute('data-service');
    openModal(serviceType);
  });
});

// Close modal event listeners
closeModal.addEventListener('click', closeModalFunc);
serviceModal.addEventListener('click', (e) => {
  if (e.target === serviceModal) {
    closeModalFunc();
  }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !serviceModal.classList.contains('hidden')) {
    closeModalFunc();
  }
});

// View Portfolio button functionality
document.getElementById('view-portfolio-btn').addEventListener('click', () => {
  document.getElementById('portfolio').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

document.getElementById('about-view-portfolio-btn').addEventListener('click', () => {
  document.getElementById('portfolio').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Get Started button functionality
document.getElementById('get-started-btn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Dynamic copyright year
document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
});