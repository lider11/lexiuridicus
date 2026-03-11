import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Lex Iuridicus | Servicios Jurídicos Empresariales',
  description:
    'Asesoría jurídica empresarial para cumplimiento, gobierno corporativo y gestión de riesgos.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900">
        {children}
        <Footer />
      </body>
    </html>
  );
}
