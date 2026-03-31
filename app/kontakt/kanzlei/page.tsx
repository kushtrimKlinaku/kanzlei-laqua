'use client'

import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Kontakt() {
  return (
    <>
      <HeroSection
        title="Kanzlei & Kontakt"
        subtitle="Wir sind für Sie da. Nehmen Sie unkompliziert Kontakt auf."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div>
              <SectionHeading
                title="Sprechen Sie mit uns"
                subtitle="Wir nehmen uns Zeit für Ihr Anliegen."
                align="left"
              />
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start">
                  <div className="bg-gold-50 text-gold-600 p-4 rounded-lg mr-6">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Kanzleisitz</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Musterstraße 123<br />
                      80331 München<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-50 text-gold-600 p-4 rounded-lg mr-6">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Telefon & Fax</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Tel: +49 (0)89 123 45 67<br />
                      Fax: +49 (0)89 123 45 68
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold-50 text-gold-600 p-4 rounded-lg mr-6">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">E-Mail</h3>
                    <p className="text-navy-600 leading-relaxed">
                      info@kanzlei-laqua.de<br />
                      kanzlei@kanzlei-laqua.de
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-navy-50 rounded-2xl p-8 lg:p-12 border border-navy-100">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6 border-b border-navy-200 pb-4">Nachricht senden</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Nachricht erfolgreich gesendet! (Demo-Modus)");}}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">E-Mail</label>
                    <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">Betreff</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all" required />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">Ihre Nachricht</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all resize-none" required></textarea>
                </div>

                <p className="text-xs text-navy-400">
                  Die Verarbeitung Ihrer Daten erfolgt gemäß unserer Datenschutzerklärung.
                </p>

                <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 font-semibold rounded-md shadow-lg transition-colors flex items-center justify-center group">
                  <Send className="w-5 h-5 mr-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Nachricht senden
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
