'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: string | number
  duration?: number
  delay?: number
  children?: (displayValue: string | number) => React.ReactNode
}

/**
 * Animated counter that counts up when entering viewport
 * Supports numbers, percentages, and custom text
 */
export default function AnimatedCounter({
  value,
  duration = 2.5,
  delay = 0,
  children,
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.8 })
  const [displayValue, setDisplayValue] = useState<string | number>(0)

  useEffect(() => {
    if (!isInView) return

    // Extract numeric value and suffix
    const stringValue = value.toString()
    const numericMatch = stringValue.match(/(\d+\.?\d*)/);
    const numeric = numericMatch ? parseFloat(numericMatch[1]) : 0
    const suffix = stringValue.replace(/[\d.]/g, '')

    // Animate counter
    const controls = {
      frame: 0,
    }

    const animation = {
      frame: numeric,
    }

    let frameValue = 0
    const animationDuration = (duration * 1000) / 60 // Convert to frames

    const startAnimation = () => {
      const start = Date.now()

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - start) / (duration * 1000), 1)

        // Easing function for smooth animation
        const eased = progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress

        frameValue = eased * numeric
        setDisplayValue(
          numeric === Math.floor(numeric)
            ? Math.floor(frameValue) + suffix
            : frameValue.toFixed(1) + suffix
        )

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setDisplayValue(value)
        }
      }

      requestAnimationFrame(animate)
    }

    const timeoutId = setTimeout(startAnimation, delay * 1000)
    return () => clearTimeout(timeoutId)
  }, [isInView, value, duration, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
    >
      {children ? children(displayValue) : displayValue}
    </motion.div>
  )
}
