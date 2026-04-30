'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import ScrollTriggeredCTA from '@/components/ScrollTriggeredCTA'

export default function Recruitment() {
  return (
    <section id="careers" className="w-full py-20 md:py-32 bg-gradient-to-br from-accent via-accent/80 to-primary/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <motion.div
            className="relative h-96 md:h-full min-h-96 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HCH_heroe_man_thumbsup-k0qCHHqOX8vfDPxY3KtQmATdzzOVZn.png"
              alt="Heroes needed"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right content */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Wir brauchen einen
              <br />
              <span className="text-primary">Hero!</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Du bist enthusiastisch, verlässlich und liebst den Kundenkontakt? Dann bist du bei uns genau richtig! Bewirb dich jetzt und werde Teil unseres wachsenden Teams von Contact Heroes.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Flexible Remote-Position',
                'Unbegrenztes Verdienpotenzial',
                'Umfangreiches Training & Support',
                'Internationale Team-Community',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <ScrollTriggeredCTA className="inline-block">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8"
              >
                Jetzt bewerben
              </Button>
            </ScrollTriggeredCTA>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
