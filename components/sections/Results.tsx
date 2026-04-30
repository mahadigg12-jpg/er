'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react'
import AnimatedCounter from '@/components/AnimatedCounter'

const stats = [
  {
    icon: TrendingUp,
    number: '250%',
    label: 'Durchschnittliche Effizienzsteigerung',
  },
  {
    icon: Users,
    number: '5000+',
    label: 'Zufriedene Kunden weltweit',
  },
  {
    icon: Zap,
    number: '99.2%',
    label: 'Kundenbetreuung Erfolgsquote',
  },
  {
    icon: BarChart3,
    number: '48h',
    label: 'Durchschnittliche Onboarding-Zeit',
  },
]

export default function Results() {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Ergebnisse</span> sprechen für sich
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Messbare Erfolge und beeindruckende Zahlen
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-secondary via-primary to-accent rounded-2xl opacity-0 blur-lg group-hover:opacity-60 transition-opacity duration-300"
                  aria-hidden="true"
                />
                <motion.div
                  className="relative bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary/20 text-center"
                  whileHover={{
                    borderColor: 'rgba(185, 30, 140, 0.5)',
                    boxShadow: '0 0 30px rgba(185, 30, 140, 0.2), inset 0 1px 0 rgba(255,255,255,0.5)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary mb-2">
                    <AnimatedCounter
                      value={stat.number}
                      duration={2.5}
                      delay={index * 0.1}
                    />
                  </div>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
