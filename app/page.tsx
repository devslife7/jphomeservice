import Hero from "@/components/sections/Hero"
import KeyPoints from "@/components/sections/KeyPoints"
import Projects from "@/components/sections/Projects"
import ContactUs from "@/components/sections/ContactUs"
import Featured from "@/components/sections/Featured"

export default function Home() {
  return (
    <div>
      <Hero />
      <KeyPoints />
      <Featured />
      <Projects />
      <ContactUs />
    </div>
  )
}
