# Mainstreet AI • Landing Website Rewrite

> **Purpose**  
> This project is focused around a landing website rewrite.

> **Context**  
> The Mainstreet AI website is a simple, marketing-focused site to build credibility and convert leads.
> - **Stack:** HTML/CSS/React/TypeScript with Vite & Styled-Components
> - **Architecture:** Functional, modular components - extend/replace; never modify in place
> - **Process:** Task-by-task sign-off; iterative reviews; rollback-friendly

---

## 1 Headline (H1)

```text
AI Native Operations for Startups & Scale-ups
```

---

## 2 Rotating Sub-Headline (H2)

*Cycle every **3 s**; fade + slide transition.*

```text
Experts in AI _Ops (the underscore should always be there in the sub headline and then we rotate in Rev, Product, and Customer over it for extra effect)
```

---

## 3 Support Line (H3 / body-lg)

```text
 Stay on top of every customer pain point, feature request, and win. Keep everyone - sales, product, engineering and customer success - focused and in the know. Minimize feedback loops. Optimize direction. Accelerate Product Market Fit.
```

---

## 4 Primary CTA

```text
Book a 30‑minute call with Ryan →
```

* Embedded Calendly widget for inline scheduling.
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/ryan-mainstreetai/30min?hide_gdpr_banner=1&primary_color=5cb85c" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->

### 4.1 Secondary Action

```text
Prefer docs? Download the 1‑page playbook →
Prefer video? Watch our 2‑minute overview →
```

* Inline text links for email capture and low‑commitment visitors.
* TBD: PDF playbook & embedded video (placeholders commented out until assets are ready).

```html
<!-- Example PDF playbook link -->
<!-- <a href="/assets/playbook.pdf" download>Download 1‑page playbook →</a> -->

<!-- Example embedded video -->
<!-- <div class="video-placeholder">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Overview video" width="560" height="315" frameborder="0" allowfullscreen></iframe>
</div> -->
```

---

## 5 Founder Credibility Badge

```text
 Built by Ryan Rosztoczy - technical founder who’s shipped products from idea to exit and delivered AI solutions for YC startups and established companies.
```

* Small: `text-sm text-gray-500 flex items-center space-x-2`, placed under CTAs, with 32×32 rounded avatar.

---

## 6 First-Fold Layout (mobile-first)

 - H1  
 - Rotator (auto)  
 - Support line  
 - CTA row (primary + secondary)  
 - Founder badge  
 - ↓ Scroll cue (chevron icon) linking to the rest

> This should feel like a natural flow into the rest of the page.

---

## ⚡ Projected Cost Savings Callout

> **Save $40 000/year** by cutting just 2 hours of meetings and manual syncs each week across a 4-person team:
>
> - $100/hr × 2 hrs/week × 4 people × 50 weeks = **$40 000/year**
>
> And that’s before you factor in the **sharper focus**, **faster PMF discovery**, and **capital-efficient scaling** you unlock. It’s what happens when your team spends time building instead of debating.

---

## 1 Service Tiles  
**Goal:** Hook each persona (Sales, CS, Product) with an outcome that speaks to their core hunger - *agency, insight, impact* - in as few words as possible.

| Tile            | Audience       | Core Desire             | Emotional Hook                      | Logical Benefit                     | Aspirational Angle                     | Example Copy Variants |
|-----------------|----------------|-------------------------|-------------------------------------|-------------------------------------|----------------------------------------|-----------------------|
| **AI RevOps**   | VP Sales       | Close more deals, faster | *Relief* (“No more grunt work”)     | Automates research & follow-ups     | Be the quota-crushing hero             | 1. “AI RevOps: Your 24/7 SDR”  
2. “AI RevOps: Automate lead research & follow-ups”  
3. “AI RevOps: Every prospect prepped before the call” |
| **AI CS Ops**   | Head of CS     | Delight customers        | *Confidence* (“I’m always on top”)  | Summarizes tickets → product insight| Become a zero-churn powerhouse         | 1. “AI CS Ops: Turn support tickets into product insights”  
2. “AI CS Ops: Know every customer pain point”  
3. “AI CS Ops: Weekly VoC reports on autopilot” |
| **AI Product Ops** | CPO / PM     | Build the right features | *Empowerment* (“Data-driven roadmap”)| Feeds user feedback → feature ideas | Ship the product users *can’t live without* | 1. “AI Product Ops: Ship user-driven features in half the sprint”  
2. “AI Product Ops: Roadmap guided by real feedback”  
3. “AI Product Ops: Auto-rank feature requests & prototypes” |

**Implementation Notes**  
- **Headline:** 2–3 words (“AI RevOps”)  
- **Benefit line:** 6–8 words  
- **Sub-line (italics):** 3–5 words emotional hook  
- **Link:** Anchor → GIF demo of workflow  
- On mobile, render each service tile as a stacked card rather than a wide table.  
- Convert “Example Copy Variants” into numbered lists within each cell for readability.

---

## 2 Timeline Section  
**Goal:** Replace multi-month process with a *high-velocity 3-step sprint*.

Our process unfolds in three rapid steps:

| Step                   | When           | Emotional Framing                              | Copy Variant              |
|------------------------|----------------|------------------------------------------------|---------------------------|
| **1. Blueprint Call**  | Day 0          | *Hope and direction* (“Let’s plot your AI wins.”)  | “30‑minute blueprint: map your first sprint” |
| **2. 2‑Week Sprint**   | Week 1–2       | *Excitement and momentum* (“See AI driving deals.”)| “Live AI workflow in 10 business days”    |
| **3. Hand‑Off and Scale**| Week 3–4       | *Relief and confidence* (“You own it, you run it.”)| “Full hand-off with docs and team training” |

> *Most clients see results before their next board deck.*

---

## 3 Proof Strip  
**Goal:** Flash immediate, tangible wins.

**Note:** Consider clarifying each metric with unit context (e.g., “Slash internal meeting time by 40%”).

| Metric                         | Copy                                    |
|--------------------------------|-----------------------------------------|
| **–42% Internal Meetings**    | “Slash meeting time by 40%”            |
| **3× Faster Roadmap Turns**    | “Accelerate feature cycles 3×”          |
| **+28% Deal Win-Rate**        | “Boost your win-rate by 28%”           |

> Animate the numbers counting up on scroll into view.

---

## 4 Footer Update  
**Goal:** Reinforce the low-code, familiar stack.

> *Built on the tools you already know.*

```html
<div class="footer-tools">
  <img src="/logos/zapier.svg"    alt="Zapier"    height="50">
  <img src="/logos/powerautomate.svg" alt="Power Automate" height="50">
  <img src="/logos/openai.svg"    alt="OpenAI"    height="50">
  <img src="/logos/anthropic.svg" alt="Anthropic" height="50">
</div>
```

---

## Step-by-Step Implementation Plan

✅ 0. **Repository Audit & Environment Validation**
   - Install dependencies (`npm install` or `pnpm install`) and run the dev server & build (`npm run dev`, `npm run build`).
   - Review project config files: `package.json`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`.
   - Inventory existing application structure (`src/App.tsx`) and components directory:
     `Hero`, `GettingStarted`, `Services`, `Difference`, `Workshops`, `PrivateCloud`, `Partnership`, `Founder`, `FAQ`, `CTAPrimary`, `CTASecondary`.
   - Identify which existing components map to new sections and list deprecated components:
     - Map: `Hero` → First-Fold, `GettingStarted` → Timeline, `Services` → Service Tiles, `Founder` → Founder Credibility Badge, `CTAPrimary`/`CTASecondary` → Primary/Secondary CTAs.
     - Deprecate or remove: `Difference`, `Workshops`, `PrivateCloud`, `Partnership`, `AIEngineering`, `Testimonials`, existing `FAQ` (to be restyled), and any unused utilities.
   - Audit asset directories (`src/assets`, `public/logos`, `public/assets`) and plan new additions (playbook PDF, video).
   - Verify CI/CD and deployment settings (e.g. `gh-pages` in `package.json`).

✅ 1. **Global Styles & Tokens**
   - Update `src/styles/Theme.ts` to include typography scales (e.g., `body-lg`, `text-sm`), colors, and breakpoints.
   - Adjust `GlobalStyles.ts` for base resets and mobile-first flow.
   - Wrap app in `ThemeProvider` (if not already). Ensure consistent styling architecture.

✅ 2. **Content Data Model**
   - Created `src/content/landing.ts` with H1, H2 rotator, support line, CTAs, founder badge copy, cost savings, service tiles, timeline steps, and proof metrics.
   - Centralized PDF and video asset references and imported founder avatar.
   - Extended `src/types/index.ts` with interfaces for LandingContent, FirstFold, CostSavings, ServiceTile, TimelineStep, and ProofMetric.

✅ 3. **First-Fold Section**
   - Replace existing `<Hero>` component with a new `<FirstFold>` component:
     - `<Title>` for H1
     - `<RotatingHeadline>` for H2 variants
     - `<SupportLine>` paragraph
     - `<CTARow>` with primary button and secondary links (Calendly widget)
     - `<FounderBadge>` with avatar and founder text
     - `<ScrollCue>` chevron for smooth scrolling
   - Update `App.tsx` imports: remove `Hero`, re-order sections to place `<FirstFold>` at the top.

✅ 4. **Projected Cost Savings Callout**
   - Build `<CostSavings>` component showcasing annual savings calculation.
   - Style with background accent and emphasized numbers.

✅ 5. **Service Tiles Section**
   - Replace existing `<Services>` component with `<ServiceTiles>`:
     - Develop `<ServiceTile>` child component (title, benefit, subline, link).
     - Render desktop grid and mobile stacked cards from content array.
   - Link each tile to its GIF demo or anchor.
   - Update `App.tsx`: remove `Services` import and add `<ServiceTiles>` in its place.

✅ 6. **Timeline Section**
   - Replace existing `<GettingStarted>` component with `<Timeline>` wrapper:
     - Desktop: table layout
     - Mobile: card stack per step
   - Highlight step titles and emotional framing.
   - Update `App.tsx`: remove `GettingStarted` import and place `<Timeline>` in its position.

✅ 7. **Proof Strip**
   - Implement `<ProofStrip>` with `<Counter>` children.
   - Use IntersectionObserver to animate counts on scroll into view.

8. **Footer Tools**
   - Implement `<FooterTools>` component in `src/sections` to render tool logos as a styled flex container.
   - Import logos from `/public/logos` and ensure consistent sizing and spacing.
   - Update `App.tsx`: insert `<FooterTools>` above closing tags, removing any legacy footer markup.

9. **Asset Integration**
   - Add `playbook.pdf` to `public/assets` and update link.
   - Embed video iframe placeholder and replace commented code with real asset.

10. **Responsiveness & Accessibility**
   - Test breakpoints (mobile-first from 320px).
   - Add appropriate `aria` labels and keyboard navigation.
   - Use semantic HTML for headings and lists.

11. **SEO & Analytics**
   - Update page `<head>` with meta title, description, and Open Graph tags.
   - Include tracking scripts or consent as needed.

12. **Testing & Linting**
   - Write unit tests for rotator, counter, and key components (e.g. with Jest/React Testing Library).
   - Run `npm run lint` to enforce ESLint rules and `npm run test` for test coverage.

13. **Deployment**
   - Configure CI/CD (e.g., GitHub Actions or Vercel).
   - Deploy staging previews and finalize merge to `main`.