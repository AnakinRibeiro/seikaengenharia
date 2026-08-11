export interface FaqItem {
  question: string;
  answer: string;
}

/** Rendered as accordions and also fed into FAQPage JSON-LD — one source. */
export const faqItems: FaqItem[] = [
  {
    question: 'Quantos painéis solares eu preciso para minha casa?',
    answer:
      'Depende do seu consumo médio mensal e da área disponível no telhado. Fazemos o dimensionamento a partir das suas últimas faturas de energia e apresentamos a proposta antes de qualquer instalação.',
  },
  {
    question: 'Em quanto tempo o investimento se paga?',
    answer:
      'Na maioria dos projetos residenciais o retorno acontece entre 4 e 6 anos, e o sistema continua gerando energia por muito mais tempo.',
  },
  {
    question: 'Preciso de autorização da concessionária?',
    answer:
      'Sim, e nós cuidamos de todo o processo de homologação junto à concessionária, sem custo adicional.',
  },
  {
    question: 'O sistema funciona em dias nublados?',
    answer:
      'Funciona, com geração reduzida. O dimensionamento já considera a média anual de irradiação da sua região.',
  },
  {
    question: 'Qual a manutenção necessária?',
    answer:
      'Basicamente limpeza periódica dos painéis e uma inspeção anual. Os equipamentos têm alta durabilidade e baixa exigência de manutenção.',
  },
];
