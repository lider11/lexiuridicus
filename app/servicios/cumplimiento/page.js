import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Cumplimiento y Riesgos | Lex Iuridicus',
  description: 'Servicios de cumplimiento y riesgos: mapeo normativo, controles internos, gestión de riesgos legales y prevención de sanciones.'
};

export default function CumplimientoPage() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ShieldCheck className="mx-auto w-16 h-16 text-green-600" />
          <h1 className="text-4xl font-bold text-navy mt-4">Cumplimiento y Riesgos</h1>
          <p className="mt-4 text-lg text-slate-600">
            Implementamos mapas normativos, controles internos y seguimiento legal.
          </p>
        </div>

        <article className="prose prose-lg mx-auto text-slate-700">
          <p>
            Nuestro servicio de <strong>Cumplimiento y Riesgos</strong> se enfoca en mantener a
            tu empresa alineada con las leyes y regulaciones aplicables, minimizando
            exposiciones legales y sanciones.
          </p>

          <h2>¿Qué hacemos?</h2>
          <ul>
            <li>Mapeo y actualización del marco normativo aplicable.</li>
            <li>Diseño de controles internos y políticas de gestión.</li>
            <li>Auditorías internas y seguimiento de procesos.</li>
            <li>Capacitaciones en materia de cumplimiento.</li>
            <li>Planes de acción ante incumplimientos y prevención de sanciones.</li>
          </ul>

          <h2>Beneficios</h2>
          <ul>
            <li>Reducción de riesgos legales y económicos.</li>
            <li>Mejora de la reputación institucional.</li>
            <li>Mayor confianza de clientes y socios comerciales.</li>
            <li>Cumplimiento de obligaciones contractuales y regulatorias.</li>
          </ul>

          <h2>Público objetivo</h2>
          <p>
            Empresas de todos los tamaños, especialmente aquellas sujetas a
            regulaciones estrictas o que operan en sectores de alto riesgo.
          </p>

          <h2>Metodología</h2>
          <p>
            Comenzamos con un diagnóstico normativo, establecemos controles y
            acompañamos su implementación mediante monitoreo y ajustes continuos.
          </p>
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            ← Volver a servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
