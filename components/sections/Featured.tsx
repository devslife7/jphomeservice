import { ArrowRight, Paintbrush, Hammer, Wrench, Trees } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Painting Services",
    description:
      "Professional interior and exterior painting to refresh and protect your home.",
    image: "/img/painting.png",
    alt: "Interior and exterior painting",
    icon: <Paintbrush className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: "Carpentry & Trim",
    description:
      "Custom woodworking, crown molding, baseboards, and decorative trim installation.",
    image: "/img/carpentry.avif",
    alt: "Carpentry and trim work",
    icon: <Hammer className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: "Plumbing Services",
    description:
      "Installation and repair of faucets, sinks, and other plumbing fixtures.",
    image: "/img/plumbing.jpg",
    alt: "Plumbing services",
    icon: <Wrench className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    title: "Decks & Fences",
    description:
      "Custom design and installation of outdoor living spaces and property boundaries.",
    image: "/img/deck1.jpg",
    alt: "Deck and fence installation",
    icon: <Trees className="h-6 w-6" strokeWidth={1.5} />,
  },
]

export default function Featured() {
  const [featured, ...rest] = services

  return (
    <section id="featured" className="relative py-16 md:py-24 lg:py-32">
      {/* Decorative background blob */}
      <div className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.03] blur-3xl" />

      <div className="my-container relative">
        {/* Section header — left-aligned */}
        <div className="mb-12 flex flex-col items-start md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Featured Services
          </span>
          <h2 className="font-roboto text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Expertise
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            Take a look at what we do best
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Primary card — tall, full-bleed image */}
          <div className="group relative min-h-[24rem] overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] md:min-h-[28rem] lg:row-span-3">
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              quality={100}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />

            {/* Decorative number */}
            <span className="pointer-events-none absolute right-4 top-4 select-none font-mono text-7xl font-black text-white/[0.08] md:text-8xl">
              01
            </span>

            {/* Content pinned to bottom */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.12] text-white backdrop-blur-sm ring-1 ring-white/[0.1]">
                {featured.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold tracking-tight text-white lg:text-2xl">
                {featured.title}
              </h3>
              <p className="max-w-sm text-[0.9rem] leading-relaxed text-white/70">
                {featured.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-all duration-300 group-hover:gap-2.5">
                <span>Learn more</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Secondary cards — horizontal layout */}
          {rest.map((service, i) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto sm:w-[40%]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Green accent strip */}
                <div className="hidden h-auto w-1 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:block" />

                {/* Content */}
                <div className="relative flex-1 p-6 md:p-8">
                  {/* Decorative number */}
                  <span className="pointer-events-none absolute right-4 top-0 -translate-y-1/2 select-none font-mono text-5xl font-black text-black/[0.03] sm:translate-y-0 sm:top-2 md:text-6xl">
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  {/* Icon bubble with hover fill effect */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/[0.08] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:ring-0">
                    {service.icon}
                  </div>

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

                  {/* Bottom accent bar — expands on hover */}
                  <div className="mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
