import type { IconName } from '../components/icons/icons';

export interface BentoItem {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * The five Bento Card tiles (a sixth tile, first in row 1, is the photo —
 * rendered separately in SolarEnergy.astro since it isn't a card).
 */
export const bentoItems: BentoItem[] = [
  {
    icon: 'hand-coins',
    title: 'Redução na conta de luz',
    description:
      'Reduza até 95% da sua conta de luz. Energia solar é uma das formas mais inteligentes de economizar no longo prazo.',
  },
  {
    icon: 'leaf',
    title: 'Sustentabilidade',
    description:
      'Ajude o planeta com uma fonte de energia limpa e renovável. Energia solar não polui e contribui para um futuro mais verde.',
  },
  {
    icon: 'trend-up',
    title: 'Valorização do imóvel',
    description:
      'Instalar placas solares valoriza seu imóvel. É um diferencial que agrega tecnologia e consciência ambiental.',
  },
  {
    icon: 'wrench',
    title: 'Manutenção simples',
    description:
      'Os sistemas fotovoltaicos exigem baixa manutenção e têm alta durabilidade. Mais segurança e menos preocupação.',
  },
  {
    icon: 'shield-check',
    title: 'Proteção contra aumentos',
    description:
      'Tenha mais autonomia e previsibilidade. Fuja dos aumentos nas tarifas de energia elétrica.',
  },
];
