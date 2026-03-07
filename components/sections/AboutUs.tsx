import { Heart, Clock, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "We treat every home like our own, with care and craftsmanship in every detail.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description: "We respect your schedule and deliver projects on time without cutting corners.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your complete peace of mind.",
  },
  {
    icon: Users,
    title: "Family-Owned",
    description: "A family business built on trust, transparency, and strong relationships.",
  },
]

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-surface-subtle py-16 md:py-24 lg:py-32">
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
            About Us
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Your Trusted Local Team
          </h2>
          <p className="mt-3 max-w-2xl text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            JP Home Services is a family-owned business proudly serving the
            Virginia, DC, and Maryland area. With over a decade of experience, we
            specialize in turning houses into dream homes — one project at a time.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/[0.08] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:ring-0">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                  {v.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                  {v.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 group-hover:w-16" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
