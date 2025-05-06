"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
// import { CloseSVG, LogoSVG, MenuSVG } from "@/public/svgs"
import { cn } from "@/lib/utils"
import navlinks from "../../lib/data/navlinks.json"

type navLinksDataType = {
  label: string
  href: string
}
const navLinksData: navLinksDataType[] = navlinks

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileNavOpen = () => setMobileNavOpen(!mobileNavOpen)

  const renderNavLinks = () => {
    const isActive = (link: string) => {
      if (pathname === link) return "text-primary"
      else return pathname.includes(link) && link !== "/" ? "text-primary" : "hover:text-gray-400"
    }
    return navLinksData.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className={`px-0 font-extralight leading-7 transition-all ${isActive(link.href)}`}
      >
        {link.label}
      </Link>
    ))
  }

  const renderNavLinksMobile = () => {
    const mobileNavStyles = "border-spacing-4 border-[3px] border-primary text-primary"
    const isActive = (link: string) => {
      if (pathname === link) return mobileNavStyles
      else return pathname.includes(link) && link !== "/" && mobileNavStyles
    }
    return (
      <nav>
        <ul
          className={cn(
            "my-container fixed -top-[100%] left-0 z-10 h-full bg-custom-white py-10 text-center transition-all duration-300 ease-in lg:hidden",
            { "top-32 ": mobileNavOpen }
          )}
        >
          {navLinksData.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={cn("block py-7 text-xl", isActive(link.href))}
                onClick={toggleMobileNavOpen}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <>
      <header>
        <nav className="my-container flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold leading-none opacity-80">
            <img src="/svgs/logojp.svg" width={180} />
          </Link>
          <div className="flex">
            <div className="flex items-center bg-amber-200">
              <img src="/svgs/mail.svg" width={32} alt="phone" />
              <p className="text-sm font-extralight">email@email.com</p>
            </div>
            <div className="flex items-center bg-amber-200">
              <img src="/svgs/phone.svg" width={30} alt="phone" />
              <p className="text-sm font-extralight">123-456-7890</p>
            </div>
            <div className="flex items-center bg-amber-200">
              <p className="text-sm font-extralight">Call Now</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
