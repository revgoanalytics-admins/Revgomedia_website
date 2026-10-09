import { useEffect, useState, useRef } from 'react'

type IconName = 'arrow' | 'arrowUp' | 'menu' | 'close' | 'code' | 'target' | 'chart' | 'spark' | 'check' | 'plus' | 'linkedin' | 'instagram' | 'facebook' | 'mail' | 'phone' | 'pin' | 'play' | 'chevronLeft' | 'chevronRight' | 'external'

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M4 12h16M13 5l7 7-7 7" /></>,
  arrowUp: <><path d="M5 19 19 5M6 5h13v13" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M5 5l14 14M19 5 5 19" /></>,
  code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  chart: <><path d="M3 19h18M5 16l5-5 4 3 5-8" /><path d="M16 6h3v3" /></>,
  spark: <><path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2ZM19 18l.5 1.5L21 20l-1.5.5L19 22l-.5-1.5L17 20l1.5-.5L19 18Z" /></>,
  check: <><path d="m4 12 5 5L20 6" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  facebook: <><path d="M15 21v-8h3l.5-4H15V7c0-1 .4-1.5 1.6-1.5H19V2.2A19 19 0 0 0 16.4 2C13 2 11 4 11 7v2H8v4h3v8" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  phone: <><path d="M6 3h4l1 4-2 2a16 16 0 0 0 6 6l2-2 4 1v4a3 3 0 0 1-3 3A15 15 0 0 1 3 6a3 3 0 0 1 3-3Z" /></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  play: <><path d="m9 6 9 6-9 6V6Z" /></>,
  chevronLeft: <><path d="m15 5-7 7 7 7" /></>,
  chevronRight: <><path d="m9 5 7 7-7 7" /></>,
  external: <><path d="M13 5h6v6M19 5l-9 9M19 14v5H5V5h5" /></>,
}

function Icon({ name, size = 20, className = '' }: { name: IconName; size?: number; className?: string }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>
}

const photos = {
  product: 'https://images.unsplash.com/photo-1696894756316-c18f512cf783?auto=format&fit=crop&w=850&q=85',
  team: 'https://images.unsplash.com/photo-1737573156037-d2bb948cd385?auto=format&fit=crop&w=1100&q=85',
  founder: 'https://images.unsplash.com/photo-1774813958486-4c180dcda729?auto=format&fit=crop&w=900&q=85',
  maya: 'https://images.unsplash.com/photo-1772987292949-4b1bdc01a612?auto=format&fit=crop&w=700&q=85',
  jordan: 'https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&fit=crop&w=700&q=85',
  alex: 'https://images.unsplash.com/photo-1784652951070-9cb1a374132f?auto=format&fit=crop&w=700&q=85',
}

const navItems = [['Home', '#home'], ['Who We Are', '#about'], ['Services', '#services'], ['Clients', '#clients'], ['Contact', '#contact']]
const services: { num: string; slug: string; icon: IconName; title: string; description: string; items: string[] }[] = [
  { num: '01', slug: 'ecommerce-development', icon: 'code', title: 'FOR D2C & ECOMMERCE BRANDS', description: 'From first click to repeat order.', items: ['Store Development - Shopify build · Customisation · Landing pages · CRO', 'Performance Marketing - Prospecting · Retargeting · Scaling', 'Marketplace Growth - Listings · Marketplace ads · Catalogue management', 'Fulfilment & Brand Support - 3PL warehousing, photoshoots and collaterals via trusted partners.'] },
  { num: '02', slug: 'performance-marketing', icon: 'target', title: 'FOR SERVICE BUSINESSES', description: 'Leads that turn into revenue', items: ['Lead Funnels & Landing Pages. High-intent Landing pages · Lead forms · WhatsApp funnels', 'Lead Ads. Multi channel Ad management · Campaigns optimised for qualified leads.', 'Lead Quality & Tracking. Know which leads convert · GTM · CAPI · Offline conversions · CRM sync', 'Nurture & Follow-up. Automations that keep leads warm until conversions. CRM integration · WhatsApp and email sequences'] },
]
type ServicePageConfig = {
  slug: string
  title: string
  eyebrow: string
  headline: string
  highlight: string
  description: string
  tools: { name: string; icon: string; mark: string }[]
  process: { title: string; description: string }[]
  deliverables: { title: string; description: string }[]
}
const servicePages: ServicePageConfig[] = [
  {
    slug: 'ecommerce-development', title: 'Ecommerce Development', eyebrow: 'ECOMMERCE DEVELOPMENT', headline: 'Commerce built around', highlight: 'your next move.', description: 'High-performing storefronts, thoughtful customer journeys, and flexible technology that help your business sell more.',
    tools: [{ name: 'Shopify', icon: 'shopify', mark: 'S' }, { name: 'Shopify Plus', icon: 'shopify', mark: 'S+' }, { name: 'WordPress', icon: 'wordpress', mark: 'W' }, { name: 'WooCommerce', icon: 'woocommerce', mark: 'W' }, { name: 'Liquid', icon: 'shopify', mark: 'L' }, { name: 'React', icon: 'react', mark: 'R' }, { name: 'Klaviyo', icon: '', mark: 'K' }],
    process: [{ title: 'Understand', description: 'Get to know your brand, customers, and ambitions.' }, { title: 'Strategize', description: 'Map the highest-impact opportunities.' }, { title: 'Build', description: 'Create the foundation for conversion.' }, { title: 'Launch', description: 'Go live with clarity and confidence.' }, { title: 'Market', description: 'Bring the right people to your brand.' }, { title: 'Optimize', description: 'Test, learn, and improve every touchpoint.' }, { title: 'Scale', description: 'Turn momentum into sustainable growth.' }],
    deliverables: [{ title: 'Ecommerce Stores', description: 'Conversion-ready storefronts that turn a first visit into a lasting relationship.' }, { title: 'Landing Pages', description: 'Purpose-built pages that make every campaign click count.' }, { title: 'Product Pages', description: 'Clear, persuasive product experiences built to answer questions and inspire action.' }, { title: 'Campaign Funnels', description: 'Connected journeys that guide shoppers from discovery to checkout.' }, { title: 'Analytics Systems', description: 'Useful reporting that reveals what is working across your store.' }, { title: 'Tracking Systems', description: 'Reliable event and conversion tracking for better decisions.' }, { title: 'Marketing Dashboards', description: 'A focused view of store performance, acquisition, and revenue.' }, { title: 'Store Optimization', description: 'Ongoing improvements to speed, usability, and conversion.' }],
  },
  {
    slug: 'performance-marketing', title: 'Performance Marketing', eyebrow: 'PERFORMANCE MARKETING', headline: 'Marketing designed', highlight: 'to move business.', description: 'A measurable acquisition system that combines smart media buying, useful creative, and reliable conversion data.',
    tools: [{ name: 'Meta Ads', icon: 'meta', mark: 'M' }, { name: 'Google Ads', icon: 'googleads', mark: 'G' }, { name: 'Google Analytics', icon: 'googleanalytics', mark: 'GA' }, { name: 'Google Tag Manager', icon: 'googletagmanager', mark: 'GTM' }, { name: 'Looker Studio', icon: 'looker', mark: 'L' }, { name: 'TikTok Ads', icon: 'tiktok', mark: 'T' }, { name: 'Shopify', icon: 'shopify', mark: 'S' }],
    process: [{ title: 'Understand', description: 'Learn your goals, customers, and unit economics.' }, { title: 'Strategize', description: 'Prioritize channels, audiences, and opportunities.' }, { title: 'Build', description: 'Set up campaigns, creative, and measurement.' }, { title: 'Launch', description: 'Go live with clear goals and clean tracking.' }, { title: 'Market', description: 'Reach the right people with relevant messages.' }, { title: 'Optimize', description: 'Test, learn, and improve every touchpoint.' }, { title: 'Scale', description: 'Grow what works while protecting efficiency.' }],
    deliverables: [{ title: 'Ad Account Audits', description: 'A clear view of account structure, tracking, spend, and missed opportunities.' }, { title: 'Audience Strategy', description: 'Thoughtful audience planning across prospecting and remarketing.' }, { title: 'Campaign Funnels', description: 'Connected campaign journeys from first impression to purchase.' }, { title: 'Paid Media Campaigns', description: 'Managed campaigns across Meta and Google with goals tied to business results.' }, { title: 'Creative Testing', description: 'A consistent testing rhythm for concepts, formats, and messages.' }, { title: 'Analytics Systems', description: 'Reliable analytics that connect campaigns to customer actions.' }, { title: 'Conversion Tracking', description: 'Accurate event measurement for more confident optimization.' }, { title: 'Marketing Dashboards', description: 'Clear reporting on spend, acquisition, and revenue performance.' }],
  },
]
const people = [
  { slug: 'adrian-cole', name: 'Adrian Cole', role: 'Founder & Growth Strategist', expertise: 'Ecommerce Strategy · Growth', image: photos.founder, intro: 'I connect ecommerce technology, performance marketing, and clear business thinking to help ambitious brands grow with intention.', experience: '10+ years building digital commerce experiences and growth programs.', tools: 'Shopify, GA4, Meta Ads, Google Ads, Looker Studio', quote: 'Growth is not a tactic. It is a system you build, measure, and keep making better.' },
  { slug: 'maya-bennett', name: 'Maya Bennett', role: 'Head of Performance', expertise: 'Paid Media · Acquisition', image: photos.maya, intro: 'I turn customer insights into thoughtful acquisition strategies that make every investment count.', experience: '8+ years planning, launching, and optimizing multichannel campaigns.', tools: 'Meta Ads, Google Ads, GA4, GTM, Looker Studio', quote: 'The best campaigns begin with understanding people, not platforms.' },
  { slug: 'jordan-lee', name: 'Jordan Lee', role: 'Lead Ecommerce Developer', expertise: 'Shopify · Conversion', image: photos.jordan, intro: 'I build fast, intuitive digital stores that make shopping feel simple and brands feel unforgettable.', experience: '7+ years creating and improving commerce experiences.', tools: 'Shopify, Liquid, React, WooCommerce, Figma', quote: 'Beautiful code should create a better experience for real people.' },
  { slug: 'alex-morgan', name: 'Alex Morgan', role: 'Creative Strategist', expertise: 'Creative · Content', image: photos.alex, intro: 'I bring together brand storytelling and performance thinking to create work that resonates and converts.', experience: '6+ years shaping creative across ecommerce and digital campaigns.', tools: 'Figma, Adobe Creative Cloud, Meta Ads, Shopify', quote: 'The most effective creative makes people feel something and do something.' },
]
const cases = [
  { slug: 'morrow-skin', client: 'Morrow Skin', industry: 'Beauty & Wellness', category: 'BUILD + MARKET', result: '+215%', resultLabel: 'Revenue growth', roas: '4.7x ROAS', cpa: '-32% CPA', description: 'From a beautiful product to a brand built for breakthrough growth.', challenge: 'A compelling product with an underperforming storefront and disconnected acquisition efforts.', solution: 'We redesigned the shopping journey, rebuilt campaign landing pages, and aligned paid media with conversion data.', services: 'Shopify Development, CRO, Meta Ads, Analytics', color: 'case-peach', image: photos.product },
  { slug: 'form-and-field', client: 'Form & Field', industry: 'Lifestyle & Home', category: 'BUILD + SCALE', result: '+184%', resultLabel: 'Conversion lift', roas: '3.9x ROAS', cpa: '+61% AOV', description: 'A smarter shopping experience for a design-minded brand.', challenge: 'Visitors loved the products but struggled to discover the right pieces and complete checkout.', solution: 'We simplified navigation, reimagined product discovery, and introduced a measurable optimization program.', services: 'Ecommerce Strategy, UX, Landing Pages, CRO', color: 'case-blue', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=950&q=85' },
  { slug: 'kinetic-club', client: 'Kinetic Club', industry: 'Activewear', category: 'MARKET + SCALE', result: '5.2x', resultLabel: 'Return on ad spend', roas: '+198% Revenue', cpa: '-28% CPA', description: 'Building a more efficient engine for a brand on the move.', challenge: 'Rising acquisition costs made it hard to scale while protecting profitability.', solution: 'We refreshed creative testing, rebuilt audience strategy, and improved attribution across the funnel.', services: 'Performance Marketing, Creative, Tracking, Reporting', color: 'case-green', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=950&q=85' },
]
const testimonials = [
  { quote: 'They understood that we needed more than a beautiful website. We needed an entire growth engine. Every decision was thoughtful, collaborative, and grounded in what actually moves the business forward.', name: 'Olivia Hart', company: 'Founder, Morrow Skin', service: 'Ecommerce Development + Performance Marketing', initials: 'OH' },
  { quote: 'The team brought clarity to a really complex challenge. Our new storefront feels exactly like our brand, and the improvement in the customer journey has been remarkable.', name: 'Daniel Reed', company: 'Co-founder, Form & Field', service: 'Ecommerce Strategy + CRO', initials: 'DR' },
  { quote: 'What stood out was the combination of creative thinking and rigorous measurement. They feel like an extension of our team, not another agency.', name: 'Samira Patel', company: 'Marketing Lead, Kinetic Club', service: 'Performance Marketing', initials: 'SP' },
]
const reasons = [
  ['01', 'Specialists, not generalists.', 'Dedicated playbooks for ecommerce and lead gen, not one-size-fits-all.'],
  ['02', 'Measured on revenue.', 'We report on CAC and Contribution Margin/ Cost per qualified lead not just on reach.'],
  ['03', 'One connected team.', 'Store, ads, creative and tracking under one roof.'],
  ['04', 'Tracking you can trust.', 'GA4, GTM and CAPI set up right, before a rupee is spent.'],
  ['05', 'Founder-led accounts.', 'Strategy from the top, not handed off after the pitch.'],
  ['06', 'Creative that converts.', 'UGC and ad scripts built for each funnel stage.'],
  ['07', 'Transparent reporting.', 'Live dashboards and honest weekly updates.'],
  ['08', 'Built for India.', 'Shopify, Meta, Google and the marketplaces, plus fulfilment support'],
]

function Logo({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="/#home" aria-label="Revgo Media and Digital home"><img src="/Revgo%20Logo%20-10.png" alt="Revgo Media and Digital" /></a>
}
function ButtonLink({ href, children, secondary = false, light = false }: { href: string; children: React.ReactNode; secondary?: boolean; light?: boolean }) {
  return <a href={href} className={`button-link ${secondary ? 'button-secondary' : 'button-primary'} ${light ? 'button-light' : ''}`}>{children}<Icon name="arrowUp" size={17} /></a>
}
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`section-label ${light ? 'section-label-light' : ''}`}><span className="label-line" />{children}</span>
}
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { elements.forEach(el => el.classList.add('is-visible')); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.08 })
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  })
}

function InquiryDialog({ onClose }: { onClose: () => void }) {
  const [growthNeed, setGrowthNeed] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.getElementById('inquiry-full-name')?.focus()
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { event.preventDefault(); onClose() } }
    dialog.addEventListener('keydown', closeOnEscape)
    return () => { dialog.removeEventListener('keydown', closeOnEscape); if (dialog.open) dialog.close(); document.body.style.overflow = previousOverflow }
  }, [])
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    const form = event.currentTarget
    setIsSubmitting(true)
    setSubmissionStatus(null)
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      })
      const result = await response.json() as { error?: string }
      if (!response.ok) throw new Error(result.error || 'Unable to send inquiry.')
      setSubmissionStatus({ type: 'success', message: 'Your inquiry has been sent. We’ll get back to you soon.' })
      form.reset()
      setGrowthNeed('')
    } catch {
      setSubmissionStatus({ type: 'error', message: 'We could not send your inquiry. Please try again or email revgoanalytics@gmail.com.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  const closeOnBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => { if (event.target === event.currentTarget) onClose() }
  return <dialog ref={dialogRef} className="inquiry-backdrop" aria-labelledby="inquiry-title" onCancel={event => { event.preventDefault(); onClose() }} onClick={closeOnBackdrop}>
    <section className="inquiry-dialog">
      <div className="inquiry-dialog-header"><div><span className="inquiry-eyebrow">LET'S TALK</span><h2 id="inquiry-title">Tell us what you're building.</h2><p>Share a few details and we’ll start with what matters most.</p></div><button className="inquiry-close" type="button" aria-label="Close inquiry form" onClick={onClose}><Icon name="close" size={21} /></button></div>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <label className="inquiry-honeypot" aria-hidden="true">Company website<input name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" /></label>
        <div className="inquiry-fields">
          <label>Full name <span>*</span><input id="inquiry-full-name" name="fullName" type="text" autoComplete="name" required /></label>
          <label>Email address <span>*</span><input name="email" type="email" autoComplete="email" required /></label>
          <label>Phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" required /></label>
          <label>Store website URL <small>(optional)</small><input name="website" type="url" placeholder="https://" /></label>
          <label className="inquiry-field-wide">Primary growth need <small>(optional)</small><select name="growthNeed" value={growthNeed} onChange={event => setGrowthNeed(event.target.value)}><option value="">Select an area</option><option>Performance marketing (Meta Ads / Google Ads)</option><option>Ecommerce web redesign</option><option>New web design</option><option>Conversion audit</option><option>Other</option></select></label>
          {growthNeed === 'Other' && <label className="inquiry-field-wide">What do you have in mind? <small>(optional)</small><input name="otherGrowthNeed" type="text" /></label>}
          <label className="inquiry-field-wide">Tell us about your project <small>(optional)</small><textarea name="projectDetails" rows={4} placeholder="Goals, timing, or anything else we should know" /></label>
        </div>
        {submissionStatus && <p className={`inquiry-status inquiry-status-${submissionStatus.type}`} role="status" aria-live="polite">{submissionStatus.message}</p>}
        <div className="inquiry-form-footer"><span><span>*</span> Required fields</span><button type="submit" className="button-link button-primary" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send inquiry'} {!isSubmitting && <Icon name="arrowUp" size={17} />}</button></div>
      </form>
    </section>
  </dialog>
}

function Header({ path, navigate }: { path: string; navigate: (path: string) => void }) {
  const [open, setOpen] = useState(false)
  const [inquiryOpen, setInquiryOpen] = useState(false)
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [])
  const handleNav = (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => { setOpen(false); if (path !== '/') { event.preventDefault(); navigate(`/${hash}`) } }
  return <><header className="site-header"><div className="container header-inner"><Logo /><nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">{navItems.map(([label, hash]) => <a key={label} href={`/${hash}`} onClick={event => handleNav(event, hash)}>{label}</a>)}<button type="button" className="mobile-nav-cta" onClick={() => { setOpen(false); setInquiryOpen(true) }}>Let's Talk <Icon name="arrowUp" size={17} /></button></nav><button type="button" className="header-cta" onClick={() => setInquiryOpen(true)}>Let's Talk <Icon name="arrowUp" size={16} /></button><button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={26} /></button></div></header>{inquiryOpen && <InquiryDialog onClose={() => setInquiryOpen(false)} />}</>
}
function HeroDashboard() {
  return <div className="hero-visual" aria-label="Ecommerce storefront and growth analytics illustration"><div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" /><div className="visual-glow" /><div className="storefront"><div className="browser-top"><div className="browser-dots"><i /><i /><i /></div><div className="browser-url">morrow.skin / shop</div><span className="browser-menu">☰</span></div><div className="store-body"><div className="store-nav"><strong>morrow<span>.</span></strong><span>Shop &nbsp;&nbsp; Our Story &nbsp;&nbsp; Journal</span><span>⌕ &nbsp; ◌</span></div><div className="store-content"><div className="store-copy"><span>THE EVERYDAY RITUAL</span><h3>Feel good<br />in your skin.</h3><p>Thoughtful care for the skin you're in.</p><span className="store-shop">SHOP THE COLLECTION <Icon name="arrow" size={12} /></span></div><div className="store-image"><img src={photos.product} alt="Minimal skincare product on a warm neutral background" /></div></div><div className="store-footer">NOURISH &nbsp; • &nbsp; RESTORE &nbsp; • &nbsp; GLOW</div></div></div><div className="floating-card revenue-card"><span className="mini-icon orange-mini"><Icon name="chart" size={17} /></span><div><small>REVENUE GROWTH</small><strong>+320% <span>↗</span></strong><span className="mini-caption">vs. previous period</span></div></div><div className="floating-card roas-card"><div className="roas-icon"><Icon name="target" size={21} /></div><div><small>RETURN ON AD SPEND</small><strong>4.8x <span>ROAS</span></strong></div><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><div className="floating-card orders-card"><span className="orders-dot" /><span><strong>25K+</strong><small> orders delivered</small></span></div></div>
}
function HeroGrowthLoop() {
  const principles = [
    ['Understand'],
    ['Strategize'],
    ['Creativity'],
    ['Build'],
    ['Launch'],
    ['Market'],
    ['Optimize'],
    ['Scale'],
    
  ]
  return <div className="hero-growth-loop"><svg viewBox="0 0 600 600" role="img" aria-labelledby="growth-loop-title growth-loop-description">
    <title id="growth-loop-title">Performance loop</title>
    <desc id="growth-loop-description">{principles.map(lines => lines.join(' ')).join(' ')}</desc>
    <circle className="growth-loop-ring" cx="300" cy="300" r="200" />
    <text className="growth-loop-center" x="300" y="293" textAnchor="middle"><tspan x="300">PERFORMANCE</tspan><tspan x="300" dy="27">LOOP</tspan></text>
    {principles.map((lines, index) => {
      const angle = (index * 45 - 90) * Math.PI / 180
      const x = 300 + 200 * Math.cos(angle)
      const y = 300 + 200 * Math.sin(angle)
      return <g className="growth-loop-node" key={lines.join(' ')} transform={`translate(${x} ${y})`}>
        <circle r="26" />
        <text className="growth-loop-number" textAnchor="middle" y="-7">{String(index + 1).padStart(2, '0')}</text>
        <text className="growth-loop-label" textAnchor="middle" y="14"><tspan x="0">{lines[0]}</tspan><tspan x="0" dy="19">{lines[1]}</tspan></text>
      </g>
    })}
    <g className="growth-loop-orbit" aria-hidden="true"><circle className="growth-loop-dot" cx="300" cy="100" r="6" /></g>
  </svg></div>
}
function Hero() {
  return <section className="hero" id="home"><div className="hero-grid" /><div className="container hero-inner"><div className="hero-content"><div className="hero-eyebrow"><span className="eyebrow-pulse" />YOUR GROWTH PARTNER</div><h1>More orders.<br />More leads.<br /><em>Real growth<span className="orange-period">.</span></em></h1><p>Whether you sell online or sell through conversations, we build the systems that turn traffic into revenue, manage campaigns that scale, and creative that stops the scroll, all run by one team that answers your P&amp;L.</p><div className="hero-actions"><ButtonLink href="#contact">Grow My Online Store</ButtonLink><ButtonLink href="#services">Get Me Qualified Leads</ButtonLink></div><div className="hero-proof"><div className="proof-avatars"><span>A</span><span>M</span><span>J</span><span>+</span></div><div><strong>Built for ambitious brands.</strong><span>Powered by people who care about the details.</span></div></div></div><HeroGrowthLoop /></div><div className="hero-bottom container"><span>BUILD <i /> MARKET <i /> SCALE</span><a href="#services">SCROLL TO EXPLORE <span>↓</span></a></div></section>
}

function Services({ navigate }: { navigate: (path: string) => void }) {
  return <section className="section services-section" id="services"><div className="container"><div className="section-heading reveal"><div><SectionLabel>WHAT WE DO</SectionLabel><h2>Everything your business<br />needs to <em>grow in the digital ecosystem</em></h2></div>
  <p> Selling online or building a sales pipeline? We bring ads, creative and data together into one system that covers every stage of digital growth.</p></div><div className="services-grid">{services.map(service => <a href={`/services/${service.slug}`} onClick={event => { event.preventDefault(); navigate(`/services/${service.slug}`) }} className="service-card reveal" key={service.num} aria-label={`Explore ${service.title}`}><div className="service-card-top"><span className="service-icon"><Icon name={service.icon} size={27} /></span><span className="service-number">/ {service.num}</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="service-divider" /><ul>{service.items.map(item => <li key={item}><span />{item}</li>)}</ul><span className="service-arrow"><Icon name="arrowUp" size={21} /></span></a>)}</div></div></section>
}

function ServiceTools({ service }: { service: ServicePageConfig }) {
  const repeatedTools = [...service.tools, ...service.tools]
  return <section className="toolbelt-section"><div className="container toolbelt-heading"><SectionLabel>TOOLS WE WORK WITH</SectionLabel><p>Proven platforms, connected around your goals.</p></div><div className="tool-marquee"><div className="tool-track">{repeatedTools.map((tool, index) => <div className="tool-chip" key={`${tool.name}-${index}`} aria-hidden={index >= service.tools.length}>{tool.icon ? <><span className="tool-mark" hidden>{tool.mark}</span><img src={`https://cdn.simpleicons.org/${tool.icon}`} alt="" loading="lazy" onError={event => { event.currentTarget.hidden = true; const fallback = event.currentTarget.previousElementSibling; if (fallback instanceof HTMLElement) fallback.hidden = false }} /></> : <span className="tool-mark">{tool.mark}</span>}<span>{tool.name}</span></div>)}</div></div></section>
}

function ServiceProcess({ service }: { service: ServicePageConfig }) {
  return <section className="section process-section service-process-section"><div className="container"><div className="process-heading reveal"><div><SectionLabel light>HOW WE WORK</SectionLabel><h2>A clearer path from<br /><em>ambition to impact.</em></h2></div><p>No guesswork. No disconnected tactics. Just a purposeful process that keeps us moving forward, together.</p></div><div className="process-scroll"><div className="process-track service-process-track">{service.process.map((step, index) => <article className="process-step reveal" key={step.title}><span className="process-node"><span>{String(index + 1).padStart(2, '0')}</span></span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></div></section>
}

function ServiceDeliverables({ service }: { service: ServicePageConfig }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = service.deliverables[activeIndex]
  return <section className="section service-deliverables-section"><div className="container deliverables-layout"><div className="deliverables-info"><SectionLabel>THE WORK BEHIND THE WINS</SectionLabel><h2>Not just ideas.<br /><em>Things that move<br />you forward.</em></h2><p>Every deliverable is a piece of a bigger picture: a connected, conversion-focused growth system built around your brand.</p><article className="deliverable-feature" aria-live="polite"><span className="feature-kicker">CURRENTLY EXPLORING / {String(activeIndex + 1).padStart(2, '0')}</span><h3>{activeItem.title}</h3><p>{activeItem.description}</p><a href="#contact" className="feature-type">LET'S TALK <Icon name="arrowUp" size={16} /></a></article></div><div className="deliverables-list" aria-label={`${service.title} deliverables`}>{service.deliverables.map((item, index) => <button className={`deliverable-row ${activeIndex === index ? 'active' : ''}`} type="button" key={item.title} aria-pressed={activeIndex === index} onClick={() => setActiveIndex(index)}><span className="deliverable-index">{String(index + 1).padStart(2, '0')}</span><span>{item.title}</span><Icon name="arrowUp" size={18} /></button>)}</div></div></section>
}

function ServiceDetailPage({ slug, navigate }: { slug: string; navigate: (path: string) => void }) {
  const service = servicePages.find(item => item.slug === slug)
  if (!service) return <NotFound navigate={navigate} />
  return <main className="service-detail-page"><section className="hero service-detail-hero"><div className="hero-grid" /><div className="container hero-inner service-hero-inner"><div className="hero-content service-hero-content"><a href="/#services" onClick={event => { event.preventDefault(); navigate('/#services') }} className="back-link"><Icon name="chevronLeft" size={17} /> Back to What We Do</a><div className="hero-eyebrow"><span className="eyebrow-pulse" />{service.eyebrow}</div><h1>{service.headline}<br /><em>{service.highlight}</em></h1><p>{service.description}</p><div className="hero-actions"><ButtonLink href="#contact">Let's build what is next</ButtonLink></div></div><HeroDashboard /></div></section><ServiceTools service={service} /><ServiceProcess service={service} /><ServiceDeliverables service={service} /><Testimonials /><Contact /></main>
}

function About() {
  return <section className="section about-section" id="about"><div className="container about-layout"><div className="about-image-wrap reveal"><img src="/team-work.avif" alt="Illustration of a team assembling colorful letters together" loading="lazy" /><div className="about-image-tag"><span className="tag-star">✳</span> DIFFERENT SKILLS.<br />ONE SHARED AMBITION.</div></div><div className="about-content reveal"><SectionLabel>WHO WE ARE</SectionLabel><h2>Developers.<br />Marketers.<br /><em>Growth operators.</em></h2><p className="about-lead">Some brands need orders. Some need leads.</p><p>Both need the same thing underneath: a store or funnel that converts, ads that are measured honestly, and data that tells the truth.</p><p>At RevGo, one team builds and runs all of it.</p></div></div></section>
}

function Clients() {
  const platforms = [
    { name: 'Shopify', icon: 'shopify' },
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'Meta Ads', icon: 'meta' },
    { name: 'Google Analytics', icon: 'googleanalytics' },
    { name: 'Google Ads', icon: 'googleads' },
    { name: 'Looker Studio', icon: 'looker' },
  ]
  return <section className="clients-section" id="clients"><div className="container clients-layout"><div><SectionLabel>TOOLS WE WORK WITH</SectionLabel><h2>Proven platforms, connected around your goals.</h2></div><div className="client-logos" aria-label="Platforms we work with">{platforms.map(platform => <span className="platform-logo" key={platform.icon}><img src={`/platforms/${platform.icon}.svg`} alt="" loading="lazy" /><span>{platform.name}</span></span>)}</div></div></section>
}
function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]
  return <section className="section testimonial-section"><div className="container testimonial-layout"><div className="testimonial-left"><SectionLabel>CLIENT FEEDBACK</SectionLabel><h2>Partnerships<br />that <em>go further.</em></h2><p>Because great results mean more when the journey to get there feels just as good.</p><div className="slider-controls"><button type="button" aria-label="Previous testimonial" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}><Icon name="chevronLeft" /></button><button type="button" aria-label="Next testimonial" onClick={() => setIndex((index + 1) % testimonials.length)}><Icon name="chevronRight" /></button></div></div><div className="testimonial-card" key={index}><span className="quote-mark">“</span><blockquote>{current.quote}</blockquote><div className="testimonial-footer"><div className="testimonial-person"><span className="testimonial-avatar">{current.initials}</span><div><strong>{current.name}</strong><span>{current.company}</span></div></div><span className="testimonial-service">{current.service}</span></div></div></div></section>
}
function WhyChoose() {
  return <section className="section why-section"><div className="container"><div className="why-heading reveal"><SectionLabel light>THE REVGO DIFFERENCE</SectionLabel><h2>Why brands <em>choose us.</em></h2><p>We build growth systems that compound</p></div><div className="why-grid">{reasons.map(([num, title, description]) => <div className="why-item reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{description}</p><Icon name="arrowUp" size={18} /></div>)}</div></div></section>
}
function Contact() {
  return <section className="contact-section" id="contact"><div className="container contact-inner"><span className="contact-accent">✳</span><div className="contact-content reveal"><SectionLabel light>LET'S MAKE IT HAPPEN</SectionLabel><h2>Ready to <em>grow?</em></h2><p>Get a free audit of your store or your lead funnel.<br />Find out where your next customer is slipping away.</p><ButtonLink href="mailto:revgoanalytics@gmail.com?subject=Let's%20talk%20growth">Start Your Growth Journey</ButtonLink></div><div className="contact-bottom"><span>YOUR NEXT CHAPTER STARTS HERE.</span><a href="mailto:revgoanalytics@gmail.com">revgoanalytics@gmail.com <Icon name="arrowUp" size={17} /></a></div></div></section>
}
function Footer({ navigate }: { navigate: (path: string) => void }) {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><a className="brand brand-light" href="/#home" aria-label="Revgo Media and Digital home"><img src="/Revgo%20Logo%20-11.png" alt="Revgo Media and Digital" /></a><p>Building the stores, campaigns, and growth systems behind the next generation of ecommerce brands.</p><div className="footer-social"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={18} /></a><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" size={18} /></a></div></div><div className="footer-col"><h3>Explore</h3><a href="/#home">Home</a><a href="/#about">Who We Are</a><a href="/#services">Services</a><a href="/#clients">Clients</a></div><div className="footer-col"><h3>What we do</h3><a href="/#services">Ecommerce Development</a><a href="/#services">Performance Marketing</a></div><div className="footer-col footer-contact"><h3>Say hello</h3><a href="mailto:revgoanalytics@gmail.com"><Icon name="mail" size={17} />revgoanalytics@gmail.com</a><a href="tel:+919443070321"><Icon name="phone" size={17} />+91 94430 70321</a><span><Icon name="pin" size={17} />Working with brands worldwide</span><span className="footer-contact-note">Contact details are placeholders.</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Revgo Media and Digital. Built for what's next.</span><div><a href="/privacy" onClick={e => { e.preventDefault(); navigate('/privacy') }}>Privacy Policy</a><a href="/terms" onClick={e => { e.preventDefault(); navigate('/terms') }}>Terms & Conditions</a></div><a href="#home">Back to top ↑</a></div></div></footer>
}
function HomePage({ navigate }: { navigate: (path: string) => void }) {
  return <><Hero /><Services navigate={navigate} /><About /><Clients /><WhyChoose /><Contact /></>
}
function ProfilePage({ slug, navigate }: { slug: string; navigate: (path: string) => void }) {
  const person = people.find(p => p.slug === slug)
  if (!person) return <NotFound navigate={navigate} />
  return <main className="detail-page"><section className="detail-hero"><div className="container"><a href="/#team" onClick={e => { e.preventDefault(); navigate('/#team') }} className="back-link"><Icon name="chevronLeft" size={18} /> Back to Our Team</a><div className="profile-hero-grid"><div><SectionLabel light>THE PEOPLE BEHIND THE PROGRESS</SectionLabel><h1>{person.name}<span>.</span></h1><p className="detail-role">{person.role}</p><p className="detail-intro">{person.intro}</p><a className="detail-social" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Icon name="linkedin" size={18} /> LinkedIn Profile <Icon name="arrowUp" size={16} /></a></div><img src={person.image} alt={`Portrait representing ${person.name}`} /></div></div></section><section className="section profile-body"><div className="container"><div className="profile-quote">“{person.quote}”</div><div className="profile-content-grid"><div><SectionLabel>GET TO KNOW ME</SectionLabel><h2>More than a<br /><em>job title.</em></h2></div><div className="profile-facts"><div><h3>Who I Am</h3><p>{person.intro}</p></div><div><h3>Experience</h3><p>{person.experience}</p></div><div><h3>What I Do</h3><p>I work across strategy, execution, and collaboration to help brands create more connected ecommerce experiences.</p></div><div><h3>Core Expertise</h3><p>{person.expertise}</p></div><div><h3>Tools / Platforms</h3><p>{person.tools}</p></div><div><h3>Projects / Brands Worked With</h3><p>Sample projects: Morrow Skin, Form & Field, and Kinetic Club.</p></div><div><h3>Achievements</h3><p>Helping teams turn complex challenges into clear, measurable improvements across commerce and marketing.</p></div><div><h3>Professional Philosophy</h3><p>“{person.quote}”</p></div></div></div><div className="related-team"><SectionLabel>MORE OF THE TEAM</SectionLabel><h2>Meet your <em>growth partners.</em></h2><div className="related-grid">{people.filter(p => p.slug !== slug).map(p => <a href={`/team/${p.slug}`} onClick={e => { e.preventDefault(); navigate(`/team/${p.slug}`) }} key={p.slug}><img src={p.image} alt={`Portrait representing ${p.name}`} loading="lazy" /><span>{p.name} <Icon name="arrowUp" size={16} /></span><small>{p.role}</small></a>)}</div></div><p className="sample-note">Profiles, names, and portraits are illustrative placeholders.</p></div></section></main>
}
function CasePage({ slug, navigate }: { slug: string; navigate: (path: string) => void }) {
  const item = cases.find(c => c.slug === slug)
  if (!item) return <NotFound navigate={navigate} />
  return <main className="detail-page"><section className="detail-hero case-detail-hero"><div className="container"><a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="back-link"><Icon name="chevronLeft" size={18} /> Back to Home</a><SectionLabel light>{item.category} / {item.industry}</SectionLabel><h1>{item.client}<span>.</span></h1><p className="detail-intro">{item.description}</p><div className="detail-metrics"><div><strong>{item.result}</strong><span>{item.resultLabel}</span></div><div><strong>{item.roas}</strong><span>Campaign performance</span></div><div><strong>{item.cpa}</strong><span>Additional impact</span></div></div></div></section><section className="section case-detail-body"><div className="container case-detail-grid"><div><SectionLabel>THE STORY</SectionLabel><h2>Designed for<br /><em>what's next.</em></h2><img src={item.image} alt={`${item.client} project visual`} /></div><div className="case-detail-text"><div><span>01 / THE CHALLENGE</span><h3>Where we started</h3><p>{item.challenge}</p></div><div><span>02 / THE SOLUTION</span><h3>What we built together</h3><p>{item.solution}</p></div><div><span>03 / SERVICES PROVIDED</span><h3>Connected expertise</h3><p>{item.services}</p></div><ButtonLink href="/#contact">Build Your Growth Story</ButtonLink></div></div><div className="container"><p className="sample-note">This case study and its metrics are illustrative placeholders.</p></div></section></main>
}
function LegalPage({ type, navigate }: { type: 'privacy' | 'terms'; navigate: (path: string) => void }) {
  const privacy = type === 'privacy'
  return <main className="detail-page legal-page"><div className="container"><a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="back-link"><Icon name="chevronLeft" size={18} /> Back to Home</a><SectionLabel>{privacy ? 'PRIVACY' : 'LEGAL'}</SectionLabel><h1>{privacy ? 'Privacy Policy' : 'Terms & Conditions'}<span>.</span></h1><p>This page is a placeholder for your company’s {privacy ? 'privacy policy' : 'terms and conditions'}. Add your legally reviewed policy before publishing this website.</p><a href="mailto:revgoanalytics@gmail.com" className="text-link">Questions? Get in touch <Icon name="arrow" size={18} /></a></div></main>
}
function NotFound({ navigate }: { navigate: (path: string) => void }) { return <main className="not-found container"><SectionLabel>404 / PAGE NOT FOUND</SectionLabel><h1>Nothing here. <em>Yet.</em></h1><a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="text-link">Back to home <Icon name="arrow" /></a></main> }

export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  const navigate = (next: string) => { history.pushState({}, '', next); setPath(window.location.pathname); requestAnimationFrame(() => { if (next.includes('#')) document.getElementById(next.split('#')[1])?.scrollIntoView(); else window.scrollTo(0, 0) }) }
  useEffect(() => { const onPop = () => { setPath(window.location.pathname); requestAnimationFrame(() => { if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView(); else window.scrollTo(0, 0) }) }; window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, [])
  useEffect(() => {
    const person = path.startsWith('/team/') ? people.find(item => item.slug === path.split('/')[2]) : undefined
    const project = path.startsWith('/work/') ? cases.find(item => item.slug === path.split('/')[2]) : undefined
    const service = path.startsWith('/services/') ? servicePages.find(item => item.slug === path.split('/')[2]) : undefined
    document.title = person ? `${person.name} | Revgo Media and Digital` : project ? `${project.client} | Revgo Media and Digital` : service ? `${service.title} | Revgo Media and Digital` : path === '/privacy' ? 'Privacy Policy | Revgo Media and Digital' : path === '/terms' ? 'Terms & Conditions | Revgo Media and Digital' : path === '/' ? 'Revgo Media and Digital | Build. Market. Scale.' : 'Page Not Found | Revgo Media and Digital'
    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', person?.intro ?? project?.description ?? service?.description ?? 'Revgo Media and Digital connects ecommerce development, performance marketing, and growth strategy. Build, market, and scale your brand.')
  }, [path])
  useReveal()
  return <><Header path={path} navigate={navigate} />{path === '/' ? <main><HomePage navigate={navigate} /></main> : path.startsWith('/services/') ? <ServiceDetailPage slug={path.split('/')[2]} navigate={navigate} /> : path.startsWith('/team/') ? <ProfilePage slug={path.split('/')[2]} navigate={navigate} /> : path.startsWith('/work/') ? <CasePage slug={path.split('/')[2]} navigate={navigate} /> : path === '/privacy' || path === '/terms' ? <LegalPage type={path.slice(1) as 'privacy' | 'terms'} navigate={navigate} /> : <NotFound navigate={navigate} />}<Footer navigate={navigate} /></>
}
