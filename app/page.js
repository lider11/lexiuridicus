import Navbar from '../components/Navbar';
import ServiceGrid from '../components/ServiceGrid';

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

    {/* Métricas de confianza – se mantienen iguales */}
    <div className="mt-6 grid gap-3 rounded-xl bg-paper p-4 sm:grid-cols-3 sm:auto-rows-fr">
      {trustMetrics.map((metric) => (
        <div
          key={metric.label}
          className="flex h-full flex-col justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-center transition hover:shadow-md hover:border-gold/40"
        >
          <p className="text-xl font-bold text-navy">{metric.value}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{metric.label}</p>
          <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Tarjetas de valores – versión mejorada con iconos más grandes y hover interactivo */}
  <div className="mt-10 md:mt-16 grid gap-6 md:grid-cols-3">
    {values.map((value, index) => (
      <article
        key={value.title}
        className={`
          group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft
          transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-gold/60
          overflow-hidden value-card-appear
        `}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {/* Fondo gradiente sutil en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Icono grande centrado arriba */}
        <div className="mb-6 flex justify-center">
          <div className={`
            flex h-20 w-20 items-center justify-center rounded-2xl bg-gold/10 text-4xl
            transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110 group-hover:rotate-3
          `}>
            <span aria-hidden="true">{value.icon}</span>
          </div>
        </div>

        {/* Título y numeración */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-navy group-hover:text-gold transition-colors duration-500">
            {value.title}
          </h3>
          <span className="text-sm font-bold text-slate-300/80 group-hover:text-gold/70 transition-colors">
            0{index + 1}
          </span>
        </div>

        <p className="mt-2 text-slate-700 leading-relaxed">{value.text}</p>

        {/* Lista de puntos – se mantiene, pero con mejor espaciado */}
        {Array.isArray(value.points) && value.points.length > 0 && (
          <ul className="mt-6 space-y-3 text-sm text-slate-600 md:mt-auto">
            {value.points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Botón "Más info" que aparece en hover */}
        <div className="mt-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <a
            href="#contacto"
            className="inline-flex items-center rounded-lg bg-gold/90 px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold transition-colors shadow-sm"
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
      className="rounded-lg border border-gold/60 bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold/10 hover:border-gold"
    >
      Conoce nuestra metodología →
    </a>
  </div>
</section>