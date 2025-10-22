import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'IIFS · Indian Institute of Future Skills',
  description:
    'IIFS is a next-generation institute accelerating India’s workforce into the AI-driven future with immersive, industry-ready learning experiences.',
  keywords: [
    'IIFS',
    'Indian Institute of Future Skills',
    'AI education',
    'Future skills',
    'Indian education reform',
    'Deep tech learning'
  ],
  authors: [{ name: 'Indian Institute of Future Skills' }],
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
