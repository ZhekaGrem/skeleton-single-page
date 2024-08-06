import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';
import Footer from '@/app/components/layout/Footer';
import Header from '@/app/components/layout/Header';
// import { PortalProvider } from '@/app/context/PortalContext'
import { siteMetadata, siteViewport } from '@/lib/metadata';

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
