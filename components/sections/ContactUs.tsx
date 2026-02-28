import { Mail, Phone, MapPin } from "lucide-react"
import { contactInfo } from "@/lib/data"

export default function ContactUs() {
  return (
    <section id="contact" className="my-container w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">Contact Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or ready to get started? Reach out to our team today.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                Our team is here to help you with any questions or concerns you may have about our services.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <Mail className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <Phone className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-sm text-muted-foreground">{contactInfo.phoneFull}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36093.48986257273!2d-77.15705092411386!3d38.872872950293186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693938889264!5m2!1sen!2sus"
            width="100%"
            height="500"
            className="mb-10"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
