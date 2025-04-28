import Script from 'next/script';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/brand.css";
import "./styles/globals.css";
import ClientThemeProvider from "./components/ClientThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// Constants for repeated values
const SITE_TITLE = "HACK THE GRID";
const SITE_DESCRIPTION = "Break the system, build the future";
const BASE_URL = "https://lukso.gitcoin.co";
const LOGO_PATH = "/brand/logo.png";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: LOGO_PATH,
    apple: LOGO_PATH,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_TITLE,
    images: [
      {
        url: '/brand/ogImage.png',
        width: 1200,
        height: 630,
        alt: 'HACK THE GRID',
      },
      {
        url: LOGO_PATH,
        width: 512,
        height: 512,
        alt: SITE_TITLE,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/brand/ogImage.png'],
    creator: "@gitcoin",
    site: "@gitcoin",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    "LUKSO",
    "Hack The Grid",
    "Universal Profiles",
    "The Grid",
    "Web3",
    "LYX",
    "Grants",
    "dApps",
    "Digital Identity",
    "Gitcoin",
  ],
  authors: [{ name: "Gitcoin" }],
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-[#0a090d]`}
      >
        <ClientThemeProvider>
          <main className="flex-grow flex flex-col">{children}</main>
        </ClientThemeProvider>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-ND3924GN');`,
          }}
        />
        {/* Twitter conversion tracking base code */}
        <Script
          id="twitter-conversion-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','o4n60');`,
          }}
        />
      </body>
    </html>
  );
}
