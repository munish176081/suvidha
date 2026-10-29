# Suvidha Atta Chakki — Next.js website

A premium, responsive brand and enquiry website for Suvidha Atta Chakki. Built with Next.js App Router, React, TypeScript, Framer Motion, Lucide icons, and custom CSS using forest green and harvest gold.

## What's included

- Responsive landing page with mobile navigation
- Premium editorial layout and scroll-triggered motion
- Four product showcases: MP Sarvati Atta, Multigrain Atta, Khapli Wheat Atta, Millet Atta
- Brand story, product approach, FAQ accordion, and enquiry form
- SEO metadata, Open Graph basics, responsive image sizes, and reduced-motion support
- Genuine stock photography served by Unsplash Images (internet required)
- WhatsApp enquiry handoff when configured

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Enable enquiries

Open `.env.local` and set:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

Replace the example number with the business WhatsApp number including country code, digits only. The enquiry form validates name and phone and opens a prefilled WhatsApp message. If no WhatsApp number is configured, it displays an instruction rather than pretending an enquiry was delivered.

## Before publishing

1. Replace the placeholder site URL with the actual domain.
2. Replace stock imagery with actual Suvidha packaging, product, and mill photos when available. Current images are editorial stock photos, not photos of Suvidha-branded packs.
3. Confirm product spelling, product descriptions, pack sizes, availability, and any quality/nutrition claims before publishing.
4. Add verified business phone, address, email, social links, and privacy policy if applicable.
5. Check that each stock image URL and licence/usage terms fit your intended use.
6. Run `npm run build` before deployment.

## Deploy

Deploy to Vercel or another Node-compatible Next.js host. Set the environment variables in the hosting dashboard. Next.js Image is configured to accept `images.unsplash.com` images.
