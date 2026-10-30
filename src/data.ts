
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
    {
      label : "SubStack",
      href: "https://open.substack.com/pub/ndidia"
    }, 
    {
      label : "Facebook", 
      href: "https://www.facebook.com/share/1CFwaVRziF/?mibextid=wwXIfr"
    }
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
    title: 'Anointing Prayer Oil',
    client: 'Believer’s bookshop',

    summary:
      'A product image for Abba Jerusalem’s Spikenard anointing prayer oil, presented with its matching packaging.',
    result: '',
    details: [
      'AI-assisted product visual',
      'Created an AI-generated product replica showcasing the packaging, label details, and presentation of Abba Jerusalem’s Rose of Sharon Anointing Prayer Oil for the brand’s Instagram page',
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
    title: 'Woman’s Study Bible',
    client: 'Believer’s bookshop',

    summary:
      'A set of faith themed T shirt concepts presented together as an apparel range.',
    result: '',
    details: [
      'AI generated apparel mockup',
      'Produced AI-generated product imagery featuring the Woman’s Study Bible collection, highlighting its colourful covers, distinctive designs, and premium presentation.',
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
    id: 'website banner',
    title: 'Website Banner',
    client: 'Believer’s Bookshop',

    summary:
      'Designed a promotional website banner for a faith-inspired brand, combining bold typography, product imagery, and a clear call to action to create an engaging, brand-aligned shopping experience.',
    result: '',
    details: [
      'Designed a promotional website banner for a faith-inspired brand, combining bold typography, product imagery, and a clear call to action to create an engaging, brand-aligned shopping experience.',
    
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
    title: 'Social Media Graphics',
    client: 'Yago Cakes',

    summary:
      'Created a vibrant Monday-themed Instagram graphic featuring a stack of donuts to kick-start the week with a sweet visual treat, boost audience engagement, and reinforce the bakery’s brand presence.',
    result: '',
    details: [
      'Created a vibrant Monday-themed Instagram graphic featuring a stack of donuts to kick-start the week with a sweet visual treat, boost audience engagement, and reinforce the bakery’s brand presence.',
    
    ],
    channels: ['Graphics'],
    media: {
      kind: 'image',
      src: asset('yagodougunts.png'),
    },
    ratio: 'square',
    tone: ['#713F28', '#D9A441'],
  },

  //   {
  //   id: 'yago-milkshakes-labels',
  //   title: 'Vanilla Milkshake Label Design',
  //   client: 'Yago Cakes',
   
  //   summary:
  //     'Designed a vanilla milkshake label featuring a clean, appealing visual style that reflects the flavour and complements the bakery’s brand identity.',
  //   result: '',
  //   details: [
  //     'Designed a vanilla milkshake label featuring a clean, appealing visual style that reflects the flavour and complements the bakery’s brand identity',
  //   ],
  //   channels: ['Graphics'],
  //   media: {
  //     kind: 'image',
  //     src: asset('vanillamilke.png'),
  //   },
  //   ratio: 'square',
  //   tone: ['#7A2433', '#E8E0D4'],
  // },
  {
    id: 'yago-milkshakes-labels',
    title: 'Strawberry Milkshake Label Design',
    client: 'Yago Cakes',

    summary:
      'Created a strawberry milkshake label using flavour-inspired visuals and cohesive branding to give the product a fresh, appetising appeal.',
    result: '',
    details: [
      'Created a strawberry milkshake label using flavour-inspired visuals and cohesive branding to give the product a fresh, appetising appeal.'
    ],
    channels: ['Graphics',],
    media: {
      kind: 'image',
      src: asset('strawberrymilk.png'),
    },
    ratio: 'portrait',
    tone: ['#356486', '#F2B632'],
  },
  {
    id: 'tenancy video',
    title: 'Tenancy Video',
    client: 'Experimental Project',

    summary:
      'An experimental AI-generated talking-head video exploring tenancy agreements through engaging, informative digital storytelling. This project explores how AI avatars can simplify complex information and make educational content more accessible.',
    result: '',
    details: [
      'An experimental AI-generated talking-head video exploring tenancy agreements through engaging, informative digital storytelling. This project explores how AI avatars can simplify complex information and make educational content more accessible.',
    
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
    id: 'print motion',
    title: 'Print in Motion',
    client: 'Experimental Project',

    summary:
      'An AI-generated video featuring a printer printing a photograph of a fashion model wearing a dress, blending fashion imagery with realistic everyday motion to create a simple, visually engaging concept.',
    result: '',
    details: [
      'An AI-generated video featuring a printer printing a photograph of a fashion model wearing a dress, blending fashion imagery with realistic everyday motion to create a simple, visually engaging concept.',
     
    ],
    channels: ['AI Videos'],
    media: {
      kind: 'video',
      src: "https://res.cloudinary.com/dfkzskshk/video/upload/v1793103411/gemini_generated_video_FFBDEFA5_pyxole.mp4",
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },


    {
    id: 'bookshop-promotional-graphics',
    title: 'Customer Review Graphic',
    client: 'Believer’s Bookshop',

    summary:
      'Designed an Instagram graphic showcasing customer feedback, using a clean, brand-aligned layout to build trust, highlight customer satisfaction, and strengthen the bookshop’s online presence.',
    result: '',
    details: [
      'Designed an Instagram graphic showcasing customer feedback, using a clean, brand-aligned layout to build trust, highlight customer satisfaction, and strengthen the bookshop’s online presence.',
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
    title: '“We Are Open” Social Media Graphic',
    client: 'Believer’s Bookshop',
  
    summary:
      'Designed an Instagram announcement graphic to communicate the bookshop’s availability, combining clear messaging and brand-aligned visuals to keep customers informed and encourage visits and purchases.',
    result: '',
    details: [
      'Designed an Instagram announcement graphic to communicate the bookshop’s availability, combining clear messaging and brand-aligned visuals to keep customers informed and encourage visits and purchases.',
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
    title: 'Happy Easter Graphic',
    client: 'Believer’s Bookshop',

    summary:
      'Created an Easter-themed Instagram graphic celebrating the resurrection of Christ, combining festive visuals and brand-aligned design to share the message of hope, faith, and renewal with the bookshop’s online community.',
    result: '',
    details: [
      'Created an Easter-themed Instagram graphic celebrating the resurrection of Christ, combining festive visuals and brand-aligned design to share the message of hope, faith, and renewal with the bookshop’s online community.',
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
    title: 'Cake Transition Reel ',
    client: 'Yago Cakes',

    summary:
      'Shot and edited a creative cake transition reel using smooth visual transitions to showcase the cake in an engaging, eye-catching format that highlights the bakery’s products and strengthens its social media presence.',
    result: '',
    details: [
     'Shot and edited a creative cake transition reel using smooth visual transitions to showcase the cake in an engaging, eye-catching format that highlights the bakery’s products and strengthens its social media presence.',
    ],
    channels: ['Reels'],
    media: {
      kind: 'video',
      src: "https://res.cloudinary.com/dfkzskshk/video/upload/v1793013005/Yago_Content_4_mvbahz.mp4",
    },
    ratio: 'portrait',
    tone: ['#D9A441', '#2A1F1B'],
  },
    {
    id: 'yago-content-reel-four',
    title: 'Cake Decoration Process Reel',
    client: 'Yago Cakes',

    summary:
      'Shot and edited a behind-the-scenes reel showcasing the cake decoration process, capturing the artistry and intricate finishing touches to highlight the bakery’s craftsmanship and engage its social media audience.',
    result: '',
    details: [
      'Shot and edited a behind-the-scenes reel showcasing the cake decoration process, capturing the artistry and intricate finishing touches to highlight the bakery’s craftsmanship and engage its social media audience.',
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
    id: 'ciel-consulting',
    title: 'Promotional Ad Video 1',
    client: 'Ciel Consulting',

    summary:
      'Created and edited a promotional video for a certification and consulting company, highlighting its services and communicating key offerings through engaging visual storytelling.',
    result: '',
    details: [
      'Created and edited a promotional video for a certification and consulting company, highlighting its services and communicating key offerings through engaging visual storytelling.',
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
    title: 'Promotional Ad Video 2',
    client: 'Ciel Consulting',

    summary:
      'Produced a second social media ad video designed to showcase the company’s professional offerings, communicate value to its target audience, and strengthen its digital brand presence.',
    result: '',
    details: [
      'Produced a second social media ad video designed to showcase the company’s professional offerings, communicate value to its target audience, and strengthen its digital brand presence.',
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
    quote: "She kept our content organised, consistent, and aligned with our brand. Working with her was seamless!"
  },
  {
    name: 'Nkiruka Ogechukwu',
    role: 'MD, Eden Anchor Ltd',
    quote:
      "She is patient, responsive, and attentive to our needs. She makes every interaction smooth and ensures clients feel heard and supported"
  },
  {
    name: 'Nesta F.',
    role: 'Creative Director, Nesta Tribe Concept',
    quote:
      'Ndidi has been an outstanding community manager and admin for Nesta Tribe. She brings heart and structure to everything.',
  },
];
