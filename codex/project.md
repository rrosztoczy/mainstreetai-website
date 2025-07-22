# Project Plan: Landing Page Rewrite

**Business Context:** AI xOps by Mainstreet AI — Turn every sales action into a step forward for the business.
**Product Context:** Rebuild the main landing page to reflect core messaging pillars, target personas, and guided user flow.
**Technical Context:** TypeScript/React (Vite), Tailwind CSS for styling, functional React components.

## Goals
- Align landing page with brand voice, messaging pillars, and personas defined in `codex/foundation.md`.
- Improve core flow: Hero → Pain & Promise → Product Demo → Persona Benefits → ROI Calculator → Pricing → FAQ → Footer.
- Boost user engagement and conversion (CTA clicks, audit bookings).

## Deliverables
1. Modular React components based on `codex/prototype.tsx`.
2. Revised copy for each section, drawing from foundational messaging.
3. Theming and styling consistent with existing site patterns using Tailwind CSS.
4. Basic unit/snapshot tests for critical components.
5. Documentation and inline context for maintainability.
6. QA checklist and review process.

## Milestones & Tasks

### Phase 1: Planning & Content Alignment
- Review `codex/foundation.md` and personas.
- Finalize section list, content hierarchy, and copy.
- Gather final assets (images, GIFs, logos).

### Phase 2: Architecture & Theming
- Audit the existing site’s Tailwind configuration and CSS patterns (fonts, colors, spacing) to identify brand tokens.
- Review the prototype to extract key design tokens (typography scales, color palette, spacing units).
- Configure and extend Tailwind CSS in the codebase with the unified theme tokens.

### Phase 3: Component Implementation
- Refactor `codex/prototype.tsx` into reusable components (Hero, Section, CTABar, etc.).
- Integrate finalized content and assets.
- Ensure responsive behavior across breakpoints.

### Phase 4: Testing & QA
- Write basic tests (unit, snapshot) for key components.
- Perform accessibility, responsiveness, and cross-browser checks.
- Run linting, formatting, and pre-commit hooks.

### Phase 5: Review & Deployment
- Open PR for landing page rewrite.
- Conduct design and stakeholder reviews.
- Merge and deploy via existing pipeline (gh-pages).
- Monitor initial engagement metrics post-launch.

## Dependencies
- Finalized marketing copy and brand assets.
- Stakeholder availability for review.

## Open Questions
1. Are all brand assets (colors, fonts, imagery) finalized?
2. What is the target timeline for each phase?
3. Any additional sections or flows to include beyond the prototype?

## Acceptance Criteria
- Sections and content match the approved prototype and copy.
- Styling adheres to brand theme and passes QA checks.
- Code meets linting standards and passes tests.
- Responsive and meets basic accessibility standards.
- PR approved and merged; landing page live without regressions.
