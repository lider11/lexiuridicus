import './globals.css';

export const metadata = {
  title: 'Lex Iuridicus | Servicios Jurídicos Empresariales',
  description:
    'Asesoría jurídica empresarial para cumplimiento, gobierno corporativo y gestión de riesgos.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
