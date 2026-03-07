import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Paintbrush,
  Hammer,
  Wrench,
  Lightbulb,
  Trees,
  DoorOpen,
  Droplets,
  Flower2,
  Home,
  ArrowRight,
  Ruler,
  GripVertical,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services | JP Home Services",
  description:
    "Complete home remodeling solutions — painting, carpentry, plumbing, electrical, decks, fences, landscaping, and more.",
}

const categories = [
  {
    number: "01",
    title: "Interior & Exterior",
    image: "/img/painting.png",
    alt: "Interior and exterior painting services",
    services: [
      {
        icon: <Paintbrush className="h-4 w-4" strokeWidth={1.5} />,
        name: "Interior & Exterior Painting",
        description:
          "Professional painting services for walls, ceilings, trim, and exteriors",
      },
      {
        icon: <Hammer className="h-4 w-4" strokeWidth={1.5} />,
        name: "Drywall Repairs & Installation",
        description:
          "Patching, repair, and complete drywall installation",
      },
      {
        icon: <Hammer className="h-4 w-4" strokeWidth={1.5} />,
        name: "Carpentry",
        description: "Custom woodworking and general carpentry services",
      },
      {
        icon: <Ruler className="h-4 w-4" strokeWidth={1.5} />,
        name: "Trim Installation",
        description:
          "Crown molding, baseboards, and decorative trim work",
      },
      {
        icon: <DoorOpen className="h-4 w-4" strokeWidth={1.5} />,
        name: "Door Installation",
        description:
          "Interior and exterior door installation and replacement",
      },
      {
        icon: <GripVertical className="h-4 w-4" strokeWidth={1.5} />,
        name: "Handrail Installation",
        description:
          "Secure and stylish handrails for stairs and walkways",
      },
    ],
  },
  {
    number: "02",
    title: "Plumbing & Electrical",
    image: "/img/plumbing.jpg",
    alt: "Plumbing and electrical services",
    services: [
      {
        icon: <Wrench className="h-4 w-4" strokeWidth={1.5} />,
        name: "Plumbing Installation",
        description:
          "Faucet, sink, and fixture installation for kitchens and bathrooms",
      },
      {
        icon: <Droplets className="h-4 w-4" strokeWidth={1.5} />,
        name: "Plumbing Repairs",
        description:
          "Fixing leaks, clogs, and other common plumbing issues",
      },
      {
        icon: <Lightbulb className="h-4 w-4" strokeWidth={1.5} />,
        name: "Light Electrical Work",
        description:
          "Light fixture installation, switch and outlet replacement",
      },
      {
        icon: <Droplets className="h-4 w-4" strokeWidth={1.5} />,
        name: "Gutter Installation",
        description:
          "New gutter systems to protect your home from water damage",
      },
      {
        icon: <Droplets className="h-4 w-4" strokeWidth={1.5} />,
        name: "Gutter Cleaning",
        description:
          "Regular maintenance to keep gutters free of debris and functioning properly",
      },
    ],
  },
  {
    number: "03",
    title: "Outdoor Services",
    image: "/img/deck1.jpg",
    alt: "Outdoor deck and fence services",
    services: [
      {
        icon: <Trees className="h-4 w-4" strokeWidth={1.5} />,
        name: "Yard Maintenance",
        description: "Regular lawn mowing and general yard upkeep",
      },
      {
        icon: <Flower2 className="h-4 w-4" strokeWidth={1.5} />,
        name: "Landscaping",
        description:
          "Design and implementation of beautiful outdoor spaces",
      },
      {
        icon: <Trees className="h-4 w-4" strokeWidth={1.5} />,
        name: "Fence Installation",
        description:
          "Custom fence design and professional installation",
      },
      {
        icon: <Hammer className="h-4 w-4" strokeWidth={1.5} />,
        name: "Deck Installation & Repair",
        description:
          "Building new decks and restoring existing outdoor living spaces",
      },
      {
        icon: <Home className="h-4 w-4" strokeWidth={1.5} />,
        name: "House Cleaning",
        description:
          "Thorough cleaning services for homes of all sizes",
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] pt-24 md:pt-32">
      {/* Header */}
      <div className="my-container relative pb-4 md:pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Our Services
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h1 className="font-roboto mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Complete Home Remodeling Solutions
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            Professional services for all your home improvement needs
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="my-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {categories.map((category) => (
              <div
                key={category.number}
                className="overflow-hidden rounded-2xl bg-surface-subtle ring-1 ring-black/[0.04]"
              >
                {/* Category image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-mono text-xs font-semibold tracking-widest text-white/70">
                    {category.number}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground md:text-2xl">
                  {category.title}
                </h2>

                {/* Service items */}
                <div className="space-y-5">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex gap-3">
                      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-[0.938rem] font-semibold text-foreground">
                          {service.name}
                        </h3>
                        <p className="mt-0.5 text-[0.85rem] leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="my-container text-center">
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to transform your home?
          </h2>
          <div className="mt-6">
            <Link
              href="tel:+17032172672"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 rounded-lg px-7 text-[0.938rem] font-semibold shadow-sm shadow-primary/20"
              )}
            >
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
