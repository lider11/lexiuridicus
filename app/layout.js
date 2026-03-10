import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'Lex Iuridicus | Servicios Jurídicos Empresariales',
  description:
    'Asesoría jurídica empresarial para cumplimiento, gobierno corporativo y gestión de riesgos.',
  metadataBase: new URL('https://darkslateblue-sheep-899946.hostingersite.com'),
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Lex Iuridicus'
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    title: 'Lex Iuridicus | Servicios Jurídicos Empresariales',
    description: 'Especialistas en cumplimiento normativo, gobierno corporativo y gestión de riesgos legales para empresas.',
    url: 'https://darkslateblue-sheep-899946.hostingersite.com/',
    siteName: 'Lex Iuridicus',
    locale: 'es_ES',
    type: 'website',
    images: []
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lex Iuridicus | Servicios Jurídicos Empresariales',
    description: 'Especialistas en cumplimiento normativo, gobierno corporativo y gestión de riesgos legales.',
    images: []
  },
  canonical: 'https://darkslateblue-sheep-899946.hostingersite.com/',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  keywords: 'asesoría jurídica, cumplimiento normativo, gobierno corporativo, gestión de riesgos, derecho empresarial'
};

export default function RootLayout({ children }) {

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lex Iuridicus",
    "url": "https://darkslateblue-sheep-899946.hostingersite.com/",
    "logo": "https://darkslateblue-sheep-899946.hostingersite.com/logo-lexiuridicus.svg",
    "description": "Asesoría jurídica empresarial especializada en cumplimiento normativo, gobierno corporativo y gestión de riesgos legales.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-XXX-XXXXXXX",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.linkedin.com/company/lex-iuridicus",
      "https://twitter.com/lexiuridicus"
    ],
    "serviceType": [
      "Cumplimiento y Riesgos",
      "Gobierno Corporativo",
      "Protocolo de Familia",
      "Societario y Acciones"
    ]
  };

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
      <body>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
