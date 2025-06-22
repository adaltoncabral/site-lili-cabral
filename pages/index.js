import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const banners = [
  '/banners/banner1.jpg',
  '/banners/banner2.jpg',
  '/banners/banner3.jpg'
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
      </Head>

      <Analytics />
      <Header />

      <main style={{ marginTop: '80px', fontFamily: 'sans-serif' }}>
        {/* Carrossel */}
        <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
          {banners.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              style={{
                transition: 'opacity 0.5s ease',
                opacity: index === current ? 1 : 0,
                position: 'absolute'
              }}
            />
          ))}
          {/* Botão sobre o banner */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1
          }}>
            <Link href="/catalogo">
              <a style={{
                backgroundColor: '#d693a8',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '1rem'
              }}>
                Ver Coleções
              </a>
            </Link>
          </div>
        </div>

        {/* Ícones de Categorias */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem',
          padding: '2rem 1rem',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <Link href="/catalogo?pijamas">
            <a>
              <Image src="/icones/icon-pijama.png" alt="Pijamas" width={64} height={64} />
              <p style={{ marginTop: '0.5rem' }}>Pijamas</p>
            </a>
          </Link>
          <Link href="/catalogo?lingeries">
            <a>
              <Image src="/icones/icon-lingerie.png" alt="Lingeries" width={64} height={64} />
              <p style={{ marginTop: '0.5rem' }}>Lingeries</p>
            </a>
          </Link>
          <Link href="/catalogo?promocoes">
            <a>
              <Image src="/icones/icon-promocao.png" alt="Promoções" width={64} height={64} />
              <p style={{ marginTop: '0.5rem' }}>Promoções</p>
            </a>
          </Link>
          <Link href="/catalogo?colecoes">
            <a>
              <Image src="/icones/icon-especial.png" alt="Coleções Especiais" width={64} height={64} />
              <p style={{ marginTop: '0.5rem' }}>Coleções Especiais</p>
            </a>
          </Link>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
