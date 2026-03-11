import { Briefcase, ShieldCheck, Scale, Users } from 'lucide-react';

export const serviceFilters = ['Todos', 'Corporativo', 'Cumplimiento', 'Patrimonial', 'Societario'];

export const services = [
  {
    id: 1,
    category: 'Corporativo',
    title: 'Gobierno Corporativo',
    description: 'Diseñamos estructuras, juntas y actas alineadas a la estrategia empresarial.',
    icon: Briefcase,
    color: 'blue',
    detailPage: '/servicios/gobierno-corporativo',
    fullDescription: 'Explicación completa del servicio Gobierno Corporativo.'
  },
  {
    id: 2,
    category: 'Cumplimiento',
    title: 'Cumplimiento y Riesgos',
    description: 'Implementamos mapas normativos, controles internos y seguimiento legal.',
    icon: ShieldCheck,
    color: 'green',
    detailPage: '/servicios/cumplimiento',
    fullDescription: 'Detalles de Cumplimiento y Riesgos.'
  },
  {
    id: 3,
    category: 'Patrimonial',
    title: 'Protocolo de Familia',
    description: 'Acompañamos acuerdos familiares para continuidad patrimonial y de gestión.',
    icon: Scale,
    color: 'purple',
    detailPage: '/servicios/patrimonial',
    fullDescription: 'Protocolo de Familia en profundidad.'
  },
  {
    id: 4,
    category: 'Societario',
    title: 'Societario y Acciones',
    description: 'Constitución, reforma de estatutos y estructuración de pactos de accionistas.',
    icon: Users,
    color: 'amber',
    detailPage: '/servicios/societario',
    fullDescription: 'Societario y Acciones detallado.'
  }
];
