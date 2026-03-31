'use client'

import { HeroSection } from '@/components/ui/HeroSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { Scale, Briefcase, Calculator, Building2, Car, Heart, Scroll } from 'lucide-react'

export default function Leistungen() {
  return (
    <>
      <HeroSection
        title="Unsere Leistungen"
        subtitle="Umfassende rechtliche Betreuung. Von der ersten Beratung bis zur gerichtlichen Durchsetzung."
      />

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Die Kompetenzfelder"
            subtitle="Wir bieten Expertise in vielfältigen Rechtsgebieten für Privatpersonen und Unternehmen."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Zivilrecht" description="Umfassende Beratung und Vertretung in allen Facetten des bürgerlichen Rechts." icon={Scale} href="/leistungen/rechtsgebiete" delay={0.1} />
            <ServiceCard title="Wirtschaftsrecht" description="Rechtliche Begleitung für Unternehmen, Startups und Freiberufler." icon={Briefcase} href="/leistungen/rechtsgebiete" delay={0.2} />
            <ServiceCard title="Strafrecht" description="Verteidigung in allgemeinen Strafsachen sowie im Wirtschaftsstrafrecht." icon={Scroll} href="/leistungen/rechtsgebiete" delay={0.3} />
            <ServiceCard title="Inkasso" description="Professionelles Forderungsmanagement und gerichtlich gestützte Durchsetzung." icon={Calculator} href="/leistungen/taetigkeitsbereiche" delay={0.4} />
            <ServiceCard title="Verkehrsrecht" description="Bußgeldsachen, Verkehrsstrafsachen und Schadensabwicklung." icon={Car} href="/leistungen/rechtsgebiete" delay={0.5} />
            <ServiceCard title="Arbeitsrecht" description="Beratung und Vertretung für Arbeitgeber und Arbeitnehmer." icon={Building2} href="/leistungen/rechtsgebiete" delay={0.6} />
          </div>
        </div>
      </section>
    </>
  )
}
