'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

interface TeamCardProps {
  name: string
  role: string
  specialties?: string[]
  phone?: string
  email?: string
  imageUrl?: string
  delay?: number
}

export function TeamCard({ name, role, specialties, phone, email, imageUrl, delay = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden group">
        {imageUrl ? (
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-navy-50 flex flex-col items-center justify-center p-6 text-center">
             <div className="w-24 h-24 rounded-full bg-navy-900 flex items-center justify-center mb-4 shadow-inner">
               <span className="text-3xl font-serif text-gold-500">
                 {name.split(' ').map(n => n[0]).join('').substring(0,2)}
               </span>
             </div>
             <span className="text-navy-300 text-sm">Portrait folgt</span>
          </div>
        )}
        
        {/* Hover Overlay for quick actions */}
        <div className="absolute inset-0 bg-navy-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {email && (
            <a href={`mailto:${email}`} className="bg-white p-3 rounded-full text-navy-900 hover:text-gold-600 hover:scale-110 transition-all" aria-label={`Email ${name}`}>
              <Mail size={20} />
            </a>
          )}
          {phone && (
            <a href={`tel:${phone}`} className="bg-white p-3 rounded-full text-navy-900 hover:text-gold-600 hover:scale-110 transition-all" aria-label={`Call ${name}`}>
              <Phone size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold font-serif text-navy-900 mb-1">{name}</h3>
        <p className="text-gold-600 font-medium text-sm mb-4">{role}</p>
        
        {specialties && specialties.length > 0 && (
          <div className="mt-auto">
            <h4 className="text-xs font-semibold text-navy-800 uppercase tracking-wider mb-2">Fachbereiche</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((spec, idx) => (
                <span key={idx} className="bg-navy-50 text-navy-700 text-xs px-2.5 py-1 rounded-sm border border-navy-100">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
