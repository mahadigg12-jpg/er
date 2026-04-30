'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/LanguageContext'
import FullScreenSection from '@/components/FullScreenSection'

export default function Hero() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-20">
      {/* Animated background elements with parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <motion.div
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="flex flex-col gap-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.title')}
              {' '}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary rounded-lg blur-xl opacity-0"
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                />
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 relative"
                  style={{
                    boxShadow: '0 0 30px rgba(185, 30, 140, 0.4)'
                  }}
                >
                  {t('hero.cta')}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-secondary hover:bg-secondary/10 text-lg px-8"
                >
                  {t('hero.learn')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex gap-4 pt-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {['Remote-First', '100% Flexibel', 'Chancengleichheit'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative h-96 md:h-full min-h-96"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_webProfil_Logos3-zRlxLQ5s7IDtSoqE9JuWjaO5lA6q9U.png"
              alt="Contact Heroes"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-secondary rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
