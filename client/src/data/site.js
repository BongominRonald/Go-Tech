// Central brand + contact config. Change values here and they update everywhere.
export const site = {
  name: 'Go-Tech',
  wordmark: 'GO-TECH',
  tagline: 'For Real Solutions',
  slogan: 'Design · Build · Ship',
  location: 'Mbarara, Uganda',
  founder: 'Bongomin Ronald',
  email: 'abonga029@gmail.com',
  phones: ['+256 774 120 185', '+256 759 343 570'],
  whatsapp: '256774120185',
  github: 'https://github.com/abonga029',
  linkedin: 'https://www.linkedin.com/in/abonga029',
}

export const tel = (p) => `tel:${p.replace(/\s/g, '')}`

export const whatsappLink = (text = `Hello ${site.name}, I'd like to discuss a project. I found you online.`) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

// PLACEHOLDER numbers — update with your real figures before going public.
export const stats = [
  { count: 10, suffix: '+', label: 'Websites' },
  { count: 50, suffix: '+', label: 'Designs' },
  { count: 15, suffix: '+', label: 'Clients' },
  { count: 100, suffix: '%', label: 'Satisfaction' },
]

export const services = [
  {
    id: 'web',
    title: 'Website Design & Build',
    need: 'A website that turns visitors into calls and bookings.',
    why: 'Your website is your shopfront — the first thing customers see. We build it fast, mobile-first, and built to bring in calls and messages.',
    image: '/graphics/new-week.jpg',
    href: '#pricing-standard',
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    need: 'Brand graphics that look sharp everywhere they land.',
    why: 'Flyers, posters and social media graphics that make your brand recognisable. Consistent, print-ready, and delivered in 48 hours — not 48 days.',
    image: '/graphics/birthday-seanice.jpg',
    href: '#pricing-graphic',
  },
  {
    id: 'seo',
    title: 'Online Visibility',
    need: 'Get found on Google, Maps and search when it matters.',
    why: 'Either you are found, or you are not. We set up Google Maps, search and analytics so customers actually reach you.',
    image: '/graphics/exam-wishes.png',
    href: '#pricing-seo',
  },
]

export const steps = [
  { title: 'Discovery', desc: 'You tell us about your business. We listen and plan.' },
  { title: 'Quote', desc: 'Fixed UGX price. Written timeline. No surprises.' },
  { title: 'Design', desc: 'We design, you review. Three revision rounds included.' },
  { title: 'Build', desc: 'We build and test on real devices — Android and iPhone.' },
  { title: 'Launch', desc: 'You go live. Full ownership. Two weeks free support.' },
]

// USD conversion is for guidance only.
export const UGX_PER_USD = 3700

export const pricing = [
  { id: 'graphic', name: 'Graphic Design', desc: 'Digital logos, flyers, posters', price: 20000, timeline: '48 hours',
    features: ['Digital logos', 'Flyers & posters', 'Social media graphics', 'Print-ready files', '2 revision rounds'], cta: 'Request a Design' },
  { id: 'seo', name: 'SEO Optimization', desc: 'Get found on Google, Maps and search', price: 100000, from: true, timeline: 'Per month',
    features: ['Keyword research', 'On-page SEO', 'Google Business Profile', 'Performance report', 'Local & international search'], cta: 'Get Found' },
  { id: 'basic', name: 'Landing Page', desc: 'Landing page or portfolio website', price: 200000, timeline: '3–5 days',
    features: ['One high-converting page', 'Mobile-first design', 'WhatsApp & call buttons', 'Google Maps setup', 'Full ownership'], cta: 'Get Started' },
  { id: 'standard', name: 'Custom Website', desc: '5–10 pages', price: 500000, timeline: '2–3 weeks', popular: true,
    features: ['5–10 pages', 'Custom design', 'Form + WhatsApp integration', 'Search setup', '2 weeks support'], cta: 'Get Started' },
  { id: 'premium', name: 'Signature / E-commerce', desc: 'Online store with payments', price: 1300000, timeline: '3–6 weeks',
    features: ['Up to 12 pages + blog', 'Brand refresh', 'Online store (MoMo + Airtel)', 'Analytics setup', '30 days support'], cta: 'Contact Us' },
]

// PLACEHOLDER reviews — replace each quote with a real one from that client
// (or remove it) before going public.
export const testimonials = [
  { quote: 'They built my store website in two weeks. I get orders and calls every day now. Best money I have spent on my business.', name: 'Executive Scents', role: 'Fragrance Store', rating: 5 },
  { quote: 'Professional, fast, and the WhatsApp integration saves me hours every day. My customers love it.', name: 'Khaye Tech', role: 'Electronics Retailer', rating: 5 },
  { quote: 'Fixed price, clear timeline, and they delivered exactly what they said. No stress at all.', name: 'BRX Agro Global', role: 'Import & Export', rating: 5 },
  { quote: 'My flyer looks like it came out of a print catalogue — but it took 48 hours, not two weeks.', name: 'Roomify', role: 'Rental App', rating: 5 },
  { quote: 'Finally a team that explains what they are doing. And the result speaks for itself.', name: 'Shoe Haven', role: 'Footwear Shop', rating: 4 },
  { quote: 'The calculator site gets used by students every single day. Clean, fast and reliable.', name: 'S6 Weight Calculator', role: 'Education Tool', rating: 5 },
]

export const projects = [
  {
    name: 'Executive Scents',
    domain: 'executive-scents.vercel.app',
    url: 'https://executive-scents.vercel.app/',
    tag: 'E-commerce',
    desc: 'Luxury fragrance storefront featuring an immersive dark aesthetic, curated product catalogue, cart management, and seamless order dispatch.',
    features: ['Product Catalogue', 'Cart & Checkout', 'Luxury Dark Palette', 'Mobile Responsive'],
    accent: '#d4af37',
  },
  {
    name: 'Khaye Tech',
    domain: 'khaye-tech.vercel.app',
    url: 'https://khaye-tech.vercel.app/',
    tag: 'Electronics & Retail',
    desc: 'Comprehensive consumer electronics retail platform with categorised gadget showcases, discount banners, and direct WhatsApp order links.',
    features: ['Category Filtering', 'Deals Showcase', 'WhatsApp Ordering', 'Fast Loading'],
    accent: '#00aeef',
  },
  {
    name: 'Shoe Haven',
    domain: 'shoe-haven-l5ny.vercel.app',
    url: 'https://shoe-haven-l5ny.vercel.app/',
    tag: 'Footwear E-commerce',
    desc: 'Modern shoe store web experience with dynamic product listings, sizing selection, collection galleries, and responsive product cards.',
    features: ['Collection Grid', 'Dynamic Sizing', 'Product Quick View', 'Clean Visuals'],
    accent: '#ff5f57',
  },
  {
    name: 'BRX Agro Global',
    domain: 'brx-agro-global.vercel.app',
    url: 'https://brx-agro-global-importacao-e-export.vercel.app/',
    tag: 'Corporate & Trade',
    desc: 'International agricultural import & export corporate portal showcasing commodity supply chains, global operations, and trade inquiries.',
    features: ['B2B Trade Inquiries', 'Global Supply Details', 'Corporate Identity', 'Multilingual Ready'],
    accent: '#28c840',
  },
  {
    name: 'Internship Manager',
    domain: 'internishipmanager.vercel.app',
    url: 'https://internishipmanager.vercel.app/',
    tag: 'Web Application',
    desc: 'Centralised workflow management platform designed for universities and institutions to coordinate student placements, supervisors, and progress logs.',
    features: ['Role-Based Access', 'Placement Tracking', 'Progress Reports', 'Modern Dashboard'],
    accent: '#9d4edd',
  },
  {
    name: 'S6 Weight Calculator',
    domain: 's6universityweightcalculator.top',
    url: 'https://s6universityweightcalculator.top',
    tag: 'Educational Tool',
    desc: 'High-utility grading tool enabling high school leavers to compute university course admission weights instantly across major Ugandan universities.',
    features: ['Instant Computation', 'Subject Weight Rules', 'Course Mapping', 'High Mobile Traffic'],
    accent: '#f59e0b',
  },
]

export const graphics = [
  { src: '/graphics/new-week.jpg', title: 'New Week Campaign' },
  { src: '/graphics/birthday-seanice.jpg', title: 'Birthday Blessing' },
  { src: '/graphics/exam-wishes.png', title: 'Exam Wishes' },
  { src: '/graphics/birthday-adelin.png', title: 'Birthday Card' },
  { src: '/graphics/roomify.png', title: 'Roomify App Promo' },
  { src: '/graphics/birthday-atim.jpg', title: 'Celebration Poster' },
]
