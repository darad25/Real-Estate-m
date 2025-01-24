import { PocketIcon as Pool, Dumbbell, Flame } from "lucide-react"

const features = [
  {
    name: "Swimming pool",
    description: "Lorem ipsum dolor amet commodi earci all quis ris ad has dol media sunt se lad",
    icon: Pool,
  },
  {
    name: "Indoor Gym",
    description: "Lorem ipsum dolor amet commodi earci all quis ris ad has dol media sunt se lad",
    icon: Dumbbell,
  },
  {
    name: "FirePlace",
    description: "Lorem ipsum dolor amet commodi earci all quis ris ad has dol media sunt se lad",
    icon: Flame,
  },
]

export function Features() {
  return (
    <div className="my-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.name} className="flex items-center gap-4 rounded-2xl border bg-gray-50 p-4">
          <div className="rounded-xl bg-white p-2 shadow-sm">
            <feature.icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">{feature.name}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

