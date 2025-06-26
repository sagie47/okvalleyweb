"use client"

import React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  cta?: string
  onClick?: () => void
}

export function FeatureCard({ icon, title, description, cta, onClick }: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="mb-6 bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center text-black">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {cta && (
        <button
          onClick={onClick}
          className="text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors"
        >
          {cta}
        </button>
      )}
    </div>
  )
}
