import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  CheckCircle,
  FileText,
  Gavel,
  Handshake,
  Scale,
  ShieldCheck,
  Target,
  Users
} from 'lucide-react';

export const servicePages = {
  cumplimiento: {
    slug: 'cumplimiento',
    title: 'Cumplimiento y Gestión de Riesgos',
    shortTitle: 'Cumplimiento y Riesgos',
    description: 'Protege tu empresa con estrategias preventivas, controles efectivos y seguimiento normativo continuo.',
    icon: ShieldCheck,
    accent: 'green',
    servicesTitle: '¿Qué incluye este servicio?',
    benefitsTitle: 'Beneficios clave',
    ctaTitle: '¿Listo para fortalecer tu cumplimiento legal?',
    ctaDescription: 'Agenda una consulta y recibe un plan accionable para prevenir contingencias regulatorias.',
    includes: [
      { title: 'Mapeo normativo por industria', description: 'Identificamos obligaciones legales críticas y su impacto operativo.', icon: BookOpen },
      { title: 'Matriz de riesgos legales', description: 'Priorizamos riesgos por probabilidad, impacto y controles actuales.', icon: AlertTriangle },
      { title: 'Diseño de controles internos', description: 'Definimos protocolos, responsables y evidencias para auditoría.', icon: CheckCircle },
      { title: 'Capacitación a equipos clave', description: 'Alineamos áreas jurídicas, administrativas y de negocio.', icon: Users }
    ],
    benefits: [
      { title: 'Prevención de sanciones', desc: 'Anticipa incumplimientos antes de que generen multas o litigios.', icon: ShieldCheck },
      { title: 'Mayor control ejecutivo', desc: 'Reportes claros para comité de gerencia y junta directiva.', icon: Target },
      { title: 'Cultura de cumplimiento', desc: 'Procesos claros y medibles para sostener mejoras en el tiempo.', icon: CheckCircle }
    ],
    metadata: {
      title: 'Cumplimiento y Gestión de Riesgos | Lex Iuridicus',
      description: 'Asesoría integral en cumplimiento normativo y gestión de riesgos legales para empresas.',
      openGraph: {
        title: 'Cumplimiento y Gestión de Riesgos | Lex Iuridicus',
        description: 'Protege tu empresa con estrategias preventivas de cumplimiento normativo.',
        url: 'https://darkslateblue-sheep-899946.hostingersite.com/servicios/cumplimiento',
        type: 'website',
        siteName: 'Lex Iuridicus'
      },
      keywords: 'cumplimiento normativo, gestión de riesgos, auditoría legal empresarial'
    }
  },
  'gobierno-corporativo': {
    slug: 'gobierno-corporativo',
    title: 'Gobierno Corporativo',
    shortTitle: 'Gobierno Corporativo',
    description: 'Profesionalizamos la dirección y control de tu empresa para decisiones estratégicas seguras.',
    icon: Briefcase,
    accent: 'blue',
    servicesTitle: '¿Qué incluye este servicio?',
    benefitsTitle: 'Beneficios clave',
    ctaTitle: '¿Quieres fortalecer tu gobierno corporativo?',
    ctaDescription: 'Estructura tus órganos de decisión con lineamientos jurídicos y estratégicos claros.',
    includes: [
      { title: 'Diseño de estructura de gobierno', description: 'Definimos roles de junta, comités y administración.', icon: Gavel },
      { title: 'Protocolos de juntas y actas', description: 'Estandarizamos convocatorias, quórums y seguimiento de decisiones.', icon: FileText },
      { title: 'Pactos de accionistas', description: 'Protegemos derechos, salida ordenada y gobierno de conflictos.', icon: Handshake },
      { title: 'Acompañamiento a directivos', description: 'Soporte jurídico continuo para decisiones de alto impacto.', icon: Users }
    ],
    benefits: [
      { title: 'Decisiones más seguras', desc: 'Menos contingencias por vacíos en procesos societarios.', icon: ShieldCheck },
      { title: 'Transparencia directiva', desc: 'Trazabilidad en acuerdos y responsabilidades.', icon: CheckCircle },
      { title: 'Alineación estratégica', desc: 'Órganos de gobierno orientados al crecimiento del negocio.', icon: Target }
    ],
    metadata: {
      title: 'Gobierno Corporativo | Lex Iuridicus',
      description: 'Servicios de gobierno corporativo para estructuras de control y alineación estratégica.',
      openGraph: {
        title: 'Gobierno Corporativo | Lex Iuridicus',
        description: 'Profesionalizamos la dirección y control de tu empresa.',
        url: 'https://darkslateblue-sheep-899946.hostingersite.com/servicios/gobierno-corporativo',
        type: 'website',
        siteName: 'Lex Iuridicus'
      },
      keywords: 'gobierno corporativo, consejo de administración, estructuras de control'
    }
  },
  patrimonial: {
    slug: 'patrimonial',
    title: 'Protocolo de Familia',
    shortTitle: 'Protocolo de Familia',
    description: 'Aseguramos la armonía familiar y la continuidad patrimonial con acuerdos claros.',
    icon: Scale,
    accent: 'purple',
    servicesTitle: '¿Qué incluye este servicio?',
    benefitsTitle: 'Beneficios clave',
    ctaTitle: '¿Buscas proteger la continuidad patrimonial?',
    ctaDescription: 'Construimos acuerdos familiares sostenibles para preservar empresa y patrimonio.',
    includes: [
      { title: 'Diagnóstico familiar y empresarial', description: 'Identificamos intereses, riesgos y reglas necesarias.', icon: Users },
      { title: 'Protocolo y reglas de sucesión', description: 'Definimos mecanismos de relevo y toma de decisiones.', icon: FileText },
      { title: 'Acuerdos patrimoniales', description: 'Estructuramos reglas sobre propiedad, dividendos y participación.', icon: Handshake },
      { title: 'Plan de implementación', description: 'Acompañamos la adopción progresiva del protocolo.', icon: CheckCircle }
    ],
    benefits: [
      { title: 'Continuidad del negocio', desc: 'Evita crisis de sucesión o bloqueos en gobierno familiar.', icon: ShieldCheck },
      { title: 'Menos conflictos', desc: 'Reglas claras para decisiones sensibles entre familiares.', icon: Target },
      { title: 'Visión de largo plazo', desc: 'Patrimonio protegido con enfoque intergeneracional.', icon: Scale }
    ],
    metadata: {
      title: 'Protocolo de Familia | Lex Iuridicus',
      description: 'Asesoría en protocolos familiares para continuidad empresarial y patrimonial.',
      openGraph: {
        title: 'Protocolo de Familia | Lex Iuridicus',
        description: 'Asegura armonía familiar y sostenibilidad patrimonial.',
        url: 'https://darkslateblue-sheep-899946.hostingersite.com/servicios/patrimonial',
        type: 'website',
        siteName: 'Lex Iuridicus'
      },
      keywords: 'protocolo de familia, continuidad patrimonial, sucesión empresarial'
    }
  },
  societario: {
    slug: 'societario',
    title: 'Societario y Acciones',
    shortTitle: 'Societario y Acciones',
    description: 'Constitución, reforma de estatutos y estructuración de pactos para una empresa sólida.',
    icon: Users,
    accent: 'amber',
    servicesTitle: '¿Qué incluye este servicio?',
    benefitsTitle: 'Beneficios clave',
    ctaTitle: '¿Listo para fortalecer tu estructura societaria?',
    ctaDescription: 'Agenda una consulta y diseña una base societaria robusta para crecer con seguridad.',
    includes: [
      { title: 'Constitución y registro de sociedades', description: 'Asesoría integral en tipo societario y formalización.', icon: FileText },
      { title: 'Reformas estatutarias', description: 'Actualizamos estatutos de acuerdo con tu estrategia.', icon: Gavel },
      { title: 'Pactos entre accionistas', description: 'Reglas para gobierno, inversión, salida y resolución de conflictos.', icon: Handshake },
      { title: 'Due diligence societaria', description: 'Revisión legal para inversión, compra o reorganización.', icon: Scale }
    ],
    benefits: [
      { title: 'Seguridad jurídica', desc: 'Estructuras sólidas y alineadas con la normatividad vigente.', icon: ShieldCheck },
      { title: 'Atracción de inversión', desc: 'Pactos y gobierno claros para generar confianza en terceros.', icon: Target },
      { title: 'Cumplimiento continuo', desc: 'Soporte permanente para juntas y decisiones societarias.', icon: CheckCircle }
    ],
    metadata: {
      title: 'Asesoría Societaria y Acciones | Lex Iuridicus',
      description: 'Asesoría integral en derecho societario para empresas en crecimiento.',
      openGraph: {
        title: 'Asesoría Societaria y Acciones | Lex Iuridicus',
        description: 'Constitución, reforma de estatutos y pactos para empresas sólidas.',
        url: 'https://darkslateblue-sheep-899946.hostingersite.com/servicios/societario',
        type: 'website',
        siteName: 'Lex Iuridicus'
      },
      keywords: 'derecho societario, pactos de accionistas, reforma estatutaria'
    }
  }
};
