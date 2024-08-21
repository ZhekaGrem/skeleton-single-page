import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Footer from '@/app/components/layout/Footer';
import Header from '@/app/components/layout/Header';
// import FloatingCircle from '@/app/components/layout/FloatingCircle';

import { siteMetadata, siteViewport } from '@/lib/metadata';
// import { PortalProvider } from '@/context/PortalContext'

const inter = Inter({ subsets: ['latin'], adjustFontFallback: false, preload: true });

export const viewport = siteViewport;

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <FloatingCircle /> */}
        {/* if need PopUp
                 <PortalProvider>

        <Header/>
        <main>

        {children}
        </main>
      <Footer/>
      <div id="portal-root" />
         </PortalProvider>
          */}
        {/*  
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-0SG93S79Y0" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-0SG93S79Y0');
              `,
          }}
        />
<------------------------------------------>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NB39DGF6');
              `,
          }}
        /> */}
      </body>
    </html>
  );
}
