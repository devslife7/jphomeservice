import Hero from "@/components/sections/Hero"
import ContactUs from "@/components/sections/ContactUs"
import Featured from "@/components/sections/Featured"
import Stats from "@/components/sections/Stats"
import HowItWorks from "@/components/sections/HowItWorks"
import Testimonials from "@/components/sections/Testimonials"
import BeforeAfter from "@/components/sections/BeforeAfter"
import CTABanner from "@/components/sections/CTABanner"

export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Featured />
      <BeforeAfter />
      <Stats />
      <Testimonials />
      <CTABanner />
      <ContactUs />
    </div>
  )
}
