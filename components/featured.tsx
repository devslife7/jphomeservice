import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Featured() {
  return (
    <section id="featured" className="my-container w-full pb-12 md:pb-24 lg:pb-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Featured Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take a look at what we do best
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Painting */}
          <div className="group relative overflow-hidden rounded-lg border">
            <div className="aspect-video overflow-hidden">
              <Image
                src="/img/painting.avif"
                alt="Interior and exterior painting"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Painting Services</h3>
              <p className="text-muted-foreground mb-4">
                Professional interior and exterior painting to refresh and protect your home.
              </p>
              <div className="flex items-center text-sm text-emerald-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Carpentry */}
          <div className="group relative overflow-hidden rounded-lg border">
            <div className="aspect-video overflow-hidden">
              <Image
                src="/img/carpentry.avif"
                alt="Carpentry and trim work"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Carpentry & Trim</h3>
              <p className="text-muted-foreground mb-4">
                Custom woodworking, crown molding, baseboards, and decorative trim installation.
              </p>
              <div className="flex items-center text-sm text-emerald-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Plumbing */}
          <div className="group relative overflow-hidden rounded-lg border">
            <div className="aspect-video overflow-hidden">
              <Image
                src="/img/plubming.jpg"
                alt="Plumbing services"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Plumbing Services</h3>
              <p className="text-muted-foreground mb-4">
                Installation and repair of faucets, sinks, and other plumbing fixtures.
              </p>
              <div className="flex items-center text-sm text-emerald-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Decks & Fences */}
          <div className="group relative overflow-hidden rounded-lg border">
            <div className="aspect-video overflow-hidden">
              <Image
                src="/img/deck1.jpg"
                alt="Deck and fence installation"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Decks & Fences</h3>
              <p className="text-muted-foreground mb-4">
                Custom design and installation of outdoor living spaces and property boundaries.
              </p>
              <div className="flex items-center text-sm text-emerald-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Landscaping */}
          {/* <div className="group relative overflow-hidden rounded-lg border">
            <div className="aspect-video overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Landscaping services"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Landscaping</h3>
              <p className="text-muted-foreground mb-4">
                Beautiful yard designs, lawn maintenance, and outdoor space transformation.
              </p>
              <div className="flex items-center text-sm text-emerald-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div> */}

          {/* Drywall */}
          {/* <div className="group relative overflow-hidden rounded-lg border">
            <div className="aspect-video overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Drywall installation and repair"
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Drywall Services</h3>
              <p className="text-muted-foreground mb-4">
                Professional installation, repair, and finishing of drywall for any room.
              </p>
              <div className="flex items-center text-sm text-emerald-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
