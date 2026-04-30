'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface TeamMember {
  name: string
  role: string
  image: string
}

interface TeamCarouselProps {
  members: TeamMember[]
  autoScroll?: boolean
  autoScrollInterval?: number
}

export default function TeamCarousel({
  members,
  autoScroll = true,
  autoScrollInterval = 5000,
}: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % members.length)
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [autoScroll, autoScrollInterval, members.length])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % members.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
  }

  // Get 3 members centered around current index
  const getVisibleMembers = () => {
    const items = []
    for (let i = -1; i < 2; i++) {
      const index = (currentIndex + i + members.length) % members.length
      items.push({ ...members[index], originalIndex: index, offset: i })
    }
    return items
  }

  const visibleMembers = getVisibleMembers()

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div 
      className="w-full max-w-6xl mx-auto px-4 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Team member carousel. Use left and right arrow keys to navigate."
    >
      <div className="relative h-96 md:h-[500px] flex items-center justify-center">
        {/* Carousel container */}
        <div className="relative w-full h-full">
          {/* Left card (faded) */}
          <motion.div
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-32 md:w-48 h-64 md:h-80 z-0"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {visibleMembers[0] && (
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={visibleMembers[0].image}
                  alt={visibleMembers[0].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            )}
          </motion.div>

          {/* Center card (full) */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 md:w-64 h-80 md:h-96 z-10"
            >
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={members[currentIndex].image}
                  alt={members[currentIndex].name}
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.8 }}
                />

                {/* Info overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold">{members[currentIndex].name}</h3>
                  <p className="text-accent font-medium">{members[currentIndex].role}</p>
                </motion.div>

                {/* Glow border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-primary opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(185, 30, 140, 0.3)',
                  }}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Right card (faded) */}
          <motion.div
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-32 md:w-48 h-64 md:h-80 z-0"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {visibleMembers[2] && (
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={visibleMembers[2].image}
                  alt={visibleMembers[2].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            )}
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-16 md:-ml-20 p-2 rounded-full bg-white/10 hover:bg-primary/30 transition-colors"
          aria-label="Previous member"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-16 md:-mr-20 p-2 rounded-full bg-white/10 hover:bg-primary/30 transition-colors"
          aria-label="Next member"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {members.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-400 hover:bg-gray-500 w-2'
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
