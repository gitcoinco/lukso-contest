'use client';

import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from './Header';
import Footer from './Footer';

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-text-primary">
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
}