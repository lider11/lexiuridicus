import Link from 'next/link';
import { ShieldCheck, CheckCircle, Target, Users, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Cumplimiento y Riesgos | Lex Iuridicus',
  description: 'Servicios de cumplimiento y riesgos: mapeo normativo, controles internos, gestión de riesgos legales y prevención de sanciones.'
};

export default function CumplimientoPage() {
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
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-600/20">
              <ShieldCheck className="h-12 w-12 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Cumplimiento y Riesgos
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-white/85">
              Implementamos mapas normativos, controles internos y seguimiento legal para mantener tu empresa alineada con las regulaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            Nuestro servicio de <strong>Cumplimiento y Riesgos</strong> se enfoca en mantener a
            tu empresa alineada con las leyes y regulaciones aplicables, minimizando
            exposiciones legales y sanciones.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">¿Qué hacemos?</h2>
            <p className="mt-4 text-lg text-slate-600">Soluciones integrales para tu cumplimiento normativo</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Mapeo y actualización del marco normativo aplicable.',
              'Diseño de controles internos y políticas de gestión.',
              'Auditorías internas y seguimiento de procesos.',
              'Capacitaciones en materia de cumplimiento.',
              'Planes de acción ante incumplimientos y prevención de sanciones.'
            ].map((item, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Beneficios</h2>
            <p className="mt-4 text-lg text-slate-600">Valor tangible para tu organización</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Reducción de riesgos',
                description: 'Minimizamos exposiciones legales y económicas con estrategias preventivas.',
                icon: Target
              },
              {
                title: 'Reputación fortalecida',
                description: 'Mejoramos la confianza de clientes, socios y reguladores.',
                icon: Users
              }
            ].map((benefit, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors">
                    <benefit.icon className="h-8 w-8 text-green-600" />
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
          <div className="card bg-gradient-to-br from-green-50 to-white border-green-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy">Público objetivo</h2>
            </div>
            <p className="text-lg text-slate-700 text-center leading-relaxed">
              Empresas de todos los tamaños, especialmente aquellas sujetas a
              regulaciones estrictas o que operan en sectores de alto riesgo.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">Metodología</h2>
            <p className="mt-4 text-lg text-slate-600">Nuestro enfoque estructurado</p>
          </div>
          <div className="card">
            <p className="text-lg text-slate-700 leading-relaxed">
              Comenzamos con un diagnóstico normativo, establecemos controles y
              acompañamos su implementación mediante monitoreo y ajustes continuos.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card bg-gradient-to-r from-navy to-navy/90 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">¿Listo para fortalecer tu cumplimiento?</h3>
            <p className="text-white/90 mb-6">Agenda una consulta y conoce cómo podemos ayudarte.</p>
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
