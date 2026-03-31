import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MonitorCheck, AlertTriangle, ShieldAlert } from 'lucide-react'

export default function Webcheck() {
  return (
    <>
      <HeroSection
        title="Web-Check"
        subtitle="Rechtssicherheit für Ihren Internetauftritt und Web-Shop."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Sicher im digitalen Raum"
            align="left"
          />

          <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed mb-16">
            <p className="text-xl">
              In einem Zeitalter, welches in rasanter Geschwindigkeit von der globalen Vernetzung durch das Internet durchdrungen wird, entstehen auch für den Unternehmer eine Vielzahl neuer rechtlicher Problemstellungen.
            </p>
            <p>
              Unsere Kanzlei hilft Ihnen, durch einen gezielten Web-Check teure Abmahnungen zu vermeiden und rechtliche Sicherheiten für Ihren Internetauftritt oder Web-Shop zu schaffen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-xl border border-red-100 text-center flex flex-col items-center">
              <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Gefahr: Abmahnungen</h3>
              <p className="text-navy-600">
                Fehlende oder fehlerhafte Impressen, veraltete AGBs und DSGVO-Verstöße sind Einfallstore für kostenpflichtige Abmahnungen durch Mitbewerber.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl border border-teal-100 text-center flex flex-col items-center">
              <MonitorCheck className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">Lösung: Kanzlei-WebCheck</h3>
              <p className="text-navy-600">
                Wir überprüfen Ihren Webauftritt umfassend auf rechtliche Schwachstellen, formulieren rechtssichere Texte und minimieren Ihr Risiko.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
