import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Footer from '@/app/components/layout/Footer';
import Header from '@/app/components/layout/Header';
import { siteMetadata, siteViewport } from '@/lib/metadata';
// import { PortalProvider } from '@/app/context/PortalContext'
// import { GoogleTagManager from '@next/third-parties/google'; if you need npm i @next/third-parties
// import { GoogleAnalytics } from '@next/third-parties/google'; if you need npm i @next/third-parties

const inter = Inter({ subsets: ['latin'] });

export const viewport = siteViewport;

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <GoogleTagManager gtmId="youID" />
        <GoogleAnalytics gaId="youID" /> */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <div id="portal-root" />
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
      </body>
    </html>
  );
}
