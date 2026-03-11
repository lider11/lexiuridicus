import Link from 'next/link';

const quickLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Contacto', href: '/#contacto' }
];

const serviceLinks = [
  { label: 'Gobierno Corporativo', href: '/servicios/gobierno-corporativo' },
  { label: 'Cumplimiento y Riesgos', href: '/servicios/cumplimiento' },
  { label: 'Patrimonial y Protocolo de Familia', href: '/servicios/patrimonial' },
  { label: 'Societario y Acciones', href: '/servicios/societario' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <section>
          <h2 className="text-xl font-bold text-gold">Lex Iuridicus</h2>
          <p className="mt-3 max-w-md text-white/85">
            Asesoría jurídica empresarial para cumplimiento normativo, gobierno corporativo y gestión integral de riesgos.
          </p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold/90">Enlaces rápidos</h3>
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
