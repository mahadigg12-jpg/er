'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: boolean
}

/**
 * Reusable component for section reveal animations
 * Fades in, scales up slightly, and moves up on scroll into view
 */
export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  staggerChildren = false,
}: SectionRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? 0.1 : 0,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={staggerChildren ? containerVariants : itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6, delay }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}
