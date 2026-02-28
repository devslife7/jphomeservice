import { ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Painting Services",
    description:
      "Professional interior and exterior painting to refresh and protect your home.",
    image: "/img/painting.avif",
    alt: "Interior and exterior painting",
  },
  {
    title: "Carpentry & Trim",
    description:
      "Custom woodworking, crown molding, baseboards, and decorative trim installation.",
    image: "/img/carpentry.avif",
    alt: "Carpentry and trim work",
  },
  {
    title: "Plumbing Services",
    description:
      "Installation and repair of faucets, sinks, and other plumbing fixtures.",
    image: "/img/plumbing.jpg",
    alt: "Plumbing services",
  },
  {
    title: "Decks & Fences",
    description:
      "Custom design and installation of outdoor living spaces and property boundaries.",
    image: "/img/deck1.jpg",
    alt: "Deck and fence installation",
  },
]

export default function Featured() {
  return (
    <section id="featured" className="py-16 md:py-24 lg:py-32">
      <div className="my-container">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Featured Services
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            Take a look at what we do best
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={700}
                  height={440}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Decorative number */}
                <span className="pointer-events-none absolute right-4 top-0 -translate-y-1/2 select-none font-mono text-5xl font-black text-black/[0.03] md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground lg:text-xl">
                  {service.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2.5">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
