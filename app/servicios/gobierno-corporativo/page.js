import Link from 'next/link';
import { Briefcase, CheckCircle, Target, Users, ArrowLeft, Gavel, FileText, Handshake, Scale, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Gobierno Corporativo | Lex Iuridicus',
  description: 'Servicios de gobierno corporativo: estructuras societarias, protocolos de juntas, actas, alineación estratégica y responsabilidades fiduciarias.'
};

export default function CorporativoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section – más potente y visual */}
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
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-600/20 backdrop-blur-sm shadow-lg">
              <Briefcase className="h-14 w-14 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Gobierno Corporativo
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Profesionalizamos la dirección y control de tu empresa para decisiones estratégicas seguras y transparentes.
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
            { value: '100%', label: 'Alineación estratégica', icon: Target, color: 'blue' },
            { value: '0 conflictos', label: 'Gobierno transparente', icon: Gavel, color: 'amber' },
            { value: '360°', label: 'Control integral', icon: Scale, color: 'purple' }
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
            Estructuras de gobierno corporativo sólidas y adaptadas a tu realidad empresarial.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Conformación de consejos y comités',
              description: 'Asesoría en la creación y funcionamiento de consejos de administración y comités especializados.',
              icon: Users
            },
            {
              title: 'Redacción y actualización de estatutos',
              description: 'Elaboración y modificación de estatutos sociales alineados con la normativa vigente.',
              icon: FileText
            },
            {
              title: 'Protocolos y actas de juntas',
              description: 'Diseño de reglamentos y actas de juntas ordinarias y extraordinarias.',
              icon: Gavel
            },
            {
              title: 'Políticas de delegación y ética',
              description: 'Definición de códigos de ética, delegación de facultades y políticas internas.',
              icon: ShieldCheck
            },
            {
              title: 'Planes de continuidad y contingencia',
              description: 'Estrategias para asegurar la gobernanza ante cambios o crisis.',
              icon: Target
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <item.icon className="h-8 w-8 text-blue-600" />
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
      <section id="beneficios" className="bg-gradient-to-br from-white to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Beneficios clave</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Por qué las empresas eligen nuestro servicio de Gobierno Corporativo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Transparencia total', desc: 'Mecanismos claros que generan confianza en inversionistas y stakeholders.', icon: Users },
              { title: 'Decisiones estratégicas', desc: 'Estructuras que facilitan la toma de decisiones responsable y efectiva.', icon: Target },
              { title: 'Protección de directivos', desc: 'Reducción de responsabilidades personales mediante gobernanza adecuada.', icon: ShieldCheck },
              { title: 'Cumplimiento normativo', desc: 'Alineación con leyes societarias y mejores prácticas internacionales.', icon: CheckCircle },
              { title: 'Valor empresarial', desc: 'Aumento del valor de la empresa mediante profesionalización.', icon: Briefcase }
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para profesionalizar tu gobierno corporativo?</h2>
          <p className="text-xl text-white/90 mb-10">
            Agenda una consulta gratuita y estructura una dirección efectiva y segura.
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
