import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Datenschutz() {
  return (
    <>
      <HeroSection
        title="Datenschutz"
        subtitle="Erklärung zum Schutz Ihrer personenbezogenen Daten."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Datenschutzerklärung"
            align="left"
          />

          <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed mb-12">
            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">1. Datenschutz auf einen Blick</h3>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">2. Datenerfassung auf unserer Website</h3>
            <p className="font-semibold text-navy-800">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="font-semibold text-navy-800">Wie erfassen wir Ihre Daten?</p>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder bei einer Online-Rechtsberatung übermitteln. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
            </p>

            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">3. Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
            </p>

            <h3 className="text-xl font-bold font-serif text-navy-900 mb-2 mt-8">4. SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
