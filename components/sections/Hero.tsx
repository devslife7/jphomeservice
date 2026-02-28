import heroBackground from "@/public/img/hero-house.webp"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Phone, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="h-[30rem] lg:mx-auto lg:h-[56rem] overflow-hidden">
      <div className="relative h-full w-full bg-gradient-to-t from-black/70 via-black/40 to-black/10 lg:px-8">
        <Image
          alt="Hero Kitchen"
          src={heroBackground}
          fill
          sizes="100vw"
          priority
          className="-z-10 object-cover"
          placeholder="blur"
        />
        <div className="absolute my-container inset-0 mx-auto flex h-full w-full items-center justify-center text-center text-white lg:w-auto lg:justify-start lg:text-left">
          <div className="py-14 lg:py-20 lg:max-w-3xl">
            {/* Trust Badge */}
            <div className="animate-in fade-in slide-in-from-bottom-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-white/90">Trusted Local Remodelers</span>
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-6 delay-150 font-roboto text-5xl font-extrabold tracking-tight leading-tight md:text-6xl lg:text-8xl lg:leading-tight">
              Remodeling Made Simple, <br /> <span className="text-primary">Done Right</span>
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-6 delay-300 text-lg text-white/80 leading-relaxed mt-4 max-w-2xl md:text-xl lg:text-2xl">
              Whether it&#39;s your kitchen, bathroom, or whole home — we&#39;re here to make the process easy,
              honest, and built to last
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-8 delay-500 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-center">
              <Link
                href="tel:+17032172672"
                className={cn(buttonVariants({ size: "lg" }), "text-md gap-2")}
              >
                <Phone className="h-4 w-4" />
                Call Us Now
              </Link>
              <Link
                href="#featured"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-md gap-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:text-white"
                )}
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 md:h-24"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              className="fill-background"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
