import {
  Paintbrush,
  Hammer,
  Wrench,
  Lightbulb,
  Scissors,
  Trees,
  Droplets,
  Sparkles,
  DoorOpen,
  ArrowRight,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  {
    number: "01",
    title: "Interior & Exterior",
    items: [
      {
        icon: Paintbrush,
        name: "Interior & Exterior Painting",
        desc: "Professional painting services for walls, ceilings, trim, and exteriors",
      },
      {
        icon: Hammer,
        name: "Drywall Repairs & Installation",
        desc: "Patching, repair, and complete drywall installation",
      },
      {
        icon: Hammer,
        name: "Carpentry",
        desc: "Custom woodworking and general carpentry services",
      },
      {
        icon: Hammer,
        name: "Trim Installation",
        desc: "Crown molding, baseboards, and decorative trim work",
      },
      {
        icon: DoorOpen,
        name: "Door Installation",
        desc: "Interior and exterior door installation and replacement",
      },
      {
        icon: Hammer,
        name: "Handrail Installation",
        desc: "Secure and stylish handrails for stairs and walkways",
      },
    ],
  },
  {
    number: "02",
    title: "Plumbing & Electrical",
    items: [
      {
        icon: Wrench,
        name: "Plumbing Installation",
        desc: "Faucet, sink, and fixture installation for kitchens and bathrooms",
      },
      {
        icon: Wrench,
        name: "Plumbing Repairs",
        desc: "Fixing leaks, clogs, and other common plumbing issues",
      },
      {
        icon: Lightbulb,
        name: "Light Electrical Work",
        desc: "Light fixture installation, switch and outlet replacement",
      },
      {
        icon: Droplets,
        name: "Gutter Installation",
        desc: "New gutter systems to protect your home from water damage",
      },
      {
        icon: Droplets,
        name: "Gutter Cleaning",
        desc: "Regular maintenance to keep gutters free of debris and functioning properly",
      },
    ],
  },
  {
    number: "03",
    title: "Outdoor Services",
    items: [
      {
        icon: Scissors,
        name: "Yard Maintenance",
        desc: "Regular lawn mowing and general yard upkeep",
      },
      {
        icon: Trees,
        name: "Landscaping",
        desc: "Design and implementation of beautiful outdoor spaces",
      },
      {
        icon: Hammer,
        name: "Fence Installation",
        desc: "Custom fence design and professional installation",
      },
      {
        icon: Hammer,
        name: "Deck Installation & Repair",
        desc: "Building new decks and restoring existing outdoor living spaces",
      },
      {
        icon: Sparkles,
        name: "House Cleaning",
        desc: "Thorough cleaning services for homes of all sizes",
      },
    ],
  },
]

export default function Projects() {
  return (
    <section id="services" className="relative bg-surface-subtle py-16 md:py-24 lg:py-32">
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
            Our Services
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Complete Home Remodeling Solutions
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            Professional services for all your home improvement needs
          </p>
        </div>

        {/* Service categories */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-black/[0.06] md:rounded-2xl md:bg-white md:ring-1 md:ring-black/[0.04]">
          {categories.map((category) => (
            <div key={category.number} className="group relative">
              <div className="p-6 md:p-8">
                {/* Category header */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold tracking-widest text-primary/50">
                    {category.number}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/10 to-transparent" />
                </div>
                <h3 className="mb-6 text-lg font-bold tracking-tight text-foreground lg:text-xl">
                  {category.title}
                </h3>

                {/* Service items */}
                <ul className="space-y-4">
                  {category.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.name} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-primary">
                          <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {item.name}
                          </h4>
                          <p className="mt-0.5 text-[0.813rem] leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 text-center md:mt-16">
          <p className="font-roboto text-xl font-bold tracking-tight text-foreground md:text-2xl">
            Ready to transform your home?
          </p>
          <Link
            href="tel:+17032172672"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-2 gap-2 rounded-lg px-8 text-[0.938rem] font-semibold shadow-sm shadow-primary/20"
            )}
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
