import portraitUrl from './assets/myself.jpg.jpeg?url';

// ─────────────────────────────────────────────────────────────
// Project media lives in src/assets and is resolved by Vite at build time.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ndidi Amaka',
  initials: 'NA',
  portrait: portraitUrl,
  portraitFull: portraitUrl,
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
    name: 'Social media',
    color: '#F2B632',
    note: 'Platform strategy, content planning and community management shaped around your brand and audience.',
  },
  {
    name: 'Content & storytelling',
    color: '#7A2433',
    note: 'Captions, scripts, newsletters, blog posts and short-form videos that communicate ideas clearly.',
  },
  {
    name: 'AI creative tools',
    color: '#2A1F1B',
    note: 'AI-assisted image and video creation, creative experimentation and workflows that make production more efficient.',
  },
  {
    name: 'Email & CRM',
    color: '#F2B632',
    note: 'Customer emails, follow-ups, onboarding and CRM updates that keep communication organised.',
  },
  {
    name: 'Creative coordination',
    color: '#7A2433',
    note: 'Content scheduling, campaign coordination, website banners and presentation design.',
  },
  {
    name: 'Digital productivity',
    color: '#2A1F1B',
    note: 'Digital tools, administrative support and workflow improvements that help ideas move from planning to execution.',
  },
];

export const services = [
  {
    title: 'Digital marketing & social media',
    text: 'Digital and social media strategies, content calendars, campaign planning and platform management designed around your brand, audience and goals.',
  },
  {
    title: 'Content creation & storytelling',
    text: 'Captions, copywriting, scripts, newsletters, blog content, carousels, graphics and short-form videos that communicate your message with clarity and personality.',
  },
  {
    title: 'AI-powered creative production',
    text: 'AI-assisted image and video creation, creative experimentation and automation workflows that support content production and more efficient ways of working.',
  },
  {
    title: 'Customer relationships & communication',
    text: 'Customer enquiries, client follow-ups, community engagement, onboarding support, CRM updates and email communication that help keep relationships organised and responsive.',
  },
  {
    title: 'Creative coordination & digital support',
    text: 'Content scheduling, campaign coordination, website banners, presentation design and administrative support to help ideas move from planning to execution.',
  },
];


export const facts = [
  {
    label: 'Professional Identity',
    value: 'Independent creative professional working at the intersection of people, ideas and execution.',
  },
  {
    label: 'Core Focus',
    value: 'Strategy, relationships, storytelling, creative production and digital experiences.',
  },
  {
    label: 'Areas of Work',
    value: 'Digital marketing, social media, content creation, AI-powered production, customer communication and creative coordination.',
  },
  {
    label: 'Tools & Platforms',
    value: 'Canva, CapCut, Instagram, TikTok, Facebook, Mailchimp, Meta Ads, Microsoft Office, Google Workspace and Substack.',
  },
];


export type Channel =
  | 'AI Images'
  | 'Graphics'
  | 'AI Videos'
  | 'Reels'
  | 'Videos'


export type Media =
  | { kind: 'video'; src: string; poster?: string }
  | { kind: 'image'; src: string };

export interface Project {
  id: string;
  title: string;
  client: string;

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

const assetUrls = import.meta.glob('./assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function asset(filename: string): string {
  const url = assetUrls[`./assets/${filename}`];
  if (!url) throw new Error(`Missing project asset: ${filename}`);
  return url;
}

export const projects: Project[] = [
  {
    id: 'abba-spikenard',
    title: 'AI product replica',
    client: 'Believer’s bookshop',

    summary:
      'A product image for Abba Jerusalem’s Spikenard anointing prayer oil, presented with its matching packaging.',
    result: '',
    details: [
      'AI-assisted product visual',
      'Bottle and retail packaging shown together',
    ],
    channels: ['AI Images'],
    media: {
      kind: 'image',
      src: asset('abbaprayeroil.png'),
    },
    ratio: 'portrait',
    tone: ['#565130', '#2A1F1B'],
  },
  {
    id: 'faith-apparel-concepts',
    title: 'AI product replica',
    client: 'Believer’s bookshop',

    summary:
      'A set of faith themed T shirt concepts presented together as an apparel range.',
    result: '',
    details: [
      'AI generated apparel mockup',
      'Multiple graphic directions in one image',
    ],
    channels: ['AI Images'],
    media: {
      kind: 'image',
      src: asset('kjawowenbook.png'),
    },
    ratio: 'landscape',
    tone: ['#D9A441', '#2A1F1B'],
  },
  {
    id: 'faith-mug-concept',
    title: 'Inspirational Drinkware Mockup',
    client: 'Unspecified brand',

    summary:
      'A product mockup featuring an inspirational phrase on a ceramic mug.',
    result: '',
    details: [
      'AI generated product mockup',
      'Typography applied to a lifestyle product',
    ],
    channels: ['Graphics'],
    media: {
      kind: 'image',
      src: asset('wearbigdesign.PNG'),
    },
    ratio: 'portrait',
    tone: ['#A7CFC5', '#565130'],
  },
  {
    id: 'yago-milkshake-labels',
    title: 'Milkshake Product Label Concepts',
    client: 'Yago Cakes',

    summary:
      'A coordinated set of chocolate, strawberry and vanilla milkshake product visuals carrying the Yago Cakes identity.',
    result: '',
    details: [
      'Three flavour variations',
      'Product naming and packaging visual direction',
    ],
    channels: ['Graphics'],
    media: {
      kind: 'image',
      src: asset('yagodougunts.png'),
    },
    ratio: 'square',
    tone: ['#713F28', '#D9A441'],
  },
  {
    id: 'zoborific-social-creatives',
    title: 'Zoborific Social Media Creatives',
    client: 'Zoborific Sips',
   
    summary:
      'A small social content set for Zoborific Sips, including a customer review layout and a product fact graphic.',
    result: '',
    details: [
      'Customer review post design',
      'Product focused fact graphic',
    ],
    channels: ['Graphics'],
    media: {
      kind: 'image',
      src: asset('Vanilla Milkshake Label.png'),
    },
    ratio: 'square',
    tone: ['#7A2433', '#E8E0D4'],
  },
  {
    id: 'believers-bookshop-social',
    title: 'Bookshop Promotional Graphics',
    client: 'Believer’s Bookshop',

    summary:
      'Promotional social graphics highlighting customer feedback, children’s Bibles and devotional reading.',
    result: '',
    details: [
      'Customer feedback creative',
      'Book recommendation layouts',
      'Seasonal promotional graphic',
    ],
    channels: ['Graphics',],
    media: {
      kind: 'image',
      src: asset('Strawberry Milkshake Label.png'),
    },
    ratio: 'portrait',
    tone: ['#356486', '#F2B632'],
  },
  {
    id: 'yago-cakes-reel',
    title: 'Yago Cakes Short Form Reel',
    client: 'Yago Cakes',

    summary:
      'A short form video from the Yago Cakes reel collection.',
    result: '',
    details: [
      'Vertical social video',
      'Part of a set of related Yago Cakes reels',
    ],
    channels: ['AI Videos'],
    media: {
      kind: 'video',
      src: "https://res.cloudinary.com/dfkzskshk/video/upload/v1793012277/Captions_27D7EB_bxkxot.mp4",
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#7A5A1E'],
  },
  {
    id: 'ciel-customer-interview',
    title: 'Customer Interview Video',
    client: 'Ciel',

    summary:
      'An interview video featuring a Ciel customer, presented as a brand testimonial piece.',
    result: '',
    details: [
      'Customer interview',
      'Branded video content',
    ],
    channels: ['AI Videos'],
    media: {
      kind: 'video',
      src: "https://res.cloudinary.com/dfkzskshk/video/upload/v1793013005/Yago_Content_4_mvbahz.mp4",
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },


    {
    id: 'bookshop-promotional-graphics',
    title: 'Bookshop Promotional Graphics',
    client: 'Believer’s Bookshop',

    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['Graphics'],
    media: {
      kind: 'image',
      src: asset('beliversbookshop.PNG'),
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
    {
    id: 'church-event-creative',
    title: 'Church Event Creative',
    client: 'Church campaign',
  
    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['Graphics'],
    media: {
      kind: 'image',
      src: asset('churchopen.jpg'),
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
    {
    id: 'easter-day-creative',
    title: 'Easter Day Creative',
    client: 'Church campaign',

    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['Graphics'],
    media: {
      kind: 'image',
      src: asset('easterday.jpg'),
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
    {
    id: 'yago-content-reel',
    title: 'Yago Content Reel',
    client: 'Yago Cakes',

    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['Reels'],
    media: {
      kind: 'video',
      src: asset('Yago Content .mov'),
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
    {
    id: 'yago-content-reel-four',
    title: 'Yago Content Reel',
    client: 'Yago Cakes',

    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['Reels'],
    media: {
      kind: 'video',
      src: "https://res.cloudinary.com/dfkzskshk/video/upload/v1793012049/Yago_Content_fyxofu.mov",
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
    {
    id: 'red-spot-video-pitch',
    title: 'The Red Spot Initiative Video Pitch',
    client: 'The Red Spot Initiative',

    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['Videos'],
    media: {
      kind: 'video',
      src: "https://res.cloudinary.com/dfkzskshk/video/upload/v1793012806/Gift_for_Ciel_Ad_zdkpmt.mp4",
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
    {
    id: 'bunmi-ciel-ad',
    title: 'Bunmi for Ciel Ad',
    client: 'Ciel',

    summary:
      'A short form video asset from the AI Content collection; client and campaign context were not included with the file.',
    result: '',
    details: [
      'Video creative',
      'Client and campaign purpose not identified in source materials',
    ],
    channels: ['Videos'],
    media: {
      kind: 'video',
       src: 'https://res.cloudinary.com/dfkzskshk/video/upload/v1793010132/Bunmi_for_Ciel_Ad_oohb8l.mov',

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
