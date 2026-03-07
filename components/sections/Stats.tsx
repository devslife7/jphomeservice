const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "3", label: "States Served" },
]

export default function Stats() {
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-black/[0.06]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-roboto text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
