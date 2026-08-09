# Sourav Mahato — Portfolio

A modular, developer-friendly personal portfolio website built with vanilla HTML, CSS, and JavaScript.

---

## 🚀 Getting Started

> **Important:** The site uses `fetch()` to load HTML components, so it **must** be served over HTTP — it won't work by opening `index.html` directly in a browser.

### Option 1 — VS Code Live Server
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**

### Option 2 — Node.js
```bash
npx serve .
```

### Option 3 — Python
```bash
python -m http.server 8080
```

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Lean HTML shell — loads components via data-component
├── index.css               # CSS manifest — @imports all partials
├── particles.js            # Particles.js background config
│
├── assets/
│   ├── images/             # All site images (logo, hero photo, about photo)
│   │   ├── sBlue.png
│   │   ├── myImg.png
│   │   └── mypic.jpg
│   └── resume/             # CV PDFs — replace with your actual files
│       ├── Sourav_Mahato_WebDev_CV.pdf
│       └── Sourav_Mahato_AIML_CV.pdf
│
├── components/             # HTML section partials
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   ├── skills.html
│   ├── experience.html
│   ├── education.html
│   ├── contact.html
│   ├── footer.html
│   └── service-modal.html
│
├── js/                     # ES modules (one per feature)
│   ├── component-loader.js # Fetches & injects HTML components, then loads main.js
│   ├── main.js             # App entry point — imports and initialises all modules
│   ├── mobileMenu.js
│   ├── typingAnimation.js
│   ├── colorPicker.js
│   ├── theme.js
│   ├── navigation.js
│   ├── contactForm.js
│   ├── scrollAnimations.js
│   ├── serviceModal.js
│   ├── skillTabs.js
│   └── downloadCV.js
│
└── css/                    # CSS partials (imported by index.css)
    ├── variables.css       # CSS custom properties & theme tokens
    ├── base.css            # Body, fonts, dark-mode patches
    ├── navigation.css      # Nav link styles
    ├── theme-toggle.css    # Theme button + CV dropdown
    ├── hero-shapes.css     # Triangle clip-paths & particles canvas
    ├── services.css        # Service cards
    ├── skills.css          # Skill cards, progress bars, tab slider
    ├── modal.css           # Service modal overlay
    └── responsive.css      # All @media breakpoints
```

---

## ✏️ Common Edits

| What to change | File |
|---|---|
| Name, bio, social links | `components/hero.html`, `components/about.html` |
| Navbar links | `components/navbar.html` |
| Projects | `components/portfolio.html` |
| Skills & progress bars | `components/skills.html` |
| Work experience | `components/experience.html` |
| Education timeline | `components/education.html` |
| Contact info | `components/contact.html` |
| Services & modal content | `components/services.html`, `js/serviceModal.js` |
| Typing animation phrases | `js/typingAnimation.js` |
| Theme accent colors | `css/variables.css` |
| Responsive breakpoints | `css/responsive.css` |
| CV files | `assets/resume/` (replace PDFs, keep filenames) |

---

## 🎨 Features

- **Modular architecture** — each section is a separate HTML partial
- **Theme switcher** — light / dark mode with localStorage persistence  
- **Accent color picker** — 6 color options applied via CSS variables
- **Tabbed skills section** — Full Stack / AI·ML panels
- **CV selector dropdown** — choose which resume to download (Full Stack, AI/ML)
- **Typing animation** — rotating role titles in the hero section
- **Service modals** — detailed service info in an accessible overlay
- **Smooth scroll navigation** — all nav links & CTA buttons
- **Scroll fade-in animations** — IntersectionObserver-based
- **Particles.js background** — animated hero background
- **Responsive** — mobile menu + fully responsive layout
- **Contact form** — powered by Formspree

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Vanilla CSS + Tailwind CSS (CDN) |
| Logic | Vanilla JavaScript (ES Modules) |
| Icons | Remix Icon (CDN) |
| Particles | Particles.js |
| Contact | Formspree |

---

## 📄 License

This project is for personal use. Feel free to use it as a template for your own portfolio.
