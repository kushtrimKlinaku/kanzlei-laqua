import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CheckCircle2 } from 'lucide-react'

export default function Taetigkeitsbereiche() {
  const inkassoItems = [
    "Schuldnerauskunft / Bonitätsprüfung",
    "Kaufmännische Mahnschreiben",
    "Anwaltliche außergerichtliche Mahnschreiben",
    "Beantragung von gerichtlichen Mahn- und Vollstreckungsbescheiden",
    "Vertretung in streitigen Verfahren (bei Widerspruch)",
    "Zwangsvollstreckung"
  ]

  return (
    <>
      <HeroSection
        title="Tätigkeitsbereiche"
        subtitle="Erfolgreiches Inkasso und effektive Durchsetzung."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Spezialbereich Inkasso"
            align="left"
          />
          
          <div className="prose prose-lg text-navy-600 mb-12">
            <p className="text-xl">
              Zu unseren Tätigkeitsbereichen gehören im Einzelnen insbesondere das Inkassowesen und das stringente Forderungsmanagement.
            </p>
            <p className="text-sm border-l-4 border-gold-500 pl-4 py-2 my-6 bg-gold-50">
              Hinweis: Mahnkosten hat als Verzugsschaden grundsätzlich der Schuldner zu tragen.
            </p>
          </div>

          <div className="bg-navy-900 rounded-xl p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl font-serif text-gold-500 mb-8 border-b-2 border-navy-800 pb-4">Unsere Leistungen im Inkasso</h3>
            
            <ul className="space-y-6">
              {inkassoItems.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-navy-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
