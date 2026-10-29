import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suvidha-atta-chakki.example';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Suvidha Atta Chakki | Goodness in Every Grain', template: '%s | Suvidha Atta Chakki' },
  description: 'Discover MP Sarvati Atta, Multigrain Atta, Khapli Wheat Atta and Millet Atta from Suvidha Atta Chakki. Get in touch for product and bulk enquiries.',
  keywords: ['Suvidha Atta Chakki', 'MP Sarvati Atta', 'Multigrain Atta', 'Khapli Wheat Atta', 'Millet Atta', 'Indian flour mill'],
  openGraph: { title: 'Suvidha Atta Chakki | Goodness in Every Grain', description: 'Everyday goodness, thoughtfully milled.', type: 'website', siteName: 'Suvidha Atta Chakki' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#173f2c', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
