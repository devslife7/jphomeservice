"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

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
                      <img src={`svgs/${data.svgName}`} width={data.width} alt={data.alt} />
                      <p className=" font-extralight">{data.content}</p>
                    </div>
                  )
                })}
                <a className={buttonVariants({ size: "lg" })} href="tel:+1234567890">
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
