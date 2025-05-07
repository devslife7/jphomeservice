import {
  Paintbrush,
  Hammer,
  Wrench,
  Lightbulb,
  Scissors,
  Trees,
  Home,
  Droplets,
  Sparkles,
  DoorOpen,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export default function Projects() {
  return (
    <section id="services" className=" w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="my-container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Complete Home Remodeling Solutions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional services for all your home improvement needs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Interior & Exterior Services */}
          <Card className="overflow-hidden">
            <div className="bg-emerald-500 p-4">
              <h3 className="text-xl font-bold text-white">Interior & Exterior</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Paintbrush className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Interior & Exterior Painting</h4>
                    <p className="text-sm text-muted-foreground">
                      Professional painting services for walls, ceilings, trim, and exteriors
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Hammer className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Drywall Repairs & Installation</h4>
                    <p className="text-sm text-muted-foreground">Patching, repair, and complete drywall installation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Hammer className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Carpentry</h4>
                    <p className="text-sm text-muted-foreground">Custom woodworking and general carpentry services</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Hammer className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Trim Installation</h4>
                    <p className="text-sm text-muted-foreground">Crown molding, baseboards, and decorative trim work</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <DoorOpen className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Door Installation</h4>
                    <p className="text-sm text-muted-foreground">
                      Interior and exterior door installation and replacement
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Hammer className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Handrail Installation</h4>
                    <p className="text-sm text-muted-foreground">Secure and stylish handrails for stairs and walkways</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Plumbing & Electrical */}
          <Card className="overflow-hidden">
            <div className="bg-emerald-500 p-4">
              <h3 className="text-xl font-bold text-white">Plumbing & Electrical</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Wrench className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Plumbing Installation</h4>
                    <p className="text-sm text-muted-foreground">
                      Faucet, sink, and fixture installation for kitchens and bathrooms
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Wrench className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Plumbing Repairs</h4>
                    <p className="text-sm text-muted-foreground">Fixing leaks, clogs, and other common plumbing issues</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Lightbulb className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Light Electrical Work</h4>
                    <p className="text-sm text-muted-foreground">
                      Light fixture installation, switch and outlet replacement
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Droplets className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Gutter Installation</h4>
                    <p className="text-sm text-muted-foreground">
                      New gutter systems to protect your home from water damage
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Droplets className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Gutter Cleaning</h4>
                    <p className="text-sm text-muted-foreground">
                      Regular maintenance to keep gutters free of debris and functioning properly
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Outdoor Services */}
          <Card className="overflow-hidden">
            <div className="bg-emerald-500 p-4">
              <h3 className="text-xl font-bold text-white">Outdoor Services</h3>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Scissors className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Yard Maintenance</h4>
                    <p className="text-sm text-muted-foreground">Regular lawn mowing and general yard upkeep</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Trees className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Landscaping</h4>
                    <p className="text-sm text-muted-foreground">Design and implementation of beautiful outdoor spaces</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Hammer className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Fence Installation</h4>
                    <p className="text-sm text-muted-foreground">Custom fence design and professional installation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Hammer className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Deck Installation & Repair</h4>
                    <p className="text-sm text-muted-foreground">
                      Building new decks and restoring existing outdoor living spaces
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-emerald-100 p-1.5 mt-0.5">
                    <Sparkles className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">House Cleaning</h4>
                    <p className="text-sm text-muted-foreground">Thorough cleaning services for homes of all sizes</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your home?</h3>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Get a Free Estimate
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
