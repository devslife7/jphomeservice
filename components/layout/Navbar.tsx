import { buttonVariants } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

const info = [
  {
    alt: "email address",
    content: "email@email.com",
    width: 32,
    svgName: "email.svg",
  },
  {
    alt: "phone number",
    content: "123-456-7890",
    width: 30,
    svgName: "phone.svg",
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
            {info.map(data => {
              return (
                <div className="flex items-center space-x-1">
                  <img src={`svgs/${data.svgName}`} width={data.width} alt={data.alt} />
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
