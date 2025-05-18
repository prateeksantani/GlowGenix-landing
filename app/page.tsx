import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import BeforeAfter from "@/components/before-after"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-lavender">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BeforeAfter />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
