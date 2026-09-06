# design-sync notes — JP Home Services

## What this repo is
This is a **Next.js app**, not a packaged design system. There is no `dist/` and the
package isn't installed under `node_modules/`. The sync bundles the reusable
`components/ui/` primitives via a **barrel entry** (`.design-sync/entry.ts`) passed as
`--entry`, which lets the converter walk up to the repo `package.json` and bundle from
source. Scope is intentionally limited to `ui/` (Button, Card, Sheet, AnimateOnScroll)
via `cfg.componentSrcMap`. `sections/` and `layout/` are deliberately excluded — they're
welded to Next (`next/image`, `next/link`, `@/lib/data`, image-asset imports) and would
need shims; revisit only if the user asks.

## CSS pipeline (important)
Components use Tailwind v4 utility classes that only exist after a Tailwind compile, and
the brand tokens live in `app/globals.css` (Tailwind *source*, not compiled CSS). So
`cfg.cssEntry` points at a **generated** stylesheet `.design-sync/ds-tailwind.css`
(gitignored), produced by `cfg.buildCmd`:

    .ds-sync/node_modules/.bin/tailwindcss -i .design-sync/tw-input.css -o .design-sync/ds-tailwind.css

`tw-input.css` imports `app/globals.css` (Tailwind auto-scans the repo for used
utilities) **and** `@source`s `tw-safelist.txt` — a generated list of the full semantic +
brand color vocabulary (`bg/text/border/ring` × all theme colors × a few opacities, plus
`from/to/via/fill/stroke`). The safelist exists because Claude Design renders against the
**static** stylesheet (no Tailwind runtime): any brand color the design agent uses must
already be in the CSS. Without it, e.g. `bg-brand-500` / `bg-accent` are absent.

## Fonts
`--font-geist-sans` / `--font-mono` / `--font-roboto` are injected by Next at runtime
(next/font), so they're 2 "missing tokens" in validate (below threshold, non-blocking) and
previews render in a system-sans fallback. Layout/weight are accurate; exact typeface is
not. Not shipped on purpose.

## Known render warns (re-sync should treat as expected)
- `tokens: ... (2 missing, below threshold)` — the runtime fonts above.

## Re-sync (one command, from repo root)
Re-copy staged scripts (skill `cp -r` line), re-run deps install + tailwind CLI on a fresh
clone, regenerate `tw-safelist.txt` if the token set changed, then:

    node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules \
      --entry .design-sync/entry.ts --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json

(First sync omitted `--remote`.) `cfg.buildCmd` regenerates the CSS before the converter.

## Re-sync risks (what can silently go stale)
- **`ds-tailwind.css` is generated and gitignored** — re-sync MUST run `buildCmd` first
  (the driver does). If the Tailwind CLI version drifts, output may change.
- **The color safelist is hand-generated** (`tw-safelist.txt`). If `globals.css` adds new
  token families (e.g. a new brand ramp), regenerate the safelist or those utilities won't
  ship. Layout utilities only cover what the repo's sources use + nothing extra — a design
  using a never-used utility (`grid-cols-7`, `gap-20`…) won't have it in the static CSS.
- **`AnimateOnScroll`** relies on IntersectionObserver firing on mount to reach its
  revealed state; previews settle correctly in headless Chromium but the animation itself
  isn't captured.
- **Barrel entry** must stay in sync with `componentSrcMap` if components are added.
