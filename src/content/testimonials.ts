import type { RatingValue } from '../components/ui/Rating.astro';

export interface TestimonialItem {
  rating: RatingValue;
  quote: string;
  name: string;
  service: string;
}

/**
 * ⚠️ PLACEHOLDER — the Figma file has all three cards as identical,
 * unedited duplicates ("Marcos R." / "Residencial" / same quote, all three).
 * Reproduced faithfully rather than invented, but three visibly identical
 * testimonials will read as fake on a live site — replace with real client
 * quotes before launch.
 */
export const testimonials: TestimonialItem[] = [
  {
    rating: 5,
    quote:
      'Precisávamos de previsibilidade de custo. Fizeram o estudo, cuidaram da homologação e ainda ajustaram o cronograma para não parar a produção.',
    name: 'Marcos R.',
    service: 'Residencial',
  },
  {
    rating: 5,
    quote:
      'Precisávamos de previsibilidade de custo. Fizeram o estudo, cuidaram da homologação e ainda ajustaram o cronograma para não parar a produção.',
    name: 'Marcos R.',
    service: 'Residencial',
  },
  {
    rating: 5,
    quote:
      'Precisávamos de previsibilidade de custo. Fizeram o estudo, cuidaram da homologação e ainda ajustaram o cronograma para não parar a produção.',
    name: 'Marcos R.',
    service: 'Residencial',
  },
];
