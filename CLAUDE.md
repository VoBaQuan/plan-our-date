# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check + production build (outputs to dist/)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

There are no tests in this project.

## Architecture

**React 19 + TypeScript SPA** deployed to GitHub Pages at `/plan-our-date/`. No backend — fully client-side.

**Routing** (`src/App.tsx`): Routes via React Router DOM v7, wrapped in `MainLayout` (Navbar + LiquidBackground + FloatingHearts):
- `/` → `Home` (landing page)
- `/invite` → `Invite` (multi-step form, wrapped in `InviteProvider`)

**Multi-step Invite flow** (`src/pages/invite/`):
- `InviteContext.tsx` — React Context provider; `inviteContextDef.ts` — context/interface type definitions; `useInvite.ts` — consumer hook
- `Invite.tsx` — orchestrates step navigation via `currentStep` state (1–7)
- `components/Step1.tsx` through `Step7.tsx` — individual form steps
- `types.ts` — shared TypeScript types (`Date`, `Food`, `Activity`)

Each step reads/writes to context via `useInvite()`. Steps 3–5 expose a `validate()` method to the parent via `useRef` + `useImperativeHandle`; the parent calls `ref.current.validate()` before advancing. Step7 is the summary/confirmation step that shows a custom DOM-created alert modal (not React-rendered).

**Styling**: Plain CSS only — `src/App.css` (global styles) and `src/pages/invite/invite.css` (step-specific). No CSS preprocessor or CSS-in-JS.

**Animations**: Framer Motion for page/step transitions. FontAwesome icons used for interactive elements (e.g., flying hearts in Step6).

**Base path**: Vite is configured with `base: '/plan-our-date/'` for production builds (GitHub Pages subdirectory), and `/` for local dev.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages automatically.

## Key Constraints

- **SWC is used** (not Babel) — React Compiler is not compatible with this setup.
- TypeScript strict mode is on; unused locals/parameters are errors.
- ESLint uses flat config format (v9+).
