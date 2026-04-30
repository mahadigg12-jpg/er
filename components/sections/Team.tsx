'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import FullScreenSection from '@/components/FullScreenSection'
import TeamCarousel from '@/components/TeamCarousel'
import { Sparkles, Star } from 'lucide-react'

export default function Team() {
  const { t } = useLanguage()

  const team = [
    {
      name: 'Vanessa LeRose',
      role: 'Customer Service Hero',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_heroe_woman_brown-hair-1GYgKLRYFBhN2AGkJ5PSfOwL6CLYCy.png',
    },
    {
      name: 'Maria Brak',
      role: 'Team Lead',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_heroe_superwoman2-84VJ3Xp1X3iOhCFzsUIepO4ZQw84iW.png',
    },
    {
      name: 'Marcus Power',
      role: 'Support Specialist',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_heroe_flying_superman2-uAull5T0On37A3WfdAKKgYd5AGrito.png',
    },
    {
      name: 'Paulina Reisige',
      role: 'Quality Manager',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_heroe_superwoman1a-UbVxfheLO92jY3fJue7xq3p1KKuavq.png',
    },
    {
      name: 'James Thunder',
      role: 'Operations Hero',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_heroe_superman2-fXyfr3IRjc7Ixpku3NFtJ2X5fthDEa.png',
    },
    {
      name: 'Priya Sharma',
      role: 'Training Expert',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_heroe_superwoman2a-K5MA7PAGRMFPJm1yK1Bb5BI6Xkeijz.png',
    },
  ]

  return (
    <FullScreenSection
      id="team"
      bgColor="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      className="text-white flex flex-col items-center justify-center py-16"
    >
      <div className="container mx-auto px-4 md:px-8 w-full">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white/90">Meet Our Team</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('team.title')} <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">HEROES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team carousel */}
        <TeamCarousel members={team} autoScroll={true} autoScrollInterval={4000} />
        
        {/* Bottom decorative elements */}
        <motion.div 
          className="flex justify-center mt-12 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm">Dedicated professionals ready to help</span>
          </div>
        </motion.div>
      </div>
    </FullScreenSection>
  )
}
