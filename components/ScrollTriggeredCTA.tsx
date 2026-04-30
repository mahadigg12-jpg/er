'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface ScrollTriggeredCTAProps {
  children: React.ReactNode
  className?: string
}

/**
 * Component that emphasizes CTAs when they enter the viewport
 * Adds scale pulse and glow effect
 */
export default function ScrollTriggeredCTA({
  children,
  className = '',
}: ScrollTriggeredCTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    if (isInView) {
      setHasBeenInView(true)
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      }}
    >
      <motion.div
        animate={isInView && hasBeenInView ? 'pulse' : 'normal'}
        variants={{
          normal: {
            boxShadow: '0 0 20px rgba(185, 30, 140, 0.3)',
          },
          pulse: {
            boxShadow: [
              '0 0 20px rgba(185, 30, 140, 0.3)',
              '0 0 40px rgba(185, 30, 140, 0.5)',
              '0 0 20px rgba(185, 30, 140, 0.3)',
            ],
          },
        }}
        transition={{
          duration: 2,
          repeat: isInView ? Infinity : 0,
          ease: 'easeInOut',
        }}
        className="rounded-lg"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
