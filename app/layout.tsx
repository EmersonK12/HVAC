import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const body = DM_Sans({ variable: '--font-body', subsets: ['latin'] });
const heading = Manrope({ variable: '--font-heading-custom', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://desert-air-hvac.emerson-d-korn.chatgpt.site'),
  title: 'Desert Air | Family-Owned Heating & Cooling',
  description: 'Trusted local heating and air conditioning repair, replacement, and maintenance from a family-owned team serving the Valley.',
  openGraph: {
    title: 'Desert Air | Family-Owned Heating & Cooling',
    description: 'Comfort you can count on. People you can trust.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desert Air | Family-Owned Heating & Cooling',
    description: 'Comfort you can count on. People you can trust.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${body.variable} ${heading.variable}`}>{children}</body></html>;
}

