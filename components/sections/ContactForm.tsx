'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Kontaktiere <span className="text-primary">uns</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Hast du Fragen oder möchtest mehr über unsere Services erfahren? Wir freuen uns, von dir zu hören!
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">E-Mail</h3>
                  <a href="mailto:info@heycontactheroes.de" className="text-gray-600 hover:text-primary">
                    info@heycontactheroes.de
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <a href="tel:+49123456789" className="text-gray-600 hover:text-secondary">
                    +49 (0) 123 456789
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    Remote-First<br />
                    Weltweit
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-secondary via-primary to-accent rounded-2xl opacity-0 blur-lg group-hover:opacity-20 transition-opacity duration-300"
              aria-hidden="true"
            />
            <div
              className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 20px 40px rgba(0, 0, 0, 0.08)'
              }}
            >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name *
                </label>
                <motion.div
                  className="relative"
                  whileFocus={{}}
                >
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Dein Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all"
                  />
                </motion.div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-Mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="deine@email.de"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 border-gray-200 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Unternehmen
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Dein Unternehmen"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-2 border-gray-200 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nachricht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Wie können wir dir helfen?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="border-2 border-gray-200 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all resize-none"
                />
              </div>

              <motion.div
                initial={false}
                animate={{ scale: submitted ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg relative overflow-hidden"
                    disabled={submitted}
                    style={{
                      boxShadow: submitted ? 'none' : '0 0 20px rgba(185, 30, 140, 0.3)'
                    }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {submitted && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          ✓
                        </motion.span>
                      )}
                      {submitted ? 'Nachricht versendet!' : 'Nachricht senden'}
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
