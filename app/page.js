import Navbar from '../components/Navbar';
import ServiceGrid from '../components/ServiceGrid';
import ContactForm from '../components/ContactForm';
import { trustMetrics, values } from '../data/home';

export default function HomePage() {
  return (
    <main id="inicio">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-50 rounded-md bg-gold px-4 py-2 font-semibold text-navy"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <section className="bg-navy text-white" aria-labelledby="hero-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-gold/70 px-3 py-1 text-sm text-gold">
              Servicios Jurídicos Empresariales
            </p>
            <h1 id="hero-heading" className="text-4xl font-bold leading-tight md:text-5xl">
              Asesoría legal estratégica para empresas que quieren crecer con seguridad.
            </h1>
            <p className="mt-5 max-w-xl text-white/85">
              Acompañamos a tu organización en cumplimiento normativo, gestión de riesgos y decisiones corporativas de alto impacto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="rounded-xl bg-gold px-6 py-3 font-semibold text-navy transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy">
                Agenda una consulta
              </a>
              <a href="#servicios" className="rounded-xl border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy">
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

      <section id="main-content" aria-label="Contenido principal">
        <section id="valores" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
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
                <div
                  key={metric.label}
                  className="flex h-full flex-col justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-center transition hover:border-gold/40 hover:shadow-md"
                >
                  <p className="text-xl font-bold text-navy">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{metric.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-4 hover:border-gold/60 hover:shadow-2xl value-card-appear"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gold/10 text-4xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-gold/20">
                    <span aria-hidden="true">{value.icon}</span>
                  </div>
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-navy transition-colors duration-500 group-hover:text-gold">
                    {value.title}
                  </h3>
                  <span className="text-sm font-bold text-slate-300/80 transition-colors group-hover:text-gold/70">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-2 leading-relaxed text-slate-700">{value.text}</p>

                {Array.isArray(value.points) && value.points.length > 0 && (
                  <ul className="mt-6 space-y-3 text-sm text-slate-600 md:mt-auto">
                    {value.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href="#contacto"
                    className="inline-flex items-center rounded-lg bg-gold/90 px-5 py-2.5 text-sm font-semibold text-navy shadow-sm transition-colors hover:bg-gold"
                  >
                    Más información
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center md:justify-end">
            <a
              href="#contacto"
              className="rounded-lg border border-gold/60 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-gold hover:bg-gold/10"
            >
              Conoce nuestra metodología →
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
            <ContactForm />
          </div>
        </section>
      </section>
    </main>
  );
}
