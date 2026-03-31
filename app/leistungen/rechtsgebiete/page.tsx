import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Rechtsgebiete() {
  const zivilrecht = [
    "Kaufrecht", "Werkvertragsrecht", "Maklerrecht", "Miet- und Pachtrecht",
    "Wohnungseigentumsrecht", "Reiserecht", "Forderungseinzug",
    "Verkehrsrecht einschl. Bußgeld- und Verkehrsstrafsachenrecht",
    "Versicherungsrecht", "Erb- und Familienrecht"
  ]
  const wirtschaftsrecht = [
    "Handels- und Gesellschaftsrecht", "gewerblicher Rechtsschutz",
    "Wettbewerbsrecht", "Arbeitsrecht"
  ]
  const strafrecht = [
    "allgemeines Strafrecht", "Wirtschaftsstrafsachen"
  ]

  return (
    <>
      <HeroSection
        title="Rechtsgebiete"
        subtitle="Unsere Kanzlei ist bundesweit in wesentlichen Rechtsgebieten tätig."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Zivilrecht */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif text-navy-900 border-b-2 border-gold-500 pb-2 mb-8 inline-block">Zivilrecht</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zivilrecht.map((item, idx) => (
                <div key={idx} className="bg-navy-50 rounded-lg p-6 border border-navy-100 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mr-4 flex-shrink-0" />
                  <span className="text-navy-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Wirtschaftsrecht */}
            <div>
              <h2 className="text-3xl font-serif text-navy-900 border-b-2 border-gold-500 pb-2 mb-8 inline-block">Wirtschaftsrecht</h2>
              <ul className="space-y-4">
                {wirtschaftsrecht.map((item, idx) => (
                  <li key={idx} className="flex items-center text-navy-700 bg-white shadow-sm border border-gray-100 p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-navy-900 mr-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strafrecht */}
            <div>
              <h2 className="text-3xl font-serif text-navy-900 border-b-2 border-gold-500 pb-2 mb-8 inline-block">Strafrecht</h2>
              <ul className="space-y-4">
                {strafrecht.map((item, idx) => (
                  <li key={idx} className="flex items-center text-navy-700 bg-white shadow-sm border border-gray-100 p-4 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-navy-900 mr-4 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
