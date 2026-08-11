/**
 * Primary navigation, transcribed from the Header component in Figma.
 */
export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Energia solar em residências', href: '#energia-solar' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre nós', href: '#sobre-nos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export const contactCta = {
  label: 'Entrar em contato',
  href: '#contato',
};
