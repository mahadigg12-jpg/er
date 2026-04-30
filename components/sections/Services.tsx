'use client'

import { motion } from 'framer-motion'
import { Phone, Headphones, FileText, Sparkles } from 'lucide-react'
import FloatingElements from '@/components/FloatingElements'
import { useLanguage } from '@/context/LanguageContext'
import FullScreenSection from '@/components/FullScreenSection'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      id: 1,
      title: t('services.inbound'),
      description: t('services.inbound.desc'),
      icon: Phone,
      color: 'text-secondary',
    },
    {
      id: 2,
      title: t('services.outbound'),
      description: t('services.outbound.desc'),
      icon: Headphones,
      color: 'text-primary',
    },
    {
      id: 3,
      title: t('services.technical'),
      description: t('services.technical.desc'),
      icon: FileText,
      color: 'text-accent',
    },
    {
      id: 4,
      title: t('services.specialized'),
      description: t('services.specialized.desc'),
      icon: Sparkles,
      color: 'text-primary',
    },
  ]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Directional animation based on card position
const getDirectionalVariants = (index: number) => ({
  hidden: { 
    opacity: 0, 
    x: index % 2 === 0 ? -40 : 40,
    y: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      delay: index * 0.1,
    },
  },
})

  return (
    <FullScreenSection id="services" bgColor="bg-white" className="overflow-hidden">
      <FloatingElements>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('services.title')}{' '}
              <span className="gradient-hch bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium solutions for all your customer communication needs
            </p>
          </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          style={{ willChange: "transform, opacity" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const glowColor = service.color === 'text-primary' ? 'rgba(185, 30, 140, 0.3)' : 
                            service.color === 'text-secondary' ? 'rgba(27, 155, 158, 0.3)' :
                            'rgba(244, 160, 0, 0.3)'
            return (
              <motion.div
                key={service.id}
                variants={getDirectionalVariants(index)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: `0 0 40px ${glowColor}, 0 20px 40px ${glowColor}`
                  }}
                />
                <div
                  className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 group-hover:border-primary/50 transition-all duration-300"
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <motion.div
                    className={`${service.color} mb-6 text-5xl`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
          </motion.div>
        </div>
      </FloatingElements>
    </FullScreenSection>
  )
}
