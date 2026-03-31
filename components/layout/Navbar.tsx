'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Scale } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/philosophie', label: 'Philosophie' },
    { href: '/profil/gruendung', label: 'Profil' },
    { href: '/news', label: 'News' },
    { href: '/kontakt/kanzlei', label: 'Kontakt' },
  ]

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false
    return pathname?.startsWith(path)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-navy-900/95 backdrop-blur-md border-b border-gray-200 dark:border-navy-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-navy-900 dark:bg-gold-500 p-2 rounded-lg text-white dark:text-navy-900 transition-transform group-hover:scale-105">
              <Scale size={28} />
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-navy-900 dark:text-white leading-none tracking-tight">LAQUA & KOLLEGEN</div>
              <div className="text-xs text-gold-600 dark:text-gold-400 font-semibold tracking-widest uppercase mt-1">Rechtsanwälte</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold-500 py-2 ${
                    isActive(link.href) ? 'text-gold-600 dark:text-gold-400' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {link.label}
                </Link>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gold-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            ))}
            <Link 
              href="/kontakt/kanzlei"
              className="px-6 py-2.5 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 text-sm font-semibold rounded-md shadow-lg shadow-navy-900/20 dark:shadow-gold-500/20 hover:bg-navy-800 dark:hover:bg-gold-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              Jetzt kontaktieren
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-gold-500 p-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-navy-800"
          >
            <nav className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.href) 
                      ? 'bg-navy-50 dark:bg-navy-800 text-gold-600 dark:text-gold-400' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-800 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 pb-2 px-3">
                <Link
                  href="/kontakt/kanzlei"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-900 font-semibold rounded-md shadow-md"
                >
                  Jetzt kontaktieren
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
