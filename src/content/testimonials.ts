import type { RatingValue } from '../components/ui/Rating.astro';

export interface TestimonialItem {
  rating: RatingValue;
  /** One entry per paragraph — rendered as <p> inside the blockquote. */
  quote: string[];
  name: string;
  /** Which service the client hired — shown under the name. */
  service: string;
}

export const testimonials: TestimonialItem[] = [
  {
    rating: 5,
    quote: [
      'Precisávamos de previsibilidade de custo. Fizeram o estudo, cuidaram da homologação e ainda ajustaram o cronograma para não parar a produção.',
    ],
    name: 'Marcos P.',
    service: 'Comercial',
  },
  {
    rating: 5,
    quote: [
      'Desde o primeiro contato, a equipe da Seika foi muito atenciosa. Fizeram todo o estudo do projeto, cuidaram de toda a homologação e ainda ajustaram o cronograma de instalação para não atrapalhar nossa rotina.',
      'Foi tudo muito bem planejado e acompanhado. Recomendo a Seika pela competência e pelo cuidado em cada etapa.',
    ],
    name: 'Sílvio Alberto',
    service: 'Cliente Residencial',
  },
  {
    rating: 5,
    quote: [
      'Gostei muito da experiência com a Seika. Desde o planejamento até a instalação, tudo foi explicado com clareza e feito de forma muito organizada. A equipe cuidou de toda a parte burocrática e acompanhou o projeto de perto, o que deixou tudo muito mais tranquilo para nós.',
      'Um serviço sério, bem executado e com excelente atendimento.',
    ],
    name: 'Carlos M.',
    service: 'Cliente Residencial',
  },
];
