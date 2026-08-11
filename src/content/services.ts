import type { ImageMetadata } from 'astro';
import energiaSolar from '../assets/service-energia-solar.jpg';
import projetosEletricos from '../assets/service-projetos-eletricos.jpg';
import eficienciaEnergetica from '../assets/service-eficiencia-energetica.jpg';
import icms from '../assets/service-icms.jpg';
import laudosTecnicos from '../assets/service-laudos-tecnicos.jpg';
import consultoria from '../assets/service-consultoria.jpg';

export interface ServiceItem {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const services: ServiceItem[] = [
  {
    title: 'Energia Solar Fotovoltaica',
    description:
      'Projeto, dimensionamento e instalação de sistemas fotovoltaicos para residências, comércios e indústrias, proporcionando economia e sustentabilidade.',
    image: energiaSolar,
    imageAlt: 'Fileiras de painéis solares fotovoltaicos sob céu azul',
  },
  {
    title: 'Projetos Elétricos',
    description:
      'Desenvolvimento de projetos elétricos de baixa e média tensão, atendendo às normas técnicas vigentes e às exigências das concessionárias.',
    image: projetosEletricos,
    imageAlt: 'Quadro elétrico com disjuntores e fiação organizada',
  },
  {
    title: 'Eficiência Energética',
    description:
      'Análise detalhada do consumo de energia com desenvolvimento de soluções para redução de custos e melhoria do desempenho energético.',
    image: eficienciaEnergetica,
    imageAlt: 'Miniaturas de casas sobre gráficos de consumo energético',
  },
  {
    title: 'Estudo de ICMS sobre energia elétrica',
    description:
      'Análise técnica das faturas de energia para identificação de créditos de ICMS recuperáveis, com emissão de laudos técnicos e suporte ao processo de recuperação tributária.',
    image: icms,
    imageAlt: 'Pessoas analisando documentos e gráficos financeiros',
  },
  {
    title: 'Laudos técnicos de engenharia elétrica',
    description:
      'Elaboração de laudos técnicos para processos judiciais, seguros, concessionárias de energia e avaliações técnicas.',
    image: laudosTecnicos,
    imageAlt: 'Engenheiro analisando plantas técnicas sobre a mesa',
  },
  {
    title: 'Consultoria Técnica',
    description:
      'Consultoria especializada para empresas e consumidores em assuntos relacionados à engenharia elétrica, concessionárias de energia e conformidade normativa.',
    image: consultoria,
    imageAlt: 'Eletricista segurando cabo elétrico com luvas de proteção',
  },
];
