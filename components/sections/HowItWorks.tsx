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
    <section className="relative py-16 md:py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />

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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={`group relative ${
                  i < steps.length - 1 ? "lg:border-r lg:border-black/[0.06]" : ""
                }`}
              >
                <div className="relative px-6 py-8 text-center lg:px-8 lg:py-10">
                  {/* Background number */}
                  <span className="pointer-events-none absolute inset-x-0 top-2 select-none text-center font-mono text-[5rem] font-black leading-none text-black/[0.025] transition-colors duration-500 group-hover:text-primary/[0.06]">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/[0.08] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:ring-0">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="relative mb-2 text-lg font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="relative text-[0.9rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
