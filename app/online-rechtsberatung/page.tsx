import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ShieldCheck, Mail, Lock } from 'lucide-react'

export default function OnlineRechtsberatung() {
  return (
    <>
      <HeroSection
        title="Online-Rechtsberatung"
        subtitle="Zeitsparend, kostengünstig und sicher. Ihre Rechtsfrage via E-Mail."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Die Moderne Alternative"
            align="left"
          />

          <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed mb-12">
            <p className="text-xl">
              Die Online-Rechtsberatung ist eine zeitsparende und kostengünstige Alternative zur Beantwortung juristischer Fragen in der Kanzlei.
            </p>
            <p>
              Zur Gewährleistung der Datensicherheit und der anwaltlichen Schweigepflicht erfolgt die gesamte Datenübertragung über verschlüsselte Verbindungen. Um eine solche Anfrage zu stellen, ist die Verwendung unseres sicheren Anfragebogens zwingend geboten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-navy-50 rounded-xl p-8 border border-navy-100 flex flex-col items-center justify-center text-center">
              <Mail className="w-10 h-10 text-gold-500 mb-4" />
              <div className="font-bold text-navy-900 mb-2">1. Anfrage senden</div>
              <p className="text-sm text-navy-600">Schildern Sie uns Ihren Fall detailliert und unverbindlich.</p>
            </div>
            
            <div className="bg-navy-50 rounded-xl p-8 border border-navy-100 flex flex-col items-center justify-center text-center">
              <Lock className="w-10 h-10 text-gold-500 mb-4" />
              <div className="font-bold text-navy-900 mb-2">2. Sichere Prüfung</div>
              <p className="text-sm text-navy-600">Wir prüfen Ihre Anfrage unter strengen Sicherheitsstandards.</p>
            </div>

            <div className="bg-navy-50 rounded-xl p-8 border border-navy-100 flex flex-col items-center justify-center text-center">
              <ShieldCheck className="w-10 h-10 text-gold-500 mb-4" />
              <div className="font-bold text-navy-900 mb-2">3. Lösung erhalten</div>
              <p className="text-sm text-navy-600">Sie erhalten eine fundierte, verbindliche rechtliche Ersteinschätzung.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="mailto:info@kanzlei-laqua.de?subject=Anfrage%20Online-Rechtsberatung" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 font-semibold rounded-md shadow-lg transition-colors">
              Jetzt Online-Beratung anfragen
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
