// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE ONLY (src/config/site.js). Everything on the page comes from here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Your Name',
  initials: 'YN',
  role: 'Videographer & video editor',
  location: 'Nairobi, Kenya',

  // WhatsApp number: country code + number, no "+" and no spaces.
  // Kenya example: 254712345678
  whatsapp: '254700000000',
  // The message that is pre-filled when a client taps the button
  message: "Hi! I saw your portfolio and I'd like to talk about a video project.",

  // ── Hero ──
  headline: 'One person to shoot it, cut it and deliver it.',
  usp:
    "I'm a videographer and editor in Nairobi. You get sharp footage and edits that move, from a single person, so there is no camera crew and editor to chase.",
  ctaLabel: 'Work with me',
  ctaNote: 'Opens WhatsApp. I reply within a few hours.',

  // ── What you offer ──
  offerTitle: 'What I make for you',
  services: [
    { name: 'Brand & product videos', text: 'Ads, promos and social campaigns shot and edited to fit your brand.' },
    { name: 'Reels, TikToks & Shorts', text: 'Vertical edits with captions, pacing and hooks built for the feed.' },
    { name: 'Events & documentaries', text: 'Weddings, launches, conferences and stories filmed on the day.' },
    { name: 'Editing, colour & sound', text: 'Send me your footage and get it back cut, graded and mixed.' },
  ],

  // ── Value to clients ──
  valueTitle: 'Why clients come back',
  values: [
    { big: '48 hrs', text: 'to your first rough cut' },
    { big: '2 rounds', text: 'of revisions included in every project' },
    { big: 'Every format', text: 'delivered for YouTube, Instagram, TikTok and TV' },
  ],

  // ── Portfolio ──
  // Add real work like this:
  //   { title: 'Safaricom Campaign', type: 'Brand film', youtube: 'dQw4w9WgXcQ' }          (YouTube video ID)
  //   { title: 'Wedding Highlights', type: 'Event', video: '/videos/wedding.mp4', poster: '/videos/wedding.jpg' }
  // Use ratio: '9 / 16' for vertical reels. Default is '16 / 9'.
  portfolioTitle: 'Recent work',
  work: [
    { title: 'Project title one', type: 'Brand film', ratio: '16 / 9' },
    { title: 'Project title two', type: 'Reel', ratio: '9 / 16' },
    { title: 'Project title three', type: 'Event highlights', ratio: '16 / 9' },
    { title: 'Project title four', type: 'Product video', ratio: '16 / 9' },
    { title: 'Project title five', type: 'Reel', ratio: '9 / 16' },
    { title: 'Project title six', type: 'Documentary', ratio: '16 / 9' },
  ],

  // ── Client logos ──
  // With a logo:  { name: 'Brand', logo: '/logos/brand.svg' }
  // Without one the name shows as text.
  clientsTitle: "Brands I've worked with",
  clients: [
    { name: 'Client One' },
    { name: 'Client Two' },
    { name: 'Client Three' },
    { name: 'Client Four' },
    { name: 'Client Five' },
  ],

  // ── Testimonials (switch on when you have them) ──
  showTestimonials: false,
  testimonialsTitle: 'What clients say',
  testimonials: [
    { quote: 'Fast, easy to work with, and the edit was better than we imagined.', who: 'Client name', company: 'Company' },
    { quote: 'Delivered ahead of the deadline and the footage looked cinematic.', who: 'Client name', company: 'Company' },
  ],

  // ── Closing section ──
  closingTitle: 'Got a project in mind?',
  closingText: 'Tell me what you are making and when you need it. I will reply with a plan and a price.',

  // Shown as plain text in the footer (not links, so the page keeps one action)
  handles: ['Instagram @yourhandle', 'YouTube @yourchannel'],
}
