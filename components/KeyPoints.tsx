import { UserCheck, UsersRound, Wrench } from "lucide-react"

const points = [
  {
    icon: <UsersRound className="mx-auto" size={32} />,
    title: "Expertise Team",
    description: "Skilled professionals with years of industry experience.",
  },
  {
    icon: <Wrench className="mx-auto" size={32} />,
    title: "Quality & Craftmanship",
    description: "Focus on durable materials and attention to detail.",
  },
  {
    icon: <UserCheck className="mx-auto" size={32} />,
    title: "Customer Satisfaction",
    description: "Strong client reviews and repeat business.",
  },
]

export default function KeyPoints() {
  return (
    <div className="py-0 my-container lg:py-4 bg-gray-50 relative rounded-md top-[-100]">
      <div className="flex flex-wrap justify-center gap-8 py-10 md:gap-0 lg:justify-evenly">
        {points.map(point => {
          return (
            <div className="max-w-sm p-2 text-center">
              <div className="text-primary ">{point.icon}</div>
              <h1 className="mt-2 mb-2 text-xl font-medium md:text-xl">{point.title}</h1>
              <p className="opacity-60 md:text-lg">{point.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
