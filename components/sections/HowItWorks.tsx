import { Phone, ClipboardList, Hammer, ThumbsUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Get in Touch",
    description:
      "Call us or fill out the contact form. Tell us about your project and we'll schedule a visit.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Free Estimate",
    description:
      "We'll assess the work on-site and provide a detailed, no-obligation quote — no surprises.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "We Get to Work",
    description:
      "Our skilled team completes the project on schedule, keeping you informed every step of the way.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "You're Happy",
    description:
      "We do a final walkthrough with you to make sure everything meets your expectations.",
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-surface-subtle py-16 md:py-20 lg:py-24">
      {/* Subtle diagonal line texture */}
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
            How It Works
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Simple from Start to Finish
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            We make the process easy so you can focus on enjoying your home
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={`group relative ${
                  i < steps.length - 1 ? "lg:border-r lg:border-black/[0.06]" : ""
                }`}
              >
                <div className="relative px-6 py-8 transition-all duration-300 md:px-8 md:py-10 lg:px-10 lg:py-12">
                  {/* Large background number */}
                  <span className="pointer-events-none absolute right-4 top-2 select-none font-mono text-[6rem] font-black leading-none text-black/[0.025] transition-colors duration-500 group-hover:text-primary/[0.06] md:right-6 md:top-4 md:text-[7rem] lg:text-[8rem]">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center text-primary transition-all duration-300">
                      <Icon className="h-9 w-9" strokeWidth={1.5} />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-black/[0.05] to-transparent" />
                  </div>

                  {/* Content */}
                  <h3 className="relative mb-2.5 text-lg font-bold tracking-tight text-foreground lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="relative text-[0.9rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Bottom accent — reveals on hover */}
                  <div className="mt-6 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
