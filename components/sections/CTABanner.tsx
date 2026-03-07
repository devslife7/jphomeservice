import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/[0.06]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/[0.04]" />
      <div className="pointer-events-none absolute right-1/3 top-0 h-32 w-32 rounded-full bg-white/[0.03]" />

      <div className="my-container relative text-center">
        <h2 className="font-roboto text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          Ready to Start Your Project?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[0.938rem] leading-relaxed text-white/80 md:text-base">
          Get a free estimate today. No obligation, no hidden fees — just honest
          pricing and quality work.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="tel:+17032172672"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 rounded-lg bg-white px-7 text-[0.938rem] font-semibold text-primary shadow-lg shadow-black/10 hover:bg-white/90"
            )}
          >
            <Phone className="h-4 w-4" />
            Call (703) 217-2672
          </Link>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 rounded-lg border-white/25 bg-white/[0.08] px-7 text-[0.938rem] font-semibold text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/[0.15] hover:text-white"
            )}
          >
            Send a Message
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
