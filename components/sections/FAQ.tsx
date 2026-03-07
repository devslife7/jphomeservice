"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide free, no-obligation estimates for all projects. We'll visit your home, assess the work needed, and provide a detailed quote with no hidden fees.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Virginia, Washington DC, and Maryland. This includes Arlington, Fairfax, Alexandria, Bethesda, Silver Spring, and the surrounding areas.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. JP Home Services is fully licensed and insured, giving you complete peace of mind for every project we take on.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope. A simple paint job may take 1-3 days, while a kitchen remodel could take 2-4 weeks. We'll provide a clear timeline during your estimate.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, and all major credit cards. For larger projects, we can discuss flexible payment arrangements.",
  },
  {
    question: "Do you provide warranties on your work?",
    answer:
      "Yes, we stand behind our work. We offer warranties on our craftsmanship and use quality materials that come with their own manufacturer warranties.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative bg-surface-subtle py-16 md:py-24 lg:py-32">
      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="my-container relative">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            FAQ
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            Everything you need to know before getting started
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] transition-shadow duration-300 hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
                >
                  <span className="text-[0.938rem] font-semibold text-foreground md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[0.9rem] leading-relaxed text-muted-foreground md:px-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
