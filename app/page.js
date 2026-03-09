import Navbar from '../components/Navbar';
import ServiceGrid from '../components/ServiceGrid';

const values = [
  {
    title: 'Excelencia Jurídica',
    icon: '⚖️',
    text: 'Equipo experto en derecho empresarial con enfoque práctico para resolver retos complejos.',
    points: ['Abogados especialistas', 'Soluciones prácticas', 'Criterio preventivo']
  },
  {
    title: 'Compromiso y Cumplimiento',
    icon: '⏱️',
    text: 'Ejecución puntual, comunicación clara y seguimiento continuo de cada estrategia legal.',
    points: ['Plan de trabajo definido', 'Reportes periódicos', 'Acompañamiento continuo']
  },
  {
    title: 'Seguridad y Confidencialidad',
    icon: '🛡️',
    text: 'Protección de información sensible bajo protocolos estrictos y trazabilidad documental.',
    points: ['Canales seguros', 'Gestión documental', 'Reserva profesional']
  }
];

const trustMetrics = [
  { label: 'Atención personalizada', value: '1:1', detail: 'Un abogado responsable por cuenta.' },
  { label: 'Enfoque preventivo', value: '360°', detail: 'Visión legal integral del negocio.' },
  { label: 'Seguimiento continuo', value: 'Mensual', detail: 'Comités y reportes ejecutivos.' }
];

export default function HomePage() {
  return (
    <main id="inicio">
      <Navbar />

      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-gold/70 px-3 py-1 text-sm text-gold">
              Servicios Jurídicos Empresariales
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Asesoría legal estratégica para empresas que quieren crecer con seguridad.
            </h1>
            <p className="mt-5 max-w-xl text-white/85">
              Acompañamos a tu organización en cumplimiento normativo, gestión de riesgos y decisiones
              corporativas de alto impacto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-xl bg-gold px-6 py-3 font-semibold text-navy transition hover:brightness-95"
              >
                Agenda una consulta
              </a>
              <a
                href="#servicios"
                className="rounded-xl border border-white/60 px-6 py-3 font-semibold text-white"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <ul className="space-y-3 text-lg">
              <li>✔ Diagnóstico legal inicial</li>
              <li>✔ Plan de cumplimiento accionable</li>
              <li>✔ Reportes ejecutivos con seguimiento mensual</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="valores" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-soft md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Nuestra promesa</p>
              <h2 className="section-title mt-2">Nuestros valores</h2>
            </div>
            <p className="max-w-2xl text-slate-600">
              Trabajamos con estándares corporativos para que cada decisión legal sea clara, medible y segura.
            </p>
          </div>

          <div className="mt-6 grid gap-3 rounded-xl bg-paper p-4 sm:grid-cols-3 sm:auto-rows-fr">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="flex h-full flex-col justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
                <p className="text-xl font-bold text-navy">{metric.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{metric.label}</p>
                <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3 md:auto-rows-fr">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="value-card-appear group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-2xl"
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-2xl">
                  <span aria-hidden="true">{value.icon}</span>
                </div>
                <span className="text-sm font-bold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-navy">{value.title}</h3>
              <p className="mt-3 text-slate-700">{value.text}</p>
              {Array.isArray(value.points) && value.points.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-slate-600 md:mt-auto">
                  {value.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:justify-end">
          <a
            href="#contacto"
            className="rounded-lg border border-gold/60 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:bg-gold/10"
          >
            Conoce nuestra metodología
          </a>
        </div>
      </section>

      <ServiceGrid />

      <section id="contacto" className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="section-title">Contáctanos</h2>
          <p className="mt-4 text-lg text-slate-700">
            Cuéntanos tu caso y agenda una reunión de valoración con nuestro equipo legal.
          </p>
          <form className="mt-8 grid gap-4 text-left">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-gold transition focus:ring"
            />
            <input
              type="email"
              placeholder="Correo corporativo"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-gold transition focus:ring"
            />
            <textarea
              placeholder="¿Qué necesitas resolver?"
              rows="4"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-gold transition focus:ring"
            />
            <button
              type="button"
              className="rounded-xl bg-gold px-6 py-3 font-semibold text-navy transition hover:brightness-95"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
