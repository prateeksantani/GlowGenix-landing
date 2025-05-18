"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BeforeAfter() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const results = [
    {
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      name: "Sarah, 34",
      duration: "After 4 weeks",
    },
    {
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      name: "Michelle, 42",
      duration: "After 6 weeks",
    },
    {
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      name: "Jessica, 28",
      duration: "After 3 weeks",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === results.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? results.length - 1 : prev - 1))
  }

  return (
    <section id="results" className="py-16 bg-lavender">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Real Results, Real <span className="text-deepPurple">Transformations</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-deepPurple" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-deepPurple" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {results.map((result, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <div className="relative">
                      <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={result.before || "/placeholder.svg"}
                          alt={`${result.name} before using GlowGenix`}
                          width={300}
                          height={400}
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-black/70 text-white px-4 py-2 w-full">Before</div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={result.after || "/placeholder.svg"}
                          alt={`${result.name} after using GlowGenix`}
                          width={300}
                          height={400}
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-deepPurple text-white px-4 py-2 w-full">After</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <h3 className="text-xl font-bold text-gray-900">{result.name}</h3>
                    <p className="text-deepPurple font-medium">{result.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full ${currentSlide === index ? "bg-deepPurple" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
