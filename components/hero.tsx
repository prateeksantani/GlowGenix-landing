"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import WaitlistModal from "./waitlist-modal"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deepPurple">
              Reveal Your Skin's <span className="block">Natural Radiance</span>
            </h1>
            <p className="text-xl text-deepPurple/80">
              Introducing our revolutionary Advanced Rejuvenation Serum, formulated with powerful natural ingredients to
              transform your skin.
            </p>
            <div className="pt-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-deepPurple hover:bg-deepPurple/90 text-white px-8 py-6 rounded-full text-lg"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[3/4] relative max-w-md mx-auto">
              <Image
                src="/images/glowgenix-serum-clean-round.png"
                alt="GlowGenix Advanced Rejuvenation Serum"
                width={800}
                height={1067}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
