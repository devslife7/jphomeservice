import Image from "next/image"

const projects = [
  {
    title: "Kitchen Renovation",
    before: "/img/kitchen_before.png",
    after: "/img/kitchen_after.png",
    description: "Complete kitchen transformation with modern finishes",
  },
  {
    title: "Deck Restoration",
    before: "/img/deck_before.png",
    after: "/img/deck_after.png",
    description: "Old weathered deck restored to brand new condition",
  },
]

export default function BeforeAfter() {
  return (
    <section className="relative bg-primary pt-24 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40">
      {/* Curved top transition */}
      <div className="absolute left-0 right-0 -top-px overflow-hidden leading-[0]">
        <svg className="relative block w-full" style={{ height: "80px" }} viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,0 L1200,0 L1200,0 Q600,80 0,0 Z" className="fill-background" />
        </svg>
      </div>
      {/* Curved bottom transition */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden leading-[0]">
        <svg className="relative block w-full" style={{ height: "80px" }} viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,80 Q600,0 1200,80 L1200,80 L0,80 Z" className="fill-surface-subtle" />
        </svg>
      </div>
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/[0.06]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute right-1/3 top-0 h-32 w-32 rounded-full bg-white/[0.03]" />
      <div className="pointer-events-none absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-white/[0.05]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 rounded-full bg-white/[0.03]" />

      <div className="my-container relative">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            <span className="h-px w-6 bg-white/40" />
            Transformations
            <span className="h-px w-6 bg-white/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Before & After
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-white/80 md:text-base">
            See the difference quality craftsmanship makes
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-none bg-white ring-1 ring-black/[0.04]"
            >
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.before}
                      alt={`${project.title} — before`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.after}
                      alt={`${project.title} — after`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute bottom-3 right-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    After
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-[0.9rem] text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
