import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Patel",
      location: "New Delhi, India",
      quote:
        "I've tried countless serums, but GlowGenix is truly different. My skin has never looked more radiant and healthy. The texture is so smooth and it absorbs quickly without any greasy feeling.",
      stars: 5,
    },
    {
      name: "Sophia Joseph",
      location: "Los Angeles, CA",
      quote:
        "After just two weeks of using the Radiance Renewal Serum, I noticed a significant reduction in my dark spots and overall improvement in my skin tone. It's now a permanent part of my skincare routine!",
      stars: 5,
    },
    {
      name: "Kavya Singh",
      location: "Mumbai, India",
      quote:
        "As someone with sensitive skin, I'm always cautious about trying new products. GlowGenix not only didn't irritate my skin, but it actually helped calm redness and improve my skin's barrier. Truly impressive!",
      stars: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-deepPurple mb-12">
          What Our Customers <span className="text-deepPurple">Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-lightPurple rounded-lg p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.stars ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
