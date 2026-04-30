'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

// Fade in animation
export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className 
}: { 
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  )
}

// Fade in with upward slide
export function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className 
}: { 
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}

// Scale in animation
export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className 
}: { 
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for sequential animations
export function StaggerContainer({ 
  children,
  staggerDelay = 0.1,
  className
}: { 
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } }
      }}
    >
      {children}
    </motion.div>
  )
}

// Individual item for stagger container
export function StaggerItem({ 
  children,
  className
}: { 
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      {children}
    </motion.div>
  )
}

// Hover lift effect
export function HoverLift({ 
  children,
  className,
  scale = 1.02,
  duration = 0.3
}: { 
  children: ReactNode
  className?: string
  scale?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, scale }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  )
}

// Glow wrapper
export function GlowEffect({ 
  children,
  className,
  glow = 'primary'
}: { 
  children: ReactNode
  className?: string
  glow?: 'primary' | 'secondary' | 'accent'
}) {
  const glowColors = {
    primary: 'rgba(185, 30, 140, 0.3)',
    secondary: 'rgba(27, 155, 158, 0.3)',
    accent: 'rgba(244, 160, 0, 0.3)',
  }

  return (
    <motion.div
      className={className}
      initial={{ boxShadow: `0 0 20px ${glowColors[glow]}` }}
      whileHover={{ boxShadow: `0 0 40px ${glowColors[glow]}` }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Counter animation for numbers
export function AnimatedCounter({ 
  value,
  duration = 2,
  delay = 0
}: { 
  value: number
  duration?: number
  delay?: number
}) {
  const Counter = motion.span
  return (
    <Counter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
    </Counter>
  )
}
