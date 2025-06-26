"use client"

import Image from "next/image"
import React from "react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  image: string
  url?: string
}

export function TestimonialCard({ quote, author, position, image, url }: TestimonialCardProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank")
    }
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-3xl p-8 transition-shadow duration-300 hover:shadow-xl cursor-pointer"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6 opacity-20"
      >
        <path d="M0 20L10 0H18L12 20H18V40H0V20Z" fill="black" />
        <path d="M22 20L32 0H40L34 20H40V40H22V20Z" fill="black" />
      </svg>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <Image
          src={image || "/placeholder.svg"}
          width={48}
          height={48}
          alt={author}
          className="rounded-full mr-4 object-cover h-12 w-12"
        />
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  )
}
