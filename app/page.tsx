import Image from "next/image"
import Hero from "../components/Hero"
import KeyPoints from "@/components/KeyPoints"
import Projects from "@/components/Projects"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <KeyPoints />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  )
}
