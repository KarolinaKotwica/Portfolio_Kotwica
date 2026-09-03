# Portfolio — Karolina Kotwica

**Live: [karolina-kotwica.ch](https://karolina-kotwica.ch/)**

Modern, responsive and multilingual developer portfolio built with React.
Focused on clean UI, smooth animations, accessibility and performance.

---

## 🌍 Features

- Multilingual interface (EN / PL / DE) with browser-language detection
  and persisted choice
- Fully responsive layout (mobile / tablet / desktop)
- Sticky profile card layout
- Animated navigation with active section detection and an animated
  pill indicator
- Scroll-based section animations that respect the OS reduced-motion
  setting
- Optimized images (resized WebP, lazy loading, no layout shift)
- Projects & certificates showcase
- SEO-ready: meta/OG tags, canonical URL, sitemap, robots.txt and
  JSON-LD structured data
- Keyboard accessible: skip link, visible focus indicators, ARIA
  landmarks and labels

---

## 🛠️ Tech Stack

**Frontend:** React, JavaScript (ES6+), HTML5, SCSS (`@use` modules,
design tokens, mixins)

**Animations:** Framer Motion (LazyMotion + MotionConfig)

**Tooling:** Vite, ESLint, npm, Git & GitHub

**Architecture & Patterns:** Context API with a custom `useLanguage`
hook, data layer separated from components (`src/data`),
Intersection Observer section detection

---

## 🚀 Run locally

```bash
npm install
npm run dev       # development server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

---

## 📁 Structure

```
src/
├── components/   UI components
├── context/      language provider
├── data/         projects, certificates, skills
├── hooks/        useLanguage, useMediaQuery
├── i18n/         translations (EN / PL / DE)
├── styles/       SCSS modules, variables, mixins
└── utils/        scroll helpers
```

---

All rights reserved.
The content, design and code of this portfolio may not be copied, reused or redistributed without explicit permission.
