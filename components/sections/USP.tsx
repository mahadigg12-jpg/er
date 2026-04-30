'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Rocket, Award } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import FullScreenSection from '@/components/FullScreenSection'

export default function USP() {
  const { t } = useLanguage()

  const differentiators = [
    {
      icon: TrendingUp,
      title: t('usp.reason1'),
      description: t('usp.reason1.desc'),
    },
    {
      icon: Shield,
      title: t('usp.reason2'),
      description: t('usp.reason2.desc'),
    },
    {
      icon: Rocket,
      title: t('usp.reason3'),
      description: t('usp.reason3.desc'),
    },
    {
      icon: Award,
      title: t('usp.reason4'),
      description: t('usp.reason4.desc'),
    },
  ]

  return (
    <FullScreenSection id="benefits" bgColor="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-8 w-full">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('usp.title')} <span className="gradient-hch bg-clip-text text-transparent">HCH?</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our unique strengths and competitive advantages for partners</p>
        </motion.div>

        {/* Grid of differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                style={{ willChange: "transform, opacity" }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 blur-lg group-hover:opacity-30 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <motion.div
                  className="relative bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(185, 30, 140, 0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </FullScreenSection>
  )
}
