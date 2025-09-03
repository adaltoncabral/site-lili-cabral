// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, memo } from 'react';
import { Montserrat } from 'next/font/google';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

// Fonte institucional
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  preload: true,
});

// Marca / tema
const BRAND = {
  name: 'Lili Cabral',
  siteUrl: 'https://lilicabral.com.br',
  ogImage: '/og-image.jpg', // coloque um 1200x630 em /public
  whatsapp: '5533984142006',
  instagram: 'lili.cabral_',
};

const COLORS = {
  rosa: '#d693a8',
  grafite: '#191919',
  areia: '#FDF3E7',
  destaque: '#FADADD',
  zap: '#25d366',
  cinza: '#555555',
};

// UTM do WhatsApp
const wa = (text, utm = 'home') =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}&utm_source=${utm}&utm_medium=whatsapp&utm_campaign=site`;

// HERO (usa arquivo existente)
const HERO_SRC = '/banners/banner1.webp';

// Categorias — usando ícones existentes até ter fotos reais das categorias
const CATEGORIAS = [
  { id: 'pijamas',   label: 'Pijamas',            img: '/icones/icon-pijama.png',    alt: 'Categoria Pijamas - Conforto para suas noites', href: '/catalogo?categoria=pijamas' },
  { id: 'lingeries', label: 'Lingeries',          img: '/icones/icon-lingerie.png',  alt: 'Categoria Lingeries - Delicadeza e sensualidade', href: '/catalogo?categoria=lingeries' },
  { id: 'promos',    label: 'Promoções',          img: '/icones/icon-promocao.png',  alt: 'Categoria Promoções - Ofertas especiais', href: '/catalogo?categoria=promocoes' },
  { id: 'especiais', label: 'Coleções Especiais', img: '/icones/icon-especial.png',  alt: 'Categoria Coleções Especiais - Edições limitadas', href: '/catalogo?categoria=especiais' },
];

// Destaques — caminhos reais hoje em /public
const DESTAQUES = [
  { id: 'kit-casal', nome: 'Kit Pijamas Casal', descricao: 'Conforto e carinho para dormir juntinhos.', img: '/Kit_Pijamas_Casal.png', alt: 'Kit de pijamas para casal em cores coordenadas', href: '/produtos/kit-pijamas-casal', preco: 'A partir de R$ 89,90', mensagem: 'Olá! Vi o Kit Pijamas Casal no site e gostaria de saber mais detalhes.' },
  { id: 'conj-rose', nome: 'Conjunto Renda Rosé', descricao: 'Delicado e elegante com toque especial.', img: '/Conjunto_Renda_Rose.png', alt: 'Conjunto de lingerie em renda tom rosé', href: '/produtos/conjunto-renda-rose', preco: 'A partir de R$ 69,90', mensagem: 'Olá! Vi o Conjunto Renda Rosé no site e quero conhecer as opções disponíveis.' },
];

// Ícones SVG inline (sem libs)
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M20.5 3.5A11 11 0 0 0 3.1 18.8L2 22l3.3-1.1A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.8.8-2.3-.2-.3A8 8 0 1 1 12 20Z" />
    <path fill="currentColor" d="M16.6 14.3c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.4.1l-.6.7c-.1.1-.2.1-.4 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.3 0-.4 0-.5l.3-.4c.1-.2.1-.3 0-.4s-.4-1-.6-1.3-.3-.3-.4-.3h-.3c-.1 0-.4.1-.6.3s-.8.8-.8 2a3.6 3.6 0 0 0 .8 2.1 8.2 8.2 0 0 0 3.1 2.8 3.6 3.6 0 0 0 2.2.7c.9-.1 1.7-.8 1.9-1.3s.2-1.1.1-1.2-.1-.1-.3-.2Z" />
  </svg>
);
const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M13.172 12 8.222 7.05 9.636 5.636 16 12l-6.364 6.364-1.414-1.414Z" />
  </svg>
);

// Componente de imagem com fallback
const SmartImage = ({ src, fallback, alt, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => fallback && setImgSrc(fallback)}
      {...rest}
    />
  );
};

// Cards
const CategoriaCard = memo(({ categoria }) => (
  <Link href={categoria.href} className="categoria-card" aria-label={`Ver ${categoria.label}`}>
    <div className="categoria-image-container">
      <SmartImage
        src={categoria.img}
        fallback="/icones/icon-especial.png"
        alt={categoria.alt}
        width={220}
        height={160}
        sizes="(max-width: 768px) 40vw, 220px"
        className="categoria-image"
        loading="lazy"
      />
    </div>
    <span className="categoria-label">{categoria.label}</span>
  </Link>
));
CategoriaCard.displayName = 'CategoriaCard';

const ProdutoCard = memo(({ produto }) => {
  const onZap = useCallback(() => {
    window.gtag?.('event', 'whatsapp_click', { event_category: 'engagement', event_label: produto.nome });
  }, [produto.nome]);

  return (
    <article className="produto-card">
      <Link href={produto.href} className="produto-link" aria-label={`Abrir ${produto.nome}`}>
        <div className="produto-image-container">
          <SmartImage
            src={produto.img}
            fallback="/produtos/placeholder.png"
            alt={produto.alt}
            width={600}
            height={600}
            sizes="(max-width: 768px) 90vw, 280px"
            className="produto-image"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="produto-info">
        <h3 className="produto-nome">{produto.nome}</h3>
        <p className="produto-descricao">{produto.descricao}</p>
        {produto.preco && <p className="produto-preco">{produto.preco}</p>}

        <a
          href={wa(produto.mensagem, 'destaques')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          onClick={onZap}
          aria-label={`Falar no WhatsApp sobre ${produto.nome}`}
        >
          <WhatsAppIcon className="icon" /> Falar no WhatsApp
        </a>
      </div>
    </article>
  );
});
ProdutoCard.displayName = 'ProdutoCard';

export default function Home() {
  const [bannerLoading, setBannerLoading] = useState(true);
  const onBannerLoad = useCallback(() => setBannerLoading(false), []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BRAND.siteUrl}#org`,
        name: BRAND.name,
        url: BRAND.siteUrl,
        logo: `${BRAND.siteUrl}/logo-lili-cabral.png`,
        sameAs: [`https://www.instagram.com/${BRAND.instagram}/`],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${BRAND.whatsapp}`,
          contactType: 'customer service',
          availableLanguage: 'Portuguese',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BRAND.siteUrl}#site`,
        url: BRAND.siteUrl,
        name: BRAND.name,
        publisher: { '@id': `${BRAND.siteUrl}#org` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `https://wa.me/${BRAND.whatsapp}?text=Olá! Quero encontrar: {search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{BRAND.name} – Pijamas e Lingeries de Qualidade</title>
        <meta
          name="description"
          content="Pijamas, lingeries e kits presenteáveis com conforto e estilo. Compre pelo WhatsApp com entrega em todo Brasil."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={BRAND.siteUrl} />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content={`${BRAND.name} – Pijamas e Lingeries de Qualidade`} />
        <meta property="og:description" content="Conforto, delicadeza e autoestima para o seu descanso." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BRAND.siteUrl} />
        <meta property="og:image" content={`${BRAND.siteUrl}${BRAND.ogImage}`} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={BRAND.name} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Preload do LCP */}
        <link rel="preload" href={HERO_SRC} as="image" />

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Analytics />
      <Header />

      <main className={`${montserrat.className} page`}>
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-img-wrap">
              {bannerLoading && <div className="img-skeleton" aria-hidden="true" />}
              <Image
                src={HERO_SRC}
                alt="Banner principal da Lili Cabral com pijamas e lingeries"
                width={1600}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="hero-img"
                onLoad={onBannerLoad}
              />
            </div>

            <h1 id="hero-title" className="hero-title">Conforto, delicadeza e autoestima para seu descanso</h1>
            <p className="hero-desc">
              Pijamas, lingeries e kits presenteáveis pensados para transformar sua rotina em um momento especial de
              autocuidado.
            </p>

            <div className="cta">
              <Link href="/catalogo" className="btn btn-primary">
                Ver Catálogo <ArrowRightIcon className="icon" />
              </Link>
              <a
                href={wa('Olá! Quero ver as novidades da Lili Cabral.', 'banner')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon className="icon" /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section className="categorias" aria-labelledby="categorias-title">
          <div className="container">
            <header className="section-head">
              <h2 id="categorias-title" className="section-title">Nossas Categorias</h2>
              <p className="section-sub">Escolha a categoria perfeita para você</p>
            </header>

            <div className="grid-cats">
              {CATEGORIAS.map((c) => <CategoriaCard key={c.id} categoria={c} />)}
            </div>
          </div>
        </section>

        {/* DESTAQUES */}
        <section className="destaques" aria-labelledby="destaques-title">
          <div className="container">
            <header className="section-head white">
              <h2 id="destaques-title" className="section-title">Produtos em Destaque</h2>
              <p className="section-sub">Novidades e peças favoritas da semana</p>
            </header>

            <div className="grid-prod">
              {DESTAQUES.map((p) => <ProdutoCard key={p.id} produto={p} />)}
            </div>
          </div>
        </section>

        {/* SOBRE (teaser) */}
        <section className="sobre" aria-labelledby="sobre-title">
          <div className="container small">
            <h2 id="sobre-title" className="section-title">Sobre a Lili Cabral</h2>
            <p className="sobre-text">
              Nascemos para levar conforto, beleza e autoestima a mulheres reais, em todos os momentos.
              Cada peça entrega cuidado em forma de tecido.
            </p>
            <Link href="/sobre" className="btn btn-outline">
              Conheça nossa história <ArrowRightIcon className="icon" />
            </Link>
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />

      {/* CSS escopo da página */}
      <style jsx>{`
        .page{ margin-top:80px; color:${COLORS.grafite}; }
        .container{ max-width:1200px; margin:0 auto; padding:0 1rem; }

        .hero{ background:${COLORS.areia}; text-align:center; padding:3rem 1rem; }
        .hero-img-wrap{ position:relative; margin-bottom:2rem; }
        .img-skeleton{ width:100%; height:300px; border-radius:12px; background:linear-gradient(90deg,#eee,#f5f5f5,#eee); animation:pulse 1.5s infinite; }
        @keyframes pulse{0%{background-position:0%}100%{background-position:100%}}
        .hero-img{ width:100%; height:auto; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,.08); }
        .hero-title{ color:${COLORS.rosa}; font-size:clamp(1.5rem,4vw,2.2rem); font-weight:700; margin:1rem 0; }
        .hero-desc{ max-width:720px; margin:0 auto 2rem; color:${COLORS.cinza}; line-height:1.6; }

        .cta{ display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
        .btn{ display:inline-flex; align-items:center; gap:.5rem; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:700; border:2px solid transparent; transition:all .2s ease; }
        .btn:hover{ transform:translateY(-1px); box-shadow:0 4px 12px rgba(0, 0, 0, .15); }
        .btn-primary{ background:${COLORS.rosa}; color:#fff; }
        .btn-primary:hover{ background:#c17a90; }
        .btn-whatsapp{ background:${COLORS.zap}; color:#fff; }
        .btn-whatsapp:hover{ background:#20b358; }
        .btn-outline{ color:${COLORS.rosa}; border-color:${COLORS.rosa}; }
        .btn-outline:hover{ background:${COLORS.rosa}; color:#fff; }
        .icon{ width:18px; height:18px; }

        .categorias{ background:#fff; padding:4rem 1rem; }
        .destaques{ background:${COLORS.destaque}; padding:4rem 1rem; }
        .section-head{ text-align:center; margin-bottom:3rem; }
        .section-head.white .section-title,.section-head.white .section-sub{ color:#fff; }
        .section-title{ color:${COLORS.rosa}; font-size:clamp(1.4rem,3vw,1.8rem); font-weight:700; margin-bottom:.5rem; }
        .section-sub{ color:${COLORS.cinza}; font-size:1.05rem; }

        .grid-cats{ display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:2rem; }
        .categoria-card{ display:block; text-decoration:none; color:${COLORS.rosa}; font-weight:700; text-align:center; transition:transform .2s ease; }
        .categoria-card:hover{ transform:translateY(-4px); }
        .categoria-image{ width:100%; height:auto; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,.08); margin-bottom:1rem; }
        .categoria-label{ font-size:1.05rem; }

        .grid-prod{ display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:2rem; }
        .produto-card{ background:#fff; border-radius:12px; padding:1.5rem; text-align:center; box-shadow:0 4px 20px rgba(0,0,0,.08); transition:transform .2s ease; }
        .produto-card:hover{ transform:translateY(-4px); }
        .produto-image{ width:100%; height:auto; border-radius:8px; }
        .produto-nome{ font-size:1.2rem; font-weight:700; }
        .produto-descricao{ color:${COLORS.cinza}; }
        .produto-preco{ color:${COLORS.rosa}; font-weight:700; font-size:1.05rem; }

        .sobre{ background:#fff; padding:4rem 1rem; }
        .container.small{ max-width:900px; text-align:center; }
        .sobre-text{ color:${COLORS.cinza}; margin:1.5rem 0 2rem; line-height:1.7; }

        @media (max-width:768px){
          .cta{ flex-direction:column; }
          .btn{ min-width:200px; justify-content:center; }
          .grid-cats{ grid-template-columns:repeat(2,1fr); gap:1rem; }
          .grid-prod{ grid-template-columns:1fr; }
        }
        @media (max-width:480px){
          .hero,.categorias,.destaques,.sobre{ padding:2rem 1rem; }
          .grid-cats{ grid-template-columns:1fr; }
        }
      `}</style>
    </>
  );
}
