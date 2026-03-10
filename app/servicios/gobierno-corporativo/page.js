import Link from 'next/link';
import { Briefcase, CheckCircle, Target, Users, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Gobierno Corporativo | Lex Iuridicus',
  description: 'Servicios de gobierno corporativo: estructuras societarias, protocolos de juntas, actas, alineación estratégica y responsabilidades fiduciarias.'
};

export default function CorporativoPage() {
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
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600/20">
              <Briefcase className="h-12 w-12 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Gobierno Corporativo
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/85">
              Diseñamos estructuras, juntas y actas alineadas a la estrategia empresarial para una dirección profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Nuestro servicio de <strong>Gobierno Corporativo</strong> está orientado a
            empresas que buscan institucionalizar la toma de decisiones, proteger a sus
            directivos y alinear los mecanismos de control con los objetivos estratégicos.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Qué ofrecemos?</h2>
            <p className="mt-4 text-lg text-slate-600">Estructuras de gobierno profesional y efectivo</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Estructuración y asesoría en conformación de consejos de administración.',
              'Redacción y adaptación de estatutos sociales.',
              'Elaboración de protocolos y actas de juntas ordinarias y extraordinarias.',
              'Definición de políticas de delegación de facultades y códigos de ética.',
              'Planes de contingencia y continuidad del negocio relacionados al gobierno.'
            ].map((item, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Beneficios clave</h2>
            <p className="mt-4 text-lg text-slate-600">Profesionalización y confianza institucional</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Transparencia total',
                description: 'Mecanismos claros que generan confianza en inversionistas y stakeholders.',
                icon: Target
              },
              {
                title: 'Decisiones estratégicas',
                description: 'Estructuras que facilitan la toma de decisiones responsable y efectiva.',
                icon: Users
              }
            ].map((benefit, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
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
          <div className="card bg-gradient-to-br from-blue-50 to-white border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy">¿A quién va dirigido?</h2>
            </div>
            <p className="text-lg text-slate-700 text-center leading-relaxed">
              A sociedades anónimas, familiares, startups con inversionistas y cualquier
              entidad que desee profesionalizar su estructura de dirección y control.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Cómo trabajamos?</h2>
            <p className="mt-4 text-lg text-slate-600">Enfoque integral y personalizado</p>
          </div>
          <div className="card">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Mediante un diagnóstico inicial de la organización, propuestas de mejora
              personalizadas, implementación de documentos jurídicos y acompañamiento
              continuo en las reuniones de órgano de administración.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Cada proyecto se entrega con manuales y formatos listos para su uso, además
              de capacitaciones a los miembros del consejo o asamblea.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-navy to-navy/90 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">¿Listo para profesionalizar tu gobierno corporativo?</h3>
            <p className="text-white/90 mb-6">Agenda una consulta y estructura una dirección efectiva.</p>
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
