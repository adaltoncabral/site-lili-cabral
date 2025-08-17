Perfeito. Segue o pages/index.js reescrito sem qualquer uso de lucide-react, com ícones em SVG inline, SEO reforçado, next/image, tipografia Montserrat e rastreio UTM no WhatsApp.

// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import { Montserrat } from 'next/font/google';

// Fonte institucional (secundária do manual)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// ---- Marca / utilidades
const BRAND = 'Lili Cabral';
const SITE_URL = 'https://lilicabral.com.br';
const OG_IMAGE = '/og.jpg'; // Defina um 1200x630 em /public
const WHATSAPP_NUMBER = '5533984142006';

const Colors = {
  rosa: '#d693a8',
  grafite: '#191919',
  areia: '#FDF3E7',
  destaque: '#FADADD',
  zap: '#25d366',
  marrom: '#8d7974',
};

const waLink = (text, utm = 'home') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}&utm_source=${utm}&utm_medium=whatsapp&utm_campaign=site`;

// ---- Dados (fácil manutenção)
const categorias = [
  { label: 'Pijamas', img: '/cat-pijamas.jpg', alt: 'Categoria Pijamas', href: '/catalogo' },
  { label: 'Lingeries', img: '/cat-lingeries.jpg', alt: 'Categoria Lingeries', href: '/catalogo' },
  { label: 'Promoções', img: '/cat-promocoes.jpg', alt: 'Categoria Promoções', href: '/catalogo' },
  { label: 'Coleções Especiais', img: '/cat-especiais.jpg', alt: 'Categoria Coleções Especiais', href: '/catalogo' },
];

const produtosDestaque = [
  {
    nome: 'Kit Pijamas Casal',
    descricao: 'Conforto e carinho para dormir juntinhos.',
    img: '/Kit_Pijamas_Casal.png',
    alt: 'Kit de pijamas para casal em cores coordenadas',
    href: '/produtos/kit-pijamas-casal', // ajuste conforme rotas
    mensagemZap: 'Olá! Vi o Kit Pijamas Casal e quero saber mais.',
  },
  {
    nome: 'Conjunto Renda Rosé',
    descricao: 'Delicado e elegante com toque especial.',
    img: '/Conjunto_Renda_Rose.png',
    alt: 'Conjunto de lingerie em renda tom rosé',
    href: '/catalogo',
    mensagemZap: 'Olá! Vi o Conjunto Renda Rosé e quero saber mais.',
  },
];

// ---- Ícones SVG inline (sem bibliotecas)
const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20.5 3.5A11 11 0 0 0 3.1 18.8L2 22l3.3-1.1A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.8.8-2.3-.2-.3A8 8 0 1 1 12 20Zm4.6-5.7c-.2-.1-1.2-.6-1.3-.6s-.3-.1-.4.1-.5.6-.6.7-.2.1-.4 0a6.6 6.6 0 0 1-3.2-2.8c-.2-.3 0-.4 0-.5l.3-.4c.1-.2.1-.3 0-.4s-.4-1- .6-1.3-.3-.3-.4-.3h-.3c-.1 0-.4.1-.6.3s-.8.8-.8 2a3.6 3.6 0 0 0 .8 2.1 8.2 8.2 0 0 0 3.1 2.8 3.6 3.6 0 0 0 2.2.7c.9-.1 1.7-.8 1.9-1.3s.2-1.1.1-1.2-.1-.1-.3-.2Z"
    />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M13.172 12 8.222 7.05 9.636 5.636 16 12l-6.364 6.364-1.414-1.414Z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>{BRAND} – Pijamas e Lingeries</title>
        <meta
          name="description"
          content="Pijamas, lingeries e kits presenteáveis com conforto e estilo. Encontre delicadeza e autoestima na Lili Cabral."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content={`${BRAND} – Pijamas e Lingeries`} />
        <meta property="og:description" content="Conforto, delicadeza e autoestima para o seu descanso. Compre pelo WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: BRAND,
                url: SITE_URL,
                logo: `${SITE_URL}/logo.png`,
                sameAs: ['https://www.instagram.com/lili.cabral_/'],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: BRAND,
                url: SITE_URL,
                potentialAction: {
                  '@type': 'SearchAction',
                  target: `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero encontrar: {search_term_string}`,
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
      </Head>

      <Analytics />
      <Header />

      <main className={montserrat.className} style={{ marginTop: 80, color: Colors.grafite }}>
        {/* Banner */}
        <section aria-labelledby="banner-title" style={{ textAlign: 'center', padding: '3rem 1rem', background: Colors.areia }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Image
              src="/banner-home.jpg"
              alt="Banner principal da Lili Cabral com pijamas e lingeries"
              width={1600}
              height={600}
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ width: '100%', height: 'auto', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
            />
            <h1 id="banner-title" style={{ color: Colors.rosa, marginTop: '1.5rem', fontSize: '1.9rem', lineHeight: 1.2 }}>
              Conforto, delicadeza e autoestima para seu descanso
            </h1>
            <p style={{ maxWidth: 720, margin: '1rem auto' }}>
              Pijamas, lingeries e kits presenteáveis pensados para transformar sua rotina em um momento especial.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/catalogo" legacyBehavior>
                <a style={styles.btnPrimary} aria-label="Ver catálogo de produtos">
                  Ver Catálogo <ArrowRightIcon style={{ marginLeft: 8 }} />
                </a>
              </Link>
              <a
                href={waLink('Olá! Quero ver as novidades da Lili Cabral.', 'banner')}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.btnWhats}
                aria-label="Falar no WhatsApp"
              >
                <WhatsAppIcon style={{ marginRight: 8 }} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section aria-labelledby="categorias-title" style={{ padding: '3rem 1rem', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 id="categorias-title" style={{ textAlign: 'center', color: Colors.rosa, fontSize: '1.6rem' }}>Categorias</h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem',
              }}
            >
              {categorias.map((cat) => (
                <Link key={cat.label} href={cat.href} legacyBehavior>
                  <a style={styles.categoria} aria-label={`Ver ${cat.label}`}>
                    <Image
                      src={cat.img}
                      alt={cat.alt}
                      width={420}
                      height={320}
                      sizes="(max-width: 768px) 50vw, 240px"
                      style={{ width: '100%', height: 'auto', borderRadius: 12, boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}
                    />
                    {cat.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section aria-labelledby="destaques-title" style={{ padding: '3rem 1rem', background: Colors.destaque }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 id="destaques-title" style={{ textAlign: 'center', color: '#fff', fontSize: '1.6rem' }}>Destaques</h2>
            <p style={{ textAlign: 'center', color: '#fff', marginBottom: '2rem' }}>Novidades e peças favoritas da semana</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {produtosDestaque.map((p) => (
                <div key={p.nome} style={styles.cardProduto}>
                  <Link href={p.href} legacyBehavior>
                    <a aria-label={`Abrir página do produto ${p.nome}`}>
                      <Image
                        src={p.img}
                        alt={p.alt}
                        width={600}
                        height={600}
                        sizes="(max-width: 768px) 90vw, 280px"
                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                      />
                    </a>
                  </Link>
                  <h3 style={{ marginTop: 12, fontSize: '1.1rem' }}>{p.nome}</h3>
                  <p style={{ color: '#555', minHeight: 40 }}>{p.descricao}</p>
                  <a
                    href={waLink(p.mensagemZap, 'destaques')}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.btnWhats}
                    aria-label={`Falar no WhatsApp sobre ${p.nome}`}
                  >
                    <WhatsAppIcon style={{ marginRight: 8 }} /> Falar no WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre (teaser) */}
        <section aria-labelledby="sobre-title" style={{ padding: '3rem 1rem', background: '#fff' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <h2 id="sobre-title" style={{ color: Colors.rosa, fontSize: '1.6rem' }}>Sobre a Lili Cabral</h2>
            <p style={{ marginTop: 12 }}>
              Nascemos para levar conforto, beleza e autoestima a mulheres reais, em todos os momentos.
              Cada peça entrega cuidado em forma de tecido.
            </p>
            <Link href="/sobre" legacyBehavior>
              <a style={{ ...styles.btnPrimary, marginTop: 16 }} aria-label="Conheça nossa história">
                Conheça nossa história <ArrowRightIcon style={{ marginLeft: 8 }} />
              </a>
            </Link>
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}

// ---- Estilos
const styles = {
  btnPrimary: {
    backgroundColor: Colors.rosa,
    color: '#fff',
    padding: '12px 24px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
  },
  btnWhats: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: Colors.zap,
    color: '#fff',
    padding: '12px 24px',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 700,
  },
  categoria: {
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    color: Colors.rosa,
    fontWeight: 700,
    fontSize: '1rem',
    display: 'block',
  },
  cardProduto: {
    width: '100%',
    background: '#fff',
    padding: '1rem',
    borderRadius: 12,
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};

Pronto para build no Vercel sem a dependência.
Se algum componente externo (Header, Footer, FloatingButton) ainda importar lucide-react, substitua pelos mesmos SVGs inline acima ou por imagens .svg no /public.

