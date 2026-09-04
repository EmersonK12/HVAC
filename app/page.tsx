'use client';

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Flame,
  Menu,
  Phone,
  ShieldCheck,
  Snowflake,
  Star,
  ThermometerSun,
  Wrench,
  X,
} from 'lucide-react';
import { FormEvent, useState } from 'react';

const services = [
  {
    icon: Snowflake,
    title: 'Air Conditioning',
    text: 'Fast repairs, seasonal tune-ups, and high-efficiency replacements that keep your home comfortable.',
  },
  {
    icon: Flame,
    title: 'Heating',
    text: 'Dependable furnace and heat pump service from a team that treats your home like their own.',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    text: 'Simple, preventative care that helps avoid surprise breakdowns and keeps energy bills in check.',
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <p><Clock3 size={14} /> Family-owned &amp; serving the Valley since 1998</p>
          <a href="tel:+14805550147"><Phone size={14} /> Emergency service available</a>
        </div>
      </div>

      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="Desert Air home">
            <span className="brand-mark"><Snowflake size={19} /><Flame size={19} /></span>
            <span><strong>DESERT AIR</strong><small>Heating &amp; Cooling</small></span>
          </a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <a className="nav-phone" href="tel:+14805550147"><Phone size={18} /><span><small>Call anytime</small>(480) 555-0147</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><BadgeCheck size={17} /> Licensed, bonded &amp; insured</div>
            <h1>Comfort you can count on. <em>People you can trust.</em></h1>
            <p className="hero-lede">Straight answers, quality workmanship, and neighborly service from our family to yours.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Request service <ArrowRight size={18} /></a>
              <a className="button ghost" href="tel:+14805550147"><Phone size={18} /> (480) 555-0147</a>
            </div>
            <div className="trust-row">
              <div className="avatars" aria-hidden="true"><span>JM</span><span>RS</span><span>KL</span></div>
              <div><div className="stars" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div><p><strong>4.9/5</strong> from 300+ local homeowners</p></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Friendly Desert Air HVAC technician">
            <div className="photo-placeholder">
              <img src="/hero-v2.png" alt="Friendly Desert Air HVAC technician outside a local home" />
            </div>
            <div className="service-badge"><CheckCircle2 /><span><strong>Same-day service</strong><small>When you need us most</small></span></div>
          </div>
        </div>
        <div className="shell proof-strip">
          <span><ShieldCheck /> Upfront pricing</span>
          <span><BadgeCheck /> Certified technicians</span>
          <span><Clock3 /> On-time arrival</span>
          <span><ThermometerSun /> 100% comfort guarantee</span>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="shell">
          <div className="section-heading"><div><span className="kicker">HOW WE CAN HELP</span><h2>Home comfort, handled.</h2></div><p>From the first call to the final walkthrough, we make HVAC service clear, courteous, and worry-free.</p></div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title}>
                <span className="card-number">0{index + 1}</span><div className="service-icon"><Icon /></div><h3>{title}</h3><p>{text}</p><a href="#contact">Explore service <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section story" id="about">
        <div className="shell story-grid">
          <div className="story-photo" aria-label="Desert Air family business">
            <img src="/hero-v2.png" alt="Desert Air HVAC technician at a neighborhood home" />
            <div className="experience"><strong>25+</strong><span>years of<br />local service</span></div>
          </div>
          <div className="story-copy">
            <span className="kicker">OUR FAMILY PROMISE</span>
            <h2>We take your comfort personally.</h2>
            <p>Desert Air started with one truck, a toolbox, and a belief that homeowners deserved better. Today, our family still stands behind every repair, installation, and handshake.</p>
            <ul>
              <li><CheckCircle2 /> No-pressure recommendations</li>
              <li><CheckCircle2 /> Clean, respectful workmanship</li>
              <li><CheckCircle2 /> Repairs done right the first time</li>
            </ul>
            <p className="signature">The Miller Family <span>Owners &amp; neighbors</span></p>
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="shell">
          <div className="section-heading"><div><span className="kicker">NEIGHBORS SAY IT BEST</span><h2>Service worth talking about.</h2></div></div>
          <div className="review-grid">
            <article><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“They showed up exactly when promised, explained everything clearly, and had our AC running before dinner. This is how a local business should operate.”</blockquote><p><strong>Sarah T.</strong><span>Verified homeowner</span></p></article>
            <article><div className="stars"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“Honest, kind, and incredibly thorough. They could have sold us a new unit but found a simple repair instead. Desert Air has a customer for life.”</blockquote><p><strong>David R.</strong><span>Verified homeowner</span></p></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy"><span className="kicker light">LET’S GET YOU COMFORTABLE</span><h2>Need service? We’re ready to help.</h2><p>Tell us what’s going on and a member of our family will be in touch shortly.</p><a href="tel:+14805550147"><Phone /> <span><small>Prefer to call?</small><strong>(480) 555-0147</strong></span></a></div>
          <div className="form-card">
            {submitted ? (
              <div className="success" role="status"><CheckCircle2 /><h3>Thanks! We’ll be in touch.</h3><p>We’ve received your request and will call you shortly.</p><button onClick={() => setSubmitted(false)}>Send another request</button></div>
            ) : (
              <form onSubmit={submitEstimate}>
                <h3>Request a free estimate</h3>
                <div className="field-row"><label>First name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" type="tel" placeholder="(480) 555-0000" /></label></div>
                <label>Email address<input required name="email" type="email" placeholder="you@example.com" /></label>
                <label>How can we help?<select required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>AC repair</option><option>Heating repair</option><option>New system estimate</option><option>Maintenance</option><option>Other</option></select></label>
                <button className="button primary" type="submit">Request my estimate <ArrowRight size={18} /></button>
                <small><ShieldCheck size={14} /> Your information stays private. No spam, ever.</small>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Snowflake size={19} /><Flame size={19} /></span><span><strong>DESERT AIR</strong><small>Heating &amp; Cooling</small></span></a><p>Family-owned. Locally trusted. Comfort delivered.</p><div><a href="#services">Services</a><a href="#about">Our Story</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></div></div>
        <div className="shell footer-bottom"><span>© 2026 Desert Air Heating &amp; Cooling</span><span>ROC #123456 · Licensed, bonded &amp; insured</span></div>
      </footer>
    </main>
  );
}

