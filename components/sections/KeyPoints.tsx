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
    <section className="relative -mt-20 z-10 pb-16 md:-mt-28 lg:-mt-36 lg:pb-24">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="my-container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
          {points.map((point, i) => (
            <div
              key={point.number}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_32px_-8px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

              <div className="relative px-6 py-8 md:px-7 md:py-10 lg:px-8">
                {/* Large background number */}
                <span className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[7rem] font-black leading-none text-black/[0.03] transition-colors duration-300 group-hover:text-primary/[0.06] md:text-[8rem]">
                  {point.number}
                </span>

                {/* Icon + number row */}
                <div className="relative mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {point.icon}
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-widest text-primary/60 uppercase">
                    {point.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="relative mb-2 text-xl font-bold tracking-tight text-foreground lg:text-[1.35rem]">
                  {point.title}
                </h3>
                <p className="relative text-[0.938rem] leading-relaxed text-muted-foreground">
                  {point.description}
                </p>

                {/* Bottom decorative line — reveals on hover */}
                <div className="mt-6 h-px w-0 bg-gradient-to-r from-primary to-primary/20 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
