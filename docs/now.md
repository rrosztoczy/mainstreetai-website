# Now: Premium Brand + Protected Approach (Content Ladder)

## Goal
Attract high-quality leads for Mainstreet AI (premium services), while keeping implementation details and proprietary artifacts private so copycats can't trivially replicate the "how".

## Constraints
- Marketing must still build trust: premium buyers need clarity + proof.
- Protect *artifacts/tooling/parameters* more than *principles/outcomes*.
- Keep the website simple; use gating and selective friction to filter.

## Content Ladder (What Goes Where)
1) Public (website + social)
- Positioning: who we serve, what outcomes we create, what we build (high-level).
- Proof: case studies (redacted/composite), metrics, client quotes, security posture.
- Principles + heuristics: how to think, how to decide, common failure modes.
- Avoid: templates, prompt libraries, connector code, internal scorecards, vendor lists.

2) Semi-gated (email capture / request-only)
- "Private brief" PDF: annotated examples, before/after stories, deliverable excerpts.
- Self-qualification: who it's for/not for, readiness checklist, budget bands.
- Still avoid: copy/paste playbooks; keep details abstracted and redacted.

3) Private (client-only / NDA / paid engagement)
- Full playbooks: templates, internal docs, exact workflows, prompts, architecture diagrams.
- Toolchain: integrations, automation scripts, monitoring, evals, governance configs.
- This is the real moat: execution + iteration speed + accumulated edge cases.

## Messaging Rules (Copy-Resistant)
- Publish "diagnosis and taste" (what matters, what to ignore) more than "treatment recipes".
- Show the existence of a method; keep the parameters and artifacts private.
- Name the method and its components (distinct language), but keep the internals proprietary.
- Prefer outcome proof (numbers, timelines, adoption) over step-by-step how-to content.

## Website Funnel (Premium + Filtering)
- Primary CTA: "Apply for a Fit Call" (not "Book") + capacity language.
- Secondary CTA: "Request the Private Brief" (semi-gated).
- Route all intents through one qualification step; then direct to Align / Jump Start / Operate.

## Quick Website Findings (from code)
- Broken scroll target: Difference section links to `to="process"` but no `id="process"` exists.
- Mailto subject encoding bug: navbar CTA uses `subject=AI%Fit%20Request` (missing `%20`).

## Next Actions
- Decide what "approach" must stay private: templates? prompts? tooling? pricing logic?
- Add a semi-gated "Private Brief" offer (even if initially via mailto + manual send).
- Add 1–2 redacted case studies focused on ROI + timeline + constraints (not tactics).

