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
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Nuestra promesa</p>
            <h2 className="section-title mt-2">Nuestros valores</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            Trabajamos con estándares corporativos para que cada decisión legal sea clara, medible y segura.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-2xl">
                <span aria-hidden="true">{value.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-navy">{value.title}</h3>
              <p className="mt-3 text-slate-700">{value.text}</p>
              {Array.isArray(value.points) && value.points.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
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
