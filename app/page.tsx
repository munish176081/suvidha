'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Wheat, Menu, X, Leaf, Sprout, HandHeart, MessageCircle, MapPin, Instagram, Facebook, MoveUpRight } from 'lucide-react';

const products = [
  { id: 'sarvati', number: '01', name: 'MP Sarvati Atta', tagline: 'A familiar favourite', description: 'A versatile everyday atta for soft rotis and the comfort of home-cooked meals.', image: 'photo-1509440159596-0249088772ff', alt: 'Freshly baked rustic bread with golden crust', tone: 'sand', note: 'EVERYDAY ESSENTIAL' },
  { id: 'multigrain', number: '02', name: 'Multigrain Atta', tagline: 'A little more variety', description: 'A thoughtful blend inspired by the goodness of different grains for everyday meals.', image: 'photo-1574323347407-f5e1ad6d020b', alt: 'Golden wheat and mixed grains in a natural setting', tone: 'sage', note: 'GRAIN BLEND' },
  { id: 'khapli', number: '03', name: 'Khapli Wheat Atta', tagline: 'Rooted in tradition', description: 'A traditional wheat variety for people who love exploring distinctive grains and flavours.', image: 'photo-1574323347407-f5e1ad6d020b', alt: 'Wheat ears and grains on a rustic tabletop', tone: 'gold', note: 'TRADITIONAL GRAIN' },
  { id: 'millet', number: '04', name: 'Millet Atta', tagline: 'Inspired by ancient grains', description: 'A grain-led choice for adding millet variety to your everyday kitchen.', image: 'photo-1601593768792-6d1a5e4b4b3c', alt: 'Natural millet grains in a wooden bowl', tone: 'rose', note: 'ANCIENT GRAINS' },
];
const faqs = [
  { q: 'Which atta varieties are available?', a: 'Suvidha Atta Chakki currently showcases MP Sarvati Atta, Multigrain Atta, Khapli Wheat Atta and Millet Atta. Contact us to confirm availability and pack sizes.' },
  { q: 'Can I enquire about bulk or wholesale orders?', a: 'Yes. Use the enquiry form and choose “Wholesale / bulk order”. Share your quantity and location so the team can follow up with the right details.' },
  { q: 'How can I check pack sizes and pricing?', a: 'Pack sizes and prices can vary. Send us an enquiry for current availability, pricing and delivery details.' },
];
const photo = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduce ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', interest: 'Product enquiry', message: '' });
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '';

  function submitEnquiry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Hello Suvidha Atta Chakki,\n\nI'd like to make an enquiry.\nName: ${form.name}\nPhone: ${form.phone}\nEnquiry type: ${form.interest}\nDetails: ${form.message || 'Please share product availability and pricing.'}`;
    if (!whatsappNumber) { setSubmitted(true); return; }
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  }

  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> GOODNESS IN EVERY GRAIN <span className="announcement-divider">✳</span> MADE FOR YOUR EVERYDAY TABLE</div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Suvidha Atta Chakki home">
          <span className="brand-mark"><Wheat size={26} strokeWidth={1.55} /></span>
          <span className="brand-words"><strong>suvidha</strong><small>ATTA CHAKKI</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#products" onClick={closeMenu}>Our Atta</a><a href="#story" onClick={closeMenu}>Our Story</a><a href="#process" onClick={closeMenu}>Our Approach</a><a href="#faq" onClick={closeMenu}>FAQs</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Make an enquiry <ArrowUpRightIcon /></a>
        </nav>
        <button className="mobile-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}><span className="eyebrow-line" /> FROM OUR GRAINS TO YOUR HOME</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .08, ease: [.22, 1, .36, 1] }}>A little more<br />goodness in <em>every</em><br /><span>roti.</span></motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .22 }}>Everyday meals begin with the ingredients we choose. Discover atta varieties from Suvidha Atta Chakki, made for the everyday rituals that bring us together.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .34 }}><a className="button button-dark" href="#products">Explore our atta <ArrowRight size={17} /></a><a className="text-link" href="#story">Get to know us <ArrowDownRight size={17} /></a></motion.div>
          <div className="hero-footnote"><span className="footnote-icon"><Sprout size={19} /></span><span>GOOD FOOD STARTS<br /><b>WITH GOOD GRAINS</b></span><span className="footnote-rule" /><span className="footnote-small">A thoughtful choice<br />for everyday cooking.</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-main"><Image src={photo('photo-1501436513145-30f24e19fcc4', 1500)} alt="Golden wheat field in warm late-afternoon sunlight" fill priority sizes="(max-width: 760px) 100vw, 54vw" /></div>
          <div className="hero-image-overlay"><Image src={photo('photo-1627485937980-221c88ac04f9', 650)} alt="Fresh flour and grain ingredients on a rustic surface" fill sizes="200px" /></div>
          <div className="hero-stamp"><span>ROOTED IN</span><Wheat size={22} strokeWidth={1.4} /><span>GOODNESS</span><span className="stamp-stars">✳ ✳ ✳</span></div>
          <div className="hero-vertical">A GOOD DAY BEGINS AT THE TABLE</div>
          <div className="hero-image-caption"><span>THE EVERYDAY GRAIN</span><span>01 / 04</span></div>
        </div>
        <a className="scroll-cue" href="#products"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /></a>
      </section>

      <section className="ticker" aria-label="Our philosophy"><div className="ticker-track">{Array.from({ length: 4 }).map((_, i) => <span key={i}>GOOD GRAINS <b>✳</b> EVERYDAY GOODNESS <b>✳</b> MADE FOR HOME <b>✳</b> SUVIDHA ATTA CHAKKI <b>✳</b></span>)}</div></section>

      <section className="products section-pad" id="products">
        <Reveal><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> FIND YOUR EVERYDAY FAVOURITE</div><h2>Good grains.<br /><em>Different</em> ways to enjoy.</h2></div><div className="heading-side"><p>From the familiar softness of everyday atta to the character of traditional grains, find the variety that feels right for your kitchen.</p><a href="#contact" className="text-link">Ask about our products <ArrowRight size={16} /></a></div></div></Reveal>
        <div className="product-grid">{products.map((p, i) => <Reveal key={p.id} delay={i * .08} className={`product-card product-${p.tone}`}><a className="product-image" href={`#contact`} aria-label={`Enquire about ${p.name}`}><Image src={photo(p.image, 850)} alt={p.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 25vw" /><span className="product-number">{p.number} / 04</span><span className="product-arrow"><ArrowUpRightIcon /></span><span className="product-image-label">{p.note}</span></a><div className="product-details"><div className="product-tagline">{p.tagline}</div><h3>{p.name}</h3><p>{p.description}</p><a href="#contact" className="product-link" onClick={() => setForm((prev) => ({ ...prev, interest: `Enquiry about ${p.name}` }))}>Enquire about this atta <ArrowRight size={15} /></a></div></Reveal>)}</div>
        <div className="product-bottom-note"><span className="note-star">✳</span><span>Not sure which one is right for you?</span><a href="#contact">We’re happy to help <ArrowRight size={15} /></a></div>
      </section>

      <section className="story" id="story">
        <div className="story-photo"><Image src={photo('photo-1464226184884-fa280b87c399', 1200)} alt="Hands holding freshly harvested golden wheat" fill sizes="(max-width: 760px) 100vw, 50vw" /><div className="story-photo-label"><span>THE SIMPLE THINGS</span><span>MATTER MOST.</span></div><div className="story-photo-seal"><Wheat size={27} /><span>SUVIDHA</span><small>ATTA CHAKKI</small></div></div>
        <div className="story-copy"><Reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A THOUGHTFUL WAY TO MILL</div><h2>Some things are<br />simple. <em>And that’s</em><br /><span>their beauty.</span></h2><p>There’s something special about the everyday meal. The dough kneaded by hand, the roti shared hot, the familiar taste of home. At Suvidha Atta Chakki, we believe the ingredients behind those moments deserve care and attention.</p><p>That’s why we bring together a selection of atta varieties for different kitchens, traditions and everyday preferences.</p><a href="#contact" className="button button-gold">Let’s talk <ArrowRight size={17} /></a><div className="story-signoff"><span className="signoff-line" /><span>SUVIDHA ATTA CHAKKI</span><span className="signoff-leaf"><Leaf size={18} /></span></div></Reveal></div>
      </section>

      <section className="approach section-pad" id="process"><Reveal><div className="approach-intro"><div className="eyebrow"><span className="eyebrow-line" /> OUR EVERYDAY PROMISE</div><h2>Goodness is in<br /><em>the details.</em></h2><p>A good kitchen is built on choices that feel right. Here are a few things we keep at the heart of the Suvidha experience.</p></div></Reveal><div className="approach-grid"><Reveal delay={.08}><div className="approach-item"><span className="approach-icon"><Wheat size={25} strokeWidth={1.4} /></span><span className="approach-no">01</span><h3>Grain variety</h3><p>Explore familiar favourites and traditional grain options for the way your family likes to eat.</p></div></Reveal><Reveal delay={.16}><div className="approach-item"><span className="approach-icon"><HandHeart size={25} strokeWidth={1.4} /></span><span className="approach-no">02</span><h3>Made for everyday</h3><p>Atta belongs in the everyday rhythm of home cooking, from morning rotis to shared dinners.</p></div></Reveal><Reveal delay={.24}><div className="approach-item"><span className="approach-icon"><Leaf size={25} strokeWidth={1.4} /></span><span className="approach-no">03</span><h3>Choice with care</h3><p>Clear product information helps you choose the atta variety that suits your kitchen and preferences.</p></div></Reveal></div></section>

      <section className="grain-break"><Image src={photo('photo-1574323347407-f5e1ad6d020b', 1800)} alt="Close-up of wheat grain and golden ears of wheat" fill sizes="100vw" /><div className="grain-break-shade" /><Reveal className="grain-break-content"><span className="grain-kicker">FROM THE GRAIN TO THE GATHERING</span><h2>For the meals<br />that <em>make a home.</em></h2><a href="#contact" className="button button-light">Find your atta <ArrowRight size={16} /></a></Reveal><div className="grain-break-index">SUVIDHA / EVERYDAY GOODNESS</div></section>

      <section className="faq section-pad" id="faq"><Reveal><div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line" /> A FEW THINGS YOU MAY WONDER</div><h2>Good to <em>know.</em></h2><p>Have a question about our atta or placing an enquiry? Start here, or send us a message.</p><a href="#contact" className="text-link">Ask us directly <ArrowRight size={16} /></a></div></Reveal><div className="faq-list">{faqs.map((f, i) => <Reveal key={f.q} delay={i * .05}><div className={`faq-item ${faqOpen === i ? 'faq-active' : ''}`}><button className="faq-question" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}><span className="faq-index">0{i + 1}</span><span>{f.q}</span><ChevronDown size={19} className="faq-chevron" /></button><AnimatePresence initial={false}>{faqOpen === i && <motion.div className="faq-answer-wrap" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .28 }}><p className="faq-answer">{f.a}</p></motion.div>}</AnimatePresence></div></Reveal>)}</div></section>

      <section className="contact" id="contact"><div className="contact-left"><Reveal><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> WE’D LOVE TO HEAR FROM YOU</div><h2>Let’s find the<br />right <em>atta</em><br />for your table.</h2><p>Product questions, pricing, pack sizes or bulk enquiries — send us a note and we’ll help you take the next step.</p><div className="contact-note"><span className="contact-note-icon"><MessageCircle size={20} /></span><span><b>A simple conversation goes a long way.</b><small>Tell us what you’re looking for.</small></span></div></Reveal></div><div className="contact-form-wrap"><form className="contact-form" onSubmit={submitEnquiry}><div className="form-heading"><span>YOUR ENQUIRY</span><span className="form-heading-star">✳</span></div><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" autoComplete="name" placeholder="Enter your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /><label htmlFor="phone">Phone number <span>*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" required pattern="[+0-9 ()-]{7,20}" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /><label htmlFor="interest">What are you enquiring about?</label><div className="select-wrap"><select id="interest" value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}><option>Product enquiry</option><option>MP Sarvati Atta</option><option>Multigrain Atta</option><option>Khapli Wheat Atta</option><option>Millet Atta</option><option>Wholesale / bulk order</option><option>Retail partnership</option></select><ChevronDown size={17} /></div><label htmlFor="message">A little more detail <span className="optional">OPTIONAL</span></label><textarea id="message" rows={3} placeholder="Product, quantity, location or question..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /><button className="button button-gold form-submit" type="submit">Send an enquiry <ArrowRight size={17} /></button>{submitted && <p className="form-status" role="status">{whatsappNumber ? 'Your WhatsApp enquiry has been opened. Send the message there to complete your enquiry.' : 'Almost there! Add your business WhatsApp number to NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local to enable enquiry delivery.'}</p>}<p className="form-privacy">Your details are used only to help respond to this enquiry.</p></form></div></section>

      <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark"><Wheat size={26} strokeWidth={1.55} /></span><span className="brand-words"><strong>suvidha</strong><small>ATTA CHAKKI</small></span></a><p>Goodness in every grain.<br />For the everyday moments that matter.</p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRightIcon /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Suvidha Atta Chakki. All rights reserved.</span><span>MADE FOR EVERYDAY GOODNESS <span className="footer-star">✳</span></span><a href="#contact">PRODUCT & WHOLESALE ENQUIRIES</a></div></footer>
      <a className="floating-contact" href="#contact" aria-label="Make an enquiry"><MessageCircle size={19} /><span>Enquire</span></a>
    </main>
  );
}
function ArrowUpRightIcon() { return <MoveUpRight size={16} strokeWidth={1.8} />; }
