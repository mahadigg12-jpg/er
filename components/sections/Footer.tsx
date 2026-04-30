'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Facebook, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = [
  {
    title: 'Unternehmen',
    links: ['Über uns', 'Team', 'Karriere', 'Blog'],
  },
  {
    title: 'Services',
    links: ['Inbound', 'Outbound', 'Back Office', 'AI Solutions'],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Dokumentation', 'Kontakt', 'Status'],
  },
]

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:info@heycontactheroes.de' },
]

export default function Footer() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY)
    const maxDistance = 100

    if (distance < maxDistance) {
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)
      const targetX = Math.cos(angle) * (maxDistance - distance) * 0.5
      const targetY = Math.sin(angle) * (maxDistance - distance) * 0.5

      mouseX.set(targetX)
      mouseY.set(targetY)
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Logo column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_FINAL_Logo_WEB%202-9XhrFgt9exzOwzip9PGKLD7ZWAo6bZ.png"
                  alt="Hey Contact Heroes"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">Hey Contact Heroes</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dein Remote-First Call Center und Customer Experience Partner für globale Exzellenz.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links columns */}
          {footerLinks.map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (colIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 Hey Contact Heroes GmbH. Alle Rechte vorbehalten.
          </motion.p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Datenschutz
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Impressum
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              AGB
            </a>
          </div>

          {/* Scroll to top with magnetic effect */}
          <motion.button
            ref={buttonRef}
            onClick={scrollToTop}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-10 h-10 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors overflow-hidden"
            style={{ x: mouseX, y: mouseY }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-accent opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-1 rounded-full border border-white/20"
            />
            <motion.div whileHover={{ y: -2 }}>
              <ArrowUp className="w-5 h-5 relative z-10" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
