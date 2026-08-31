export interface FaqItem {
  question: string;
  /** One entry per paragraph — rendered as <p>, joined for the JSON-LD answer. */
  answer: string[];
}

/** Rendered as accordions and also fed into FAQPage JSON-LD — one source. */
export const faqItems: FaqItem[] = [
  {
    question: 'Quantos painéis solares eu preciso para minha casa?',
    answer: [
      'O número de painéis solares necessários depende de vários fatores, como o tamanho da sua residência, consumo de energia e localização geográfica. Geralmente, uma instalação residencial média requer entre 10 a 15 painéis para cobrir a demanda de uma família, porém uma avaliação personalizada pode determinar a quantidade ideal de painéis para atender às suas necessidades energéticas.',
    ],
  },
  {
    question: 'Em quanto tempo o investimento se paga?',
    answer: [
      'Na maioria dos projetos residenciais o retorno acontece entre 2 a 3 anos e o sistema continua gerando energia por 25 anos.',
    ],
  },
  {
    question: 'Como é feito o pagamento?',
    answer: [
      'Acreditamos que todos podem ter acesso à energia limpa e econômica. Nossas formas de pagamento são: à vista, 18x no cartão ou financiamento com as financeiras (sujeito a análise de crédito).',
    ],
  },
  {
    question: 'Preciso de autorização da concessionária?',
    answer: [
      'Sim. Além da autorização da concessionária, também é necessário um projeto elétrico, devidamente feito por um engenheiro eletricista. Nós cuidamos de todo o processo de homologação junto à concessionária e também com o projeto elétrico.',
    ],
  },
  {
    question: 'E quando o dia está nublado? O sistema solar para de funcionar?',
    answer: [
      'Não! Mesmo com o céu encoberto, os painéis solares continuam captando a luz difusa do sol e transformando-a em energia. É verdade que a geração pode ser menor do que em um dia ensolarado, mas o sistema continua produzindo energia durante o dia.',
      'Sol forte gera mais. Céu nublado gera menos. Mas o sistema continua trabalhando para você.',
      'Energia solar não depende de um céu azul todos os dias. Ela depende da luz.',
    ],
  },
  {
    question: 'Qual a manutenção necessária em um sistema solar?',
    answer: [
      'Pouca. E esse é um dos grandes benefícios da energia solar!',
      'Os painéis solares não possuem partes móveis e são projetados para trabalhar por muitos anos com alta durabilidade e baixa necessidade de manutenção.',
      'A manutenção preventiva normalmente envolve: limpeza periódica dos módulos, conforme as condições do local; inspeção do sistema, conexões e equipamentos; acompanhamento da geração de energia para identificar qualquer alteração de desempenho.',
      'Com os cuidados adequados, seu sistema pode continuar gerando energia de forma eficiente, segura e confiável por muitos anos. Você investe uma vez e conta com uma fonte de energia feita para durar.',
    ],
  },
];
