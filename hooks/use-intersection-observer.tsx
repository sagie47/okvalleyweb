import { useEffect, useRef, useState } from "react"

export function useIntersectionObserver(
  options: IntersectionObserverInit & { triggerOnce?: boolean }
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry)
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting && options.triggerOnce) {
        observer.disconnect()
      }
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return { ref, entry, isIntersecting }
}