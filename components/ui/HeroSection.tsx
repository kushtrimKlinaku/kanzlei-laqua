'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string | ReactNode
  subtitle?: string | ReactNode
  image?: string
  children?: ReactNode
  align?: 'left' | 'center'
}

export function HeroSection({ title, subtitle, image, children, align = 'center' }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[60vh] flex items-center bg-navy-950">
      {/* Background Image / Overlay */}
      {image ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-navy-950/80 bg-gradient-to-t from-navy-950 to-navy-900/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl rounded-tr-none pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className={`mt-6 text-lg md:text-xl text-navy-200 font-light max-w-2xl text-balance ${align === 'center' ? 'mx-auto' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div 
              className={`mt-10 ${align === 'center' ? 'flex justify-center flex-wrap gap-4' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
