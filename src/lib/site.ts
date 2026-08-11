/**
 * Single source of truth for site-wide metadata.
 *
 * ⚠️ The values marked TODO are placeholders — I have no real data for them.
 * Fill them in before going live: they feed the canonical URLs, Open Graph
 * tags and the LocalBusiness structured data that Google reads.
 */

export const site = {
  name: 'Seika Engenharia',
  legalName: 'Seika Engenharia', // TODO: razão social
  /** Must match `site` in astro.config.mjs. */
  url: 'https://www.seikaengenharia.com.br', // TODO: confirm domain
  locale: 'pt-BR',
  localeOg: 'pt_BR',

  tagline: 'Soluções e projetos',
  description:
    'Projetos e instalação de energia solar para residências e empresas. ' +
    'Engenharia especializada, economia na conta de luz e acompanhamento ' +
    'completo, do projeto à homologação.',

  /** Relative to /public. 1200x630 recommended. */
  ogImage: '/og-image.jpg', // TODO: produce this asset
  ogImageAlt: 'Seika Engenharia — soluções em energia solar',

  contact: {
    email: 'seikaengenharia@gmail.com',
    /** E.164 — what schema.org `telephone` and the wa.me deep links read. */
    phone: '+5541988285439',
    whatsapp: '+5541988285439',
    /** The same number in the Brazilian reading format, for display only. */
    phoneDisplay: '(41) 98828-5439',
  },

  /** Service area as shown in the footer, not a formal registered address. */
  serviceArea: 'Curitiba/PR e Região metropolitana',

  address: {
    // TODO — full street address needed for LocalBusiness/PostalAddress schema
    streetAddress: '',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    postalCode: '',
    addressCountry: 'BR',
  },

  /** CNPJ 60.219.928/0001-93 — fed into schema.org `taxID`. */
  taxId: '60.219.928/0001-93',

  /** Empty until each profile URL is confirmed — the footer renders the
   *  platform as plain text (not a dead link) while its value is empty.
   *  Feeds schema.org `sameAs` via Seo.astro. */
  social: {
    instagram: 'https://www.instagram.com/seikaengenharia',
  },
};

export type Site = typeof site;

/**
 * wa.me deep link for a WhatsApp conversation. `wa.me` is the universal link:
 * it opens the installed app on mobile and hands off to WhatsApp Web (or the
 * desktop app) everywhere else, which is why it is used in preference to a
 * hardcoded web.whatsapp.com URL that would break on phones.
 *
 * Returns null if `contact.whatsapp` is ever emptied again, so callers can
 * fall back to an on-page anchor rather than a dead `https://wa.me/`.
 */
export function getWhatsAppUrl(message?: string): string | null {
  const digits = site.contact.whatsapp.replace(/\D/g, '');
  if (!digits) return null;
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Anchor props for a CTA that opens WhatsApp. Spread rather than passing a
 * bare href: these leave the site, so every one of them needs to open in a new
 * window and carry `rel="noopener noreferrer"` — centralised here so no call
 * site can forget. Degrades to a plain `#contato` jump (no `target`) if the
 * number is ever removed.
 */
export interface WhatsAppCtaLink {
  href: string;
  target?: '_blank';
  rel?: string;
}

export function whatsAppCtaLink(message: string): WhatsAppCtaLink {
  const url = getWhatsAppUrl(message);
  if (!url) return { href: '#contato' };
  return { href: url, target: '_blank', rel: 'noopener noreferrer' };
}

/**
 * "Simular minha economia" repeats verbatim in Hero, Solar Energy and the CTA
 * band — same copy every time, so it is the same action every time: straight
 * into a chat with the bill already mentioned, not a scroll to the CTA band
 * asking for a second click.
 */
export const simulationCtaLink = whatsAppCtaLink(
  'Olá! Quero simular minha economia com energia solar — vou enviar uma foto da minha conta de luz.'
);

/** The generic "Entrar em contato" action — header, Services, About. */
export const contactCtaLink = whatsAppCtaLink(
  'Olá! Vim pelo site da Seika Engenharia e gostaria de falar com um especialista.'
);
