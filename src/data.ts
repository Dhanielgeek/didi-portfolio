
// ─────────────────────────────────────────────────────────────
// Everything you'll want to edit lives here. All copy, numbers,
// clients and quotes below are placeholders.
// Put your files in /public/media and reference them as '/media/...'
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ndidi Amaka',
  initials: 'NA',
  portrait: '/media/portrait.jpg',
  portraitFull: '/media/portrait.jpg',
  email: 'ndidiofiaeli@gmail.com',
  availability: 'Taking on new clients from January',
  formEndpoint: '', // e.g. a Formspree URL. Empty = opens the visitor's email app instead

  socials: [
    {
      label: 'LinkedIn',
      href: 'https://ng.linkedin.com/in/ndidiofiaeli',
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/the.ndidiamaka',
    },
    {
      label: 'X',
      href: 'https://x.com/chubbyscribbler',
    },
  ],

  recentClients: [
    'Abba Jerusalem',
    'Yago Cakes',
    'Zoborific Sips',
    "Believer’s Bookshop",
  ],
};

export const channels = [
  {
    name: 'Meta Ads',
    color: '#F2B632',
    note: 'Creator-style video ads and retargeting that follow people from reel to checkout.',
  },
  {
    name: 'Google Ads',
    color: '#7A2433',
    note: 'Search campaigns built around buying intent, with weekly clean-ups of wasted spend.',
  },
  {
    name: 'TikTok',
    color: '#2A1F1B',
    note: 'Short, native-looking videos tested against each other until one clearly wins.',
  },
  {
    name: 'Email',
    color: '#F2B632',
    note: 'Welcome, cart and win-back flows that earn revenue without extra ad spend.',
  },
  {
    name: 'SEO',
    color: '#7A2433',
    note: 'Articles written from real customer questions, linked to the pages that sell.',
  },
  {
    name: 'Analytics',
    color: '#2A1F1B',
    note: 'One dashboard that shows what each channel cost and what it brought back.',
  },
];

export const services = [
  {
    title: 'Paid media',
    text: 'Meta, TikTok and Google campaigns built around one number your business already tracks.',
  },
  {
    title: 'Short-form video',
    text: 'Concepts, scripts and edits for reels and ads, tested against each other every week.',
  },
  {
    title: 'Lifecycle email',
    text: 'Welcome, abandoned cart and win-back flows that run quietly in the background.',
  },
  {
    title: 'Reporting',
    text: 'One dashboard in GA4 and Looker Studio that shows what the budget bought.',
  },
];


export const facts = [
  {
    label: 'Experience',
    value: 'Experience across agency, freelance and brand-focused roles',
  },
  {
    label: 'Core Focus',
    value: 'People, brands, content & digital experiences',
  },
  {
    label: 'Tools & Platforms',
    value: 'Canva, CapCut, Instagram, TikTok, Facebook, Mailchimp, Meta Ads, Microsoft Office, Google Workspace, Substack',
  },
];


export type Channel =
  | 'AI content'
  | 'Graphics'
  | 'Paid social'
  | 'Search'
  | 'Email'
  | 'Short-form video'
  | 'SEO';

export type Media =
  | { kind: 'video'; src: string; poster?: string }
  | { kind: 'image'; src: string };

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  summary: string;

  /** Optional: leave '' when there is no number to quote. */
  result: string;

  details: string[];
  channels: Channel[];
  media: Media;
  ratio: 'landscape' | 'portrait' | 'square';

  /** Placeholder colours shown until the media loads. */
  tone: [string, string];
}

export const projects: Project[] = [
  {
    id: 'abba-spikenard',
    title: 'Anointing Oil Product Imagery',
    client: 'Abba Jerusalem',
    year: '2026',
    summary:
      'A product image for Abba Jerusalem’s Spikenard anointing prayer oil, presented with its matching packaging.',
    result: '',
    details: [
      'AI-assisted product visual',
      'Bottle and retail packaging shown together',
    ],
    channels: ['AI content', 'Graphics'],
    media: {
      kind: 'image',
      src: '/src/For Website/AI Content/278904B3-3F5A-45EF-99C9-1840FDE2EB9F.png',
    },
    ratio: 'portrait',
    tone: ['#565130', '#2A1F1B'],
  },
  {
    id: 'faith-apparel-concepts',
    title: 'Faith Inspired Apparel Concepts',
    client: 'Unspecified brand',
    year: '2026',
    summary:
      'A set of faith themed T shirt concepts presented together as an apparel range.',
    result: '',
    details: [
      'AI generated apparel mockup',
      'Multiple graphic directions in one image',
    ],
    channels: ['AI content', 'Graphics'],
    media: {
      kind: 'image',
      src: '/media/faith-apparel-concepts.png',
    },
    ratio: 'landscape',
    tone: ['#D9A441', '#2A1F1B'],
  },
  {
    id: 'faith-mug-concept',
    title: 'Inspirational Drinkware Mockup',
    client: 'Unspecified brand',
    year: '2026',
    summary:
      'A product mockup featuring an inspirational phrase on a ceramic mug.',
    result: '',
    details: [
      'AI generated product mockup',
      'Typography applied to a lifestyle product',
    ],
    channels: ['AI content', 'Graphics'],
    media: {
      kind: 'image',
      src: '/media/faith-mug-concept.png',
    },
    ratio: 'portrait',
    tone: ['#A7CFC5', '#565130'],
  },
  {
    id: 'yago-milkshake-labels',
    title: 'Milkshake Product Label Concepts',
    client: 'Yago Cakes',
    year: '2026',
    summary:
      'A coordinated set of chocolate, strawberry and vanilla milkshake product visuals carrying the Yago Cakes identity.',
    result: '',
    details: [
      'Three flavour variations',
      'Product naming and packaging visual direction',
    ],
    channels: ['Graphics', 'AI content'],
    media: {
      kind: 'image',
      src: '/media/yago-chocolate-milkshake.png',
    },
    ratio: 'square',
    tone: ['#713F28', '#D9A441'],
  },
  {
    id: 'zoborific-social-creatives',
    title: 'Zoborific Social Media Creatives',
    client: 'Zoborific Sips',
    year: '2025',
    summary:
      'A small social content set for Zoborific Sips, including a customer review layout and a product fact graphic.',
    result: '',
    details: [
      'Customer review post design',
      'Product focused fact graphic',
    ],
    channels: ['Graphics', 'Paid social'],
    media: {
      kind: 'image',
      src: '/media/zoborific-customer-post.png',
    },
    ratio: 'square',
    tone: ['#7A2433', '#E8E0D4'],
  },
  {
    id: 'believers-bookshop-social',
    title: 'Bookshop Promotional Graphics',
    client: 'Believer’s Bookshop',
    year: '2026',
    summary:
      'Promotional social graphics highlighting customer feedback, children’s Bibles and devotional reading.',
    result: '',
    details: [
      'Customer feedback creative',
      'Book recommendation layouts',
      'Seasonal promotional graphic',
    ],
    channels: ['Graphics', 'Paid social'],
    media: {
      kind: 'image',
      src: '/media/believers-customer-post.png',
    },
    ratio: 'portrait',
    tone: ['#356486', '#F2B632'],
  },
  {
    id: 'yago-cakes-reel',
    title: 'Yago Cakes Short Form Reel',
    client: 'Yago Cakes',
    year: '2026',
    summary:
      'A short form video from the Yago Cakes reel collection.',
    result: '',
    details: [
      'Vertical social video',
      'Part of a set of related Yago Cakes reels',
    ],
    channels: ['Short-form video'],
    media: {
      kind: 'video',
      src: '/media/yago-content-reel.mp4',
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#7A5A1E'],
  },
  {
    id: 'ciel-customer-interview',
    title: 'Customer Interview Video',
    client: 'Ciel',
    year: '2026',
    summary:
      'An interview video featuring a Ciel customer, presented as a brand testimonial piece.',
    result: '',
    details: [
      'Customer interview',
      'Branded video content',
    ],
    channels: ['Short-form video'],
    media: {
      kind: 'video',
      src: '/media/ciel-customer-interview.mp4',
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
  {
    id: 'ai-short-form',
    title: 'AI Assisted Short Form Video',
    client: 'Unspecified brand',
    year: '2026',
    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['AI content', 'Short-form video'],
    media: {
      kind: 'video',
      src: '/media/ai-short-form-video.mp4',
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Khalia Oluwatoba',
    role: 'CEO, Lormami',
    quote:
      'She told us which of our ideas to drop in the first week. Two months later our cost per order was the lowest it had ever been.',
  },
  {
    name: 'Nkiruka Ogechukwu',
    role: 'MD, Eden Anchor Ltd',
    quote:
      'I stopped dreading the monthly report. It was one page, it was honest, and it always said what to do next.',
  },
  {
    name: 'Nesta F.',
    role: 'Creative Director, Nesta Tribe Concept',
    quote:
      'Ndidi has been an outstanding community manager and admin for Nesta Tribe. She brings heart and structure to everything—whether it’s managing our online subgroups, keeping members engaged, or handling internal communications. Her presence has truly strengthened the sense of community within the tribe.',
  },
];
