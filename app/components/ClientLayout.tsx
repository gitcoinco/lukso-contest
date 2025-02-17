'use client';

import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from './Header';
import Footer from './Footer';
import '../styles/brand.css';
import '../styles/globals.css';

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-text-primary">
            <Header />
            <main className="pt-[72px]">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}