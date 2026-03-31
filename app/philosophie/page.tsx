import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Scale, Target, Lightbulb, HeartHandshake } from 'lucide-react'

export default function Philosophie() {
  return (
    <>
      <HeroSection
        title="Unsere Philosophie"
        subtitle="Engagement, Kompetenz und absolute Mandantenorientierung."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Wofür wir stehen"
            subtitle="Ihre Interessen stehen im Mittelpunkt unseres Handelns."
            align="left"
          />

          <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed mb-16">
            <p className="text-xl leading-relaxed text-navy-800 font-medium">
              Das Ziel unserer Kanzlei ist es, Ihre Interessen unter Berücksichtigung der persönlichen und wirtschaftlichen Anforderungen kompetent und optimal zu vertreten.
            </p>
            <p>
              Die Anwälte der Kanzlei legen großen Wert auf individuelle, ehrliche und vor allem an den tatsächlichen Bedürfnissen der Mandanten orientierte Beratung, um die Mandanten bei ihren Aufgaben zielgerichtet und lösungsorientiert zu unterstützen.
            </p>
            <p>
              Um diesem Anspruch gerecht zu werden, arbeitet die Kanzlei stets engagiert und nachdrücklich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-50 p-8 rounded-xl border border-navy-100 flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Target className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Zielgerichtet</h3>
                <p className="text-navy-600 text-sm">Lösungsorientierte Unterstützung bei allen Mandanten-Aufgaben.</p>
              </div>
            </div>

            <div className="bg-navy-50 p-8 rounded-xl border border-navy-100 flex items-start">
              <div className="flex-shrink-0 mr-4">
                <HeartHandshake className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Ehrlich</h3>
                <p className="text-navy-600 text-sm">Individuelle und an echten Bedürfnissen orientierte Beratung.</p>
              </div>
            </div>

            <div className="bg-navy-50 p-8 rounded-xl border border-navy-100 flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Scale className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Kompetent</h3>
                <p className="text-navy-600 text-sm">Optimale Vertretung unter Berücksichtigung wirtschaftlicher Anforderungen.</p>
              </div>
            </div>

            <div className="bg-navy-50 p-8 rounded-xl border border-navy-100 flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Lightbulb className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Engagiert</h3>
                <p className="text-navy-600 text-sm">Wir arbeiten stets nachdrücklich, um Ihren Anspruch durchzusetzen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
