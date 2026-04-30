'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import FullScreenSection from '@/components/FullScreenSection'
import TeamCarousel from '@/components/TeamCarousel'

export default function Team() {
  const { t } = useLanguage()

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Fauzia Khan',
      role: 'Lead Agent Trainer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Emma Wilson',
      role: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1439157755884-bc4eea34d5f5?w=400&h=400&fit=crop',
    },
    {
      name: 'James Rodriguez',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
  ]

  return (
    <FullScreenSection
      id="team"
      bgColor="bg-gradient-to-br from-gray-900 to-gray-800"
      className="text-white flex flex-col items-center justify-center py-12"
    >
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('team.title')} <span className="text-accent">HEROES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team carousel */}
        <TeamCarousel members={team} autoScroll={true} autoScrollInterval={5000} />
      </div>
    </FullScreenSection>
  )
}
