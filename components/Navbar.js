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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-white">
        <a href="#inicio" className="text-2xl font-bold tracking-wide">
          Lex Iuridicus
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-slate-500 px-3 py-1.5 text-sm md:hidden"
          aria-label="Abrir menú"
        >
          Menú
        </button>

        <nav className="hidden gap-8 md:flex">
          {links.map((item) => (
            <a key={item.href} href={item.href} className="font-semibold text-white/90 hover:text-gold">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="space-y-3 border-t border-slate-700 bg-navy px-4 py-4 md:hidden">
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
