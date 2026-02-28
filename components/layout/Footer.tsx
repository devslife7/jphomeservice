import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Painting", href: "#" },
      { label: "Carpentry", href: "#" },
      { label: "Plumbing", href: "#" },
      { label: "Decks & Fences", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-black/[0.06] bg-surface-subtle">
      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="my-container relative py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/svgs/logojp.svg"
                width={140}
                alt="JP Home Services"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-muted-foreground">
              Remodeling Made Simple, Done Right. Serving Virginia, Washington
              DC, and Maryland with quality craftsmanship.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/[0.03] text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 md:flex-row">
          <p className="text-[0.813rem] text-muted-foreground">
            &copy; {new Date().getFullYear()} JP Home Services. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[0.813rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[0.813rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
