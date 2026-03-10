import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const accentStyles = {
  blue: {
    heroIconBg: 'bg-blue-600/20',
    heroIconText: 'text-blue-400',
    sectionBg: 'from-white to-blue-50',
    cardBorder: 'border-blue-100',
    cardIconBg: 'bg-blue-100 group-hover:bg-blue-200',
    cardIconText: 'text-blue-600',
    benefitBorder: 'border-blue-100'
  },
  green: {
    heroIconBg: 'bg-green-600/20',
    heroIconText: 'text-green-400',
    sectionBg: 'from-white to-green-50',
    cardBorder: 'border-green-100',
    cardIconBg: 'bg-green-100 group-hover:bg-green-200',
    cardIconText: 'text-green-600',
    benefitBorder: 'border-green-100'
  },
  purple: {
    heroIconBg: 'bg-purple-600/20',
    heroIconText: 'text-purple-400',
    sectionBg: 'from-white to-purple-50',
    cardBorder: 'border-purple-100',
    cardIconBg: 'bg-purple-100 group-hover:bg-purple-200',
    cardIconText: 'text-purple-600',
    benefitBorder: 'border-purple-100'
  },
  amber: {
    heroIconBg: 'bg-amber-600/20',
    heroIconText: 'text-amber-400',
    sectionBg: 'from-white to-amber-50',
    cardBorder: 'border-amber-100',
    cardIconBg: 'bg-amber-100 group-hover:bg-amber-200',
    cardIconText: 'text-amber-600',
    benefitBorder: 'border-amber-100'
  }
};

export default function ServicePageTemplate({ service }) {
  const styles = accentStyles[service.accent];
  const HeroIcon = service.icon;

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-navy to-navy/95 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="mb-8 flex items-center justify-center">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white/90 transition-all hover:bg-white/10"
            >
              <ArrowLeft size={18} />
              Volver a servicios
            </Link>
          </div>

          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center space-x-2 text-sm text-white/80">
              <li><Link href="/" className="transition-colors hover:text-gold">Inicio</Link></li>
              <li aria-hidden="true" className="text-white/60">/</li>
              <li><Link href="/#servicios" className="transition-colors hover:text-gold">Servicios</Link></li>
              <li aria-hidden="true" className="text-white/60">/</li>
              <li aria-current="page" className="text-gold">{service.shortTitle}</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            <div className={`mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl backdrop-blur-sm ${styles.heroIconBg}`}>
              <HeroIcon className={`h-14 w-14 ${styles.heroIconText}`} />
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-white/90 md:text-2xl">{service.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#contacto" className="inline-flex items-center rounded-xl bg-gold px-8 py-4 text-lg font-semibold text-navy shadow-lg transition-all hover:bg-gold/90">
                Agenda una consulta gratuita <span className="ml-3">→</span>
              </Link>
              <Link href="#beneficios" className="inline-flex items-center rounded-xl border border-white/40 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/10">
                Conoce los beneficios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-navy md:text-5xl">{service.servicesTitle}</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {service.includes.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className={`group rounded-2xl border bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.cardBorder}`}>
                  <div className="flex items-start gap-5">
                    <div className={`rounded-xl p-4 transition-colors ${styles.cardIconBg}`}>
                      <ItemIcon className={`h-8 w-8 ${styles.cardIconText}`} />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-navy">{item.title}</h3>
                      <p className="leading-relaxed text-slate-700">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="beneficios" className={`bg-gradient-to-br ${styles.sectionBg} py-20`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-navy md:text-5xl">{service.benefitsTitle}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={benefit.title} className={`group rounded-2xl border bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.benefitBorder}`}>
                  <div className="flex items-start gap-5">
                    <div className={`rounded-xl p-4 transition-colors ${styles.cardIconBg}`}>
                      <BenefitIcon className={`h-8 w-8 ${styles.cardIconText}`} />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-navy">{benefit.title}</h3>
                      <p className="leading-relaxed text-slate-700">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">{service.ctaTitle}</h2>
          <p className="mb-10 text-xl text-white/90">{service.ctaDescription}</p>
          <Link href="/#contacto" className="inline-flex items-center rounded-2xl bg-gold px-10 py-5 text-xl font-semibold text-navy shadow-xl transition-all hover:bg-gold/90">
            Contactar ahora <span className="ml-4">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
