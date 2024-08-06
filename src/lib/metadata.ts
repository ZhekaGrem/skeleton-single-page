import { Metadata, Viewport } from 'next';

export const siteViewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};
export const siteMetadata: Metadata = {
  title: '1111',
  description: 'Опис',
  keywords: ['', '', '', '', '', ''],
  openGraph: {
    title: '',
    description: 'Опис',
    images: [
      {
        url: 'https://as1.ftcdn.net/v2/jpg/04/54/10/86/1000_F_454108632_C48wbroFTZQQR5tiSeg0oX0GkrYE8j8Z.jpg',
        width: 1200,
        height: 630,
        alt: 'опис',
      },
    ],
    type: 'website',
  },
  twitter: {
    title: '',
    description: 'Опис',
    images: [
      'https://as1.ftcdn.net/v2/jpg/04/54/10/86/1000_F_454108632_C48wbroFTZQQR5tiSeg0oX0GkrYE8j8Z.jpg',
    ],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'урла',
  },
  icons: {
    icon: ['/favicon.ico'],
    shortcut: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
  },
};
