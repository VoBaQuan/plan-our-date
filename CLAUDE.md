# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check + production build (outputs to dist/)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Architecture

**React 19 + TypeScript SPA** deployed to GitHub Pages at `/plan-our-date/`. No backend — fully client-side.

**Routing** (`src/App.tsx`): Two routes via React Router DOM v7:
- `/` → `Home` (landing page)
- `/invite` → `Invite` (multi-step form, wrapped in `InviteProvider`)

**Multi-step Invite flow** (`src/pages/invite/`):
- `InviteContext.tsx` — React Context providing `formData`, `updateFormData()`, `resetFormData()`
- `Invite.tsx` — orchestrates step navigation
- `components/Step1.tsx` through `Step7.tsx` — individual form steps
- `types.ts` — shared TypeScript types for form data

Each step reads/writes to context via `useInvite()`. Step7 is the summary/confirmation step that shows a custom DOM-created alert modal.

**Animations**: Framer Motion is used for page/step transitions throughout.

**Base path**: Vite is configured with `base: '/plan-our-date/'` for production builds (GitHub Pages subdirectory), and `/` for local dev.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages automatically.

## Key Constraints

- **SWC is used** (not Babel) — React Compiler is not compatible with this setup.
- TypeScript strict mode is on; unused locals/parameters are errors.
- ESLint uses flat config format (v9+).
