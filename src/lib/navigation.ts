/**
 * Primary navigation, transcribed from the Header component in Figma.
 */
export interface NavItem {
  label: string;
  href: string;
}

/*
 * Every target is a section of the home page, so these are root-relative rather
 * than bare fragments — a bare `#servicos` resolves to nothing from /portfolio.
 * On the home page itself the browser still treats `/#servicos` as a
 * same-document fragment navigation, so smooth scrolling is unaffected.
 * Footer.astro builds its "Links rápidos" column from this same array.
 */
export const primaryNav: NavItem[] = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Energia solar', href: '/#energia-solar' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Sobre nós', href: '/#sobre-nos' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'FAQ', href: '/#faq' },
];

/* Bare fragment on purpose: every page carrying the header also renders the
   CTA band, so this always resolves within the current page. */
export const contactCta = {
  label: 'Entrar em contato',
  href: '#contato',
};
