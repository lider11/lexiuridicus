'use client';

import { useState } from 'react';
import { Briefcase, ShieldCheck, Scale, Users, X } from './icons';
import Link from 'next/link';

const services = [
  {
    id: 1,
    category: 'Corporativo',
    title: 'Gobierno Corporativo',
    description: 'Diseñamos estructuras, juntas y actas alineadas a la estrategia empresarial.',
    icon: Briefcase,
    color: 'blue',
    detailPage: '/servicios/gobierno-corporativo',
    fullDescription: 'Explicación completa del servicio Gobierno Corporativo...'
  },
  {
    id: 2,
    category: 'Cumplimiento',
    title: 'Cumplimiento y Riesgos',
    description: 'Implementamos mapas normativos, controles internos y seguimiento legal.',
    icon: ShieldCheck,
    color: 'green',
    detailPage: '/servicios/cumplimiento',
    fullDescription: 'Detalles de Cumplimiento y Riesgos...'
  },
  {
    id: 3,
    category: 'Patrimonial',
    title: 'Protocolo de Familia',
    description: 'Acompañamos acuerdos familiares para continuidad patrimonial y de gestión.',
    icon: Scale,
    color: 'purple',
    detailPage: '/servicios/patrimonial',
    fullDescription: 'Protocolo de Familia en profundidad...'
  },
  {
    id: 4,
    category: 'Societario',
    title: 'Societario y Acciones',
    description: 'Constitución, reforma de estatutos y estructuración de pactos de accionistas.',
    icon: Users,
    color: 'amber',
    detailPage: '/servicios/societario',
    fullDescription: 'Societario y Acciones detallado...'
  },
];

export default function ServiceGrid() {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy">Servicios destacados</h2>
          <p className="mt-4 text-xl text-slate-600">Soluciones legales especializadas para cada área clave de tu empresa.</p>
        </div>

        {/* Tabs visuales (sin filtrado real) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Todos', 'Corporativo', 'Cumplimiento', 'Patrimonial', 'Societario'].map((filter) => (
            <button
              key={filter}
              className="px-6 py-3 rounded-full font-medium text-sm bg-white border-2 border-gold/50 text-navy hover:bg-gold hover:text-navy transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-pressed="false"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid siempre visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                onClick={() => openModal(service)}
                className={`
                  group cursor-pointer bg-white rounded-2xl p-8 shadow-lg border border-slate-100 
                  hover:shadow-2xl hover:-translate-y-4 hover:border-${service.color}-300
                  transition-all duration-500 ease-out
                `}
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-5 rounded-full bg-${service.color}-100/50 group-hover:bg-${service.color}-200/70 transition-all`}>
                    <Icon className={`w-14 h-14 text-${service.color}-600 group-hover:text-${service.color}-800 transition-colors`} />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold text-center mb-4 text-navy group-hover:text-${service.color}-700 transition-colors`}>
                  {service.title}
                </h3>
                <p className="text-slate-700 text-center">{service.description}</p>
                <div className="text-center mt-6">
                  <span className="text-gold font-medium cursor-pointer">Ver más →</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* MODAL CENTRADO EN TODA LA PANTALLA */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className={`
              relative bg-white rounded-3xl p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto
              shadow-2xl border border-gray-200 transform transition-all duration-300
            `}
            onClick={(e) => e.stopPropagation()} // Evita cerrar al clic dentro
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 transition p-2 rounded-full hover:bg-gray-100"
            >
              <X size={32} />
            </button>

            {/* Icono grande */}
            <div className="flex justify-center mb-8">
              <div className={`p-6 rounded-full bg-${selectedService.color}-100/50`}>
                <selectedService.icon className={`w-24 h-24 text-${selectedService.color}-600`} />
              </div>
            </div>

            {/* Título */}
            <h3 className={`text-4xl font-bold text-center mb-6 text-navy`}>
              {selectedService.title}
            </h3>

            {/* Descripción completa */}
            <p className="text-slate-700 text-lg leading-relaxed mb-10 text-center px-4">
              {selectedService.fullDescription || selectedService.description}
            </p>

            {/* Botón a página detallada */}
            <div className="flex justify-center">
              <Link
                href={selectedService.detailPage}
                className={`
                  inline-flex items-center px-10 py-5 bg-navy text-white font-semibold text-lg
                  rounded-2xl hover:bg-gray-900 transition-all duration-300 shadow-lg
                `}
              >
                Ver detalles completos del servicio
                <span className="ml-3">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}