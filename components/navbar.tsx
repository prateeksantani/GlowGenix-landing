"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-lavender/80 backdrop-blur-md border-b border-lightPurple">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-deepPurple">
          GlowGenix
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-deepPurple/80 hover:text-deepPurple transition-colors">
            Features
          </Link>
          <Link href="#results" className="text-deepPurple/80 hover:text-deepPurple transition-colors">
            Results
          </Link>
          <Link href="#testimonials" className="text-deepPurple/80 hover:text-deepPurple transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-deepPurple/80 hover:text-deepPurple transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-deepPurple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-lavender border-b border-lightPurple">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-deepPurple/80 hover:text-deepPurple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#results"
              className="text-deepPurple/80 hover:text-deepPurple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </Link>
            <Link
              href="#testimonials"
              className="text-deepPurple/80 hover:text-deepPurple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-deepPurple/80 hover:text-deepPurple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
