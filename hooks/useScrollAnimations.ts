import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Hook for parallax scroll effect
 * @param offset - Maximum offset in pixels (default: 50)
 * @returns y transform value based on scroll
 */
export function useParallax(offset: number = 50) {
  const { scrollY } = useScroll()
  return useTransform(scrollY, [0, 1000], [0, offset])
}

/**
 * Hook for scroll progress indicator
 * @returns scaleX value (0 to 1) representing scroll progress
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}

/**
 * Hook for detecting if element is in viewport
 * Useful for triggering animations on scroll into view
 */
export function useInViewport() {
  const ref = useRef(null)
  return ref
}

/**
 * Hook to calculate if element should animate based on scroll position
 * @param triggerOffset - Offset from viewport top (default: 50)
 * @returns boolean indicating if element is visible
 */
export function useScrollIntoView(triggerOffset: number = 50) {
  const { scrollY } = useScroll()
  const elementRef = useRef<HTMLDivElement>(null)

  return {
    ref: elementRef,
    scrollY,
  }
}
