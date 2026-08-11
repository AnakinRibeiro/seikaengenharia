/**
 * ⚠️ VALORES FICTÍCIOS — exemplo ilustrativo do card de economia no Hero.
 *
 * Nada aqui veio do cliente nem do Figma: é um cenário inventado para
 * demonstrar a ordem de grandeza da economia. Antes de publicar, ou estes
 * números viram um caso real (com autorização do cliente), ou o card sai do ar.
 * Ver "Pendências antes de publicar" no README.
 *
 * As contas fecham entre si e a tarifa implícita é ~R$ 1,00/kWh, próxima da
 * residencial da Copel com impostos. O "depois" não é zero de propósito: mesmo
 * com geração própria o cliente segue pagando o custo de disponibilidade da
 * distribuidora e o fio B da Lei 14.300 — prometer R$ 0 seria falso.
 *
 *   450 − 68 = 382     382 × 12 = 4.584
 */
export const savingsExample = {
  /**
   * Identifica o cenário. Faz o papel de título do card.
   * "kWh/mês" e não "kWh por mês": na coluna estreita (1081-1250px) a versão
   * longa quebra em "450 kWh por / mês", e a barra já é a forma usada no
   * número grande logo abaixo.
   */
  scenario: 'Casa em Curitiba · 450 kWh/mês',

  /** As duas linhas da comparação, na ordem em que aparecem. */
  rows: [
    { label: 'Conta hoje', value: 'R$ 450' },
    { label: 'Com energia solar', value: 'R$ 68' },
  ],

  savingsLabel: 'Você economiza',
  savingsValue: 'R$ 382',
  /** Sufixo curto ao lado do número grande. */
  savingsPeriod: '/mês',
  savingsAnnual: 'R$ 4.584 no primeiro ano',

  /**
   * Fica dentro do card, não em letra miúda em outro lugar da página: é um
   * número de economia mostrado a consumidor, e o CDC (art. 37) trata oferta
   * enganosa com seriedade.
   */
  disclaimer:
    'Valores ilustrativos. A economia real depende do seu consumo, do telhado e da tarifa da sua distribuidora.',
};

export type SavingsExample = typeof savingsExample;
