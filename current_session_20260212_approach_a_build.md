# Current Session Plan — 2026-02-12 — Approach A Build

## Objective
Implement the "Approach A" marketing section so the offer is clear immediately after Hero and before deeper content.

## Definition of done
- Add a reusable section component with:
  - Eyebrow + headline + subhead
  - 3 cards: Knowledge Foundation, Context Engine, Workflow Automation
  - CTA row: primary "Book a Fit Call" to `#contact`, secondary "See How It Works" to `#getting-started`
- Insert section in homepage flow directly after Hero.
- Keep visual style consistent with existing styled-components patterns.
- Run lint/build checks and verify no regressions.

## Steps
1. [x] Inspect current component/style patterns and section ids.
2. [x] Create `src/components/WhatWeBuild.tsx` with Approach A content.
3. [x] Wire component into `src/App.tsx` after `<Hero />`.
4. [x] Run `npm run lint` and `npm run build`.
5. [x] Summarize implementation + any follow-up improvements.

## Validation results
- `npm run build`: pass
- `npm run lint`: fails due pre-existing repository-wide lint issues in generated Next.js `.next` files under `/apps/*`, unrelated to this change.
