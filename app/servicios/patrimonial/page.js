import Link from 'next/link';
import { Scale, CheckCircle, Target, Users, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Protocolo de Familia | Lex Iuridicus',
  description: 'Servicios de protocolo de familia: acuerdos sucesorios, continuidad patrimonial y gobernanza familiar.'
};

export default function PatrimonialPage() {
  return (
    <main className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex items-center justify-center mb-6">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={16} />
              Volver a servicios
            </Link>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-600/20">
              <Scale className="h-12 w-12 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Protocolo de Familia
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/85">
              Acompañamos acuerdos familiares para continuidad patrimonial y de gestión, asegurando armonía entre generaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Nuestro servicio de <strong>Protocolo de Familia</strong> tiene como objetivo
            asegurar la armonía y la continuidad de los patrimonios familiares a través
            de acuerdos claros y estructuras de gobernanza.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Lo que ofrecemos</h2>
            <p className="mt-4 text-lg text-slate-600">Soluciones integrales para tu patrimonio familiar</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Diseño y redacción de protocolos familiares.',
              'Planes sucesorios y de reparto patrimonial.',
              'Asesoría en estructuras de gobierno y representación.',
              'Capacitaciones para órganos familiares de decisión.',
              'Soluciones para prevención de conflictos y disputas hereditarias.'
            ].map((item, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Ventajas</h2>
            <p className="mt-4 text-lg text-slate-600">Protección y armonía familiar</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Protección patrimonial',
                description: 'Aseguramos la continuidad del patrimonio a largo plazo con estrategias preventivas.',
                icon: Target
              },
              {
                title: 'Cohesión familiar',
                description: 'Fomentamos la claridad en roles y responsabilidades entre generaciones.',
                icon: Users
              }
            ].map((benefit, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors">
                    <benefit.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                    <p className="text-slate-700">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <div className="card bg-gradient-to-br from-purple-50 to-white border-purple-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy">Dirigido a</h2>
            </div>
            <p className="text-lg text-slate-700 text-center leading-relaxed">
              Familias empresarias, fideicomisos y cualquier grupo que desee planificar la
              sucesión patrimonial con un enfoque preventivo.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Cómo trabajamos</h2>
            <p className="mt-4 text-lg text-slate-600">Enfoque estructurado y personalizado</p>
          </div>
          <div className="card">
            <p className="text-lg text-slate-700 leading-relaxed">
              Empezamos con un diagnóstico familiar, proponemos alternativas y
              documentamos el protocolo con la participación de todas las partes.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-navy to-navy/90 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">¿Listo para planificar tu legado familiar?</h3>
            <p className="text-white/90 mb-6">Agenda una consulta y protege el futuro de tu familia.</p>
            <Link
              href="/#contacto"
              className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-xl hover:bg-gold/90 transition-colors shadow-lg"
            >
              Contactar ahora
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
