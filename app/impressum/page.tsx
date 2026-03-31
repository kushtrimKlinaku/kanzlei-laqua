import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Impressum() {
  return (
    <>
      <HeroSection
        title="Impressum"
        subtitle="Verantwortlich für diese Seite gemäß § 5 TMG"
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Angaben gemäß § 5 TMG"
            align="left"
          />

          <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed mb-12">
            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">Betreiber der Website</h3>
            <p>
              Kanzlei Laqua & Kollegen<br />
              Rechtsanwälte<br />
              Musterstraße 123<br />
              80331 München<br />
              Deutschland
            </p>

            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">Kontakt</h3>
            <p>
              Telefon: +49 (0)89 123 45 67<br />
              Telefax: +49 (0)89 123 45 68<br />
              E-Mail: info@kanzlei-laqua.de
            </p>

            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE 123456789
            </p>

            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">Berufsbezeichnung</h3>
            <p>
              Die gesetzliche Berufsbezeichnung "Rechtsanwalt" wurde den Berufsträgern in der Bundesrepublik Deutschland verliehen. Die zuständige Rechtsanwaltskammer ist die Rechtsanwaltskammer München, Tal 33, 80331 München.
            </p>

            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">Berufsrechtliche Regelungen</h3>
            <p>Es gelten folgende berufsrechtliche Regelungen:</p>
            <ul>
              <li>Bundesrechtsanwaltsordnung (BRAO)</li>
              <li>Berufsordnung für Rechtsanwälte (BORA)</li>
              <li>Fachanwaltsordnung (FAO)</li>
              <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
            </ul>
            <p>Die Regelungen können bei der Bundesrechtsanwaltskammer unter www.brak.de eingesehen werden.</p>
          </div>

        </div>
      </section>
    </>
  )
}
