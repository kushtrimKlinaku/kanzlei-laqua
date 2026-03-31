import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function News() {
  const newsItems = [
    {
      date: "15. Oktober 2024",
      title: "Neues Urteil zum Wettbewerbsrecht",
      content: "Das Bundesgerichtshof hat in einer neuen Entscheidung die Anforderungen an das E-Mail Marketing für B2B verschärft. Lesen Sie hier, was Unternehmer jetzt beachten müssen."
    },
    {
      date: "02. September 2024",
      title: "Änderungen in der ZPO",
      content: "Ab sofort gelten vereinfachte Regelungen für die Beweiserhebung im kaufmännischen Mahnverfahren. Unsere Inkassoabteilung wurde bereits auf die neuen Prozesse umgestellt."
    },
    {
      date: "14. Juli 2024",
      title: "Kanzlei LAQUA & KOLLEGEN begrüßt 5 neue Mitarbeiter",
      content: "Zur Stärkung unseres Dezernats für internationales Zivilrecht freuen wir uns, fünf neue spezialisierte Mitarbeiter in unserem Münchener Büro begrüßen zu dürfen."
    }
  ]

  return (
    <>
      <HeroSection
        title="News & Aktuelles"
        subtitle="Bleiben Sie über rechtliche Entwicklungen und Neuigkeiten unserer Kanzlei informiert."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Aktuelle Meldungen"
            align="left"
          />

          <div className="space-y-12 mt-12">
            {newsItems.map((news, idx) => (
              <article key={idx} className="pb-12 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="text-sm font-semibold text-gold-600 mb-2 tracking-widest uppercase">{news.date}</div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">{news.title}</h3>
                <p className="text-navy-600 text-lg leading-relaxed">{news.content}</p>
                <button className="mt-4 text-sm font-bold text-navy-900 border-b border-gold-500 pb-0.5 hover:text-gold-600 transition-colors">
                  Weiterlesen
                </button>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
