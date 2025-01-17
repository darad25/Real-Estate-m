import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

export function Features() {
  const features = [
    {
      title: "Photo Upload and Customization",
      description: "Upload your photo and let our AI create your personalized virtual model. Customize your avatar to match your exact preferences.",
      image: "https://imgur.com/UlxP0ui.png"
    },
    {
      title: "AI-Powered Virtual Try-On",
      description: "Experience clothes virtually with our advanced AI technology. See how clothes look and fit before making a purchase.",
      image: "https://imgur.com/3zKTiqA.png"
    },
    {
      title: "Link Integration for Clothing Items",
      description: "Simply paste the link of any compatible clothing item to instantly try it on your virtual model.",
      image: "https://imgur.com/rh1VqRK.png"
    },
    {
      title: "Realistic Fit and Size Guide",
      description: "Get accurate size recommendations based on your measurements and preferences.",
      image: "https://imgur.com/BCKpM5F.png"
    }
  ]

  return (
    <AnimatedSection id="features-section">
      <section className="container px-4 py-16 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="space-y-16 md:max-w-4xl md:mx-auto md:pl-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} id={`feature-${index}`}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                <div className="flex-1 aspect-w-350 aspect-h-275">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={index === 1 ? 400 : index === 2 ? 350 : 350}
                    height={index === 1 ? 300 : index === 2 ? 300 : index === 3 ? 300 : 275}
                    className={`rounded-lg shadow-md object-cover ${
                      index === 1 ? 'w-[400px] h-[300px]' : 
                      index === 2 ? 'w-[350px] h-[300px]' : 
                      index === 3 ? 'w-[350px] h-[300px]' : 
                      'w-50 h-50'
                    }`}
                    unoptimized
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}

