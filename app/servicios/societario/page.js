import Link from 'next/link';
import { Users, Gavel, FileText, Handshake, Scale, CheckCircle, Target, ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Societario y Acciones | Lex Iuridicus',
    description: 'Servicios societarios: constitución de sociedades, reforma de estatutos, pactos de accionistas y estructuración de capital.'
};

export default function SocietarioPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section – más potente */}
            <section className="bg-gradient-to-br from-navy to-navy/95 text-white">
                <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
                    <div className="flex items-center justify-center mb-8">
                        <Link
                            href="/#servicios"
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 transition-all"
                        >
                            <ArrowLeft size={18} />
                            Volver a servicios
                        </Link>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-amber-600/20 backdrop-blur-sm shadow-lg">
                            <Users className="h-14 w-14 text-amber-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Societario y Acciones
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Constitución, reforma de estatutos y estructuración de pactos para una empresa sólida y atractiva para inversores.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="#contacto"
                                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-semibold rounded-xl hover:bg-gold/90 transition-all shadow-lg text-lg"
                            >
                                Agenda una consulta gratuita
                                <span className="ml-3">→</span>
                            </Link>
                            <Link
                                href="#beneficios"
                                className="inline-flex items-center px-8 py-4 border border-white/40 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-lg"
                            >
                                Conoce los beneficios
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats / Impacto visual */}
            <section className="mx-auto max-w-7xl px-4 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { value: '100%', label: 'Estructura sólida', icon: Gavel, color: 'amber' },
                        { value: '0 conflictos', label: 'Pactos claros', icon: Handshake, color: 'green' },
                        { value: '360°', label: 'Control total', icon: Target, color: 'blue' }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 text-center transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${stat.color}-100`}>
                                <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                            </div>
                            <p className="text-4xl font-bold text-navy mb-2">{stat.value}</p>
                            <p className="text-slate-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ¿Qué ofrecemos? */}
            <section id="que-ofrecemos" className="mx-auto max-w-7xl px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">¿Qué ofrecemos?</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Apoyo legal completo para la vida societaria de tu empresa.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: 'Constitución y registro de sociedades',
                            description: 'Asesoría completa para crear sociedades anónimas, limitadas y otros tipos societarios.',
                            icon: FileText
                        },
                        {
                            title: 'Reformas estatutarias y modificaciones',
                            description: 'Redacción y registro de cambios en estatutos, aumento/reducción de capital.',
                            icon: Gavel
                        },
                        {
                            title: 'Pactos de accionistas y parasociales',
                            description: 'Estructuración de acuerdos entre socios para proteger derechos y salida ordenada.',
                            icon: Handshake
                        },
                        {
                            title: 'Asesoría en juntas y órganos de administración',
                            description: 'Preparación de convocatorias, actas y cumplimiento de formalidades.',
                            icon: Users
                        },
                        {
                            title: 'Due diligence societaria',
                            description: 'Revisión legal para fusiones, adquisiciones o entrada de nuevos socios.',
                            icon: Scale
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-5">
                                <div className="p-4 rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors">
                                    <item.icon className="h-8 w-8 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                                    <p className="text-slate-700 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Beneficios */}
            <section id="beneficios" className="bg-gradient-to-br from-white to-amber-50 py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Beneficios clave</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Por qué las empresas eligen nuestro servicio de Societario y Acciones.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: 'Seguridad jurídica', desc: 'Estructuras societarias sólidas y alineadas con la ley.', icon: ShieldCheck },
                            { title: 'Atracción de inversores', desc: 'Pactos claros que generan confianza y facilitan rondas de inversión.', icon: Target },
                            { title: 'Claridad entre socios', desc: 'Acuerdos que evitan conflictos y protegen derechos.', icon: Handshake },
                            { title: 'Cumplimiento continuo', desc: 'Asesoría permanente en juntas y modificaciones.', icon: CheckCircle },
                            { title: 'Flexibilidad estratégica', desc: 'Estructuras adaptables a crecimiento y cambios.', icon: Scale }
                        ].map((benefit, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="p-4 rounded-xl bg-amber-100 group-hover:bg-amber-200 transition-colors">
                                        <benefit.icon className="h-8 w-8 text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                                        <p className="text-slate-700 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="bg-navy text-white py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para fortalecer tu estructura societaria?</h2>
                    <p className="text-xl text-white/90 mb-10">
                        Agenda una consulta gratuita y construye una sociedad sólida y atractiva para el futuro.
                    </p>
                    <Link
                        href="/#contacto"
                        className="inline-flex items-center px-10 py-5 bg-gold text-navy font-semibold text-xl rounded-2xl hover:bg-gold/90 transition-all shadow-xl"
                    >
                        Contactar ahora
                        <span className="ml-4">→</span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
