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
            <p className="font-roboto leading-tight md:text-xl lg:text-2xl">
              Remodeling Made Simple, <br /> Done Right
            </p>
            <Link href="/" className={cn(buttonVariants(), "mt-4 font-light lg:text-lg")}>
              Explore Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
