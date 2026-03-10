import Link from 'next/link';
import { Scale, CheckCircle, Target, Users, HeartHandshake, ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Protocolo de Familia | Lex Iuridicus',
  description: 'Servicios de protocolo de familia: acuerdos sucesorios, continuidad patrimonial, gobernanza familiar y prevención de conflictos hereditarios.'
};

export default function PatrimonialPage() {
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

          <div className="text-center max-w-4xl mx-auto">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-purple-600/20 backdrop-blur-sm shadow-lg">
              <Scale className="h-14 w-14 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protocolo de Familia
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Aseguramos la armonía familiar y la continuidad patrimonial a través de acuerdos claros y gobernanza efectiva.
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

      {/* Quick Stats / Impacto visual */}
      <section className="mx-auto max-w-7xl px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: '100%', label: 'Continuidad patrimonial', icon: Target, color: 'purple' },
            { value: '0 conflictos', label: 'Armonía familiar', icon: HeartHandshake, color: 'pink' },
            { value: '360°', label: 'Gobernanza integral', icon: Scale, color: 'blue' }
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

      {/* ¿Qué ofrecemos? */}
      <section id="que-ofrecemos" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">¿Qué ofrecemos?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Acuerdos claros y estructuras de gobernanza para proteger el patrimonio familiar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Redacción de protocolos familiares',
              description: 'Documentos personalizados que regulan la relación entre generaciones.',
              icon: FileText
            },
            {
              title: 'Planes sucesorios y reparto patrimonial',
              description: 'Estrategias para una transición ordenada y equitativa del patrimonio.',
              icon: Scale
            },
            {
              title: 'Estructuras de gobierno familiar',
              description: 'Consejos familiares, comités y reglas de toma de decisiones.',
              icon: Users
            },
            {
              title: 'Prevención y resolución de conflictos',
              description: 'Mecanismos para evitar disputas hereditarias y familiares.',
              icon: HeartHandshake
            },
            {
              title: 'Capacitación y acompañamiento continuo',
              description: 'Formación para miembros de la familia y seguimiento a largo plazo.',
              icon: CheckCircle
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <item.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="bg-gradient-to-br from-white to-purple-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Beneficios clave</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Por qué las familias empresarias confían en nuestro servicio de Protocolo de Familia.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Continuidad patrimonial', desc: 'Asegura que el patrimonio familiar se mantenga y crezca a través de generaciones.', icon: Target },
              { title: 'Armonía familiar', desc: 'Reduce conflictos mediante reglas claras y acuerdos consensuados.', icon: HeartHandshake },
              { title: 'Protección legal', desc: 'Minimiza riesgos de disputas sucesorias y demandas familiares.', icon: ShieldCheck },
              { title: 'Gobernanza efectiva', desc: 'Estructuras de decisión que equilibran familia y empresa.', icon: Users },
              { title: 'Valor a largo plazo', desc: 'Preserva y aumenta el valor del legado familiar y empresarial.', icon: Scale }
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-colors">
                    <benefit.icon className="h-8 w-8 text-purple-600" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para proteger tu legado familiar?</h2>
          <p className="text-xl text-white/90 mb-10">
            Agenda una consulta gratuita y diseña un protocolo que garantice armonía y continuidad.
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
