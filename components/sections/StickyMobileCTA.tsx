'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-white border-t border-gray-200 p-4"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      style={{
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08), 0 0 1px rgba(185, 30, 140, 0.2) inset'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-white relative overflow-hidden"
          style={{
            boxShadow: '0 0 20px rgba(185, 30, 140, 0.4)'
          }}
        >
          <motion.span
            className="absolute inset-0 bg-white/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
          <span className="relative">Kontakt aufnehmen</span>
        </Button>
      </motion.div>
    </motion.div>
  )
}
