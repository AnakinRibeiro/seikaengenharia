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
    email: 'contato@seikaengenharia.com.br',
    phone: '', // TODO — E.164, e.g. +5541999999999
    // Figma shows "(41) 99999-9999", a placeholder pattern (repeated digit),
    // not a real number — leave empty until confirmed.
    whatsapp: '',
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
   *  platform as plain text (not a dead link) while its value is empty. */
  social: {
    instagram: '',
    linkedin: '',
  },
};

export type Site = typeof site;

/**
 * wa.me deep link for the primary conversion action ("send your bill on
 * WhatsApp"). Returns null while `contact.whatsapp` is still the TODO empty
 * string — callers should fall back to an anchor link in that case so the
 * button never points at a dead `https://wa.me/`.
 */
export function getWhatsAppUrl(message?: string): string | null {
  const digits = site.contact.whatsapp.replace(/\D/g, '');
  if (!digits) return null;
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * "Simular minha economia" repeats verbatim in Hero, Solar Energy and the CTA
 * band — same copy every time, so it should be the same action every time:
 * straight to WhatsApp, not a scroll to the CTA band asking for a second
 * click. Falls back to `#contato` (this section) until a real number lands
 * in `contact.whatsapp`.
 */
export const simulationCtaUrl =
  getWhatsAppUrl(
    'Olá! Quero simular minha economia com energia solar — vou enviar uma foto da minha conta de luz.'
  ) ?? '#contato';
