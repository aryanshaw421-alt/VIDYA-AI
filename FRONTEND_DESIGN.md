# VIDYA AI — Frontend Design System & Component Architecture

This document provides a comprehensive overview of the frontend design system, interactive UI components, animations, and typography implemented for **VIDYA AI**.

---

## 🎨 Visual Design Philosophy

- **Apple visionOS & macOS Liquid Frosted Glass**: Ultra-premium blur (`backdrop-blur-xl`, `backdrop-blur-2xl`), semi-transparent surfaces (`rgba(255, 255, 255, 0.7)` in light mode, `rgba(18, 20, 24, 0.75)` in dark mode).
- **Modern Typography**: Powered by **Outfit** (display headings) and **Inter** (clean body text and numeric readouts).
- **Curated Palette**:
  - Primary Brand: Electric Indigo / Cyan / Violet gradients
  - Ambient Glows: Dynamic moving radial orbs with CSS mesh filter animations
  - Border Accents: Multi-layer subtle borders (`border-white/20`, `dark:border-white/10`) with luminous hover states

---

## 🧩 Core Frontend Design Components

### 1. AppleGlassBackground (`src/components/AppleGlassBackground.jsx`)
- Dynamic ambient liquid mesh background with interactive mouse-following floating light orbs.
- Seamlessly adapts between dark mode and light mode with CSS backdrop filters.

### 2. Frosted Glass Navbar (`src/components/Navbar.jsx`)
- Floating sticky header with Apple-inspired frosted glass aesthetic.
- Includes quick stream selectors, dark/light theme switch, interactive user profile dropdown, and notification badge indicator.

### 3. DiscoveryHeroSection (`src/components/DiscoveryHeroSection.jsx`)
- Cognitive discovery banner with prompt input, topic suggestion pills, syllabus-grounded search tags, and quick-filter interaction.

### 4. GeminiShowcaseSection (`src/components/GeminiShowcaseSection.jsx`)
- Multimodal AI showcase demonstrating multi-stream simulation, intelligent agents, and real-time response generation with Framer Motion transitions.

### 5. LuminaHeroSection (`src/components/LuminaHeroSection.jsx`)
- Clean, typography-driven hero section with floating metric badges and responsive action buttons.

### 6. NavigationPills (`src/components/NavigationPills.jsx`)
- Smooth interactive navigation pills with micro-animations and active tab highlights.

### 7. Dashboard (`src/components/Dashboard.jsx`)
- Learning analytics dashboard featuring progress dials, study streaks, active courses, and upcoming test notifications.

---

## 🛠️ Design System & CSS Utilities (`src/index.css`)

- **`.glass-card`**: Base class for Apple frosted-glass cards with subtle inner glow and border highlights.
- **`.glass-pill`**: Rounded pill buttons with interactive hover scale and glow effects.
- **`.text-gradient-brand`**: Electric indigo-to-purple gradient text fill.
- **`.mesh-gradient-bg`**: Radial ambient background generator with soft color diffusion.
- **Custom Scrollbars & Selection Styles**: Sleek dark/light custom scrollbars and electric blue text highlights.

---

## 🚀 Running the Frontend

```bash
# Install dependencies
npm install

# Start Vite Development Server
npm run dev

# Production Build & Typecheck
npm run build
```
