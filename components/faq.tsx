"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Faq() {
  const faqs = [
    {
      question: "What makes GlowGenix Radiance Renewal Serum different?",
      answer:
        "Our serum combines cutting-edge skincare technology with natural ingredients. The proprietary formula includes a unique blend of vitamin C, niacinamide, hyaluronic acid, peptides, and botanical extracts that work synergistically to address multiple skin concerns simultaneously.",
    },
    {
      question: "How often should I use the serum?",
      answer:
        "For optimal results, we recommend applying the GlowGenix Radiance Renewal Serum twice daily, once in the morning and once in the evening, after cleansing and before moisturizing.",
    },
    {
      question: "Is the serum suitable for all skin types?",
      answer:
        "Yes! Our serum is formulated to be gentle yet effective for all skin types, including sensitive skin. The non-comedogenic formula won't clog pores, making it suitable for oily and acne-prone skin as well.",
    },
    {
      question: "How long until I see results?",
      answer:
        "Many users report seeing initial improvements in skin texture and hydration within the first week. More significant results, such as reduction in dark spots and fine lines, typically become visible after 4-6 weeks of consistent use.",
    },
    {
      question: "Are GlowGenix products cruelty-free and vegan?",
      answer:
        "We're proud to be 100% cruelty-free and vegan. We never test on animals, and our products don't contain any animal-derived ingredients.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-lavender">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Frequently Asked <span className="text-deepPurple">Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-deepPurple flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-deepPurple flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="p-4 bg-white rounded-b-lg border-t border-gray-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
