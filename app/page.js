import Navbar from '../components/Navbar';
import ServiceGrid from '../components/ServiceGrid';

const values = [
  {
    title: 'Excelencia Jurídica',
    text: 'Equipo experto en derecho empresarial con enfoque práctico para resolver retos complejos.'
  },
  {
    title: 'Compromiso y Cumplimiento',
    text: 'Ejecución puntual, comunicación clara y seguimiento continuo de cada estrategia legal.'
  },
  {
    title: 'Seguridad y Confidencialidad',
    text: 'Protección de información sensible bajo protocolos estrictos y trazabilidad documental.'
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
        <h2 className="section-title">Nuestros valores</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="card">
              <h3 className="text-2xl font-bold text-navy">{value.title}</h3>
              <p className="mt-4 text-slate-700">{value.text}</p>
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
