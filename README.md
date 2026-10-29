# Suvidha Atta Chakki — Next.js Website

A premium, responsive brand and enquiry website for Suvidha Atta Chakki, a brand from Aas Food Products. The design uses the brand's forest-green and harvest-gold palette, the supplied logo, supplied product creatives, and real storefront imagery.

## Stack
- Next.js App Router
- React + TypeScript
- Framer Motion for scroll reveals and interface animation
- Lucide icons
- Responsive custom CSS
- Local WebP image assets in `public/images`

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Business details currently configured
- Phone / WhatsApp: +91 93191 91305
- Email: SuvidhaAttaChakki@gmail.com
- Address: Shop No. 24, 22, DDA Market, Akshardham Apartment, Sector 19, Dwarka, New Delhi 110075
- Business: Aas Food Products
- Brand claim supplied on visiting card: Serving quality since 2014

Confirm these details before launch, especially the shop number formatting and the service area for home delivery.

## Environment variables
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: WhatsApp phone number with country code and digits only. The supplied business number is configured as the default in the enquiry form.
- `NEXT_PUBLIC_SITE_URL`: replace with the live canonical domain before launch. The example URL in the code is only a placeholder.

The enquiry form opens WhatsApp with the visitor's message; it does not save enquiries to a database. For direct email delivery or CRM storage, connect a server-side form handler before launch.

## Image assets
The `public/images` directory contains optimized WebP versions of the supplied Suvidha logo, MP Sharbati Atta, Multigrain Atta, Khapli Atta and Millets Atta creatives, storefront photo, and brand-story image. These are provided business assets rather than generic stock photos.

## Before publishing
1. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
2. Verify business contact details and delivery availability.
3. Test WhatsApp enquiry flow on desktop and mobile.
4. Run `npm run build` and `npm run lint` in an environment where dependencies can be installed.
5. Add Google Search Console and analytics only if desired, and publish a privacy notice if analytics or other tracking is enabled.
