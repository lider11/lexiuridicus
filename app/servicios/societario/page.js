import Link from 'next/link';
import { Users } from 'lucide-react';

export const metadata = {
    title: 'Societario y Acciones | Lex Iuridicus',
    description: 'Servicios societarios: constitución, reforma de estatutos y estructuración de pactos de accionistas.'
};

export default function SocietarioPage() {
    return (
        <section className="py-20 bg-gray-50 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Users className="mx-auto w-16 h-16 text-amber-600" />
                    <h1 className="text-4xl font-bold text-navy mt-4">Societario y Acciones</h1>
                    <p className="mt-4 text-lg text-slate-600">
                        Constitución, reforma de estatutos y estructuración de pactos de accionistas.
                    </p>
                </div>

                <article className="prose prose-lg mx-auto text-slate-700">
                    <p>
                        Nuestro servicio de <strong>Societario y Acciones</strong> ofrece apoyo legal completo
                        para la constitución y modificación de sociedades, así como la creación de
                        acuerdos entre accionistas.
                    </p>

                    <h2>Qué cubrimos</h2>
                    <ul>
                        <li>Constitución y registro de sociedades.</li>
                        <li>Reformas estatutarias y inscripciones.</li>
                        <li>Redacción de pactos de accionistas y cláusulas de salida.</li>
                        <li>Asesoría en juntas generales y capital social.</li>
                        <li>Due diligence para fusiones y adquisiciones.</li>
                    </ul>

                    <h2>Beneficios</h2>
                    <ul>
                        <li>Seguridad jurídica en la estructura societaria.</li>
                        <li>Claridad en los derechos y obligaciones de accionistas.</li>
                        <li>Mayor facilidad para atraer inversores.</li>
                        <li>Cumplimiento regulatorio y transparencia.</li>
                    </ul>

                    <h2>Dirigido a</h2>
                    <p>
                        Startups, empresas en crecimiento, grupos familiares y cualquier ente que requiera
                        ordenamiento societario eficaz.
                    </p>

                    <h2>Nuestro método</h2>
                    <p>
                        Realizamos análisis de la situación actual, proponemos mejoras y ejecutamos los
                        cambios con documentación formal y asesoría continua.
                    </p>
                </article>

                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg shadow hover:bg-amber-700 transition"
                    >
                        ← Volver a servicios
                    </Link>
                </div>
            </div>
        </section>
    );
}
