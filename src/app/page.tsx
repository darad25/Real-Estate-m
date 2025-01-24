import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Features } from "@/components/features"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#1A1ADD] px-4 py-2 text-center text-sm text-white">
        <p>
          Discover your Dream Property with Property with Estatein <button className="underline">Learn More</button>
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navigation />

        {/* Hero Section */}
        <div className="relative mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 pb-8 lg:pb-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Discover Your
              <br />
              Dream Property
              <br />
              with <span className="text-gray-400">EXPOSE</span>
            </h1>
            <p className="max-w-lg text-gray-600">
              This exclusive residential complex offers 13 living units with units with carefully designed and optimally
              tailored floor plans
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-black text-white hover:bg-black/90">
                Browse Properties
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-gray-200">
                Learn More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reales.jpg-XMTleAkRo3h46uGTgZ2xLpWuYO19zV.jpeg"
                alt="Real estate agreement handshake with model houses"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button size="icon" variant="outline" className="rounded-full bg-white/90 backdrop-blur">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-white/90 backdrop-blur">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Features />
      </div>
    </div>
  )
}