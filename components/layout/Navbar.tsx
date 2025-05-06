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
      <div className="h-32"></div>
      <header className="fixed top-0 z-20 w-full bg-custom-white transition-all duration-300 ease-in-out">
        <nav className="my-container flex h-32 items-center justify-between">
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <Link href="/" className="text-xl font-semibold leading-none opacity-80">
              <div style={{ color: "#e63946" }}>
                <img className="w-[52px]" src="/file.svg" />
              </div>
            </Link>
            <div className="flex bg-amber-200">
              <img src="/svgs/edit.svg" width={32} height={32} alt="phone" />
              <p className="text-sm font-extralight">123-456-7890</p>
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-7">{renderNavLinks()}</div>
        </nav>
      </header>
      {renderNavLinksMobile()}
    </>
  )
}
