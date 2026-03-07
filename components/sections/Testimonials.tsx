import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Arlington, VA",
    rating: 5,
    text: "JP Home Services transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the craftsmanship exceeded our expectations.",
    service: "Kitchen Remodel",
  },
  {
    name: "David R.",
    location: "Fairfax, VA",
    rating: 5,
    text: "We hired them for deck installation and couldn't be happier. They helped us design the perfect outdoor space and built it to last. Highly recommend!",
    service: "Deck Installation",
  },
  {
    name: "Maria L.",
    location: "Bethesda, MD",
    rating: 5,
    text: "From painting to plumbing repairs, they've handled multiple projects for us. Always reliable, fair pricing, and great communication throughout.",
    service: "Multiple Services",
  },
  {
    name: "James K.",
    location: "Alexandria, VA",
    rating: 5,
    text: "The trim and carpentry work they did in our home is absolutely beautiful. Attention to detail is next level. We've already booked them for our next project.",
    service: "Carpentry & Trim",
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="my-container relative">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Testimonials
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            Real feedback from homeowners who trusted us with their projects
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] md:p-8"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/[0.06] md:h-12 md:w-12" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="relative mb-6 text-[0.938rem] leading-relaxed text-muted-foreground">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="mb-4 h-px bg-black/[0.04]" />

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-[0.813rem] text-muted-foreground">
                    {t.location}
                  </p>
                </div>
                <span className="rounded-full bg-primary/[0.06] px-3 py-1 text-xs font-semibold text-primary">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
