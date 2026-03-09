import Navbar from '../components/Navbar';
import ServiceGrid from '../components/ServiceGrid';

// ← Agrega estas dos constantes aquí (exactamente así)
const values = [
  {
    title: 'Excelencia Jurídica',
    icon: '⚖️',
    text: 'Equipo experto en derecho empresarial con enfoque práctico para resolver retos complejos.',
    points: ['Abogados especialistas', 'Soluciones prácticas', 'Criterio preventivo']
  },
  {
    title: 'Compromiso y Cumplimiento',
    icon: '⏱️',
    text: 'Ejecución puntual, comunicación clara y seguimiento continuo de cada estrategia legal.',
    points: ['Plan de trabajo definido', 'Reportes periódicos', 'Acompañamiento continuo']
  },
  {
    title: 'Seguridad y Confidencialidad',
    icon: '🛡️',
    text: 'Protección de información sensible bajo protocolos estrictos y trazabilidad documental.',
    points: ['Canales seguros', 'Gestión documental', 'Reserva profesional']
  }
];

const trustMetrics = [
  {
    label: 'Atención personalizada',
    value: '1:1',
    detail: 'Un abogado responsable por cuenta.'
  },
  {
    label: 'Enfoque preventivo',
    value: '360°',
    detail: 'Visión legal integral del negocio.'
  },
  {
    label: 'Seguimiento continuo',
    value: 'Mensual',
    detail: 'Comités y reportes ejecutivos.'
  }
];

// ← El resto del código sigue igual (tu función HomePage o el return)
export default function HomePage() {
  return (
    <main id="inicio">
      <Navbar />

      {/* Hero/banner y otras secciones */}

      {/* Aquí va la sección #valores que me diste */}
      <section id="valores" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* ... todo el código de la sección que me diste ... */}
      </section>

      <ServiceGrid />

      {/* Contacto y footer */}
    </main>
  );
}