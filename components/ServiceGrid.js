'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { serviceFilters, services } from '../data/services';

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

const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ServiceGrid() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const modalRef = useRef(null);
  const openerRef = useRef(null);

  const filteredServices =
    activeFilter === 'Todos' ? services : services.filter((service) => service.category === activeFilter);

  const openModal = (service, event) => {
    openerRef.current = event.currentTarget;
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
    openerRef.current?.focus();
  };

  useEffect(() => {
    if (!selectedService || !modalRef.current) {
      return;
    }

    const modalNode = modalRef.current;
    const focusableElements = Array.from(modalNode.querySelectorAll(focusableSelector));
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }

      if (event.key === 'Tab' && focusableElements.length > 1) {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selectedService]);

  const selectedStyle = selectedService ? colorStyles[selectedService.color] : null;

  const selectedStyle = selectedService ? colorStyles[selectedService.color] : null;

  return (
    <section id="servicios" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-navy md:text-5xl">Servicios destacados</h2>
          <p className="mt-4 text-xl text-slate-600">Soluciones legales especializadas para cada área clave de tu empresa.</p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4" role="tablist" aria-label="Filtro de servicios">
          {serviceFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border-2 px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                activeFilter === filter
                  ? 'border-gold bg-gold text-navy'
                  : 'border-gold/50 bg-white text-navy hover:bg-gold/20'
              }`}
              aria-selected={activeFilter === filter}
              role="tab"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const serviceStyle = colorStyles[service.color];

            return (
              <article
                key={service.id}
                onClick={(event) => openModal(service, event)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openModal(service, event);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Abrir detalle de ${service.title}`}
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
                  <span className="font-medium text-gold">Ver más →</span>
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
          aria-labelledby="service-modal-title"
        >
          <div
            ref={modalRef}
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

            <h3 id="service-modal-title" className="mb-6 text-center text-4xl font-bold text-navy">
              {selectedService.title}
            </h3>

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
