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
    <section className="relative py-16 md:py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.03] blur-3xl" />

      <div className="my-container relative">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Transformations
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Before & After
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            See the difference quality craftsmanship makes
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]"
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
