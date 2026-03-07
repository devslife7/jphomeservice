import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { contactInfo, navigationLinks } from "@/lib/data"
import { Mail, Phone } from "lucide-react"
import { MobileMenu } from "./MobileMenu"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="relative z-50 border-b border-black/[0.04] bg-white/80 backdrop-blur-md">
      <div className="my-container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="/svgs/logojp.svg" width={160} alt="JP Home Services" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="h-5 w-px bg-black/[0.08]" />

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.06] text-primary transition-colors group-hover:bg-primary/10">
                <Mail className="h-3.5 w-3.5" />
              </div>
              <span className="font-light">{contactInfo.email}</span>
            </a>

            <div className="h-5 w-px bg-black/[0.08]" />

            <a
              href={contactInfo.phoneHref}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/[0.06] text-primary transition-colors group-hover:bg-primary/10">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <span className="font-light">{contactInfo.phone}</span>
            </a>
          </div>

          <a
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-lg px-6 text-sm font-semibold shadow-sm shadow-primary/20"
            )}
            href={contactInfo.phoneHref}
          >
            <Phone className="mr-1.5 h-3.5 w-3.5" />
            Call Us
          </a>
        </div>

        <MobileMenu className="md:hidden" links={navigationLinks} />
      </div>
    </nav>
  )
}
