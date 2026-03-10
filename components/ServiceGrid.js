'use client';

import { useMemo, useState } from 'react';

const services = [
  {
    id: 1,
    category: 'Corporativo',
    title: 'Gobierno Corporativo',
    description: 'Diseñamos estructuras, juntas y actas alineadas a la estrategia empresarial.'
  },
  {
    id: 2,
    category: 'Cumplimiento',
    title: 'Cumplimiento y Riesgos',
    description: 'Implementamos mapas normativos, controles internos y seguimiento legal.'
  },
  {
    id: 3,
    category: 'Patrimonial',
    title: 'Protocolo de Familia',
    description: 'Acompañamos acuerdos familiares para continuidad patrimonial y de gestión.'
  },
  {
    id: 4,
    category: 'Societario',
    title: 'Societario y Acciones',
    description: 'Constitución, reforma de estatutos y estructuración de pactos de accionistas.'
  }
];

const filters = ['Todos', ...new Set(services.map((item) => item.category))];

export default function ServiceGrid() {
  const [active, setActive] = useState('Todos');

  const filteredServices = useMemo(
    () => (active === 'Todos' ? services : services.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="section-title">Servicios destacados</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === filter
                  ? 'border-gold bg-gold text-navy'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-gold'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredServices.map((service) => (
          <article key={service.id} className="card flex flex-col">
            <p className="text-sm font-semibold text-gold">{service.category}</p>
            <h3 className="mt-3 text-xl font-bold text-navy">{service.title}</h3>
            <p className="mt-3 text-slate-700">{service.description}</p>
            <a
              href="#contacto"
              className="mt-6 inline-flex w-fit rounded-lg bg-gold px-4 py-2 font-semibold text-navy transition hover:brightness-95"
            >
              Solicitar asesoría
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
