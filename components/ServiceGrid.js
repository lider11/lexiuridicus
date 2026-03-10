'use client';

import { useState } from 'react';
import { Briefcase, ShieldCheck, Scale, Users, X } from 'lucide-react';
import Link from 'next/link';

const colorStyles = {
  blue: {
    hoverBorder: 'hover:border-blue-300',
    iconBg: 'bg-blue-100/50 group-hover:bg-blue-200/70',
    iconText: 'text-blue-600 group-hover:text-blue-800',
    titleHover: 'group-hover:text-blue-700',
    modalIconBg: 'bg-blue-100/50',
    modalIconText: 'text-blue-600'
  },
  green: {
    hoverBorder: 'hover:border-green-300',
    iconBg: 'bg-green-100/50 group-hover:bg-green-200/70',
    iconText: 'text-green-600 group-hover:text-green-800',
    titleHover: 'group-hover:text-green-700',
    modalIconBg: 'bg-green-100/50',
    modalIconText: 'text-green-600'
  },
  purple: {
    hoverBorder: 'hover:border-purple-300',
    iconBg: 'bg-purple-100/50 group-hover:bg-purple-200/70',
    iconText: 'text-purple-600 group-hover:text-purple-800',
    titleHover: 'group-hover:text-purple-700',
    modalIconBg: 'bg-purple-100/50',
    modalIconText: 'text-purple-600'
  },
  amber: {
    hoverBorder: 'hover:border-amber-300',
    iconBg: 'bg-amber-100/50 group-hover:bg-amber-200/70',
    iconText: 'text-amber-600 group-hover:text-amber-800',
    titleHover: 'group-hover:text-amber-700',
    modalIconBg: 'bg-amber-100/50',
    modalIconText: 'text-amber-600'
  }
};

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
  }
];

export default function ServiceGrid() {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  const selectedStyle = selectedService ? colorStyles[selectedService.color] : null;

  return (
    <section id="servicios" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-navy md:text-5xl">Servicios destacados</h2>
          <p className="mt-4 text-xl text-slate-600">Soluciones legales especializadas para cada área clave de tu empresa.</p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {['Todos', 'Corporativo', 'Cumplimiento', 'Patrimonial', 'Societario'].map((filter) => (
            <button
              key={filter}
              className="rounded-full border-2 border-gold/50 bg-white px-6 py-3 text-sm font-medium text-navy transition-all hover:bg-gold hover:text-navy focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-pressed="false"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const serviceStyle = colorStyles[service.color];

            return (
              <article
                key={service.id}
                onClick={() => openModal(service)}
                className={`group cursor-pointer rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-2xl ${serviceStyle.hoverBorder}`}
              >
                <div className="mb-6 flex justify-center">
                  <div className={`rounded-full p-5 transition-all ${serviceStyle.iconBg}`}>
                    <Icon className={`h-14 w-14 transition-colors ${serviceStyle.iconText}`} />
                  </div>
                </div>
                <h3 className={`mb-4 text-center text-2xl font-bold text-navy transition-colors ${serviceStyle.titleHover}`}>
                  {service.title}
                </h3>
                <p className="text-center text-slate-700">{service.description}</p>
                <div className="mt-6 text-center">
                  <span className="cursor-pointer font-medium text-gold">Ver más →</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {selectedService && selectedStyle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalle de ${selectedService.title}`}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-gray-200 bg-white p-10 shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              aria-label="Cerrar detalle del servicio"
            >
              <X size={32} />
            </button>

            <div className="mb-8 flex justify-center">
              <div className={`rounded-full p-6 ${selectedStyle.modalIconBg}`}>
                <selectedService.icon className={`h-24 w-24 ${selectedStyle.modalIconText}`} />
              </div>
            </div>

            <h3 className="mb-6 text-center text-4xl font-bold text-navy">{selectedService.title}</h3>

            <p className="mb-10 px-4 text-center text-lg leading-relaxed text-slate-700">
              {selectedService.fullDescription || selectedService.description}
            </p>

            <div className="flex justify-center">
              <Link
                href={selectedService.detailPage}
                className="inline-flex items-center rounded-2xl bg-navy px-10 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-900"
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
