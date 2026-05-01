# Mayur Portfolio

A modern personal portfolio website built with React, Tailwind CSS, Framer Motion, and React Icons.

## Features

- Dark theme by default
- Light/dark toggle
- Responsive layout for mobile and desktop
- Sticky navbar with smooth scrolling
- Animated sections using Framer Motion
- Typed hero text animation
- Skills cards with animated progress bars
- Contact form UI (frontend only)

## Project Structure

- `src/App.jsx` — root application wrapper and theme state
- `src/components/Navbar.jsx` — sticky navigation and theme toggle
- `src/components/Hero.jsx` — hero section with animation and CTA
- `src/components/About.jsx` — about section with profile summary
- `src/components/Skills.jsx` — technical skills cards and progress bars
- `src/components/Contact.jsx` — contact links and form UI
- `src/components/Footer.jsx` — minimal footer
- `src/components/SectionHeading.jsx` — reusable section title component
- `src/index.css` — Tailwind imports and theme variables

## Setup

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Notes

- This project uses Tailwind CSS with custom theme variables for dark/light mode.
- The contact form is a UI-only form and does not submit data to a backend.
