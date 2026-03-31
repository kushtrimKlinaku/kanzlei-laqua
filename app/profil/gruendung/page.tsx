import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Gruendung() {
  return (
    <>
      <HeroSection
        title="Gründung & Historie"
        subtitle="Eine Erfolgsgeschichte im Dienste unserer Mandanten."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Wie alles begann"
            align="left"
          />

          <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed">
            <p>
              Die Kanzlei LAQUA & KOLLEGEN blickt auf eine traditionsreiche und stetig wachsende Historie zurück. Die Wurzeln unserer heutigen Größe gehen zurück auf eine engagierte Einzelpraxis, die durch kontinuierlichen Erfolg und herausragende Mandantenbetreuung zu der heutigen Kanzlei mit 111 Mitarbeitern angewachsen ist.
            </p>
            <p>
              Von Beginn an stand der Fokus auf der rechtsübergreifenden Betreuung von Privatpersonen und Unternehmen in München und darüber hinaus.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
