import Image from "next/image"
import Hero from "../components/Hero"
import KeyPoints from "@/components/KeyPoints"
import Projects from "@/components/Projects"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <KeyPoints />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  )
}
