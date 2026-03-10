import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy to-navy/95 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gold mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Parece que la página que buscas no existe. Es posible que haya sido movida o eliminada.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all"
          >
            <Home size={20} />
            Volver al inicio
          </Link>
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all"
          >
            Ver servicios
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <p className="text-white/60 text-sm mb-6">
            ¿Necesitas ayuda?
          </p>
          <Link
            href="/#contacto"
            className="text-gold hover:text-gold/80 font-semibold transition-colors"
          >
            Contáctanos →
          </Link>
        </div>
      </div>
    </main>
  );
}
