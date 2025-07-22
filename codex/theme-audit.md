# Theme Audit: Prototype Design Tokens

Below are the core design tokens extracted from `codex/prototype.tsx` to inform our Tailwind CSS theme configuration.  Review and confirm before we bake these into `tailwind.config.js`.

## Colors
- **Primary (Dark Navy):** `#0E1B3D`【F:codex/prototype.tsx†L16-L24】【F:codex/prototype.tsx†L92-L100】
- **Accent (Bright Green):** `#1FF299`【F:codex/prototype.tsx†L25-L30】【F:codex/prototype.tsx†L113-L118】
- **Text Brand Color:** `#0E1B3D` (used for button text)【F:codex/prototype.tsx†L25-L30】
- **Background White:** `#FFFFFF` (default white)
- **Gray Background:** `gray-50` (light gray sections)
- **Gray Text:** `gray-700`, `gray-800` (body copy, details)【F:codex/prototype.tsx†L10-L14】【F:codex/prototype.tsx†L37-L43】

## Typography
- **Font Family:** `font-sans` (system sans-serif stack)
- **Heading Scales:**
  - `text-4xl` → `2.25rem`, `md:text-6xl` → `3.75rem`【F:codex/prototype.tsx†L16-L20】
  - `text-3xl` → `1.875rem`, `text-2xl` → `1.5rem`【F:codex/prototype.tsx†L37-L43】
- **Copy Scales:**
  - `text-lg` → `1.125rem`, `md:text-2xl` → `1.5rem`【F:codex/prototype.tsx†L18-L24】
  - `text-base` → `1rem`, `text-sm` → `0.875rem`, `text-xs` → `0.75rem` (FAQ & nav links)【F:codex/prototype.tsx†L140-L151】

## Spacing
- **Vertical Padding:**
  - `py-20` → `5rem`, `py-16` → `4rem`, `py-12` → `3rem`【F:codex/prototype.tsx†L16-L24】【F:codex/prototype.tsx†L113-L118】
- **Horizontal Padding:** `px-6` → `1.5rem`, `px-8` → `2rem`【F:codex/prototype.tsx†L16-L24】【F:codex/prototype.tsx†L25-L30】
- **Gap Utilities:** `gap-12` → `3rem`, `gap-6` → `1.5rem`【F:codex/prototype.tsx†L12-L14】

## Border Radius & Shadows
- **Rounded Corners:** `rounded-2xl` → `1rem`
- **Box Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-md`

---

Please review these tokens. Once confirmed, I'll proceed to configure our Tailwind theme (colors, spacing, typography, radii, and shadows) to match.