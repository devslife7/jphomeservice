import Hero from "@/components/sections/Hero"
import ContactUs from "@/components/sections/ContactUs"
import Featured from "@/components/sections/Featured"
import Stats from "@/components/sections/Stats"
import HowItWorks from "@/components/sections/HowItWorks"
import Testimonials from "@/components/sections/Testimonials"
import BeforeAfter from "@/components/sections/BeforeAfter"
import CTABanner from "@/components/sections/CTABanner"
import AnimateOnScroll from "@/components/ui/AnimateOnScroll"

export default function Home() {
  return (
    <div>
      <Hero />
      <AnimateOnScroll>
        <HowItWorks />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Featured />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <BeforeAfter />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Stats />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTABanner />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ContactUs />
      </AnimateOnScroll>
    </div>
  )
}
