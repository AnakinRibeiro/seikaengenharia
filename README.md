# Seika Engenharia

Site institucional em **Astro 7 + TypeScript (strict) + CSS Modules**, com foco
em performance e SEO. Zero JavaScript no cliente por padrão — o único script da
base é o do Header (~1 kB).

Design: [Figma — Seika](https://www.figma.com/design/KN7BwGxSYDf2NRMFSYTAOa/Seika)

## Comandos

| Comando         | Ação                                        |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | `astro check` + build de produção em `dist/` |
| `npm run preview` | Serve o build local                       |
| `npm run check` | Só a checagem de tipos                      |

## Estrutura

```
src/
├── assets/                  imagens processadas pelo Astro (logo, fotos)
├── components/
│   ├── icons/               Icon.astro + registry de ícones do Figma
│   ├── layout/              Container, Header
│   ├── seo/                 Seo.astro (meta, OG, JSON-LD)
│   └── ui/                  Button, Label, Logo, Rating, cards, FAQ
├── layouts/BaseLayout.astro  <html>, fontes, SEO, Header, skip link
├── lib/                     site.ts (metadados), navigation.ts
├── pages/
│   ├── index.astro          home (a montar, seção por seção)
│   └── styleguide.astro     referência interna, noindex
└── styles/
    ├── tokens.css           variáveis do Figma -> custom properties
    ├── reset.css            reset mínimo
    ├── global.css           única folha global
    └── typography.module.css  os 9 text styles do Figma
```

## Design system

Os tokens do Figma viram custom properties em `src/styles/tokens.css`, com os
nomes achatados a partir dos caminhos das variáveis:

| Figma                    | CSS                              |
| ------------------------ | -------------------------------- |
| `colors/text/primary`    | `--color-text-primary`           |
| `colors/fill/highlight`  | `--color-fill-highlight`         |
| `Spacing/4`              | `--space-4`                      |
| `Border-radius/2`        | `--radius-2`                     |
| `Typescale/paragraph/*`  | `--font-size-md`, `--line-height-md` |

Os **text styles** viram classes componíveis. Um componente nunca redeclara
tamanho/peso de fonte — ele compõe:

```css
.title {
  composes: cardTitle from '../../styles/typography.module.css';
  color: var(--color-text-primary);
}
```

`/styleguide` mostra tokens, tipografia, ícones e todos os componentes lado a
lado para comparar com o Figma.

### Tipografia

**Tipografia sempre segue o Figma — nada é extrapolado.** `Typescale/h1` e
`Typescale/h2` são variáveis responsivas com modo Desktop e Mobile; os dois
modos viram um único `@media (max-width: 720px)` em `tokens.css`.

| Text style       | Desktop | Mobile | Peso |
| ---------------- | ------- | ------ | ---- |
| `heroTitle` (h1) | 48/64   | 40/56  | 700  |
| `sectionHeader` (h2) | 40/56 | 32/48 | 700  |
| `cardTitle`      | 16/28   | —      | 600  |

**Não existe h3 nem h4 no design.** Títulos menores usam os estilos já
publicados: `cardTitle` (16/28) em cards e no acordeão, `sectionParagraphStrong`
(16/28 bold) no "Atendemos:", e `cardTextStrong` (14/24) nos títulos de coluna
do rodapé. Se faltar um nível, perguntar ao design em vez de inventar.

Atenção a dois pares que se parecem mas não são iguais:

- `Hero label` (SemiBold 12/20, pílula translúcida, ícone 14px) — só no hero;
  componente `Label`.
- `Section label` (Bold 14/24, sem pílula, ícone 22px) — cabeçalho de seção;
  componente `SectionLabel`.
- `Hero text` é SemiBold 16/28 enquanto `Section paragraph` é Regular 16/28.

### Ícones

A biblioteca mistura duas famílias (glifos preenchidos em `Icon/*` e alguns
traçados). Cada glifo foi exportado do Figma e normalizado para um `viewBox`
24×24 preservando a geometria original, com `currentColor` no lugar da cor fixa.
Renderizar no `defaultSize` reproduz o desenho pixel a pixel.

```astro
<Icon name="shield-check" />          <!-- 22px, tamanho do design -->
<Icon name="star" size={14} />
```

## Pendências antes de publicar

Dados de negócio que não existem em lugar nenhum do arquivo do Figma — não dá
para inventar, precisam vir do cliente:

- [ ] **Número de WhatsApp real.** O Figma mostra `(41) 99999-9999`, um padrão
      de placeholder (dígito repetido), não um número de verdade. Enquanto
      `site.contact.whatsapp` (`src/lib/site.ts`) estiver vazio, todo botão
      "Simular minha economia" — Hero, Energia Solar, CTA — e o link "Fale
      conosco pelo WhatsApp" do rodapé caem em `#contato` (rolam até a seção
      de CTA) em vez de abrir o WhatsApp direto. Preencher o número resolve
      os quatro de uma vez (`simulationCtaUrl` em `site.ts`).
- [ ] Telefone fixo (`site.contact.phone`), endereço completo (rua, CEP —
      `site.address`), e URLs reais de Instagram/LinkedIn (`site.social`).
      Enquanto vazios, Instagram/LinkedIn aparecem como texto no rodapé, não
      como link quebrado — comportamento intencional, não um bug.
- [ ] Confirmar o domínio final em `astro.config.mjs` (`site`) e em
      `public/robots.txt` — hoje aponta para `seikaengenharia.com.br` como
      placeholder.
- [ ] **Valores do card de economia do Hero.** `src/content/savings.ts` é um
      cenário *inventado* (R$ 450 → R$ 68, economia de R$ 382/mês) — não veio do
      Figma nem do cliente. As contas fecham entre si e o "depois" não é zero de
      propósito (custo de disponibilidade + fio B da Lei 14.300), mas continua
      sendo ficção mostrada a consumidor. Antes de publicar: ou vira um caso
      real com autorização do cliente, ou o card sai do ar. O aviso "valores
      ilustrativos" dentro do card é o mínimo, não a solução.
- [ ] **Depoimentos reais.** `src/content/testimonials.ts` reproduz fielmente
      os três cards do Figma, mas os três são *idênticos* (mesmo nome, mesmo
      texto) — claramente um placeholder duplicado no design, não conteúdo
      final. Três depoimentos iguais na página ao vivo lêem como falso.

Já resolvido nesta rodada, listado aqui só para registro:

- [x] `public/og-image.jpg` (1200×630) — gerado a partir da foto do Hero e da
      logo, mesmo tratamento visual (scrim + marca).
- [x] E-mail, CNPJ (`taxID` no schema) e área de atendimento — estavam de
      verdade no Figma, não eram placeholder; já estão em `site.ts`.
- [x] Escala de títulos — os valores de `Typescale/h1`/`h2` (incluindo os
      modos Desktop/Mobile) foram encontrados nos frames de página e usados
      literalmente. Nada extrapolado.

## Contraste de cor — herdado do Figma, não corrigido unilateralmente

Dois pares de cor do próprio design system não atingem WCAG AA para texto:

- **`colors/text/highlight` (#e8a53d) sobre fundos claros** — 2.1:1 em branco,
  2.0:1 sobre `background/secondary`. Precisa de 4.5:1. Afeta o texto do
  `SectionLabel` (o rótulo acima de cada título de seção, ex. "NOSSOS
  SERVIÇOS") em cinco seções, e o link "Ver portfólio →" do `ServiceCard`.
  Sobre fundo escuro (rodapé, header) o mesmo tom passa tranquilo (7.2:1).
- **`colors/text/secondary` (#707476) sobre `background/secondary`
  (#f5f8fa)** — 4.43:1, a 0.07 do limite. Afeta a linha "Tipo de serviço" do
  `TestimonialCard`.

Segui a cor do Figma à risca em vez de escurecer por conta própria — mudar a
marca sem aprovação do design estaria errado. Mas para acessibilidade real,
vale um destes: (a) usar `colors/text/highlight` só sobre fundo escuro ou em
texto grande (≥18.66px bold), (b) pedir ao design um tom mais escuro para uso
em texto pequeno sobre claro, ou (c) sublinhar os links afetados para não
depender só da cor.

## Divergência conhecida com o Figma

`Button` com `size="small"` + `model="secondary"` usa o text style de 16px
("Button text") em vez do de 14px, o que deixa essa variante com 40px de altura
contra 38px da small primary. Isso está reproduzido fielmente do Figma e
parece um descuido da biblioteca — vale confirmar com o design.
