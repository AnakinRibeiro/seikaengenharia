/**
 * The four claims in the strip under the hero. Each item is body/body (16/24)
 * with select phrases in Bold — `strong: true` marks those segments.
 */
export interface HighlightSegment {
  text: string;
  strong?: boolean;
}

export interface HighlightItem {
  /** The two lines of the desktop variant, where Figma hard-codes each item
   *  onto two lines. Mobile joins them into one sentence that wraps
   *  naturally. A break can land inside a bold phrase (the fourth item), so
   *  each line carries its own segments. */
  lines: [HighlightSegment[], HighlightSegment[]];
}

export const highlights: HighlightItem[] = [
  {
    lines: [
      [{ text: 'Soluções técnicas em foco' }],
      [{ text: 'em ' }, { text: 'economia e segurança', strong: true }],
    ],
  },
  {
    lines: [
      [{ text: 'Especialização em' }],
      [{ text: 'eficiência energética', strong: true }],
    ],
  },
  {
    lines: [
      [{ text: 'Atendimento personalizado', strong: true }],
      [{ text: 'direto com o engenheiro' }],
    ],
  },
  {
    lines: [
      [{ text: 'Experiência em ' }, { text: 'projetos elétricos', strong: true }],
      [{ text: 'e sistemas fotovoltaicos', strong: true }],
    ],
  },
];
