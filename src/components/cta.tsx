import { Button } from "@/components/ui/button"
import { PlayStoreIcon } from "@/components/ui/play-store-icon"
import { AppleIcon } from "@/components/ui/apple-icon";

export function CTA() {
  return (
    <section className="w-full py-20 md:py-24 lg:pt-8 lg:pb-16 mb-16 px-4 sm:px-6 md:px-8">
      <div className="container px-4 md:px-6">
        <div className="bg-[#f3f2fe] rounded-lg p-12 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-start md:items-center space-y-6 md:space-y-4 text-left md:text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight leading-tight md:leading-normal">Ready to See Yourself in Style?</h2>
              <p className="mx-auto max-w-[600px] text-black-500 md:text-xl leading-relaxed md:leading-normal">
                Join thousands of fashion-forward shoppers who've transformed their online shopping experience with Steezely.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center px-8 py-6">
                <div className="flex items-center space-x-[5px]">
                  <AppleIcon />
                  <PlayStoreIcon />
                </div>
                <span className="ml-[5px]">Download App</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

