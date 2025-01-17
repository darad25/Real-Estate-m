"use client"

import { useRef, useEffect, useState } from 'react'
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      avatar: "https://imgur.com/XJmxRJ1.png", 
      text: "Steezely has completely changed how I shop online. The virtual try-on is so accurate!"
    },
    {
      name: "Mike R.",
      avatar: "https://imgur.com/TJEdxW4.png",
      text: "I love how easy it is to see how clothes will look on me before buying. Saves so much time!"
    },
    {
      name: "Emma L.",
      avatar: "https://imgur.com/65naOaa.png",
      text: "The size recommendations are spot-on. I haven't returned anything since using Steezely."
    },
    {
      name: "Alex T.",
      avatar: "https://imgur.com/SRBNJm9.png",
      text: "Steezely's AI is impressive and accurate. It makes styling so effortless, simple, fast and fun!"
    },
    {
      name: "Olivia P.",
      avatar: "https://imgur.com/Vl7x0YG.png",
      text: "I'm amazed at how accurate the virtual try-on is. It's saved me from so many bad purchases!"
    }
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = container.offsetWidth
      const currentScroll = container.scrollLeft
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, currentScroll + scrollAmount)
    
      container.scrollTo({ left: targetScroll, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      const handleScroll = () => {
        if (container.scrollLeft === 0) {
          container.scrollLeft = container.scrollWidth / 3
        } else if (container.scrollLeft >= (container.scrollWidth * 2) / 3) {
          container.scrollLeft = container.scrollWidth / 3
        }
      }
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-6 md:mb-12">
          What our customers are saying
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ 
                scrollBehavior: 'smooth'
              }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 snap-center">
                  <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <div className="text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                    <p className="text-black-600">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => scroll('left')} 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

