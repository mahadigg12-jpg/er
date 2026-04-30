'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Users, Zap, Award } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import FullScreenSection from '@/components/FullScreenSection'

export default function Welcome() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Heart,
      title: t('welcome.value1'),
      description: t('welcome.value1.desc'),
    },
    {
      icon: Users,
      title: t('welcome.value2'),
      description: t('welcome.value2.desc'),
    },
    {
      icon: Zap,
      title: t('welcome.value3'),
      description: t('welcome.value3.desc'),
    },
    {
      icon: Award,
      title: t('welcome.value4'),
      description: t('welcome.value4.desc'),
    },
  ]

  return (
    <FullScreenSection id="about" bgColor="bg-white">
      <div className="container mx-auto px-4 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {t('welcome.title')}<br />
              <span className="text-secondary">{t('welcome.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We believe that diversity drives innovation. Everyone brings unique value to our team, regardless of background—what matters is your passion to make a difference.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    whileHover={{ x: 8 }}
                    style={{ willChange: "transform, opacity" }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/30 rounded-lg opacity-0 blur-lg"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <Icon className="w-6 h-6 text-primary relative z-10" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative h-96 md:h-full min-h-96 group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-secondary via-primary to-accent rounded-2xl opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-300"
              aria-hidden="true"
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover shadow-xl"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </FullScreenSection>
  )
}
