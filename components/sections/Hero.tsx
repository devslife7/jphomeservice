import heroBackground from "@/public/img/hero-house.webp"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Phone, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[34rem] md:h-[42rem] lg:h-[54rem] overflow-hidden">
      {/* Background image */}
      <Image
        alt="Hero Kitchen"
        src={heroBackground}
        fill
        sizes="100vw"
        priority
        className="object-cover"
        placeholder="blur"
      />

      {/* Cinematic gradient overlay — warm dark from bottom, subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 my-container flex h-full items-end pb-20 md:pb-24 lg:items-center lg:pb-0">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="animate-in fade-in slide-in-from-bottom-4 mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm font-medium tracking-wide text-white/90">
              Trusted Local Remodelers
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-in fade-in slide-in-from-bottom-6 delay-150 font-roboto text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5.25rem]">
            Remodeling Made
            <br />
            Simple,{" "}
            <span className="text-primary">Done Right</span>
          </h1>

          {/* Subtext */}
          <p className="animate-in fade-in slide-in-from-bottom-6 delay-300 mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg lg:mt-6 lg:text-xl lg:leading-relaxed">
            Whether it&#39;s your kitchen, bathroom, or whole home — we&#39;re
            here to make the process easy, honest, and built to last
          </p>

          {/* CTA Buttons */}
          <div className="animate-in fade-in slide-in-from-bottom-8 delay-500 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:mt-10">
            <Link
              href="tel:+17032172672"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 rounded-lg px-7 text-[0.938rem] font-semibold shadow-lg shadow-primary/25"
              )}
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </Link>
            <Link
              href="#featured"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 rounded-lg border-white/20 bg-white/[0.06] px-7 text-[0.938rem] font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.12] hover:text-white"
              )}
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom curve divider */}
      <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-12 w-full md:h-20 lg:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="fill-[#f9faf8]"
          />
        </svg>
      </div>
    </section>
  )
}
