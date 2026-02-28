"use client"

import { useState } from "react"
import { Mail, Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { contactInfo } from "@/lib/data"

interface MobileMenuProps {
  title?: string
  links: {
    href: string
    label: string
  }[]
  className?: string
}

export function MobileMenu({
  title = "Menu",
  links,
  className,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn("relative z-50", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-black/[0.04]"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[75%] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle className="text-left font-roboto text-lg tracking-tight">
              {title}
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 flex flex-col gap-8">
            {/* Navigation links */}
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[0.938rem] font-medium text-foreground transition-colors hover:bg-black/[0.03]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-black/[0.06]" />

            {/* Contact info */}
            <div className="flex flex-col gap-4 px-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.06] text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-light">{contactInfo.email}</span>
              </a>
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/[0.06] text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-light">{contactInfo.phone}</span>
              </a>
            </div>

            {/* CTA */}
            <div className="px-3">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full rounded-lg text-sm font-semibold shadow-sm shadow-primary/20"
                )}
                href={contactInfo.phoneHref}
              >
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                Call Us
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
