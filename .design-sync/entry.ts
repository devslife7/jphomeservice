// Design-sync barrel entry — re-exports the reusable ui/ primitives so the
// converter can bundle them into window.JPHS without an app build.
// Compound sub-parts (CardHeader, SheetContent, …) ride along via `export *`
// so the design agent can compose them, even though only the primary
// components (Button, Card, Sheet, AnimateOnScroll) get preview cards.
export * from "../components/ui/button";
export * from "../components/ui/card";
export * from "../components/ui/sheet";
export { default as AnimateOnScroll } from "../components/ui/AnimateOnScroll";
