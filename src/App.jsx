import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, Baby, BriefcaseBusiness, Check, ChevronRight, CircleUserRound,
  Clock3, HeartHandshake, Menu, Search, ShieldCheck, UserRound, X
} from 'lucide-react'

const countries = [
  ['PH', 'Filipino', '/assets/filipinoflag.png'], ['UG', 'Ugandan', '/assets/ugandanflag.png'], ['KE', 'Kenyan', '/assets/kenyanflag.png'],
  ['LK', 'Sri Lankan', '/assets/srilankanflag.png'], ['ID', 'Indonesian', '/assets/indonacianflag.png'], ['IN', 'Indian', '/assets/indiaflag.png'],
]

const profiles = [
  { name: 'Leonie C.', age: '42 year', location: 'Dubai', salary: 'More than 3200 AED', exp: '+6 Years Experience', country: '🇵🇭 Filipino', image: '/assets/maidimage.png', tone: 'coral', skills: ['Infant Care', 'Cleaning', 'Child Care', 'Cooking'] },
  { name: 'Jenalyn B.', age: '43 year', location: 'Dubai', salary: 'More than 3200 AED', exp: '2-4 Years Experience', country: '🇵🇭 Filipino', image: '/assets/maidimage.png', tone: 'sand', skills: ['Cleaning', 'Pet Care', 'Child Care'] },
  { name: 'Aida M.', age: '42 year', location: 'Dubai', salary: 'More than 3200 AED', exp: '+6 Years Experience', country: '🇵🇭 Filipino', image: '/assets/maidimage.png', tone: 'coral', skills: ['Infant Care', 'Child Care', 'Cooking', 'Cleaning'] },
]

function Logo() {
  return <a className="logo" href="/" aria-label="ChooseMaid home"><span className="logo-mark"><HeartHandshake size={27} /></span><span>Choose<span>Maid</span></span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const path = window.location.pathname
  if (path !== '/') return <InnerPage path={path} />
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-inner">
          <Logo />
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="/maids" onClick={closeMenu}>Find Maids &amp; Nannies</a>
            <a href="/pricing" onClick={closeMenu}>Pricing</a>
            <a href="/maids-cc-visa" onClick={closeMenu}>Visa Services</a>
            <a href="/about-us" onClick={closeMenu}>About Us</a>
            <a href="/contact-us" onClick={closeMenu}>Contact Us</a>
            <div className="mobile-actions"><button className="button button-outline">Login</button><button className="button">Register</button></div>
          </nav>
          <div className="desktop-actions"><button className="button button-outline">Login</button><button className="button">Register</button></div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="world-map" />
          <div className="floating-photo photo-one"><span>🇷🇺</span><img src="/assets/girlwithAE.png" alt="" /></div>
          <div className="floating-photo photo-two"><span>🇦🇪</span><img src="/assets/girlwithindianflag.png" alt="" /></div>
          <div className="floating-photo photo-three"><span>🇮🇳</span><img src="/assets/girlwithAE.png" alt="" /></div>
          <div className="hero-content">
            <h1>Find &amp; Hire a <em>Maid in Dubai</em> - Full-Time,<br className="desktop-only" /> Live-In Housemaids &amp; <em>Nannies</em></h1>
            <p>Hire affordable maids, nannies &amp; domestic workers in Dubai &amp; across the UAE - no agency fees.</p>
            <a className="button hero-button" href="#profiles">Find Maids &amp; Nannies <Search size={22} /></a>
            <div className="hero-trust"><span><i className="green-dot" /> 4.9★ Rating</span><span><i className="orange-dot" /> Trusted by 5,000+ families</span></div>
            <small>One-time payment · No subscription · No agency fees</small>
          </div>
        </section>

        <section className="stats" aria-label="ChooseMaid statistics">
          <Reveal><div><strong><AnimatedNumber value={1000} /><span>+</span></strong><p>Profiles with ID verification</p></div></Reveal>
          <Reveal delay={100}><div><strong><AnimatedNumber value={5000} /><span>+</span></strong><p>Happy Customers</p></div></Reveal>
          <Reveal delay={200}><div><strong>4.9<span>★</span></strong><p>From 1,000+ reviews</p></div></Reveal>
          <div><strong>AED 195</strong><p>One-Time Fee</p></div>
        </section>

        <section className="directory section" id="profiles">
          <div className="section-heading">
            <div className="eyebrow">Your perfect match is waiting</div>
            <h2>Available Maids &amp; Nannies in Dubai</h2>
            <p>Explore the maid that's perfect for you. About 1300+ new maids and nannies every day!</p>
          </div>
          <Reveal><div className="country-grid">{countries.map(([code, name, image]) => <button className="country-card" key={name}><span className="country-flag"><img src={image} alt={`${name} flag`} onError={(event) => { event.currentTarget.style.display = 'none' }} /><i>{code}</i></span><b>{name}</b><small>Maids / Nannies</small></button>)}</div></Reveal>
          <div className="listing-heading"><h2><span>1,000+</span> Maids / Nannies</h2><p>Explore the Best Maid and Nanny Profiles in Dubai</p><span className="updated"><Clock3 size={15} /> Last updated: Oct 12, 2026</span></div>
          <Reveal><div className="profile-grid">{profiles.map(profile => <ProfileCard key={profile.name} profile={profile} />)}</div></Reveal>
          <a className="button center-button" href="#contact">View All Profiles <ChevronRight /></a>
          <div className="quick-links">{['Live-out', 'Find Maids', 'Live-in', 'Find Cooks', 'Find Nannies'].map(label => <a href="#contact" key={label}>{label}<ArrowRight size={18} /></a>)}</div>
        </section>

        <HomeHowItWorks />
        <AgencyBanner />
        <PromiseSection />
        <HomePricing />
        <Comparison />
        <Testimonials />
        <HomeFaq />
      </main>
      <DetailedFooter />
      <BackToTop />
    </div>
  )
}

function HomeHowItWorks() {
  const steps = [['01', 'Browse Profiles', 'Filter by nationality, skills, and availability.'], ['02', 'Choose a Plan', 'One simple payment unlocks phone and WhatsApp for every candidate.'], ['03', 'Contact & Hire', 'Message directly, interview, and agree the salary yourselves.']]
  return <section className="home-how section"><div className="section-heading"><div className="eyebrow">How It Works</div><h2>Here are 3 Simple &amp; Easy Steps to Hire Maids &amp; Nannies in Dubai</h2></div><div className="home-steps">{steps.map(([number, title, text]) => <article key={number}><b>{number}</b><div className="step-icon">{number === '01' ? <Search /> : number === '02' ? <BriefcaseBusiness /> : <HeartHandshake />}</div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="step-trust"><span><ShieldCheck /> Verified profiles</span><span><Check /> No agency fees</span><span><HeartHandshake /> Direct contact</span></div><a className="text-link" href="/how-it-works">Learn more about hiring <ArrowRight size={15} /></a></section>
}

function AgencyBanner() {
  return <section className="agency-banner"><div><div className="eyebrow">The ChooseMaid way</div><h2>Agencies pick a maid<br />for you and charge<br /><em>thousands.</em><br />We don't.</h2><p>See every profile, talk to her yourself, and pay one small fee — never a commission.</p><a className="button light-button" href="/maids">Browse maids &amp; nannies <ArrowRight size={16} /></a></div><div className="agency-visual"><div className="fake-search"><Search size={15} /> Search 1,000+ profiles</div><div className="visual-pills"><span><ShieldCheck /> ID verified</span><span><HeartHandshake /> Direct contact</span><span><Check /> No commission</span></div></div></section>
}

function PromiseSection() {
  const promises = [['01', 'You choose, not an agency', 'Browse every profile, watch her video, and contact her yourself.', 'Direct WhatsApp & phone access'], ['02', 'Identity document checked before listing', 'Only profiles that pass an identity-document check and review are listed.', 'Verified before listing'], ['03', 'No stale profiles', 'Everyone you see is looking for work right now — not an old listing.', 'Non-responders removed'], ['04', 'Pay once. She keeps her salary.', 'One fee from AED 195. No renewals, no commission, full refund if you do not hire.', 'AED 195 · money-back']]
  return <section className="promise-section section"><div className="section-heading"><div className="eyebrow">Why families trust ChooseMaid</div><h2>Four promises we keep.</h2><p>Each profile is reviewed before listing. These are the four things you can hold us to.</p></div><div className="promise-grid">{promises.map(([number, title, text, footer]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b>{footer}</b><a href={number === '04' ? '/pricing' : '/how-it-works'}>Learn more <ArrowRight size={14} /></a></article>)}</div></section>
}

function HomePricing() {
  const plans = [['Basic Plan', 'AED 195', '15 Days Access'], ['Standard Plan', 'AED 235', '1 Month Access'], ['Premium Plan', 'AED 495', '2 Months Access']]
  return <section className="home-pricing section" id="pricing"><div className="section-heading"><div className="eyebrow">Simple plans</div><h2>Affordable Plans to Hire a Nanny &amp; Maid in Dubai</h2><p>Choose a plan and get unlimited contact details during your access period.</p></div><div className="home-plan-grid">{plans.map(([name, price, access], index) => <article className={index === 1 ? 'home-plan featured' : 'home-plan'} key={name}>{index === 1 && <span className="mini-popular">Most Popular</span>}<h3>{name}</h3><strong>{price}</strong><p>One-time fee · No recurring charges</p><button className="button" onClick={() => window.location.href = '/pricing'}>Get Started</button><span className="plan-access"><ShieldCheck /> 100% Money-Back Guarantee</span><span className="plan-access"><Clock3 /> {access}</span><ul><li><Check /> Direct phone &amp; WhatsApp access</li><li><Check /> New verified profiles daily</li><li><Check /> Contact candidates without limits</li></ul></article>)}</div></section>
}

function Comparison() {
  return <section className="comparison section"><div className="comparison-card"><div className="section-heading"><h2>Offerings Comparison</h2><p>See how ChooseMaid compares to other platforms. Save more, get more!</p></div><table><thead><tr><th>Platform Offerings</th><th>Other Platforms</th><th>ChooseMaid</th></tr></thead><tbody>{[['Platform Access', 'AED 350+', 'AED 195'], ['Nanny Visa Services', 'AED 10,000+', 'AED 8,200'], ['Advanced Search Filters', 'Limited', 'Yes'], ['Maid Video CVs', '✕', '✓'], ['24/7 Customer Support', '✕', '✓'], ['One-Time Payment, No Renewals', 'Recurring fees', 'One-time'], ['100% Money-Back Guarantee', 'Limited or no refund', 'Guaranteed']].map(row => <tr key={row[0]}>{row.map((cell, index) => <td className={index === 2 ? 'yes-cell' : ''} key={cell}>{cell}</td>)}</tr>)}</tbody></table><a className="button" href="/pricing">Get Started — AED 195 <ArrowRight size={16} /></a></div></section>
}

function Testimonials() {
  const quotes = [['E', 'Eisha Ayaz', 'Very happy with the service. We were able to choose from multiple helpers and found someone we truly liked.'], ['L', 'Laraib Ahmad', 'We hired a nanny and could not be happier. ChooseMaid made it easy to connect and hire directly.'], ['W', 'Waqas Abassi', 'We found the perfect match quickly. Highly recommended for families looking for a nanny.']]
  return <section className="testimonials section"><div className="section-heading"><h2>What Our <em>Families</em> Say</h2><p><strong>4.9</strong> <span className="stars">★★★★★</span> · Trusted by 5,000+ families</p></div><div className="testimonial-grid">{quotes.map(([initial, name, quote]) => <article key={name}><div className="stars">★★★★★</div><p>“ {quote} ”</p><footer><b>{initial}</b><strong>{name}</strong></footer></article>)}</div></section>
}

function HomeFaq() {
  const questions = ['How can I find a maid or nanny using ChooseMaid?', 'What if I hire a maid or nanny and she does not work out?', 'Can I request a trial before hiring a maid or nanny?', 'Does ChooseMaid verify the profiles that are posted?', 'What is the salary range for maids and nannies in Dubai?', 'What if I already hired a maid or nanny?', 'Do you take a cut of the salary?', 'How much does ChooseMaid charge for this service?']
  const [open, setOpen] = useState(null)
  return <section className="home-faq section"><div className="section-heading"><div className="eyebrow">Everything you need to know</div><h2>Frequently Asked Questions</h2><p>Everything you need to know about finding the right maid or nanny through ChooseMaid.</p></div><div className="faq-list">{questions.map((question, index) => <div className={`faq-item ${open === index ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpen(open === index ? null : index)}><span>{index + 1}</span>{question}<b>{open === index ? '−' : '+'}</b></button>{open === index && <p>Browse verified profiles, compare experience, and contact candidates directly. Our team helps you understand the next steps.</p>}</div>)}</div></section>
}

function DetailedFooter() {
  return <footer className="detailed-footer"><div className="footer-main"><div className="footer-about"><Logo /><p>ChooseMaid is the leading maid and nanny platform in Dubai and across the UAE. Browse experienced profiles, pay once, and connect directly with helpers.</p><small>hello@choosemaid.com</small><div className="social-links">f&nbsp;&nbsp;◎</div><div className="payment-badges"><span>VISA</span><span>Mastercard</span><span>G Pay</span><span>Pay</span></div></div><div><b>Quick Links</b><a href="/">Home</a><a href="/maids">Find Maids &amp; Nannies</a><a href="/maids-cc-visa">Visa Services</a><a href="/pricing">Prices</a><a href="/how-it-works">Blog</a></div><div><b>Help</b><a href="/contact-us">Contact Us</a><a href="/about-us">About Us</a><a href="/how-it-works">How It Works</a><a href="/pricing">FAQs</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a></div><div><b>Popular</b><a href="/maids">Nanny in Dubai</a><a href="/maids">Cook in Dubai</a><a href="/maids">Personal Driver in Dubai</a><a href="/maids">Safe Driver in Dubai</a><a href="/maids">Pet Sitter in Dubai</a></div><div><b>Nationality</b><a href="/maids">Filipino maid</a><a href="/maids">Indian maid</a><a href="/maids">Ugandan maid</a><a href="/maids">Kenyan maid</a><a href="/maids">Indonesian maid</a></div></div><div className="footer-bottom"><span>© 2024-2026 ChooseMaid. All Rights Reserved.</span><span>Trade License: 2434507.01 · UAE</span></div></footer>
}

function ProfileCard({ profile }) {
  return <article className="profile-card">
    <div className={`profile-avatar ${profile.tone}`}><span className="watch">▶ Watch</span><img src={profile.image} alt={`${profile.name} profile`} onError={(event) => { event.currentTarget.style.display = 'none' }} /><span className="initial">{profile.name[0]}</span></div>
    <div className="profile-info"><h3>{profile.name}</h3><p><UserRound /> {profile.age}</p><p><span className="pin">●</span> {profile.location}</p><p><BriefcaseBusiness /> {profile.salary}</p><p><BriefcaseBusiness /> {profile.exp}</p><div className="profile-country">{profile.country}</div></div>
    <div className="skill-row">{profile.skills.map(skill => <span key={skill}><Check size={12} /> {skill}</span>)}</div>
    <button className="profile-button"><CircleUserRound size={22} /> View Profile</button>
  </article>
}

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <button className={`back-to-top ${visible ? 'visible' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ChevronRight /></button>
}

function AnimatedNumber({ value }) {
  const [number, setNumber] = useState(0)
  useEffect(() => {
    let current = 0
    const step = Math.max(1, Math.ceil(value / 35))
    const timer = window.setInterval(() => {
      current = Math.min(value, current + step)
      setNumber(current)
      if (current === value) window.clearInterval(timer)
    }, 28)
    return () => window.clearInterval(timer)
  }, [value])
  return <span>{number.toLocaleString()}</span>
}

function Reveal({ children, delay = 0 }) {
  const [shown, setShown] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${shown ? 'is-visible' : ''}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</div>
}

function InnerPage({ path }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const titleMap = {
    '/maids': ['Find Maids & Nannies', 'Browse verified domestic helpers across the UAE.'],
    '/pricing': ['One Payment to Hire Any Maid or Nanny in Dubai', 'No subscription, no agency fee, no commission on salary. One flat payment from AED 195 — with a 100% money-back guarantee.'],
    '/maids-cc-visa': ['Visa & sponsorship services', 'Practical support for families hiring domestic help in the UAE.'],
    '/about-us': ['About ChooseMaid', 'A simpler, direct way for families and helpers to connect.'],
    '/contact-us': ['Contact us', 'Have questions about hiring domestic help? We are here to help.'],
    '/how-it-works': ['How it works', 'Simple steps to find and hire the right person for your family.'],
  }
  const [title, subtitle] = titleMap[path] || titleMap['/about-us']
  return <div className="app"><SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main className={`inner-main ${path === '/pricing' ? 'pricing-main' : ''}`}>
      {path !== '/maids-cc-visa' && <div className="inner-hero"><div className="eyebrow">ChooseMaid UAE</div><h1>{title}</h1><p>{subtitle}</p></div>}
      {path === '/maids' && <MaidDirectory />}
      {path === '/pricing' && <Pricing />}
      {path === '/maids-cc-visa' && <VisaPage />}
      {path === '/about-us' && <AboutPage />}
      {path === '/contact-us' && <ContactPage />}
      {path === '/how-it-works' && <HowItWorks />}
    </main>
    <DetailedFooter />
    <BackToTop />
  </div>
}

function SiteHeader({ menuOpen, setMenuOpen }) {
  return <header className="navbar"><div className="nav-inner"><Logo /><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="/">Home</a><a href="/maids">Find Maids &amp; Nannies</a><a href="/pricing">Pricing</a><a href="/maids-cc-visa">Visa Services</a><a href="/about-us">About Us</a><a href="/contact-us">Contact Us</a><div className="mobile-actions"><a className="button button-outline" href="/login">Login</a><a className="button" href="/register">Register</a></div></nav><div className="desktop-actions"><a className="button button-outline" href="/login">Login</a><a className="button" href="/register">Register</a></div></div></header>
}

const directoryProfiles = Array.from({ length: 24 }, (_, index) => ({ ...profiles[index % profiles.length], name: ['Aida M.', 'Jovie D.', 'Fatima P.', 'Stephanie T.', 'Elizabeth B.', 'Gloria Marie E.', 'Sauyah B.', 'Maricel S.'][index % 8], id: index }))

function MaidDirectory() {
  const [page, setPage] = useState(1)
  const [position, setPosition] = useState('All')
  const visible = directoryProfiles.slice((page - 1) * 10, page * 10)
  return <section className="inner-section directory-page"><div className="directory-notice">Browse verified profiles, compare experience, and contact candidates directly. New maids and nannies are added daily.</div><div className="directory-toolbar"><div><b>1,000+ profiles</b><span> Updated daily</span></div><div className="filters"><select value={position} onChange={event => { setPosition(event.target.value); setPage(1) }}><option>All positions</option><option>Live-in</option><option>Live-out</option><option>Part-time</option></select><select><option>All nationalities</option><option>Filipino</option><option>Indian</option><option>Ugandan</option></select></div></div><div className="directory-layout"><aside className="directory-sidebar"><h3>Advanced Filters</h3><label>Looking for<select><option>Any position</option><option>Maid</option><option>Nanny</option><option>Cook</option></select></label><label>Nationality<select><option>All nationalities</option><option>Filipino</option><option>Indian</option></select></label><label>Work type<select><option>Any availability</option><option>Full-time</option><option>Part-time</option></select></label><label>Location<select><option>All emirates</option><option>Dubai</option><option>Sharjah</option></select></label><button className="button">Apply filters</button></aside><div><div className="directory-profile-grid">{visible.map((profile, index) => <Reveal key={profile.id} delay={index * 45}><ProfileCard profile={profile} /></Reveal>)}</div><div className="pagination"><button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>{[1, 2, 3].map(number => <button className={page === number ? 'active-page' : ''} key={number} onClick={() => setPage(number)}>{number}</button>)}<button disabled={page === 3} onClick={() => setPage(page + 1)}>Next <ChevronRight size={16} /></button></div></div></div><DirectoryContent /></section>
}

function DirectoryContent() {
  return <div className="directory-content"><p>Hiring a maid in Dubai usually means choosing between an expensive agency and a long word-of-mouth search. ChooseMaid gives families a direct way to browse available candidates and make their own decision.</p><h2>How to hire a maid in Dubai: 3 steps</h2><div className="directory-steps"><div><b>1</b><h3>Browse profiles</h3><p>Search by nationality, skills, and availability.</p></div><div><b>2</b><h3>Choose a plan</h3><p>Unlock direct phone and WhatsApp access.</p></div><div><b>3</b><h3>Contact and hire</h3><p>Interview and agree terms directly.</p></div></div><h2>Maids in Dubai by nationality, city, and type</h2><p>Explore live-in, live-out, full-time and part-time helpers across Dubai, Abu Dhabi, Sharjah, and the UAE.</p><div className="tag-cloud">{['Filipino maids', 'Indian maids', 'Ugandan maids', 'Kenyan maids', 'Sri Lankan maids', 'Live-in maids', 'Live-out maids', 'Nannies in Dubai'].map(tag => <span key={tag}>{tag}</span>)}</div><h2>How much does it cost to hire a maid in the UAE?</h2><p>Monthly salary depends on experience, responsibilities, and whether accommodation is provided. Families should also budget for visa, medical, insurance, and government processing costs.</p><h2>Live-in or live-out maid?</h2><p>Live-in support suits families needing flexible daily coverage, while live-out helpers are a practical choice for homes with a separate schedule or existing accommodation.</p><h2>Visa sponsorship and maid cleaning services</h2><p>Always confirm sponsorship responsibilities and legal employment requirements before making an offer. For occasional support, compare professional cleaning services with a full-time household employee.</p><h2>Questions to ask before hiring a maid in the UAE</h2><div className="directory-faq"><p>What duties and hours are expected?</p><p>What is the salary and accommodation arrangement?</p><p>Has the candidate’s identity document been checked?</p><p>Will there be a paid trial before hiring?</p></div></div>
}

function Pricing() {
  const [notice, setNotice] = useState(false)
  const plans = [
    { label: 'Basic Plan', price: 'AED 195', access: '15 Days Access', features: ['Direct phone & WhatsApp access to all candidates', 'New verified maid & nanny profiles added daily', 'Contact any candidate you like - no limits, no restrictions', 'Exclusive AED 300 discount on visa service'] },
    { label: 'Standard Plan', price: 'AED 235', access: '1 Month Access', popular: true, features: ['Direct phone & WhatsApp access to all candidates', 'New verified maid & nanny profiles added daily', 'Contact any candidate you like - no limits, no restrictions', 'Exclusive AED 300 discount on visa service'] },
    { label: 'Premium Plan', eyebrow: 'Premium Service', price: 'AED 495', access: '2 Months Access', features: ['Everything in Standard', 'Dedicated hiring consultant assigned to you', 'We shortlist and interview candidates on your behalf', 'You make the final hiring decision directly with the candidate', 'Exclusive AED 300 discount on visa service'] },
  ]
  return <section className="inner-section pricing-page">
    <div className="pricing-intro"><h2>Plans and pricing</h2><p>Choose the access period that works best for your family.</p></div>
    <div className="pricing-grid">{plans.map(plan => <article className={`price-card ${plan.popular ? 'popular-plan' : ''}`} key={plan.label}>{plan.popular && <span className="price-label">Most Popular</span>}{plan.eyebrow && <span className="price-eyebrow">{plan.eyebrow}</span>}<h2>{plan.label}</h2><strong>{plan.price}</strong><div className="price-meta"><Check size={15} /> One-time fee <i>|</i> No recurring charges</div><button className="button" onClick={() => setNotice(true)}>Get Started <ArrowRight size={17} /></button><div className="plan-badges"><span><ShieldCheck size={16} /> 100% Money-Back Guarantee</span><span><Clock3 size={16} /> {plan.access}</span></div><ul>{plan.features.map(feature => <li key={feature}><Check /> {feature}</li>)}</ul></article>)}</div>
    <div className="guarantee"><ShieldCheck /><div><h3>A clear, simple plan.</h3><p>If you don't find someone you want to hire, we refund every dirham. You can contact alternative candidates during your access period. Any trial or employment arrangement is agreed directly with the candidate.</p><a href="/maids">Browse profiles free <ArrowRight size={15} /></a></div></div>
    <PricingFaq />
    {notice && <div className="notice-backdrop" role="presentation" onClick={() => setNotice(false)}><div className="notice-modal" role="dialog" aria-modal="true" onClick={event => event.stopPropagation()}><button className="notice-close" aria-label="Close" onClick={() => setNotice(false)}>×</button><ShieldCheck /><h2>Complete your registration first</h2><p>Create your account before choosing a payment method. After registration, you can securely pay for the plan you selected.</p><a className="button" href="/register">Continue to registration <ArrowRight size={17} /></a></div></div>}
  </section>
}

function PricingFaq() {
  const [open, setOpen] = useState(null)
  const questions = [['What do I get when I pay?', 'You unlock direct phone and WhatsApp access to all available candidates for the access period shown on your plan.'], ['Will I be charged again?', 'No. Every plan is a one-time payment with no recurring subscription or salary commission.'], ['What if it does not work out?', 'If you do not find someone you want to hire, request a refund under the money-back guarantee terms.'], ['Do you take a cut of the salary?', 'No. You agree salary and employment terms directly with the candidate.']]
  return <div className="pricing-faq"><h2>Pricing FAQs</h2>{questions.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpen(open === index ? null : index)}>{question}<span>{open === index ? '−' : '+'}</span></button>{open === index && <p>{answer}</p>}</div>)}</div>
}

function VisaPage() {
  const [open, setOpen] = useState(null)
  const questions = ['Is maids.cc Tadbeer, regulated by the government?', 'What are the advantages of using maids.cc services?', 'Can maids.cc sponsor my driver, nanny, cook, private gardener, tutor, etc.?', 'Which areas do you serve?', 'Can I bring my maid from outside the UAE?', 'What happens if I want to cancel my agreement later on?']
  const rows = [['Transparent Pricing', 'AED 8,200 & AED 0 deposit', 'AED 17,000 & AED 2000 deposit', 'AED 8,500 & AED 5000 deposit'], ['Number of center visits', 'Pay online in 5 minutes', '8 offices and government agencies', '2 visits + 3 forms + 24 cheques'], ['Documents required', 'Just WhatsApp us your maid’s passport', 'Ejari, cheques, AED 25k salary & marriage attestations', 'Ejari, cheques, salary & marriage attestations'], ['Get visa in', '7 days', '30 days', '30 days'], ['Salary transfer', 'Automatic monthly salary transfer', 'Paid in cash', 'Transferred manually every month'], ['End of service dues', 'We are liable for any end-of-service dues', 'You pay gratuity & ticket', 'You pay gratuity & ticket'], ['Travel NOC', 'Free NOC & free travel assistance', 'Not required', 'AED 500 NOC fee, AED 300 deposit'], ['ATM card & payroll', '✓', '✕', '✓'], ['Any PRO services, assist in ban lifting, failed medical, etc.', '✓', '✕', '✕'], ['Company doctor, 24/7 support, live visa tracking & personalized app', '✓', '✕', '✕']]
  return <section className="visa-page"><section className="visa-offer"><h1>Exclusive Maid Visa Offer for ChooseMaid Families!</h1><p>Get your maid’s visa in <b>7 days</b> and enjoy an <b>exclusive AED 300 discount</b> only with ChooseMaid and maids.cc!</p><a className="button" href="/contact-us">Claim AED 300 Discount <ArrowRight size={15} /></a></section><div className="visa-service-cards"><Reveal><article className="visa-service-card visa-plan"><div className="visa-plan-head"><b>Get your maid’s visa in 7 days</b><strong><s>AED 8,500</s> AED 8,200</strong><small>AED 683.60/month</small></div><ul>{['Emirates ID & medical', 'WPS ATM card & Payroll processing', 'Health insurance & company doctor', 'Personalized maids.cc App access', 'Maid only works with you on our visa', 'Maid only Personalized maid.cc app', 'We cover end-of-service dues', 'Any PRO services, including embassy paperwork'].map(item => <li key={item}><Check size={13} />{item}</li>)}</ul><a className="button" href="/contact-us">Get Visa Now</a><div className="visa-rating">★★★★★ <u>14,105 reviews</u></div><div className="visa-stats"><span><b>25k+</b>Visa issued</span><span><b>#1</b>Domestic workers employer in UAE</span><span><b>#1</b>Visa issuer in UAE</span></div></article></Reveal><Reveal delay={120}><article className="visa-preview"><div className="phone-preview"><div>✓</div><small>Congratulations<br />Your maid visa is ready</small></div><div className="visa-id">MAID VISA</div><span className="visa-pill">#1 Visa issuer in UAE</span></article></Reveal></div><Reveal><div className="visa-comparison"><table><thead><tr><th>Why ChooseMaid &amp; maids.cc?</th><th>maids.cc<br />ChooseMaid</th><th>Private Sponsorship</th><th>All Other Maid Offices</th></tr></thead><tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div></Reveal><section className="visa-faq"><div className="eyebrow">Everything you need to know</div><h2>✨ Visa Service FAQs 🤔</h2><p>Everything you need to know about our visa and sponsorship services</p>{questions.map((question, index) => <div className={`visa-faq-row ${open === index ? 'open' : ''}`} key={question}><button onClick={() => setOpen(open === index ? null : index)}><span>{['◉', '♥', '♟', '●', '▣', '×'][index]}</span>{question}<b>{open === index ? '−' : '+'}</b></button>{open === index && <p>Our partner team can confirm the latest eligibility, documents, timelines, and service coverage for your situation.</p>}</div>)}</section><section className="visa-provider"><div className="eyebrow">Service provided by</div><h2>maids.cc</h2><p>in partnership with ChooseMaid</p><div className="provider-cards"><article><h3>maids.cc</h3><p>maids.cc is the leading Tadbeer agency in the UAE for maid and nanny visa services.</p></article><article><Logo /><p>ChooseMaid is the UAE’s leading platform for families to find and hire maids directly.</p></article></div></section></section>
}

function AboutPage() {
  return <section className="inner-section content-page"><div className="story"><h2>Hiring help should feel simple</h2><p>ChooseMaid is a direct-hiring platform that helps families discover verified maids, nannies, cooks, and other domestic helpers.</p><p>Families can browse profiles, compare experience, and contact candidates directly. There is no agency shortlist, no salary commission, and no pressure to hire someone who is not right for your home.</p></div><div className="benefits"><Benefit icon={<ShieldCheck />} title="Profiles reviewed" text="We check identity documents before profiles go live." /><Benefit icon={<HeartHandshake />} title="Direct connection" text="Families and candidates decide together." /><Benefit icon={<Clock3 />} title="Fresh availability" text="New profiles are added regularly." /></div></section>
}

function ContactPage() {
  return <section className="inner-section contact-page"><div className="contact-layout"><div><h2>We are here to help</h2><p>Have a question about finding a maid, pricing, or visa support? Send us a message and our team will get back to you.</p><div className="contact-detail"><MailIcon /> support@choosemaid.com</div><div className="contact-detail"><Clock3 /> Support available every day</div></div><form onSubmit={event => event.preventDefault()}><label>Your name<input required placeholder="Enter your name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>How can we help?<textarea required rows="5" placeholder="Tell us what you need..." /></label><button className="button" type="submit">Send message <ArrowRight size={17} /></button></form></div></section>
}

function MailIcon() { return <span className="mail-icon">@</span> }

function HowItWorks() {
  const steps = [['01', 'Browse profiles', 'Filter by nationality, skills, availability, and live-in or live-out preferences.'], ['02', 'Choose a plan', 'One simple payment unlocks direct phone and WhatsApp access for candidates.'], ['03', 'Contact and hire', 'Message, interview, agree terms, and pay your helper directly.']]
  return <section className="inner-section how-page"><div className="steps">{steps.map(([number, heading, text]) => <article key={number}><span>{number}</span><h2>{heading}</h2><p>{text}</p><ul><li><Check /> No agency commission</li><li><Check /> Make the decision yourself</li></ul></article>)}</div><div className="guide"><div className="eyebrow">Your hiring guide</div><h2>What happens after you find someone?</h2><div className="guide-grid">{['Shortlist 3–5 candidates', 'Unlock once and contact them all', 'Interview and agree the duties', 'Settle the terms in writing', 'Arrange a paid trial if needed', 'Complete the correct visa route'].map((step, index) => <div key={step}><b>{index + 1}</b><h3>{step}</h3></div>)}</div></div></section>
}

function Benefit({ icon, title, text }) {
  return <article className="benefit"><div className="benefit-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>
}

export default App
