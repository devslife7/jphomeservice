import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { contactInfo } from "@/lib/data"
import ContactForm from "@/components/sections/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | JP Home Service",
  description:
    "Get in touch with JP Home Service. Send us a message or give us a call — we're here to help with all your home service needs.",
}

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phoneFull,
    href: contactInfo.phoneHref,
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: contactInfo.address,
    href: null,
  },
]

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="my-container">
        {/* Section header */}
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/40" />
            Contact Us
            <span className="h-px w-6 bg-primary/40" />
          </span>
          <h2 className="font-roboto text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Send Us a Message
          </h2>
          <p className="mt-3 max-w-lg text-[0.938rem] leading-relaxed text-muted-foreground md:text-base">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-5 md:gap-14">
          {/* Contact form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* Contact info + map */}
          <div className="md:col-span-2">
            <div className="space-y-3">
              <h3 className="text-lg font-bold tracking-tight text-foreground">
                Contact Information
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                Our team is here to help you with any questions or concerns you
                may have about our services.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon
                const Wrapper = item.href ? "a" : "div"
                const wrapperProps = item.href ? { href: item.href } : {}

                return (
                  <Wrapper
                    key={item.label}
                    {...wrapperProps}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/[0.06] text-primary ring-1 ring-primary/[0.08] transition-colors group-hover:bg-primary/10">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-[0.938rem] font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-black/[0.06]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36093.48986257273!2d-77.15705092411386!3d38.872872950293186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693938889264!5m2!1sen!2sus"
                width="100%"
                height="250"
                className="block"
                loading="lazy"
                title="Service area map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
