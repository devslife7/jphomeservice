import { ShieldCheck, Award, BadgeCheck, Handshake } from "lucide-react"

const badges = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Comprehensive liability insurance protecting your property and our team.",
  },
  {
    icon: Award,
    title: "Licensed Contractor",
    description: "Properly licensed to perform all residential home improvement services.",
  },
  {
    icon: BadgeCheck,
    title: "Background Checked",
    description: "Every team member is vetted and background checked for your safety.",
  },
  {
    icon: Handshake,
    title: "Satisfaction Guaranteed",
    description: "We're not done until you're completely happy with the result.",
  },
]

export default function TrustBadges() {
  return (
    <section className="relative bg-surface-subtle py-16 md:py-20">
      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="my-container relative">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div key={badge.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/[0.08]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {badge.title}
                  </h3>
                  <p className="mt-1 text-[0.813rem] leading-relaxed text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
