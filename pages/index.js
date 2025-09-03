// pages/index.js - Versão Otimizada

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, memo } from 'react';
import { Montserrat } from 'next/font/google';

// Componentes (assumindo que existem)
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

// Configuração da fonte com otimização
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap', // Melhora performance de carregamento
  preload: true,
});

// Constantes centralizadas
const BRAND_CONFIG = {
  name: 'Lili Cabral',
  siteUrl: 'https://lilicabral.com.br',
  ogImage: '/og-image.jpg',
  whatsappNumber: '5533984142006',
  instagram: '@lili.cabral_',
};

const THEME_COLORS = {
  rosa: '#d693a8',
  grafite: '#191919',
  areia: '#FDF3E7',
  destaque: '#FADADD',
  whatsapp: '#25d366',
  marrom: '#8d7974',
  branco: '#ffffff',
  cinza: '#555555',
};

// Utilitário para links do WhatsApp com UTM
const createWhatsAppLink = (message, utmSource = 'home') => {
  const baseUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}`;
  const params = new URLSearchParams({
    text: message,
    utm_source: utmSource,
    utm_medium: 'whatsapp',
    utm_campaign: 'site',
  });
  return `${baseUrl}?${params.toString()}`;
};

// Dados das categorias
const CATEGORIAS = [
  {
    id: 'pijamas',
    label: 'Pijamas',
    img: '/categorias/pijamas.jpg',
    alt: 'Categoria Pijamas - Conforto para suas noites',
    href: '/catalogo?categoria=pijamas',
  },
  {
    id: 'lingeries',
    label: 'Lingeries',
    img: '/categorias/lingeries.jpg',
    alt: 'Categoria Lingeries - Delicadeza e sensualidade',
    href: '/catalogo?categoria=lingeries',
  },
  {
    id: 'promocoes',
    label: 'Promoções',
    img: '/categorias/promocoes.jpg',
    alt: 'Categoria Promoções - Ofertas especiais',
    href: '/catalogo?categoria=promocoes',
  },
  {
    id: 'especiais',
    label: 'Coleções Especiais',
    img: '/categorias/especiais.jpg',
    alt: 'Categoria Coleções Especiais - Edições limitadas',
    href: '/catalogo?categoria=especiais',
  },
];

const PRODUTOS_DESTAQUE = [
  {
    id: 'kit-casal',
    nome: 'Kit Pijamas Casal',
    descricao: 'Conforto e carinho para dormir juntinhos.',
    img: '/produtos/kit-pijamas-casal.png',
    alt: 'Kit de pijamas para casal em cores coordenadas',
    href: '/produtos/kit-pijamas-casal',
    preco: 'A partir de R$ 89,90',
    mensagemZap: 'Olá! Vi o Kit Pijamas Casal no site e gostaria de saber mais detalhes.',
  },
  {
    id: 'conjunto-rose',
    nome: 'Conjunto Renda Rosé',
    descricao: 'Delicado e elegante com toque especial.',
    img: '/produtos/conjunto-renda-rose.png',
    alt: 'Conjunto de lingerie em renda tom rosé',
    href: '/produtos/conjunto-renda-rose',
    preco: 'A partir de R$ 69,90',
    mensagemZap: 'Olá! Vi o Conjunto Renda Rosé no site e quero conhecer as opções disponíveis.',
  },
];

// Ícones SVG otimizados
const WhatsAppIcon = memo(({ className, ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    className={className}
    aria-hidden="true" 
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.5 3.5A11 11 0 0 0 3.1 18.8L2 22l3.3-1.1A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.8.8-2.3-.2-.3A8 8 0 1 1 12 20Zm4.6-5.7c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.4.1-.5.6-.6.7-.2.1-.4 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.3 0-.4 0-.5l.3-.4c.1-.2.1-.3 0-.4s-.4-1-.6-1.3-.3-.3-.4-.3h-.3c-.1 0-.4.1-.6.3s-.8.8-.8 2a3.6 3.6 0 0 0 .8 2.1 8.2 8.2 0 0 0 3.1 2.8 3.6 3.6 0 0 0 2.2.7c.9-.1 1.7-.8 1.9-1.3s.2-1.1.1-1.2-.1-.1-.3-.2Z"
    />
  </svg>
));
WhatsAppIcon.displayName = 'WhatsAppIcon';

const ArrowRightIcon = memo(({ className, ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    className={className}
    aria-hidden="true" 
    {...props}
  >
    <path 
      fill="currentColor" 
      d="M13.172 12 8.222 7.05 9.636 5.636 16 12l-6.364 6.364-1.414-1.414Z" 
    />
  </svg>
));
ArrowRightIcon.displayName = 'ArrowRightIcon';

// Componente de categoria otimizado
const CategoriaCard = memo(({ categoria }) => (
  <Link href={categoria.href} className="categoria-card">
    <div className="categoria-image-container">
      <Image
        src={categoria.img}
        alt={categoria.alt}
        width={420}
        height={320}
        sizes="(max-width: 768px) 50vw, 240px"
        className="categoria-image"
        loading="lazy"
      />
    </div>
    <span className="categoria-label">{categoria.label}</span>
  </Link>
));
CategoriaCard.displayName = 'CategoriaCard';

// Componente de produto otimizado
const ProdutoCard = memo(({ produto }) => {
  const handleWhatsAppClick = useCallback(() => {
    // Track analytics event aqui se necessário
    window.gtag?.('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: produto.nome,
    });
  }, [produto.nome]);

  return (
    <article className="produto-card">
      <Link href={produto.href} className="produto-link">
        <div className="produto-image-container">
          <Image
            src={produto.img}
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
        {produto.preco && (
          <p className="produto-preco">{produto.preco}</p>
        )}
        
        <a
          href={createWhatsAppLink(produto.mensagemZap, 'destaques')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          onClick={handleWhatsAppClick}
          aria-label={`Falar no WhatsApp sobre ${produto.nome}`}
        >
          <WhatsAppIcon className="icon" />
          Falar no WhatsApp
        </a>
      </div>
    </article>
  );
});
ProdutoCard.displayName = 'ProdutoCard';

// Componente principal
export default function Home() {
  const [imageLoading, setImageLoading] = useState(true);

  const handleBannerLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  // JSON-LD estruturado
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${BRAND_CONFIG.siteUrl}#organization`,
        name: BRAND_CONFIG.name,
        url: BRAND_CONFIG.siteUrl,
        logo: `${BRAND_CONFIG.siteUrl}/logo.png`,
        sameAs: [`https://www.instagram.com/${BRAND_CONFIG.instagram.replace('@', '')}/`],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${BRAND_CONFIG.whatsappNumber}`,
          contactType: 'customer service',
          availableLanguage: 'Portuguese',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BRAND_CONFIG.siteUrl}#website`,
        url: BRAND_CONFIG.siteUrl,
        name: BRAND_CONFIG.name,
        publisher: {
          '@id': `${BRAND_CONFIG.siteUrl}#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=Olá! Quero encontrar: {search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{BRAND_CONFIG.name} – Pijamas e Lingeries de Qualidade</title>
        <meta
          name="description"
          content="Pijamas, lingeries e kits presenteáveis com conforto e estilo. Descubra delicadeza e autoestima na Lili Cabral. Compre pelo WhatsApp com entrega em todo Brasil."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={BRAND_CONFIG.name} />
        <link rel="canonical" href={BRAND_CONFIG.siteUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={`${BRAND_CONFIG.name} – Pijamas e Lingeries de Qualidade`} />
        <meta 
          property="og:description" 
          content="Conforto, delicadeza e autoestima para o seu descanso. Compre pelo WhatsApp com entrega em todo Brasil." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BRAND_CONFIG.siteUrl} />
        <meta property="og:image" content={`${BRAND_CONFIG.siteUrl}${BRAND_CONFIG.ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={BRAND_CONFIG.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${BRAND_CONFIG.name} – Pijamas e Lingeries`} />
        <meta name="twitter:description" content="Conforto e delicadeza para seu descanso" />
        <meta name="twitter:image" content={`${BRAND_CONFIG.siteUrl}${BRAND_CONFIG.ogImage}`} />

        {/* Preload crítico */}
        <link rel="preload" href="/banner-home.jpg" as="image" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Analytics />
      <Header />

      <main className={`homepage ${montserrat.className}`}>
        {/* Banner Principal */}
        <section 
          className="hero-section" 
          aria-labelledby="hero-title"
        >
          <div className="container">
            <div className="hero-image-container">
              {imageLoading && (
                <div className="image-placeholder" aria-hidden="true">
                  Carregando...
                </div>
              )}
              <Image
                src="/banner-home.jpg"
                alt="Banner principal da Lili Cabral com pijamas e lingeries"
                width={1600}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="hero-image"
                onLoad={handleBannerLoad}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
            
            <div className="hero-content">
              <h1 id="hero-title" className="hero-title">
                Conforto, delicadeza e autoestima para seu descanso
              </h1>
              <p className="hero-description">
                Pijamas, lingeries e kits presenteáveis pensados para transformar sua rotina em um momento especial de autocuidado.
              </p>

              <div className="hero-actions">
                <Link href="/catalogo" className="btn btn-primary">
                  Ver Catálogo
                  <ArrowRightIcon className="icon" />
                </Link>
                <a
                  href={createWhatsAppLink('Olá! Quero ver as novidades da Lili Cabral.', 'banner')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  aria-label="Falar no WhatsApp"
                >
                  <WhatsAppIcon className="icon" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="categorias-section" aria-labelledby="categorias-title">
          <div className="container">
            <header className="section-header">
              <h2 id="categorias-title" className="section-title">
                Nossas Categorias
              </h2>
              <p className="section-description">
                Escolha a categoria perfeita para você
              </p>
            </header>

            <div className="categorias-grid">
              {CATEGORIAS.map((categoria) => (
                <CategoriaCard key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="destaques-section" aria-labelledby="destaques-title">
          <div className="container">
            <header className="section-header">
              <h2 id="destaques-title" className="section-title">
                Produtos em Destaque
              </h2>
              <p className="section-description">
                Novidades e peças favoritas da semana
              </p>
            </header>

            <div className="produtos-grid">
              {PRODUTOS_DESTAQUE.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </div>
          </div>
        </section>

        {/* Sobre (Teaser) */}
        <section className="sobre-section" aria-labelledby="sobre-title">
          <div className="container">
            <div className="sobre-content">
              <h2 id="sobre-title" className="section-title">
                Sobre a Lili Cabral
              </h2>
              <p className="sobre-description">
                Nascemos para levar conforto, beleza e autoestima a mulheres reais, em todos os momentos. 
                Cada peça é pensada para entregar cuidado em forma de tecido, proporcionando momentos especiais no seu dia a dia.
              </p>
              <Link href="/sobre" className="btn btn-outline">
                Conheça nossa história
                <ArrowRightIcon className="icon" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />

      <style jsx>{`
        .homepage {
          margin-top: 80px;
          color: ${THEME_COLORS.grafite};
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Hero Section */
        .hero-section {
          padding: 3rem 1rem;
          background: ${THEME_COLORS.areia};
          text-align: center;
        }

        .hero-image-container {
          position: relative;
          margin-bottom: 2rem;
        }

        .image-placeholder {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: ${THEME_COLORS.cinza};
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .hero-title {
          color: ${THEME_COLORS.rosa};
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .hero-description {
          max-width: 720px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
          line-height: 1.6;
          color: ${THEME_COLORS.cinza};
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          border: 2px solid transparent;
        }

        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-primary {
          background: ${THEME_COLORS.rosa};
          color: white;
        }

        .btn-primary:hover {
          background: #c17a90;
        }

        .btn-whatsapp {
          background: ${THEME_COLORS.whatsapp};
          color: white;
        }

        .btn-whatsapp:hover {
          background: #20b358;
        }

        .btn-outline {
          background: transparent;
          color: ${THEME_COLORS.rosa};
          border-color: ${THEME_COLORS.rosa};
        }

        .btn-outline:hover {
          background: ${THEME_COLORS.rosa};
          color: white;
        }

        .icon {
          width: 18px;
          height: 18px;
        }

        /* Sections */
        .categorias-section {
          padding: 4rem 1rem;
          background: white;
        }

        .destaques-section {
          padding: 4rem 1rem;
          background: ${THEME_COLORS.destaque};
        }

        .destaques-section .section-title,
        .destaques-section .section-description {
          color: white;
        }

        .sobre-section {
          padding: 4rem 1rem;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          color: ${THEME_COLORS.rosa};
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .section-description {
          color: ${THEME_COLORS.cinza};
          font-size: 1.1rem;
        }

        /* Grids */
        .categorias-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .produtos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        /* Categoria Card */
        .categoria-card {
          display: block;
          text-decoration: none;
          color: ${THEME_COLORS.rosa};
          font-weight: 700;
          text-align: center;
          transition: transform 0.2s ease;
        }

        .categoria-card:hover {
          transform: translateY(-4px);
        }

        .categoria-image-container {
          margin-bottom: 1rem;
        }

        .categoria-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .categoria-label {
          font-size: 1.1rem;
        }

        /* Produto Card */
        .produto-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease;
        }

        .produto-card:hover {
          transform: translateY(-4px);
        }

        .produto-link {
          display: block;
          margin-bottom: 1rem;
        }

        .produto-image-container {
          margin-bottom: 1rem;
        }

        .produto-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .produto-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .produto-nome {
          font-size: 1.2rem;
          font-weight: 700;
          color: ${THEME_COLORS.grafite};
        }

        .produto-descricao {
          color: ${THEME_COLORS.cinza};
          line-height: 1.5;
        }

        .produto-preco {
          color: ${THEME_COLORS.rosa};
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* Sobre Content */
        .sobre-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .sobre-description {
          margin: 1.5rem 0 2rem;
          font-size: 1.1rem;
          line-height: 1.7;
          color: ${THEME_COLORS.cinza};
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            min-width: 200px;
            justify-content: center;
          }

          .categorias-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .produtos-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-section,
          .categorias-section,
          .destaques-section,
          .sobre-section {
            padding: 2rem 1rem;
          }

          .categorias-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
