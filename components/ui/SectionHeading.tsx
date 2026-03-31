'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  children?: ReactNode
}

export function SectionHeading({ title, subtitle, align = 'center', className = '', children }: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  }

  return (
    <div className={`max-w-3xl ${alignmentClasses[align]} mb-12 lg:mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-navy-600 font-light text-balance leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </motion.div>
    </div>
  )
}
