/**
 * The Portfolio band on the home page — real jobs.
 *
 * A clip every third slide, photos in between, in the order the Figma frame
 * (326:392) laid them out. Six clips against thirteen photos works out to one
 * video always within reach of the visible slides, so the band has something
 * moving in it however far along it is scrolled — without the run of six that
 * grouping them together produced. Purely an ordering call — move the entries
 * to change it.
 */
import type { ImageMetadata } from 'astro';
import videoPoster01 from '../assets/video-01-poster.jpg';
import videoPoster02 from '../assets/video-02-poster.jpg';
import videoPoster03 from '../assets/video-03-poster.jpg';
import videoPoster04 from '../assets/video-04-poster.jpg';
import videoPoster05 from '../assets/video-05-poster.jpg';
import videoPoster06 from '../assets/video-06-poster.jpg';
import gallery01 from '../assets/gallery-01.jpg';
import gallery02 from '../assets/gallery-02.jpg';
import gallery03 from '../assets/gallery-03.jpg';
import gallery04 from '../assets/gallery-04.jpg';
import gallery05 from '../assets/gallery-05.jpg';
import gallery06 from '../assets/gallery-06.jpg';
import gallery07 from '../assets/gallery-07.jpg';
import gallery08 from '../assets/gallery-08.jpg';
import gallery09 from '../assets/gallery-09.jpg';
import gallery10 from '../assets/gallery-10.jpg';
import gallery11 from '../assets/gallery-11.jpg';
import gallery12 from '../assets/gallery-12.jpg';
import gallery13 from '../assets/gallery-13.jpg';

export interface GalleryItem {
  /** The photo itself, or the poster frame when this is a clip. */
  src: ImageMetadata;
  alt: string;
  /**
   * Only where Figma frames the photo somewhere other than its centre. The
   * tiles are 16:9 and several of these photos are portrait, so `cover` has a
   * lot of image to throw away and the default centre crop lands on the wrong
   * part of the subject. Values are derived from the inner-crop transforms in
   * the Figma output: `position = -top / (height - 100%)`.
   */
  objectPosition?: string;
  /**
   * Presence of this makes the tile a video. Path under /public — Astro's
   * asset pipeline only handles images, so clips are served exactly as
   * committed (they are already H.264/AAC with the moov atom up front, so
   * they stream rather than needing a full download).
   *
   * Nothing here is fetched until the lightbox opens: the grid shows `src` as
   * a still, so a video tile costs the page exactly what a photo tile costs.
   */
  video?: string;
  /** Seconds, shown on the badge so the length is known before clicking. */
  duration?: number;
}

export const galleryItems: GalleryItem[] = [
  {
    src: videoPoster01,
    alt: 'Estrutura de fixação montada sobre telhado metálico, antes da instalação dos módulos',
    video: '/videos/video-01.mp4',
    duration: 46,
  },
  {
    src: gallery01,
    alt: 'Painéis solares fotovoltaicos instalados em telhado residencial, com o bairro ao fundo',
  },
  {
    src: gallery02,
    alt: 'Módulos fotovoltaicos sobre telhado metálico de residência, com piscina e área verde ao fundo',
  },
  {
    src: videoPoster02,
    alt: 'Módulos fotovoltaicos instalados em telhado de residência, vistos de perto',
    video: '/videos/video-02.mp4',
    duration: 15,
  },
  {
    src: gallery03,
    alt: 'Painéis solares em telhado de telhas cerâmicas escuras sob céu nublado',
  },
  {
    src: gallery04,
    alt: 'Painéis solares sobre telhado metálico azul em bairro residencial',
  },
  {
    src: videoPoster03,
    alt: 'Sistema fotovoltaico sobre a cobertura de uma residência moderna de laje branca',
    video: '/videos/video-03.mp4',
    duration: 24,
  },
  {
    src: gallery05,
    alt: 'Dois módulos fotovoltaicos posicionados sobre telhado de telhas claras durante a instalação',
  },
  {
    src: gallery06,
    alt: 'Usina solar sobre cobertura comercial com vista panorâmica da cidade',
  },
  {
    src: videoPoster04,
    alt: 'Módulos fotovoltaicos instalados em telhado de telhas cerâmicas',
    video: '/videos/video-04.mp4',
    duration: 18,
  },
  {
    src: gallery07,
    alt: 'Fileiras de painéis solares em telhado metálico com a cidade ao fundo',
  },
  {
    src: gallery08,
    alt: 'Painéis solares alinhados ao longo do telhado metálico de um galpão',
  },
  {
    src: videoPoster05,
    alt: 'Painéis solares em telhado de telhas cerâmicas, com vista para a vizinhança',
    video: '/videos/video-05.mp4',
    duration: 21,
  },
  {
    src: gallery09,
    alt: 'Módulo fotovoltaico fixado em telhado de telhas claras junto à estrutura de sustentação',
  },
  {
    src: gallery10,
    alt: 'Vista superior de telhado residencial com módulos fotovoltaicos instalados',
    // h-[296.71%] top-[-164.43%] -> 1.6443 / (2.9671 - 1) = 0.836
    objectPosition: 'center 84%',
  },
  {
    src: videoPoster06,
    alt: 'Painéis solares instalados sobre telhado de fibrocimento',
    video: '/videos/video-06.mp4',
    duration: 20,
  },
  {
    src: gallery11,
    alt: 'Inversor solar e eletrodutos instalados em parede interna',
    // h-[316.49%] top-[-61.23%] -> 0.6123 / (3.1649 - 1) = 0.283
    objectPosition: 'center 28%',
  },
  {
    src: gallery12,
    alt: 'Inversor solar instalado em parede vermelha, com caixas de passagem e eletrodutos',
    // The third cropped tile in Figma, but it works out to 50% — the default.
  },
  {
    src: gallery13,
    alt: 'Disjuntores e dispositivos de proteção contra surtos montados em quadro elétrico',
  },
];
