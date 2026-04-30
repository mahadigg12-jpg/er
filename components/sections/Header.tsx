'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, Globe, Headphones, Users, Briefcase, Mail, Star, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('services.title'), href: '#services', icon: Headphones },
    { label: 'About', href: '#about', icon: Users },
    { label: 'Benefits', href: '#benefits', icon: Star },
    { label: t('team.title'), href: '#team', icon: Shield },
    { label: 'Careers', href: '#careers', icon: Briefcase },
    { label: t('nav.contact'), href: '#contact', icon: Mail },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-secondary via-primary to-accent" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Made bigger */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_FINAL_Logo_WEB%202-9XhrFgt9exzOwzip9PGKLD7ZWAo6bZ.png"
                alt="Hey Contact Heroes"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className={`hidden lg:block transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-xl font-bold">Hey Contact</span>
              <span className="block text-sm font-medium text-primary">Heroes</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 group ${
                    scrolled 
                      ? 'text-gray-700 hover:text-primary hover:bg-primary/5' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all"
                  />
                </motion.a>
              )
            })}
          </nav>

          {/* Right side - Language Toggle only */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              title={`Switch to ${language === 'en' ? 'German' : 'English'}`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden overflow-hidden bg-white rounded-b-2xl shadow-xl"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 text-primary" />
                  {link.label}
                </a>
              )
            })}

          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}
