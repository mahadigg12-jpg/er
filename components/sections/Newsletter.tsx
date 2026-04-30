'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed:', email)
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-r from-secondary to-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '-10%', right: '-5%' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bleibe auf dem Laufenden
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Erhalte die neuesten Informationen über unser Unternehmen, Job-Angebote und Industrie-Insights direkt in dein Postfach.
          </p>

          <motion.form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="deine@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 bg-white/95 border-0 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/20"
              />
            </div>
            <Button
              type="submit"
              className="bg-white hover:bg-gray-100 text-primary font-bold px-8"
              disabled={subscribed}
            >
              {subscribed ? '✓ Subscribed' : 'Abonnieren'}
            </Button>
          </motion.form>

          <motion.p
            className="text-sm text-white/70 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Keine Spam - nur relevante Inhalte. Du kannst dich jederzeit abmelden.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
