"use client"

import { useState } from "react"
import { Mail, Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { contactInfo } from "@/lib/data"

interface MobileMenuProps {
  title?: string
  links: {
    href: string
    label: string
  }[]
  className?: string
}

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

export function MobileMenu({ title = "Menu", links, className }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn("relative z-50", className)}>
      <div className="container flex items-center justify-between h-16">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="w-[60%] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle>{title}</SheetTitle>
            </SheetHeader>
            <nav className="mx-auto">
              <div className="flex-col space-y-10">
                {info.map((data, idx) => {
                  return (
                    <div key={idx} className="flex items-center space-x-1">
                      <data.icon size={20} className="text-primary" aria-label={data.alt} />
                      <p className=" font-extralight">{data.content}</p>
                    </div>
                  )
                })}
                <a className={buttonVariants({ size: "lg" })} href={contactInfo.phoneHref}>
                  Call Us
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
