"use client"

import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  animation?: "fade-in" | "slide-in-from-bottom" | "slide-in-from-left" | "slide-in-from-right"
  delay?: number
  stagger?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  stagger = 0,
  style,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const animationClasses = {
    "fade-in": "opacity-0",
    "slide-in-from-bottom": "opacity-0 translate-y-8",
    "slide-in-from-left": "opacity-0 -translate-x-8",
    "slide-in-from-right": "opacity-0 translate-x-8",
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700",
        !isIntersecting && animationClasses[animation],
        isIntersecting && "opacity-100 translate-y-0 translate-x-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              style: {
                transition: "all 0.7s ease-in-out",
                transitionDelay: `${delay + i * stagger}ms`,
                ...(isIntersecting
                  ? { opacity: 1, transform: "translate(0, 0)" }
                  : { opacity: 0, transform: "translateY(8px)" }),
              },
            })
          : child
      )}
    </section>
  )
}