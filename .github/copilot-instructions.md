# Copilot Instructions for Digi-Tools-Platform

## Build & Development Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

No test suite is currently configured.

## Tech Stack

- **React 19.2.4** - Modern React with latest features
- **Vite 8.0.1** - Build tool and dev server
- **Tailwind CSS 4.2.2** - Utility-first styling
- **DaisyUI 5.5.19** - Component library built on Tailwind
- **Lucide React** - Icon library
- **ESLint** - Flat config format with React Hooks rules

## Project Architecture

This is a single-page React application for a digital tools platform with product showcase functionality.

### Entry Points
- `index.html` - Root HTML with `#root` mount point
- `src/main.jsx` - Application bootstrap with StrictMode
- `src/App.jsx` - Main application component

### Component Structure
- Components follow the pattern: `src/components/[ComponentName]/[ComponentName].jsx`
- Each component is in its own directory (e.g., `Navbar/Navbar.jsx`)

### Styling
- Tailwind CSS configured via Vite plugin (no `tailwind.config.js` needed)
- DaisyUI components available (e.g., `btn`, `btn-primary`)
- Custom font: Manrope (imported in `index.css`)
- Global styles in `src/index.css` using Tailwind's `@import` and `@plugin` directives

## Key Conventions

### Component Patterns
- Use functional components with React hooks
- Props with default values: `({ cartCount = 0 })`
- Export default at file bottom

### Styling Conventions
- Use Tailwind utility classes for layout and styling
- DaisyUI classes for interactive components (buttons, forms)
- Gradient text: `bg-clip-text text-transparent bg-gradient-to-r from-[color] to-[color]`
- Hover states: `hover:text-purple-500`
- Color scheme: Purple/Indigo brand colors, gray text on white background

### File Organization
- Component styles in component file (no separate CSS files per component)
- Shared styles in `App.css` and `index.css`
- Assets in `src/assets/`
- Public static files in `public/`

### ESLint Configuration
- Flat config format (ESLint 9+)
- Rule: Unused vars allowed if they match `^[A-Z_]` pattern (for React components/constants)
- React Hooks rules enforced
- React Refresh plugin for Vite HMR

## Import Patterns
- React imports: `import { StrictMode } from 'react'`
- Icons: `import { IconName } from 'lucide-react'`
- Components: Relative paths with `.jsx` extension
- CSS: Import directly in JS/JSX files
