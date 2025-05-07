"use client"

import { useState, useEffect } from "react"

export function AnimatedText() {
  const services = ["Web Development", "SEO Solutions", "Google Ads", "AI Solutions"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
        setIsAnimating(false)
      }, 500) // Wait for fade out animation to complete
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <div className="block min-h-[1.8em] mt-2">
      <span
        className={`text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-700 transition-opacity duration-500 font-bold ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {services[currentIndex]}
        <span className="text-black">.</span>
      </span>
    </div>
  )
}
