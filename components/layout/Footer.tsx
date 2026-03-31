import Link from 'next/link'
import { Scale, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3">
                <div className="bg-gold-500 p-2 rounded-lg text-navy-900">
                  <Scale size={24} />
                </div>
                <div>
                  <div className="font-serif text-xl font-bold leading-none tracking-tight">LAQUA & KOLLEGEN</div>
                </div>
              </div>
            </Link>
            <p className="text-navy-300 text-sm leading-relaxed pr-4">
              Ihre erfahrene Rechtsanwaltskanzlei in München. Seit über 40 Jahren beraten wir Privatpersonen und Unternehmen in allen Rechtsfragen mit 111 spezialisierten Mitarbeitern.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-6 tracking-wide uppercase text-sm">Online Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/online-rechtsberatung" className="text-navy-300 hover:text-white transition-colors text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  Online-Rechtsberatung
                </Link>
              </li>
              <li>
                <Link href="/telefonische-rechtsberatung" className="text-navy-300 hover:text-white transition-colors text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  Telefonische Beratung
                </Link>
              </li>
              <li>
                <Link href="/webcheck" className="text-navy-300 hover:text-white transition-colors text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  Webcheck
                </Link>
              </li>
            </ul>
          </div>

          {/* Kanzlei Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-6 tracking-wide uppercase text-sm">Die Kanzlei</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/profil/gruendung" className="text-navy-300 hover:text-white transition-colors text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  Gründung
                </Link>
              </li>
              <li>
                <Link href="/profil/besetzung" className="text-navy-300 hover:text-white transition-colors text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  Besetzung / Team
                </Link>
              </li>
              <li>
                <Link href="/philosophie" className="text-navy-300 hover:text-white transition-colors text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  Philosophie
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-navy-300 hover:text-white transition-colors text-sm flex items-center group">
                  <ArrowRight size={14} className="mr-2 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-6 tracking-wide uppercase text-sm">Kontakt</h3>
            <ul className="space-y-4 text-sm text-navy-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>
                 Musterstraße 123<br />
                 80331 München<br />
                 Deutschland
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold-500 flex-shrink-0" />
                <a href="tel:+49891234567" className="hover:text-white transition-colors">+49 (0)89 123 45 67</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@kanzlei-laqua.de" className="hover:text-white transition-colors">info@kanzlei-laqua.de</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-navy-400">
          <p>&copy; {currentYear} Kanzlei Laqua & Kollegen. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6">
            <Link href="/impressum" className="hover:text-gold-400 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-gold-400 transition-colors">Datenschutz</Link>
            <Link href="/sitemap" className="hover:text-gold-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
