'use client';

import { useState } from 'react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Valores', href: '#valores' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-700 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-white">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/logo-lexiuridicus.svg"
            alt="Logo Lex Iuridicus"
            width="46"
            height="46"
            className="h-11 w-11 rounded-xl"
          />
          <span className="leading-tight">
            <span className="block text-xl font-bold tracking-wide md:text-2xl">Lex Iuridicus</span>
            <span className="hidden text-xs text-white/75 md:block">Servicios Jurídicos Empresariales</span>
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-slate-500 px-3 py-1.5 text-sm md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menú
        </button>

        <nav className="hidden gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-semibold text-white/90 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav id="mobile-menu" className="space-y-3 border-t border-slate-700 bg-navy px-4 py-4 md:hidden">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-base font-medium text-white/90"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
