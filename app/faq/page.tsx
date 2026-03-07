import type { Metadata } from "next"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"
import AnimateOnScroll from "@/components/ui/AnimateOnScroll"

export const metadata: Metadata = {
  title: "FAQ | JP Home Services",
  description:
    "Frequently asked questions about JP Home Services — estimates, service areas, licensing, timelines, and more.",
}

export default function FAQPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] pt-24 md:pt-32">
      <div className="my-container relative pb-4 md:pb-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Support
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h1 className="font-roboto mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            Everything you need to know before getting started with us.
          </p>
        </div>
      </div>

      <AnimateOnScroll>
        <FAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTABanner />
      </AnimateOnScroll>
    </main>
  )
}
