import { AnimateOnScroll, Card, CardHeader, CardTitle, CardDescription } from "jphs";

// AnimateOnScroll is a behavior wrapper: it fades + slides its children in when
// they scroll into view (IntersectionObserver, threshold 0.15). In a static
// preview it settles to its revealed state. Wrap any section content in it.
export function RevealedContent() {
  return (
    <AnimateOnScroll>
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Why homeowners choose us</CardTitle>
          <CardDescription>
            Licensed, insured, and local — this block fades up as it enters the viewport.
          </CardDescription>
        </CardHeader>
      </Card>
    </AnimateOnScroll>
  );
}

export function StaggeredList() {
  const items = ["Free estimates", "Same-week scheduling", "5-year workmanship warranty"];
  return (
    <div className="flex flex-col gap-3">
      {items.map((text, i) => (
        <AnimateOnScroll key={text} className={`delay-[${i * 100}ms]`}>
          <div className="bg-surface-subtle rounded-lg border px-4 py-3 text-sm font-medium">
            {text}
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
