import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import Link from 'next/link'

export default function Sitemap() {
  const routes = [
    { title: "Home", path: "/" },
    { title: "Leistungen", path: "/leistungen" },
    { title: "Rechtsgebiete", path: "/leistungen/rechtsgebiete" },
    { title: "Tätigkeitsbereiche", path: "/leistungen/taetigkeitsbereiche" },
    { title: "Unsere Philosophie", path: "/philosophie" },
    { title: "Gründung", path: "/profil/gruendung" },
    { title: "Besetzung", path: "/profil/besetzung" },
    { title: "Online-Rechtsberatung", path: "/online-rechtsberatung" },
    { title: "Telefonische Rechtsberatung", path: "/telefonische-rechtsberatung" },
    { title: "Webcheck", path: "/webcheck" },
    { title: "News", path: "/news" },
    { title: "Kontakt / Kanzlei", path: "/kontakt/kanzlei" },
    { title: "Impressum", path: "/impressum" },
    { title: "Datenschutz", path: "/datenschutz" },
  ]

  return (
    <>
      <HeroSection
        title="Sitemap"
        subtitle="Übersicht aller Seiten unserer Kanzlei."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Seitenübersicht"
            align="left"
          />

          <div className="bg-navy-50 rounded-lg p-8 border border-navy-100 mb-12">
            <ul className="space-y-4">
              {routes.map((route, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-4" />
                  <Link href={route.path} className="text-xl text-navy-900 border-b border-transparent hover:border-gold-500 hover:text-gold-600 transition-colors font-serif font-medium inline-block">
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}
