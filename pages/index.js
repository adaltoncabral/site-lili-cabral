import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const banners = [
  '/banners/banner1.webp',
  '/banners/banner2.webp',
  '/banners/banner3.webp'
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Lili Cabral – Conforto que Presenteia</title>
        <meta name="description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." />
        <meta property="og:title" content="Lili Cabral – Conforto que Presenteia" />
        <meta property="og:description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." />
        <meta property="og:image" content="/banners/banner1.webp" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={{ marginTop: '80px', fontFamily: 'Montserrat, sans-serif' }}>

        /* Carrossel de banners */
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          aspectRatio: '16 / 9',
          overflow: 'hidden'
        }}>
          {banners.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              style={{
                objectFit: 'cover',
                transition: 'opacity 0.5s ease',
                opacity: index === current ? 1 : 0,
                position: 'absolute'
              }}
              priority={index === 0}
            />
          ))}
        </div>


        {/* Ícones de categorias */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem',
          padding: '2rem 1rem',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Link href="/catalogo?p=pijamas">
            <div>
              <Image src="/icones/icon-pijama.png" alt="Pijamas" width={64} height={64} />
              <p>Pijamas</p>
            </div>
          </Link>
          <Link href="/catalogo?p=lingeries">
            <div>
              <Image src="/icones/icon-lingerie.png" alt="Lingeries" width={64} height={64} />
              <p>Lingeries</p>
            </div>
          </Link>
          <Link href="/catalogo?p=promocoes">
            <div>
              <Image src="/icones/icon-promocao.png" alt="Promoções" width={64} height={64} />
              <p>Promoções</p>
            </div>
          </Link>
          <Link href="/catalogo?p=kits">
            <div>
              <Image src="/icones/icon-especial.png" alt="Kits / Presentes" width={64} height={64} />
              <p>Kits / Presentes</p>
            </div>
          </Link>
        </section>
      </main>

      {/* Marca d'água temporária de site em construção */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '30%',
        transform: 'translate(-20%, -20%) rotate(-10deg)',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#8d7974',
        opacity: 0.2,
        pointerEvents: 'none',
        zIndex: 10,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        fontFamily: 'Montserrat, sans-serif',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
      }}>
        SITE EM CONSTRUÇÃO
      </div>

      <FloatingButton />
      <Footer />
    </>
  );
}
