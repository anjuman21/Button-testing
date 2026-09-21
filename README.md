# Figma Button Lab — Alerts Button

React/Vite implementation of Figma node `1:4`.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Component

`src/components/AlertsButton/`

Includes the Figma gradient, 1px white border, 8px radius, 8px padding, 18px icon, 6px indicator, inset/outer shadows, hover, active, and keyboard-focus states.

### Asset note
The exact Figma MCP SVG URLs are referenced directly because their exported bytes could not be fetched into this environment. Figma MCP asset URLs are temporary; for a production repo, export the two SVGs from Figma and replace the URL constants in `AlertsButton.jsx` with local asset paths.
