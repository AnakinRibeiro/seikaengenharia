/**
 * The four claims in the strip under the hero. Each item is Card text (14/24)
 * with select phrases in SemiBold — `strong: true` marks those segments.
 */
export interface HighlightSegment {
  text: string;
  strong?: boolean;
}

export interface HighlightItem {
  /** Rendered as one flowing sentence; `break` marks where the desktop
   *  variant forces a line break (Figma hard-codes each item to two lines
   *  once space allows nowrap text — mobile wraps naturally instead). */
  segments: HighlightSegment[];
  breakBeforeIndex: number;
}

export const highlights: HighlightItem[] = [
  {
    segments: [
      { text: 'Soluções técnicas em foco em ' },
      { text: 'economia', strong: true },
      { text: ' e ' },
      { text: 'segurança', strong: true },
    ],
    breakBeforeIndex: 1,
  },
  {
    segments: [
      { text: 'Especialização em ' },
      { text: 'eficiência energética', strong: true },
    ],
    breakBeforeIndex: 1,
  },
  {
    segments: [
      { text: 'Atendimento personalizado', strong: true },
      { text: ' direto com o engenheiro' },
    ],
    breakBeforeIndex: 1,
  },
  {
    segments: [
      { text: 'Experiência em ' },
      { text: 'projetos elétricos', strong: true },
      { text: ' e ' },
      { text: 'sistemas fotovoltaicos', strong: true },
    ],
    breakBeforeIndex: 2,
  },
];
