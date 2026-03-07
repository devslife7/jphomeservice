import { MapPin } from "lucide-react"

const areas = [
  {
    state: "Virginia",
    cities: [
      "Arlington",
      "Fairfax",
      "Alexandria",
      "Falls Church",
      "Reston",
      "Herndon",
      "McLean",
      "Tysons",
    ],
  },
  {
    state: "Washington DC",
    cities: [
      "Northwest DC",
      "Northeast DC",
      "Southwest DC",
      "Southeast DC",
      "Georgetown",
      "Capitol Hill",
      "Dupont Circle",
      "Adams Morgan",
    ],
  },
  {
    state: "Maryland",
    cities: [
      "Bethesda",
      "Silver Spring",
      "Rockville",
      "Chevy Chase",
      "College Park",
      "Bowie",
      "Laurel",
      "Gaithersburg",
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="my-container relative">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Service Areas
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Where We Work
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            Proudly serving the DMV area with professional home services
          </p>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-black/[0.06] md:rounded-2xl md:bg-white md:ring-1 md:ring-black/[0.04]">
          {areas.map((area) => (
            <div key={area.state} className="p-6 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/[0.08]">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  {area.state}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {area.cities.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-2 text-[0.9rem] text-muted-foreground"
                  >
                    <span className="h-1 w-1 flex-shrink-0 rounded-full bg-primary/40" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map embed */}
        <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-black/[0.06]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36093.48986257273!2d-77.15705092411386!3d38.872872950293186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693938889264!5m2!1sen!2sus"
            width="100%"
            height="300"
            className="block"
            loading="lazy"
            title="Service area map"
          />
        </div>
      </div>
    </section>
  )
}
