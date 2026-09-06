## JP Home Services — design system conventions

A small shadcn/ui (new-york) + Tailwind v4 component set for the JP Home Services
brand: a local home-services / remodeling contractor. Voice: practical, trustworthy,
local — not corporate SaaS. Primary brand color is green (`#3bb84c`).

### Setup / wrapping

No provider is required. Components are self-contained and styled entirely by the
shipped stylesheet — just import and render. Dark mode is supported by adding the
`dark` class to an ancestor (e.g. `<html class="dark">`); all tokens flip automatically.

### Styling idiom — Tailwind utility classes

Style with Tailwind utility classes (this is a Tailwind v4 system). Every component
also accepts `className`, which is merged (via `tailwind-merge`) so you can extend or
override. Colors are token-backed — use the semantic and brand families below, which
are all present in the shipped stylesheet:

| Family | Classes |
|---|---|
| Surfaces | `bg-background` `bg-card` `bg-popover` `bg-muted` `bg-secondary` `bg-accent` `bg-surface-subtle` |
| Brand / action | `bg-primary` (green) `bg-destructive` (red); brand scale `bg-brand-50` … `bg-brand-950` |
| Text | `text-foreground` `text-muted-foreground` `text-primary` `text-primary-foreground` `text-card-foreground` |
| Borders / rings | `border` `border-border` `border-input` `ring-ring` `border-brand-200` |

Opacity modifiers `/10 /20 /50 /80 /90` are available on `bg/text/border/ring`
(e.g. `bg-primary/10`, the brand-tinted surface used for icon chips). Gradients:
`from-* / to-* / via-*` on the brand and semantic colors.

Shape conventions: buttons are fully rounded (`rounded-full`); cards use `rounded-xl`
with `shadow-sm`. Radius tokens: `rounded-sm/md/lg/xl` (driven by `--radius: 0.625rem`).

### Components (window.JPHS)

- **Button** — `variant`: `default` (green) `secondary` `outline` `ghost` `destructive`
  `link`; `size`: `default` `sm` `lg` `icon`. `asChild` to render as a child element
  (e.g. wrap a link). lucide-react icons compose inline.
- **Card** — compose with `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`,
  `CardContent`, `CardFooter`. The standard pattern for service/feature/stat blocks.
- **Sheet** — slide-in panel (Radix Dialog) used for mobile nav. Compose `SheetTrigger`,
  `SheetContent` (`side`: `top/right/bottom/left`), `SheetHeader`, `SheetTitle`,
  `SheetDescription`, `SheetFooter`, `SheetClose`.
- **AnimateOnScroll** — wrapper that fades + slides its children up when scrolled into
  view. Wrap section content; takes optional `className`.

### Where the truth lives

- `styles.css` (and its `@import` of `_ds_bundle.css`) — all tokens and component
  styling. `design.md` in `guidelines/` documents the full brand direction.
- Per-component API + usage: each component's `.d.ts` and `.prompt.md`.

### Idiomatic example

```tsx
<Card className="w-80">
  <CardHeader>
    <CardTitle>Kitchen Remodeling</CardTitle>
    <CardDescription>Done by your local crew.</CardDescription>
    <CardAction>
      <span className="bg-primary/10 text-primary flex size-9 items-center justify-center rounded-full">
        <Wrench className="size-4" />
      </span>
    </CardAction>
  </CardHeader>
  <CardContent className="text-muted-foreground text-sm">
    Free in-home estimates across Virginia, DC, and Maryland.
  </CardContent>
  <CardFooter>
    <Button className="w-full">Get a Free Estimate</Button>
  </CardFooter>
</Card>
```

Note: body font is the host app's (`--font-geist-sans` / Roboto, injected by Next at
runtime), so previews fall back to a system sans — visual weight/spacing are accurate,
the exact typeface is not.
