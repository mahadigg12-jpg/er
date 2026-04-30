'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { useRef } from 'react'

const benefits = [
  'Arbeite von überall auf der Welt',
  'Flexible Arbeitszeiten nach deinen Bedürfnissen',
  'Volle Kontrolle über deinen Kalender',
  'Work-Life-Balance im Fokus',
]

export default function WorkFlexibility() {
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const imageParallax = useTransform(scrollY, [0, 1500], [0, 100])

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-32 bg-gradient-to-br from-secondary/10 to-secondary/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left image with reveal effect */}
          <motion.div
            className="relative h-96 md:h-96 group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-300"
              aria-hidden="true"
            />
            <motion.div
              className="relative rounded-2xl overflow-hidden h-full shadow-xl"
              style={{ y: imageParallax }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1507238691154-fc0c18c61a60?w=500&h=500&fit=crop"
                alt="Remote work flexibility"
                fill
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work <span className="text-secondary">Wherever</span> you want
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Wir glauben an die Kraft der Flexibilität. Arbeite von deinem Lieblingscafé, von zuhause, oder von einem Strand aus – wo auch immer du dich am produktivsten fühlst.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
