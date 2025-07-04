# Mainstreet AI • Landing Website Rewrite

> **Purpose**  
> This project is focused around a landing website rewrite. Historically, we 

> **Context**  
> The Mainstreet AI website is a simple marketing focused website we use to build credibility and convert leads. The site should stay simple - HTML/CSS/React/Typescript with Vite and Styled Components. Keep components and logic functional and modular. When building new components build in a way that doesn't modify. Extend, add, and replace so we can always rolll back.

---

## 1 Headline (H1)

```text
AI Operations for Startups & Scale-ups
```

---

## 2 Rotating Sub-Headline (H2)

*Cycle every **2.6 s**; fade/slide transition.*

```text
Experts in AI _Ops where we start with _ and loop Rev, Product and Customer through _ (so Experts in AI RevOps for example).
```

---

## 3 Support Line (H3 / body-lg)

```text
We ship continuous intelligence and friction free execution right to your door: delivered in one-week sprints using tools your team can manage - no technical chops required.

Stay on top of every customer pain point, feature request, and win. Keep everyone: sales, product, and customer success, focused and in the know. 
```

---

## 4 Primary CTA

```text
Book 30 minutes with Ryan →
```

* Links to Calendly or contact form (). Let's use a nice embedded widget we can transition down to:
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/ryan-mainstreetai/30min?hide_gdpr_banner=1&primary_color=5cb85c" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->

### 4.1 Secondary Action

```text
Prefer docs? Download the 1-page playbook →
```

* Inline text link; drives email capture for lower-commitment visitors.
*I love this, let's do two options: download the 1-page playbook OR watch the video (I will have to create both of these. First will be a pdf, second will be... an ebmedded video? Not sure. Placeholder for now.)
*Let's write the code to do these with ane xample pdf and video, I will comment them out after I test

---

## 5 Founder Credibility Badge

```text
Built by a technical founder who’s shipped products from idea → exit and delivered AI solutions for the last two years.
```

* Small: `text-sm text-gray-500`, placed under CTAs.

---

## 6 First-Fold Layout (mobile-first)

1. H1  
2. Rotator (auto)  
3. Support line  
4. CTA row (primary + secondary)  
5. Founder badge  
6. ↓ Scroll cue (e.g., chevron icon) linking to the rest IMPORTANT: This should be a natural flow into the rest.

---

## ⚡ Projected Cost Savings Callout

> **Save \$40 K+/year** by cutting just 2 hours of meetings & manual syncs each week across a 4-person team:
> 
> - \$100/hr × 2 hrs/week × 4 people × 50 weeks = **\$40 000/year**
>
> And that’s before you factor in the **sharper focus**, **faster PMF discovery**, and **capital-efficient scaling** you unlock when your team spends that time building instead of debating.

---

## 1 Service Tiles  
**Goal:** Hook each persona (Sales, CS, Product) with an outcome that speaks to their core hunger—*agency, insight, impact*—in as few words as possible.

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

---

## 2 Timeline Section  
**Goal:** Replace multi-month process with a *high-velocity 3-step sprint*.

| Step                   | When           | Emotional Framing                              | Copy Variant              |
|------------------------|----------------|------------------------------------------------|---------------------------|
| **1. Blueprint Call**  | Day 0          | *Hope & direction* (“Let’s plot your AI wins.”)  | “30-min blueprint: map your first sprint” |
| **2. 2-Week Sprint**   | Week 1–2       | *Excitement & momentum* (“See AI driving deals.”)| “Live AI workflow in 10 business days”    |
| **3. Hand-Off & Scale**| Week 3–4       | *Relief & confidence* (“You own it, you run it.”)| “Full hand-off with docs & team training” |

> *Most clients see results before their next board deck.*

---

## 3 Proof Strip  
**Goal:** Flash immediate, tangible wins.

| Metric                         | Copy                                    |
|--------------------------------|-----------------------------------------|
| **–42 % Internal Meetings**    | “Slash meeting time by 40 %”            |
| **3× Faster Roadmap Turns**    | “Accelerate feature cycles 3×”          |
| **+28 % Deal Win-Rate**        | “Boost your win-rate by 28 %”           |

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