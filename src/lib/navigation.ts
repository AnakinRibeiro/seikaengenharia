/**
 * Primary navigation, transcribed from the Header component in Figma.
 */
import { contactCtaLink } from './site';

export interface NavItem {
  label: string;
  href: string;
}

/*
 * Every target is a section of the home page. They stay root-relative rather
 * than bare fragments so they keep working from any page the site grows later;
 * on the home page itself the browser still treats `/#servicos` as a
 * same-document fragment navigation, so smooth scrolling is unaffected.
 * Order follows the page. Footer.astro builds its "Links rápidos" column from
 * this same array.
 */
export const primaryNav: NavItem[] = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Energia solar', href: '/#energia-solar' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Sobre nós', href: '/#sobre-nos' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Portfólio', href: '/#portfolio' },
  { label: 'FAQ', href: '/#faq' },
];

/* Opens WhatsApp directly rather than scrolling to the CTA band: the band
   only ever asks for the same click again. `contactCtaLink` carries the
   target/rel this needs as an outbound link — spread it, don't unpack it. */
export const contactCta = {
  label: 'Entrar em contato',
  ...contactCtaLink,
};
