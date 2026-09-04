import type { Metadata } from 'next';
import './globals.css';

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
  return <html lang="en"><body>{children}</body></html>;
}

