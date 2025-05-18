"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Join Our Waitlist</h2>
          <p className="text-gray-600">Be the first to know when our Radiance Renewal Serum launches.</p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-bold text-deepPurple mb-2">Thank You!</h3>
            <p className="text-gray-700">
              You've been added to our waitlist. We'll notify you when our product launches.
            </p>
            <Button onClick={onClose} className="mt-6 bg-deepPurple hover:bg-deepPurple/90 text-white">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-deepPurple hover:bg-deepPurple/90 text-white py-2">
              Join Waitlist
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
