// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'NeuroBalance',
  description: 'Investor-focused summaries and study results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

