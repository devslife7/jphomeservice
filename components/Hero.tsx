import heroBackground from "@/public/img/hero-house.webp"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <div className="h-[30rem] lg:mx-auto lg:h-[54rem]">
      <div className="relative h-full w-full bg-black/30 lg:px-8">
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
          <div className="py-14 lg:py-20">
            <p className="font-roboto text-4xl font-semibold leading-tight md:text-5xl lg:text-7xl lg:leading-tight">
              Remodeling Made Simple, <br /> Done Right
            </p>
            <p className="leading-tight md:text-xl lg:text-xl">
              Whether it&#39;s your kitchen, bathroom, or whole home <br /> we&#39;re here to make the process easy,
              honest, and built to last
            </p>
            <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-4 text-md")}>
              Call Us Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
