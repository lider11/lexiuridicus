import Link from 'next/link';
import { ShieldCheck, CheckCircle, Target, AlertTriangle, BookOpen, Users, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Cumplimiento y Gestión de Riesgos | Lex Iuridicus',
  description: 'Asesoría integral en cumplimiento normativo y gestión de riesgos legales: mapeo regulatorio, controles internos, prevención de sanciones y auditorías continuas.',
  openGraph: {
    title: 'Cumplimiento y Gestión de Riesgos | Lex Iuridicus',
    description: 'Protege tu empresa con estrategias preventivas de cumplimiento normativo y gestión integral de riesgos legales.',
    url: 'https://darkslateblue-sheep-899946.hostingersite.com/servicios/cumplimiento',
    type: 'website',
    siteName: 'Lex Iuridicus'
  },
  keywords: 'cumplimiento normativo, gestión de riesgos, controles internos, auditoría legal, prevención de sanciones'
};

export default function CumplimientoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section – más impactante */}
      <section className="bg-gradient-to-br from-navy to-navy/95 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="flex items-center justify-center mb-8">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={18} />
              Volver a servicios
            </Link>
          </div>

          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center space-x-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/60">/</li>
              <li>
                <Link href="/#servicios" className="hover:text-gold transition-colors">
                  Servicios
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/60">/</li>
              <li aria-current="page" className="text-gold">
                Cumplimiento y Riesgos
              </li>
            </ol>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-green-600/20 backdrop-blur-sm">
              <ShieldCheck className="h-14 w-14 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cumplimiento y Gestión de Riesgos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Protege tu empresa con estrategias preventivas, controles efectivos y seguimiento normativo continuo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-lg text-lg"
              >
                Agenda una consulta gratuita
                <span className="ml-3">→</span>
              </Link>
              <Link
                href="#beneficios"
                className="inline-flex items-center px-8 py-4 border border-white/40 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-lg"
              >
                Conoce los beneficios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Metrics */}
      <section className="mx-auto max-w-7xl px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: '100%', label: 'Cumplimiento normativo', icon: CheckCircle, color: 'green' },
            { value: '0 sanciones', label: 'Prevención efectiva', icon: AlertTriangle, color: 'red' },
            { value: '360°', label: 'Visión integral de riesgos', icon: Target, color: 'blue' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 text-center transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${stat.color}-100`}>
                <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
              </div>
              <p className="text-4xl font-bold text-navy mb-2">{stat.value}</p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section id="que-hacemos" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">¿Qué hacemos?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Implementamos sistemas robustos de cumplimiento y gestión de riesgos para mantener tu empresa segura y competitiva.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Diagnóstico normativo completo',
              description: 'Mapeamos todas las leyes, regulaciones y estándares aplicables a tu sector y operaciones.',
              icon: BookOpen,
              category: 'Análisis y Diagnóstico'
            },
            {
              title: 'Diseño de controles internos',
              description: 'Creamos políticas, procedimientos y controles efectivos para prevenir incumplimientos.',
              icon: ShieldCheck,
              category: 'Implementación'
            },
            {
              title: 'Auditorías y monitoreo continuo',
              description: 'Realizamos revisiones periódicas y establecemos sistemas de alerta temprana.',
              icon: Target,
              category: 'Monitoreo'
            },
            {
              title: 'Capacitación especializada',
              description: 'Entrenamos a tu equipo en cumplimiento normativo y gestión de riesgos.',
              icon: Users,
              category: 'Capacitación'
            },
            {
              title: 'Planes de contingencia',
              description: 'Desarrollamos protocolos de respuesta ante posibles incumplimientos o sanciones.',
              icon: AlertTriangle,
              category: 'Respuesta'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors">
                  <item.icon className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3">{item.category}</h4>
                  <p className="text-slate-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="bg-gradient-to-br from-white to-green-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Beneficios clave</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Por qué las empresas confían en nosotros para su cumplimiento y gestión de riesgos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Reducción de sanciones', desc: 'Minimizamos riesgos legales y económicos con prevención proactiva.', icon: ShieldCheck },
              { title: 'Reputación fortalecida', desc: 'Mejoramos la confianza de clientes, socios y reguladores.', icon: Users },
              { title: 'Eficiencia operativa', desc: 'Controles internos optimizados que facilitan el día a día.', icon: Target },
              { title: 'Cultura de cumplimiento', desc: 'Capacitamos a tu equipo para una gestión responsable.', icon: BookOpen },
              { title: 'Respuesta rápida', desc: 'Planes de contingencia listos ante cualquier eventualidad.', icon: AlertTriangle }
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-green-100 group-hover:bg-green-200 transition-colors">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-navy text-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para fortalecer tu cumplimiento?</h2>
          <p className="text-xl text-white/90 mb-10">
            Agenda una consulta gratuita y descubre cómo podemos proteger tu empresa.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center px-10 py-5 bg-gold text-navy font-semibold text-xl rounded-2xl hover:bg-gold/90 transition-all shadow-xl"
          >
            Contactar ahora
            <span className="ml-4">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}