import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/brand.css';
import './styles/globals.css';
import ClientThemeProvider from './components/ClientThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Memecoin Battle Royale',
  description: '4 Rounds. 2.7M POL. Unlimited Potential. Join the ultimate AI-powered memecoin competition on Polygon.',
  metadataBase: new URL('https://polygon.gitcoin.co'),
  icons: {
    icon: '/ico.svg',
    apple: '/ico.svg',
  },
  openGraph: {
    title: 'AI Memecoin Battle Royale',
    description: '4 Rounds. 2.7M POL. Unlimited Potential. Join the ultimate AI-powered memecoin competition on Polygon.',
    url: 'https://polygon.gitcoin.co',
    siteName: 'AI Memecoin Battle Royale',
    // images: [
    //   {
    //     url: '/og-image.jpg', // You'll need to add this image to public folder
    //     width: 1200,
    //     height: 630,
    //     alt: 'AI Memecoin Battle Royale',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Memecoin Battle Royale',
    description: '4 Rounds. 2.7M POL. Unlimited Potential. Join the ultimate AI-powered memecoin competition on Polygon.',
    // images: ['/og-image.jpg'], // Same image as OpenGraph
    creator: '@gitcoin',
    site: '@gitcoin',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://memecoin.polygon.gitcoin.co',
  },
  keywords: ['Memecoin', 'Polygon', 'AI', 'Cryptocurrency', 'Battle Royale', 'POL', 'Competition', 'Gitcoin'],
  authors: [{ name: 'Gitcoin' }],
  category: 'Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ClientThemeProvider>
          <main className="flex-grow flex flex-col">
            {children}
          </main>
        </ClientThemeProvider>
      </body>
    </html>
  );
}