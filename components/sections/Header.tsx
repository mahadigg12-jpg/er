'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { label: t('services.title'), href: '#services' },
    { label: 'About', href: '#about' },
    { label: t('team.title'), href: '#team' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg"
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 1px rgba(185, 30, 140, 0.2) inset'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-12 h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_FINAL_Logo_WEB%202-9XhrFgt9exzOwzip9PGKLD7ZWAo6bZ.png"
                alt="Hey Contact Heroes"
                fill
                className="object-contain"
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative text-gray-700 font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              title={`Switch to ${language === 'en' ? 'German' : 'English'}`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all"
              >
                {t('nav.login')}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                boxShadow: '0 0 0px rgba(185, 30, 140, 0)'
              }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-white relative overflow-hidden"
                style={{
                  boxShadow: '0 0 20px rgba(185, 30, 140, 0.3)'
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">{t('nav.contact')}</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col gap-4 pb-4 pt-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full"
              >
                Login
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 text-white w-full"
              >
                Kontakt
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}
