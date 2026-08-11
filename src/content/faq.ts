export interface FaqItem {
  question: string;
  answer: string;
}

/** Rendered as accordions and also fed into FAQPage JSON-LD — one source. */
export const faqItems: FaqItem[] = [
  {
    question: 'Quantos painéis solares eu preciso para minha casa?',
    answer:
      'O número de painéis solares necessários depende de vários fatores, como o tamanho da sua residência, consumo de energia e localização geográfica. Geralmente, uma instalação residencial média requer entre 20 e 30 painéis para cobrir a demanda de uma família, porém uma avaliação personalizada pode determinar a quantidade ideal de painéis para atender às suas necessidades energéticas.',
  },
  {
    question: 'Em quanto tempo o investimento se paga?',
    answer:
      'Na maioria dos projetos residenciais o retorno acontece entre 4 e 6 anos, e o sistema continua gerando energia por muito mais tempo.',
  },
  {
    question: 'Como é feito o pagamento?',
    answer:
      'Acreditamos que todos podem ter acesso à energia limpa e econômica. Agora você pode instalar o seu sistema solar fotovoltaico com financeiamento em até 72x.',
  },
  {
    question: 'Preciso de autorização da concessionária?',
    answer:
      'Sim, e nós cuidamos de todo o processo de homologação junto à concessionária, sem custo adicional.',
  },
  {
    question: 'O sistema funciona em dias nublados?',
    answer:
      'Sim! A luz difusa ainda alcança os painéis solares, permitindo que continuem a produzir energia, embora em menor quantidade.',
  },
  {
    question: 'Qual a manutenção necessária?',
    answer:
      'Basicamente limpeza periódica dos painéis e uma inspeção anual. Os equipamentos têm alta durabilidade e baixa exigência de manutenção.',
  },
];
