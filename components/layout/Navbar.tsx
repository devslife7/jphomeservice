import { buttonVariants } from "@/components/ui/button"
import { contactInfo, navigationLinks } from "@/lib/data"
import { Mail, Phone } from "lucide-react"
import { MobileMenu } from "./MobileMenu"

const info = [
  {
    alt: "email address",
    content: contactInfo.email,
    icon: Mail,
  },
  {
    alt: "phone number",
    content: contactInfo.phone,
    icon: Phone,
  },
]

export default function Navbar() {
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
                  <Icon size={20} className="text-primary" aria-label={data.alt} />
                  <p className="text-sm font-extralight">{data.content}</p>
                </div>
              )
            })}
            <a className={buttonVariants({ size: "lg" })} href={contactInfo.phoneHref}>
              Call Us
            </a>
          </div>
        </div>

        <MobileMenu className="md:hidden" links={navigationLinks} />
      </nav>
    </>
  )
}
