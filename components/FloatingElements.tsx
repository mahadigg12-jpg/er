'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface FloatingElementsProps {
  children?: React.ReactNode
  className?: string
}

/**
 * Component that creates floating background elements
 * that respond subtly to scroll position
 */
export default function FloatingElements({ children, className = '' }: FloatingElementsProps) {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()

  // Create parallax effects for floating elements
  const float1Y = useTransform(scrollY, [0, 1000], [0, 100])
  const float2Y = useTransform(scrollY, [0, 1000], [0, -80])
  const float3Y = useTransform(scrollY, [0, 1000], [0, 120])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Floating blob 1 */}
      <motion.div
        className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl -top-20 -left-32"
        style={{ y: float1Y, z: 0, willChange: 'transform' }}
      />

      {/* Floating blob 2 */}
      <motion.div
        className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-40 -right-40"
        style={{ y: float2Y, z: 0, willChange: 'transform' }}
      />

      {/* Floating blob 3 */}
      <motion.div
        className="absolute w-64 h-64 bg-accent/10 rounded-full blur-3xl top-1/2 -right-20"
        style={{ y: float3Y, z: 0, willChange: 'transform' }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
