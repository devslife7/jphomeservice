import { buttonVariants } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

const info = [
  {
    alt: "email address",
    content: "jphomeservice01@gmail.com",
    icon: Mail,
  },
  {
    alt: "phone number",
    content: "703-217-2672",
    icon: Phone,
  },
]

export default function Navbar() {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ]
  return (
    <>
      <nav className="my-container flex items-center justify-between">
        <a href="/">
          <img src="/svgs/logojp.svg" width={180} />
        </a>
        <div className="hidden md:block">
          <div className="flex space-x-8 items-center">
            {info.map((data, idx) => {
              const Icon = data.icon
              return (
                <div key={idx} className="flex items-center space-x-1">
                  <Icon size={20} aria-label={data.alt} />
                  <p className="text-sm font-extralight">{data.content}</p>
                </div>
              )
            })}
            <a className={buttonVariants({ size: "lg" })} href="tel:+1234567890">
              Call Us
            </a>
          </div>
        </div>

        <MobileMenu className="md:hidden" links={navigationLinks} />
      </nav>
    </>
  )
}
