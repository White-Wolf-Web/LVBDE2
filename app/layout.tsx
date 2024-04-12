import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import Banniere from "./components/Banniere"
import type { Viewport } from 'next'
import Footer from './components/footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: 
    { media: '(prefers-color-scheme: dark)', color: 'black' }
}

interface ExtendedMetadata extends Metadata {
  schemaOrg: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone: string;
    image: string;
    url: string;
    openingHours: string;
    priceRange: string;
  }[];
}

export const metadata: ExtendedMetadata = {
  metadataBase: new URL('https://lavoiedubienetre.be'),
  title: {
    default: 'Massage à Courcelles | Shiatsu Reiki',
    template: '%s | La voie du bienetre ',
  },
  description: 'Votre massage à Courcelles laissera le monde extérieur s’effacer, laissant place à une quiétude absolue, loin de tout. Venez également essayer Shiatsu & Reiki à Trazegnies.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'La voie du bien-être | Détente et Relaxation',
    description: 'Profitez d’un massage unique à Courcelles. Shiatsu, Reiki, et relaxation profonde vous attendent.',
    url: 'https://lavoiedubienetre.be',
    siteName: 'La voie du bien-être',
    locale: 'fr_BE',
    type: 'website',
    images: [{
      url: 'https://lavoiedubienetre.be/og-image.jpg',
      width: 1920,
      height: 1080,
      alt: 'La voie du bien-être à Courcelles',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'La voie du bien-être | Shiatsu Reiki Massage à Courcelles',
    card: 'summary_large_image',
    images: 'https://lavoiedubienetre.be/twitter-image.jpg'
  },
  verification: {
    google: 'google1b18195b39af5559',
    yandex: '',
  },
  alternates: {
		canonical: "https://lavoiedubienetre.be",
	},
  schemaOrg: [
    {
      "@context": "http://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "name": "La voie du bien-être",
      "description": "Studio de massage à Courcelles offrant Shiatsu, Reiki, et réflexologie pour une relaxation et une harmonie complète.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rue de la Chapelle 54 ",
        "addressLocality": "Courcelles",
        "postalCode": "6183",
        "addressCountry": "BE"
      },
      "telephone": "+32 477 13 19 93",
      "image": "https://lavoiedubienetre.be/img/banner-massage.webp",
      "url": "https://lavoiedubienetre.be",
      "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-19:00",
      "priceRange": "$$"
    }
  ],
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-5xl mb-40 flex flex-col md:flex-row mx-4  lg:mx-auto">
        
        <main className="flex-auto min-w-0  flex flex-col px-2 md:px-0">
        <Banniere />
        <div className='max-w-4xl m-auto'>
          <Navbar />
          {children}
        
          <Analytics />
          <Footer />
          <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  );
}
