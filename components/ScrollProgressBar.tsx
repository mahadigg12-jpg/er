'use client'

import { motion, useScroll } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        background: 'linear-gradient(90deg, #1B9B9E 0%, #B91E8C 50%, #F4A000 100%)',
        scaleX: scrollYProgress,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  )
}
