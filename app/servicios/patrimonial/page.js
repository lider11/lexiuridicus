import Link from 'next/link';
import { Scale } from 'lucide-react';

export const metadata = {
  title: 'Protocolo de Familia | Lex Iuridicus',
  description: 'Servicios de protocolo de familia: acuerdos sucesorios, continuidad patrimonial y gobernanza familiar.'
};

export default function PatrimonialPage() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Scale className="mx-auto w-16 h-16 text-purple-600" />
          <h1 className="text-4xl font-bold text-navy mt-4">Protocolo de Familia</h1>
          <p className="mt-4 text-lg text-slate-600">
            Acompañamos acuerdos familiares para continuidad patrimonial y de gestión.
          </p>
        </div>

        <article className="prose prose-lg mx-auto text-slate-700">
          <p>
            Nuestro servicio de <strong>Protocolo de Familia</strong> tiene como objetivo
            asegurar la armonía y la continuidad de los patrimonios familiares a través
            de acuerdos claros y estructuras de gobernanza.
          </p>

          <h2>Lo que ofrecemos</h2>
          <ul>
            <li>Diseño y redacción de protocolos familiares.</li>
            <li>Planes sucesorios y de reparto patrimonial.</li>
            <li>Asesoría en estructuras de gobierno y representación.</li>
            <li>Capacitaciones para órganos familiares de decisión.</li>
            <li>Soluciones para prevención de conflictos y disputas hereditarias.</li>
          </ul>

          <h2>Ventajas</h2>
          <ul>
            <li>Protección del patrimonio a largo plazo.</li>
            <li>Claridad en roles y responsabilidades familiares.</li>
            <li>Reducción de riesgos de litigios internos.</li>
            <li>Cohesión entre generaciones.</li>
          </ul>

          <h2>Dirigido a</h2>
          <p>
            Familias empresarias, fideicomisos y cualquier grupo que desee planificar la
            sucesión patrimonial con un enfoque preventivo.
          </p>

          <h2>Cómo trabajamos</h2>
          <p>
            Empezamos con un diagnóstico familiar, proponemos alternativas y
            documentamos el protocolo con la participación de todas las partes.
          </p>
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            ← Volver a servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
