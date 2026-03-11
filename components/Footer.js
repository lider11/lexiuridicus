import Link from 'next/link';

const quickLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Valores', href: '/#valores' },
  { label: 'Contacto', href: '/#contacto' }
];

const serviceLinks = [
  { label: 'Gobierno Corporativo', href: '/servicios/gobierno-corporativo' },
  { label: 'Cumplimiento y Riesgos', href: '/servicios/cumplimiento' },
  { label: 'Patrimonial y Protocolo de Familia', href: '/servicios/patrimonial' },
  { label: 'Societario y Acciones', href: '/servicios/societario' }
];

const legalLinks = [
  { label: 'Política de privacidad', href: '/#contacto' },
  { label: 'Términos y condiciones', href: '/#contacto' },
  { label: 'Tratamiento de datos', href: '/#contacto' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gold/90">Consulta inicial</p>
            <h2 className="mt-2 text-2xl font-bold">¿Necesitas acompañamiento legal estratégico?</h2>
          </div>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 font-semibold text-navy transition hover:brightness-95"
          >
            Agendar consulta
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <section>
          <h3 className="text-2xl font-bold text-gold">Lex Iuridicus</h3>
          <p className="mt-4 max-w-md text-white/85">
            Asesoría jurídica empresarial para cumplimiento normativo, gobierno corporativo y gestión integral de riesgos.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/75">
            <p>📍 Bogotá, Colombia</p>
            <p>✉️ contacto@lexiuridicus.com</p>
            <p>📞 +57 300 000 0000</p>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold/90">Navegación</h3>
          <ul className="mt-4 space-y-2 text-white/90">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold/90">Servicios</h3>
          <ul className="mt-4 space-y-2 text-white/90">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold/90">Información legal</h3>
          <ul className="mt-4 space-y-2 text-white/90">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/70">
            Horario de atención: Lunes a Viernes · 8:00 a.m. – 6:00 p.m.
          </p>
        </section>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {year} Lex Iuridicus. Todos los derechos reservados.</p>
          <p>Servicios jurídicos empresariales con enfoque preventivo y estratégico.</p>
        </div>
      </div>
    </footer>
  );
}
