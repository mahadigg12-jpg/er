import { ReactNode } from 'react'

interface FullScreenSectionProps {
  children: ReactNode
  className?: string
  bgColor?: string
  id?: string
}

export default function FullScreenSection({
  children,
  className = '',
  bgColor = 'bg-white',
  id,
}: FullScreenSectionProps) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen flex items-center justify-center ${bgColor} overflow-hidden relative ${className}`}
      style={{
        scrollSnapAlign: 'start',
      }}
    >
      {children}
    </section>
  )
}
