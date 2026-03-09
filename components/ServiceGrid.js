'use client';

import { useMemo, useState } from 'react';
import { Briefcase, ShieldCheck, Scale, Users } from 'lucide-react'; // npm install lucide-react

const services = [
  {
    id: 1,
    category: 'Corporativo',
    title: 'Gobierno Corporativo',
    description: 'Diseñamos estructuras, juntas y actas alineadas a la estrategia empresarial.',
    icon: Briefcase,
    color: 'blue',
  },
  {
    id: 2,
    category: 'Cumplimiento',
    title: 'Cumplimiento y Riesgos',
    description: 'Implementamos mapas normativos, controles internos y seguimiento legal.',
    icon: ShieldCheck,
    color: 'green',
  },
  {
    id: 3,
    category: 'Patrimonial',
    title: 'Protocolo de Familia',
    description: 'Acompañamos acuerdos familiares para continuidad patrimonial y de gestión.',
    icon: Scale,
    color: 'purple',
  },
  {
    id: 4,
    category: 'Societario',
    title: 'Societario y Acciones',
    description: 'Constitución, reforma de estatutos y estructuración de pactos de accionistas.',
    icon: Users,
    color: 'amber',
  },
];

const filters = ['Todos', ...new Set(services.map((item) => item.category))];

export default function ServiceGrid() {
  const [active, setActive] = useState('Todos');

  const filteredServices = useMemo(
    () => (active === 'Todos' ? services : services.filter((item) => item.category === active)),
    [active]
  );

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy">Servicios destacados</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Soluciones legales especializadas para cada área clave de tu empresa.
          </p>
        </div>

        {/* Filtros / Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-sm
                ${active === filter
                  ? 'bg-gold text-navy shadow-lg scale-105 border-gold'
                  : 'bg-white text-navy border border-gold/30 hover:bg-gold/10 hover:border-gold hover:shadow-md hover:scale-102'}
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className={`
                  group relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 overflow-hidden
                  hover:shadow-2xl hover:border-${service.color}-300 hover:-translate-y-4
                  transition-all duration-500 ease-out
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Fondo gradiente sutil en hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-${service.color}-50/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                `} />

                {/* Icono */}
                <div className="flex justify-center mb-6">
                  <div className={`
                    p-5 rounded-full bg-${service.color}-100/50 group-hover:bg-${service.color}-200/70
                    transition-all duration-500 shadow-md group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <Icon className={`w-14 h-14 text-${service.color}-600 group-hover:text-${service.color}-800 transition-colors duration-500`} />
                  </div>
                </div>

                <h3 className={`text-2xl font-bold text-center mb-4 text-navy group-hover:text-${service.color}-700 transition-colors duration-500`}>
                  {service.title}
                </h3>

                <p className="text-slate-700 text-center leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="text-center mt-auto">
                  <a
                    href="#contacto"
                    className={`
                      inline-flex items-center px-6 py-3 bg-${service.color}-600 text-white font-medium 
                      rounded-lg hover:bg-${service.color}-700 transition-all duration-300 shadow-md
                      group-hover:scale-105
                    `}
                  >
                    Solicitar asesoría
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}