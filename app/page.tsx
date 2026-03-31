'use client'

import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Scale, Users, Building2, Briefcase, ChevronRight, PhoneCall, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Ihre starke Vertretung in München."
        subtitle="Seit vielen Jahren beraten und vertreten wir Privatpersonen sowie Unternehmen aus Industrie, Handel und Wirtschaft mit höchster juristischer Präzision."
        align="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link href="/kontakt/kanzlei" className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-md shadow-lg transition-colors flex items-center justify-center">
            Kanzlei kontaktieren
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/leistungen" className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-md shadow-lg border border-white/20 transition-colors flex items-center justify-center">
            Unsere Leistungen
          </Link>
        </div>
      </HeroSection>

      {/* Trust & Intro Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center text-gold-600 font-semibold tracking-wider uppercase text-sm mb-6">
                <span className="w-8 h-px bg-gold-500 mr-4" />
                Über die Kanzlei
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 leading-tight mb-8">
                LAQUA & KOLLEGEN
              </h2>
              <div className="prose prose-lg text-navy-600 prose-p:leading-relaxed">
                <p>
                  <strong>LAQUA & KOLLEGEN</strong> ist eine aus 111 Mitarbeitern bestehende Kanzlei mit Sitz in München.
                </p>
                <p>
                  Die Kanzlei berät und vertritt Privatpersonen sowie Unternehmen aus Industrie, Handel, Verlags- und Versicherungswesen. Die Leistungsbereiche umfassen sämtliche Rechtsgebiete des nationalen und internationalen Zivilrechts, des Wirtschaftsrechts und des Strafrechts.
                </p>
                <p>
                  Die Tätigkeitsbereiche der Kanzlei reichen von der Einzelberatung, über die projektbegleitende Beratung und Vertragsgestaltung, bis zur außergerichtlichen und gerichtlichen Durchsetzung bzw. Abwehr von Ansprüchen.
                </p>
                <p>
                  Weitere Eckpfeiler der Kanzlei sind die seit Jahren erfolgreiche Inkassoabteilung sowie die Rechtsberatung via E-mail und Telefon.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/philosophie" className="inline-flex items-center text-gold-600 font-bold hover:text-navy-900 transition-colors">
                  Unsere Philosophie kennenlernen
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Stats / Trust Signals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-navy-50 -my-12 -mx-8 lg:-mr-32 -z-10 rounded-l-3xl hidden lg:block" />

              <div className="bg-white p-8 rounded-xl shadow-lg shadow-navy-900/5 border border-gray-100 flex flex-col items-center text-center mt-0 sm:translate-y-12 transition-transform hover:-translate-y-2 hover:shadow-xl hover:border-gold-300 duration-300">
                <Users size={32} strokeWidth={1.5} className="text-gold-500 mb-4" />
                <div className="text-4xl font-serif font-bold text-navy-900 mb-2">111</div>
                <div className="text-navy-600 font-medium">Spezialisierte Mitarbeiter</div>
              </div>

              <div className="bg-navy-900 p-8 rounded-xl shadow-lg border border-navy-800 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
                <Scale size={32} strokeWidth={1.5} className="text-gold-500 mb-4" />
                <div className="text-4xl font-serif font-bold text-white mb-2">100%</div>
                <div className="text-navy-200 font-medium">Voller Fokus auf Ihr Recht</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg shadow-navy-900/5 border border-gray-100 flex flex-col items-center text-center mt-0 sm:translate-y-12 transition-transform hover:-translate-y-2 hover:shadow-xl hover:border-gold-300 duration-300">
                <Briefcase size={32} strokeWidth={1.5} className="text-gold-500 mb-4" />
                <div className="text-2xl font-serif font-bold text-navy-900 mb-2 whitespace-nowrap">National & Int.</div>
                <div className="text-navy-600 font-medium">Zivil- und Wirtschaftsrecht</div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg shadow-navy-900/5 border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-xl hover:border-gold-300 duration-300">
                <Building2 size={32} strokeWidth={1.5} className="text-gold-500 mb-4" />
                <div className="text-2xl font-serif font-bold text-navy-900 mb-2">München</div>
                <div className="text-navy-600 font-medium">Kanzleisitz im Herzen der Stadt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Spezialisierte Rechtsdienstleistungen"
            subtitle="Unsere Expertise deckt alle wesentlichen Rechtsbereiche für Privat- und Mandanten aus der Wirtschaft."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              title="Zivil- & Wirtschaftsrecht"
              description="Nationales und internationales Recht. Von der Einzelberatung bis zur projektbegleitenden Vertragsgestaltung."
              icon={Scale}
              href="/leistungen/rechtsgebiete"
              delay={0.1}
            />
            <ServiceCard
              title="Rechtsberatung via Mail/Telefon"
              description="Schnelle und unkomplizierte Ersteinschätzung durch unsere telefonische oder auf E-Mail basierte Beratung."
              icon={PhoneCall}
              href="/telefonische-rechtsberatung"
              delay={0.2}
            />
            <ServiceCard
              title="Erfolgreiches Inkasso"
              description="Unsere seit Jahren erfolgreiche Inkassoabteilung übernimmt die gerichtlich gestützte Durchsetzung Ihrer Ansprüche."
              icon={Building2}
              href="/leistungen/taetigkeitsbereiche"
              delay={0.3}
            />
          </div>

          <div className="flex justify-center">
            <Link href="/leistungen" className="px-8 py-3 bg-white border border-gray-200 text-navy-900 hover:text-gold-600 font-semibold rounded-md shadow-sm transition-all flex items-center group">
              Alle Leistungen entdecken
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
