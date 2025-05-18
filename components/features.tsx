import { Sparkles, Droplets, Shield, Clock } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="h-10 w-10 text-deepPurple" />,
      title: "Advanced Rejuvenation",
      description: "Our unique formula revitalizes skin cells and promotes natural radiance.",
    },
    {
      icon: <Droplets className="h-10 w-10 text-deepPurple" />,
      title: "Results in 14 Days",
      description: "See visible improvements in skin texture and tone in just two weeks.",
    },
    {
      icon: <Shield className="h-10 w-10 text-deepPurple" />,
      title: "Dermatologist Tested",
      description: "Clinically proven to be safe and effective for all skin types.",
    },
    {
      icon: <Clock className="h-10 w-10 text-deepPurple" />,
      title: "Natural Ingredients",
      description: "Formulated with premium botanical extracts and skin-loving nutrients.",
    },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-deepPurple mb-12">
          The Science of <span className="text-deepPurple">Radiance</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-lightPurple rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-deepPurple mb-2">{feature.title}</h3>
              <p className="text-deepPurple/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
