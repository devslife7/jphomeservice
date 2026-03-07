import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jphomeservices.com"),
  title: "JP Home Services",
  description:
    "Professional home services including plumbing, painting, carpentry, and deck building. Quality craftsmanship you can trust.",
  keywords: [
    "home services",
    "plumbing",
    "painting",
    "carpentry",
    "deck building",
    "home repair",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "JP Home Services",
    description:
      "Professional home services including plumbing, painting, carpentry, and deck building.",
    siteName: "JP Home Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JP Home Services",
    description:
      "Professional home services including plumbing, painting, carpentry, and deck building.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
