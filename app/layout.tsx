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
        url: '/brand/headerLeaderboard.svg',
        width: 1200,
        height: 630,
        alt: 'HACK THE GRID',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/brand/headerLeaderboard.svg'],
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
      </body>
    </html>
  );
}
