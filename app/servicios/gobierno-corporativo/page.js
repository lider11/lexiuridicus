import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Gobierno Corporativo | Lex Iuridicus',
  description: 'Servicios de gobierno corporativo: estructuras societarias, protocolos de juntas, actas, alineación estratégica y responsabilidades fiduciarias.'
};

export default function CorporativoPage() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Briefcase className="mx-auto w-16 h-16 text-blue-600" />
          <h1 className="text-4xl font-bold text-navy mt-4">Gobierno Corporativo</h1>
          <p className="mt-4 text-lg text-slate-600">
            Diseñamos estructuras, juntas y actas alineadas a la estrategia empresarial.
          </p>
        </div>

        <article className="prose prose-lg mx-auto text-slate-700">
          <p>
            Nuestro servicio de <strong>Gobierno Corporativo</strong> está orientado a
            empresas que buscan institucionalizar la toma de decisiones, proteger a sus
            directivos y alinear los mecanismos de control con los objetivos estratégicos.
          </p>

          <h2>¿Qué ofrecemos?</h2>
          <ul>
            <li>Estructuración y asesoría en conformación de consejos de administración.</li>
            <li>Redacción y adaptación de estatutos sociales.</li>
            <li>Elaboración de protocolos y actas de juntas ordinarias y extraordinarias.</li>
            <li>Definición de políticas de delegación de facultades y códigos de ética.</li>
            <li>Planes de contingencia y continuidad del negocio relacionados al gobierno.</li>
          </ul>

          <h2>Beneficios clave</h2>
          <ul>
            <li>Mayor transparencia y confianza para inversionistas.</li>
            <li>Mejor toma de decisiones y responsabilidad fiduciaria.</li>
            <li>Prevención de conflictos internos y disputas entre accionistas.</li>
            <li>Cumplimiento de obligaciones legales y regulatorias.</li>
          </ul>

          <h2>¿A quién va dirigido?</h2>
          <p>
            A sociedades anónimas, familiares, startups con inversionistas y cualquier
            entidad que desee profesionalizar su estructura de dirección y control.
          </p>

          <h2>¿Cómo trabajamos?</h2>
          <p>
            Mediante un diagnóstico inicial de la organización, propuestas de mejora
            personalizadas, implementación de documentos jurídicos y acompañamiento
            continuo en las reuniones de órgano de administración.
          </p>

          <p>
            Cada proyecto se entrega con manuales y formatos listos para su uso, además
            de capacitaciones a los miembros del consejo o asamblea.
          </p>
        </article>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            ← Volver a servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
