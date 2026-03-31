import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TeamCard } from '@/components/ui/TeamCard'

export default function Besetzung() {
  return (
    <>
      <HeroSection
        title="Besetzung & Team"
        subtitle="Erfahrene Fachanwälte und Juristen für Ihre Interessen."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Die Anwälte"
            subtitle="Unsere Kanzlei verfügt über ein hochspezialisiertes Team, das Sie umfassend betreut."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <TeamCard
              name="Rechtsanwalt Laqua"
              role="Gründer & Fachanwalt"
              specialties={['Zivilrecht', 'Wirtschaftsrecht', 'Strafrecht']}
              email="info@kanzlei-laqua.de"
              phone="+49891234567"
            />
            {/* Adding placeholders to imply the 111 Mitarbeiter scale mentioned in text */}
            <TeamCard
              name="Rechtsanwalt Max Mustermann"
              role="Fachanwalt"
              specialties={['Familienrecht', 'Erbrecht']}
              delay={0.1}
            />
            <TeamCard
              name="Rechtsanwältin Anna Meyer"
              role="Fachanwältin"
              specialties={['Arbeitsrecht', 'Vertragsrecht']}
              delay={0.2}
            />
          </div>

          <div className="mt-20 bg-navy-50 rounded-2xl p-12 text-center border border-navy-100">
            <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Über 100 weitere engagierte Mitarbeiter</h3>
            <p className="text-navy-600 max-w-2xl mx-auto mb-8">
              Unterstützt werden unsere Anwälte durch ein starkes Team von Assistenten, Rechtsanwaltsfachangestellten und unserer spezialisierten Inkassoabteilung. Wir sind mit 111 Mitarbeitern für Sie im Einsatz.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
