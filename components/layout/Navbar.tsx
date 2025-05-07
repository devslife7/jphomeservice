"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

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
  return (
    <>
      <header>
        <nav className="my-container flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold leading-none opacity-80">
            <img src="/svgs/logojp.svg" width={180} />
          </Link>
          <div className="flex space-x-4">
            {info.map(data => {
              return (
                <div className="flex items-center space-x-1">
                  <img src={`svgs/${data.svgName}`} width={data.width} alt={data.alt} />
                  <p className="text-sm font-extralight">{data.content}</p>
                </div>
              )
            })}
            {/* <div className="flex items-center">
              <p className="text-sm font-extralight">Call Now</p>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  )
}
