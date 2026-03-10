'use client';

import { useMemo, useState } from 'react';
import { Briefcase, ShieldCheck, Scale, Users, X } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    category: 'Corporativo',
    title: 'Gobierno Corporativo',
    description: 'Diseñamos estructuras, juntas y actas alineadas a la estrategia empresarial.',
    icon: Briefcase,
    color: 'blue',
    detailPage: '/servicios/corporativo',
    fullDescription: 'Explicación completa del servicio: estructuras societarias, protocolos de juntas, actas, alineación estratégica, responsabilidades fiduciarias, etc.'
  },
  {
    id: 2,
    category: 'Cumplimiento',
    title: 'Cumplimiento y Riesgos',
    description: 'Implementamos mapas normativos, controles internos y seguimiento legal.',
    icon: ShieldCheck,
    color: 'green',
    detailPage: '/servicios/cumplimiento',
    fullDescription: 'Detalles de Cumplimiento y Riesgos: mapeo de normativas, controles internos, gestión de riesgos legales, auditorías, prevención de sanciones, etc.'
  },
  {
    id: 3,
    category: 'Patrimonial',
    title: 'Protocolo de Familia',
    description: 'Acompañamos acuerdos familiares para continuidad patrimonial y de gestión.',
    icon: Scale,
    color: 'purple',
    detailPage: '/servicios/patrimonial',
    fullDescription: 'Protocolo de Familia en profundidad: acuerdos sucesorios, continuidad patrimonial, gobernanza familiar, planificación hereditaria, protección de activos, etc.'
  },
  {
    id: 4,
    category: 'Societario',
    title: 'Societario y Acciones',
    description: 'Constitución, reforma de estatutos y estructuración de pactos de accionistas.',
    icon: Users,
    color: 'amber',
    detailPage: '/servicios/societario',
    fullDescription: 'Societario y Acciones detallado: constitución de sociedades, reformas estatutarias, pactos parasociales, derechos de accionistas, juntas generales, etc.'
  },
];

const filters = ['Todos', ...new Set(services.map((item) => item.category))];

export default function ServiceGrid() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(
    () => (activeFilter === 'Todos' ? services : services.filter(s => s.category === activeFilter)),
    [activeFilter]
  );

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy">Servicios destacados</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Soluciones legales especializadas para cada área clave de tu empresa.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-sm
                ${activeFilter === filter
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
                onClick={() => openModal(service)}
                className={`
                  group cursor-pointer relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 overflow-hidden
                  hover:shadow-2xl hover:border-${service.color}-300 hover:-translate-y-4
                  transition-all duration-500 ease-out
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-${service.color}-50/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
                `} />

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
                  <button className={`
                    inline-flex items-center px-6 py-3 bg-${service.color}-600 text-white font-medium 
                    rounded-lg hover:bg-${service.color}-700 transition-all duration-300 shadow-md
                    group-hover:scale-105
                  `}>
                    Ver más
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal centrado perfectamente */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm overflow-y-auto"
          onClick={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <div
              className={`
                relative bg-white rounded-2xl p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto
                shadow-2xl border border-${selectedService.color}-300 transform transition-all duration-300
                scale-100 opacity-100
              `}
              onClick={(e) => e.stopPropagation()} // Evita cerrar al clic dentro
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition p-2 rounded-full hover:bg-gray-100"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Icono grande */}
              <div className="flex justify-center mb-8">
                <div className={`
                p-6 rounded-full bg-${selectedService.color}-100/50
              `}>
                  <selectedService.icon className={`w-24 h-24 text-${selectedService.color}-600`} />
                </div>
              </div>

              {/* Título */}
              <h3 className={`text-3xl font-bold text-center mb-6 text-navy`}>
                {selectedService.title}
              </h3>

              {/* Descripción ampliada */}
              <p className="text-slate-700 text-lg leading-relaxed mb-8 text-center">
                {selectedService.fullDescription || selectedService.description}
              </p>

              {/* Botón para página detallada */}
              <div className="text-center">
                <Link
                  href={selectedService.detailPage}
                  className={`
                  inline-flex items-center px-8 py-4 bg-${selectedService.color}-600 text-white font-semibold 
                  rounded-lg hover:bg-${selectedService.color}-700 transition-all duration-300 shadow-lg
                  text-lg
                `}
                >
                  Ver detalles completos del servicio
                  <span className="ml-3">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}