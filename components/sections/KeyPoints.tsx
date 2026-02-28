import { UserCheck, UsersRound, Wrench } from "lucide-react"

const points = [
  {
    number: "01",
    icon: <UsersRound className="h-6 w-6" strokeWidth={1.5} />,
    title: "Expert Team",
    description:
      "Skilled professionals with years of industry experience delivering exceptional results on every project.",
  },
  {
    number: "02",
    icon: <Wrench className="h-6 w-6" strokeWidth={1.5} />,
    title: "Quality & Craft",
    description:
      "We use durable materials and meticulous attention to detail so every finish is built to last.",
  },
  {
    number: "03",
    icon: <UserCheck className="h-6 w-6" strokeWidth={1.5} />,
    title: "Client First",
    description:
      "Strong client reviews and repeat business built on trust, transparency, and communication.",
  },
]

export default function KeyPoints() {
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
        {/* Section label */}
        <div className="mb-10 flex flex-col items-center text-center md:mb-14">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Why Choose Us
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Built on Experience & Trust
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
          {points.map((point, i) => (
            <div
              key={point.number}
              className={`group relative ${
                i < points.length - 1 ? "md:border-r md:border-black/[0.06]" : ""
              }`}
            >
              <div className="relative px-6 py-8 transition-all duration-300 md:px-8 md:py-10 lg:px-10 lg:py-12">
                {/* Large background number */}
                <span className="pointer-events-none absolute right-4 top-2 select-none font-mono text-[6rem] font-black leading-none text-black/[0.025] transition-colors duration-500 group-hover:text-primary/[0.06] md:right-6 md:top-4 md:text-[7rem] lg:text-[8rem]">
                  {point.number}
                </span>

                {/* Icon */}
                <div className="relative mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/[0.08] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:ring-0">
                    {point.icon}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-black/[0.05] to-transparent" />
                </div>

                {/* Content */}
                <h3 className="relative mb-2.5 text-lg font-bold tracking-tight text-foreground lg:text-xl">
                  {point.title}
                </h3>
                <p className="relative text-[0.9rem] leading-relaxed text-muted-foreground">
                  {point.description}
                </p>

                {/* Bottom accent — reveals on hover */}
                <div className="mt-6 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
