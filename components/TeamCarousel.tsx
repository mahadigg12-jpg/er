'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % members.length)
  }, [members.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
  }, [members.length])

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

    const interval = setInterval(nextSlide, autoScrollInterval)
    return () => clearInterval(interval)
  }, [autoScroll, autoScrollInterval, nextSlide])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Get indices for 3 visible cards
  const getVisibleIndices = () => {
    const prev = (currentIndex - 1 + members.length) % members.length
    const next = (currentIndex + 1) % members.length
    return [prev, currentIndex, next]
  }

  const [prevIndex, centerIndex, nextIndex] = getVisibleIndices()

  return (
    <div 
      className="w-full max-w-6xl mx-auto px-4 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Team member carousel. Use left and right arrow keys to navigate."
    >
      <div className="relative h-[450px] md:h-[500px] flex items-center justify-center">
        {/* Left card (faded) */}
        <motion.div
          key={`left-${prevIndex}`}
          className="absolute left-4 md:left-12 top-1/2 w-32 md:w-48 h-48 md:h-72 z-0 cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: 0.5, 
            scale: 0.8, 
            y: '-50%',
            x: 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={prevSlide}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={members[prevIndex].image}
              alt={members[prevIndex].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>

        {/* Center card (full) */}
        <motion.div
          key={`center-${centerIndex}`}
          className="absolute left-1/2 top-1/2 w-56 md:w-72 h-72 md:h-96 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: '-50%',
            y: '-50%'
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={members[centerIndex].image}
              alt={members[centerIndex].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <motion.h3 
                className="text-2xl font-bold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {members[centerIndex].name}
              </motion.h3>
              <motion.p 
                className="text-accent font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {members[centerIndex].role}
              </motion.p>
            </div>

            {/* Glow border */}
            <div
              className="absolute inset-0 rounded-3xl border-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: 'inset 0 0 30px rgba(185, 30, 140, 0.3)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right card (faded) */}
        <motion.div
          key={`right-${nextIndex}`}
          className="absolute right-4 md:right-12 top-1/2 w-32 md:w-48 h-48 md:h-72 z-0 cursor-pointer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: 0.5, 
            scale: 0.8, 
            y: '-50%',
            x: 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={nextSlide}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={members[nextIndex].image}
              alt={members[nextIndex].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-primary/50 backdrop-blur-sm transition-all duration-200 border border-white/20"
          aria-label="Previous member"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-primary/50 backdrop-blur-sm transition-all duration-200 border border-white/20"
          aria-label="Next member"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-gray-500 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Go to member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
