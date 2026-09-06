# JP Home Services Design Guide

This guide documents the visual system already used by the site. Treat `app/globals.css` and `lib/design-system.ts` as the source of truth for tokens, then follow the component patterns in `components/sections` and `components/ui`.

## Brand Direction

JP Home Services should feel local, practical, trustworthy, and polished. The design language combines real home-service photography, clean white and pale-green surfaces, confident green calls to action, and compact service information.

Use the interface to communicate:

- Clear workmanship and reliability.
- A friendly local contractor, not a corporate SaaS brand.
- Simple project flow, honest estimates, and practical results.
- Visual proof through project and service imagery.

Avoid visuals that feel generic, overly decorative, luxury real-estate oriented, or detached from home repair and remodeling.

## Source Files

- `app/globals.css`: Tailwind theme bridge, CSS custom properties, global base styles, container utility.
- `lib/design-system.ts`: documented design tokens for brand, neutral, typography, spacing, radii, shadows, and repeated UI rules.
- `components/ui/button.tsx`: button variants and interaction defaults.
- `components/ui/card.tsx`: base card primitive.
- `components/sections/*`: applied page patterns for hero, service cards, statistics, process steps, FAQ, CTAs, and contact.

## Color

The primary brand color is green:

- Brand hex: `#3bb84c`
- Primary token: `--primary`, mapped to `--brand-500`
- Primary OKLCH: `oklch(0.69 0.1843 145.38)`

Use the full brand scale only through Tailwind tokens such as `text-primary`, `bg-primary`, `bg-brand-300`, `bg-primary/10`, and `ring-primary/[0.08]`. Keep green as the main accent for CTAs, icons, active states, labels, dividers, and positive trust signals.

Neutral surfaces are intentionally light:

- Page background: `bg-background`
- Subtle alternating surface: `bg-surface-subtle`
- Cards: `bg-white` or `bg-card`
- Text: `text-foreground`
- Secondary text: `text-muted-foreground`
- Borders and rings: `border-black/[0.04]`, `ring-black/[0.04]`, `border-black/[0.06]`

Use dark overlays only on photography, typically `from-black/80 via-black/30 to-black/5`, to keep text legible.

## Typography

Use the existing font setup from `app/layout.tsx`:

- Body and UI: Geist Sans through `--font-geist-sans`.
- Code, section labels, and numbers: Geist Mono through `--font-geist-mono`.
- Headings and large numerals: Roboto through `--font-roboto`.

Heading style:

- Use `font-roboto`.
- Use bold to extra-bold weights.
- Keep tracking tight with `tracking-tight`.
- Favor direct, service-oriented headlines.

Common heading sizes:

- Page hero: `text-4xl sm:text-5xl md:text-6xl`, with larger custom sizing only for the homepage hero.
- Section heading: `text-2xl sm:text-3xl md:text-4xl`.
- Card heading: `text-lg` to `text-2xl`.

Body style:

- Use `text-[0.9rem]`, `text-[0.938rem]`, or `text-base`.
- Use `leading-relaxed` for descriptive copy.
- Keep copy short, concrete, and benefit-focused.

Section labels:

Use the established mono uppercase pattern:

```tsx
<span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
  <span className="h-px w-6 bg-primary/40" />
  Section Label
  <span className="h-px w-6 bg-primary/40" />
</span>
```

For left-aligned sections, omit the second line when it improves balance.

## Layout

Use `my-container` for horizontal layout. It maps to:

```css
container mx-auto px-4 lg:px-8
```

Section rhythm:

- Standard sections: `py-16 md:py-24 lg:py-32`.
- Compact supporting sections: `py-16 md:py-20`.
- CTA sections: `py-16 md:py-20`.
- Page headers with navbar offset: `pt-24 md:pt-32`.

Prefer simple responsive grids:

- Service grids: `grid-cols-1 lg:grid-cols-3`.
- Feature bento layouts: `grid-cols-1 lg:grid-cols-2`.
- Trust/stat grids: `grid-cols-2 md:grid-cols-4` or `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.

Use `gap-6` as the default card gap and `gap-8` for wider desktop compositions.

## Surfaces And Cards

Cards are clean, image-forward, and lightly framed:

- Radius: usually `rounded-2xl`.
- Background: `bg-white` on subtle surfaces or `bg-surface-subtle` on white pages.
- Border treatment: prefer `ring-1 ring-black/[0.04]` over heavy borders.
- Shadow: no shadow by default; add subtle hover shadows only.

Recommended card hover:

```tsx
"transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]"
```

Use accent bars sparingly:

```tsx
<div className="mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 group-hover:w-16" />
```

Do not make every section look like a floating card. Full-width white and `bg-surface-subtle` bands are the main page structure.

## Buttons And CTAs

Use `Button` or `buttonVariants` from `components/ui/button.tsx`.

Default button language:

- Shape: `rounded-full` from the base variant, or `rounded-lg` when matching existing CTAs.
- Height: `h-9` default, `h-10` large.
- Primary: `bg-primary text-primary-foreground`.
- Hover: `hover:bg-primary/90`.
- Focus: existing ring behavior from the button primitive.

High-value CTAs often add:

```tsx
"gap-2 rounded-lg px-7 text-[0.938rem] font-semibold shadow-sm shadow-primary/20"
```

Hero CTAs may use stronger treatment:

```tsx
"rounded-full bg-primary px-8 py-3.5 shadow-xl shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
```

Use lucide icons in CTA buttons when they clarify the action, especially `Phone`, `ArrowRight`, and service-related icons.

## Icons

Use `lucide-react` icons with thin strokes:

- Most service icons: `strokeWidth={1.5}`.
- Small icon bubbles: `h-7 w-7 rounded-lg`.
- Medium icon bubbles: `h-10 w-10 rounded-xl`.
- Large icon bubbles: `h-12 w-12 rounded-xl`.

Default icon bubble style:

```tsx
"flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/[0.08]"
```

Hoverable cards may invert the bubble to green:

```tsx
"group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:ring-0"
```

## Imagery

Photography is central to the brand. Use real project, home, service, or material images whenever possible.

Image rules:

- Use `next/image` for local assets.
- Use `object-cover` for fixed-ratio compositions.
- Use `aspect-[16/9]`, `aspect-[16/10]`, or `aspect-[4/3]` depending on the card.
- Add dark gradients when text sits on top of images.
- Keep before-and-after imagery direct and easy to inspect.

Homepage hero:

- Full-bleed image.
- Dark bottom and side overlays.
- Content aligned near the bottom on smaller screens and vertically centered on large screens.
- White headline with a primary-to-brand gradient highlight.

## Motion

Motion should be subtle and practical:

- Page body uses a short `fadeIn` translate animation.
- Section reveals use `AnimateOnScroll`.
- Image cards use `group-hover:scale-105` over `duration-500`.
- Accordions use grid-row transitions with `duration-300`.
- Buttons may use small hover and active scale only for prominent CTAs.

Avoid excessive animation. Movement should reinforce feedback, reveal structure, or add polish to photography.

## Background Treatments

Use alternating white and `bg-surface-subtle` sections. Several subtle sections use a diagonal texture:

```tsx
<div
  className="pointer-events-none absolute inset-0 opacity-[0.018]"
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
    backgroundSize: "12px 12px",
  }}
/>
```

Green CTA or transformation sections may use soft white translucent circles. Keep them low opacity and secondary to the content.

Curved SVG dividers are used between major hero or transformation bands. Use them only when a section needs a strong transition.

## Forms

Form inputs follow the contact form style:

- Height: `h-10` for inputs.
- Radius: `rounded-xl`.
- Border: `border border-input`.
- Padding: `px-3.5`.
- Text: `text-sm`.
- Placeholder: `placeholder:text-muted-foreground/50`.
- Focus: `focus:border-primary focus:ring-2 focus:ring-primary/20`.

Success states should use light green surfaces:

```tsx
"rounded-2xl bg-primary/[0.04] ring-1 ring-primary/[0.08]"
```

## Content Voice

Copy should be plain, direct, and useful. Prefer:

- "Get a Free Estimate"
- "Complete Home Remodeling Solutions"
- "Simple from Start to Finish"
- "No obligation, no hidden fees"
- "Quality craftsmanship"

Avoid vague marketing language, exaggerated claims, and dense paragraphs. The site should sound like a capable local contractor explaining the process clearly.

## Accessibility

- Use semantic landmarks: `nav`, `main`, `section`, `footer`.
- Keep image `alt` text descriptive and project-specific.
- Preserve visible focus rings from UI primitives.
- Keep text contrast high, especially over photos and green surfaces.
- Include `sr-only` labels for icon-only social links.
- Buttons and links should have clear action text.

## Implementation Rules

- Do not create a separate `brand.css`; brand tokens already live in `app/globals.css` and `lib/design-system.ts`.
- Prefer Tailwind tokens over hardcoded colors.
- Prefer existing primitives in `components/ui`.
- Prefer lucide icons over custom icon markup.
- Keep new layouts consistent with the existing container, spacing, section labels, cards, and CTA patterns.
- Use photography or real project visuals for service surfaces.
- Keep decorative elements subtle and subordinate to content.
