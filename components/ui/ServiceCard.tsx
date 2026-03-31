'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  delay?: number
}

export function ServiceCard({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative h-full"
    >
      <Link href={href} className="block h-full outline-none">
        <div className="h-full bg-white rounded-xl p-8 border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-gold-300 group-hover:-translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-gold-500 overflow-hidden relative">
          
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-0 h-1 bg-gold-500 transition-all duration-300 group-hover:w-full" />
          
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-navy-50 text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors duration-300">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-xl font-bold font-serif text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{title}</h3>
          
          <p className="text-navy-600 text-sm leading-relaxed mb-6 font-light">
            {description}
          </p>
          
          <div className="flex items-center text-sm font-semibold text-gold-600 mt-auto group-hover:text-navy-900 transition-colors">
            Mehr erfahren
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
