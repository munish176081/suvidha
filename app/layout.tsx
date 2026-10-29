import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suvidha-atta-chakki.example';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Suvidha Atta Chakki | Goodness in Every Grain', template: '%s | Suvidha Atta Chakki' },
  description: 'Explore Suvidha Atta Chakki’s MP Sharbati Atta, Multigrain Atta, Khapli Atta and Millet Atta. Serving quality since 2014 from Aas Food Products in Dwarka, New Delhi. Contact us for product and wholesale enquiries.',
  keywords: ['Suvidha Atta Chakki', 'Aas Food Products', 'MP Sharbati Atta', 'MP Sarvati Atta', 'Multigrain Atta', 'Khapli Wheat Atta', 'Millet Atta', 'Indian flour mill'],
  openGraph: { title: 'Suvidha Atta Chakki | Goodness in Every Grain', description: 'Explore our atta varieties and contact Suvidha Atta Chakki for product and wholesale enquiries.', type: 'website', siteName: 'Suvidha Atta Chakki', images: ['/images/brand-story.webp'] },
  icons: { icon: '/images/suvidha-brand-logo.png', apple: '/images/suvidha-brand-logo.png' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#173f2c', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
