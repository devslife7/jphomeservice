/**
 * JP Home Services — Design System
 *
 * Single source of truth for all design tokens.
 * CSS custom properties are defined in app/globals.css.
 * This file documents the values and exports tokens needed at runtime.
 */

// ---------------------------------------------------------------------------
// Brand palette (OKLCH, hue 145°)
// ---------------------------------------------------------------------------
export const brand = {
  50: "oklch(0.97 0.02 145)",
  100: "oklch(0.93 0.05 145)",
  200: "oklch(0.87 0.09 145)",
  300: "oklch(0.80 0.13 145)",
  400: "oklch(0.75 0.16 145)",
  500: "oklch(0.69 0.1843 145.38)", // primary — #1acd32ff
  600: "oklch(0.60 0.16 145)",
  700: "oklch(0.52 0.14 145)",
  800: "oklch(0.43 0.11 145)",
  900: "oklch(0.34 0.08 145)",
  950: "oklch(0.27 0.06 145)",
  /** Hex value for contexts that require it (manifest, meta tags) */
  hex: "#3AB74B",
} as const

// ---------------------------------------------------------------------------
// Neutral palette (achromatic OKLCH — matches shadcn neutral base)
// ---------------------------------------------------------------------------
export const neutral = {
  50: "oklch(0.985 0 0)",
  100: "oklch(0.97 0 0)",
  200: "oklch(0.922 0 0)",
  300: "oklch(0.87 0 0)",
  400: "oklch(0.708 0 0)",
  500: "oklch(0.556 0 0)",
  600: "oklch(0.439 0 0)",
  700: "oklch(0.371 0 0)",
  800: "oklch(0.269 0 0)",
  900: "oklch(0.205 0 0)",
  950: "oklch(0.145 0 0)",
} as const

// ---------------------------------------------------------------------------
// Semantic colors (reference the CSS custom properties)
// ---------------------------------------------------------------------------
export const semantic = {
  primary: "var(--primary)",
  primaryForeground: "var(--primary-foreground)",
  secondary: "var(--secondary)",
  secondaryForeground: "var(--secondary-foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  accent: "var(--accent)",
  accentForeground: "var(--accent-foreground)",
  destructive: "var(--destructive)",
  background: "var(--background)",
  foreground: "var(--foreground)",
  border: "var(--border)",
  input: "var(--input)",
  ring: "var(--ring)",
  surfaceSubtle: "var(--surface-subtle)",
} as const

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------
export const typography = {
  fontFamily: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
    heading: "var(--font-roboto, var(--font-geist-sans))",
  },
  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
} as const

// ---------------------------------------------------------------------------
// Spacing (Tailwind's 4px-base scale)
// ---------------------------------------------------------------------------
export const spacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem", // 2px
  1: "0.25rem",    // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem",     // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem",    // 12px
  4: "1rem",       // 16px
  5: "1.25rem",    // 20px
  6: "1.5rem",     // 24px
  8: "2rem",       // 32px
  10: "2.5rem",    // 40px
  12: "3rem",      // 48px
  16: "4rem",      // 64px
  20: "5rem",      // 80px
  24: "6rem",      // 96px
} as const

// ---------------------------------------------------------------------------
// Border radii
// ---------------------------------------------------------------------------
export const radii = {
  base: "0.625rem",                       // --radius
  sm: "calc(0.625rem - 4px)",             // --radius-sm
  md: "calc(0.625rem - 2px)",             // --radius-md
  lg: "0.625rem",                         // --radius-lg
  xl: "calc(0.625rem + 4px)",             // --radius-xl
  full: "9999px",
} as const

// ---------------------------------------------------------------------------
// Shadows
// ---------------------------------------------------------------------------
export const shadows = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  primaryGlow: "0 8px 40px -12px oklch(0.69 0.1843 145.38 / 0.25)",
} as const

// ---------------------------------------------------------------------------
// UI Rules — documented patterns for consistent usage
// ---------------------------------------------------------------------------
export const uiRules = {
  /** Section label: mono uppercase with decorative lines */
  sectionLabel: "inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary",
  sectionLabelLine: "h-px w-6 bg-primary/40",

  /** Icon bubble: small rounded container for icons */
  iconBubbleSm: "flex h-7 w-7 items-center justify-center rounded-lg bg-primary/[0.06] text-primary",
  iconBubbleMd: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] text-primary ring-1 ring-primary/[0.08]",
  iconBubbleLg: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/[0.08]",

  /** Card: white with subtle ring */
  card: "overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04]",

  /** CTA button: primary with glow shadow */
  ctaButton: "gap-2 rounded-lg px-7 text-[0.938rem] font-semibold shadow-lg shadow-primary/25",

  /** Alternating section background */
  surfaceSubtle: "bg-surface-subtle",
} as const
