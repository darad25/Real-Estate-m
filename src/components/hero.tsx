import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { AppleIcon } from "@/components/ui/apple-icon"
import { PlayStoreIcon } from "@/components/ui/play-store-icon"

export function Hero() {
  return (
    <section className="py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4 sm:mb-8">
                <span className="block mb-2 sm:mb-4">
                  Step Into the <span className="animate-fadeInUp inline-block text-purple-800">Future</span>
                </span>
                <span className="block">of Fashion with AI</span>
              </h1>
              <div className="space-y-2 mt-2 sm:mt-4">
                <p className="max-w-[600px] text-black-500 md:text-xl dark:text-gray-400">
                  Transform the way you shop online with Steezely's AI-powered virtual try-on and smart shopping tools.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center px-6 py-6">
                <div className="flex items-center space-x-[5px]">
                  <AppleIcon />
                  <PlayStoreIcon />
                </div>
                <span className="ml-[5px]">Download App</span>
              </Button>
            </div>
          </div>
          <Image
            alt="Fashion Illustration"
            className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-square h-[350px] sm:h-auto"
            src="https://imgur.com/L7l691M.jpg"
            width={600}
            height={600}
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}

