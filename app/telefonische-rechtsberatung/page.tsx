import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PhoneCall, FileText, CheckCircle2 } from 'lucide-react'

export default function TelefonischeRechtsberatung() {
  return (
    <>
      <HeroSection
        title="Telefonische Rechtsberatung"
        subtitle="Einfach, schnell, kompetent und fair kalkuliert."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Die direkte Anwaltsauskunft"
            align="left"
          />

          <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed mb-16">
            <p className="text-xl">
              Die Rechtsberatung am Telefon wird für Sie unkompliziert und direkt durch unsere Fachanwälte durchgeführt. 
            </p>
            <p>
              Sie rufen uns an und schildern uns Ihr rechtliches Problem ohne Umwege. Die Gebühr für eine anwaltliche Erstberatung am Telefon wird vorher fair und transparent mit Ihnen vereinbart. So erleben Sie keine unangenehmen Überraschungen auf der Rechnung.
            </p>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:pr-12">
              <h3 className="text-3xl font-serif text-gold-500 mb-6">Wie es funktioniert</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <PhoneCall className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-100">Rufen Sie uns unter <strong className="text-white">+49 (0)89 123 45 67</strong> an.</span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-100">Wir schildern Ihnen unverbindlich die zu erwartenden Kosten.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-100">Bei Zustimmung verbinden wir Sie direkt mit dem Fachexperten.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-shrink-0">
               <div className="bg-gold-500 text-navy-900 rounded-full w-32 h-32 flex items-center justify-center border-4 border-navy-800 shadow-xl shadow-gold-500/20">
                 <PhoneCall size={48} />
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
