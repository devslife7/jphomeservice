import Hero from "@/components/sections/Hero"
import KeyPoints from "@/components/sections/KeyPoints"
import Projects from "@/components/sections/Projects"
import ContactUs from "@/components/sections/ContactUs"
import Featured from "@/components/sections/Featured"
import AboutUs from "@/components/sections/AboutUs"
import Stats from "@/components/sections/Stats"
import HowItWorks from "@/components/sections/HowItWorks"
import Testimonials from "@/components/sections/Testimonials"
import BeforeAfter from "@/components/sections/BeforeAfter"
import TrustBadges from "@/components/sections/TrustBadges"
import FAQ from "@/components/sections/FAQ"
import ServiceAreas from "@/components/sections/ServiceAreas"
import CTABanner from "@/components/sections/CTABanner"

export default function Home() {
  return (
    <div>
      <Hero />
      <KeyPoints />
      <Featured />
      <Stats />
      <AboutUs />
      <HowItWorks />
      <Projects />
      <BeforeAfter />
      <Testimonials />
      <TrustBadges />
      <CTABanner />
      <FAQ />
      <ServiceAreas />
      <ContactUs />
    </div>
  )
}
