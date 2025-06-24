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

        {/* Carrossel de banners com comportamento distinto */}
        <div style={{
          position: 'relative',
          width: '100%',
          margin: '0 auto',
          overflow: 'hidden'
        }}>
          <div className="banner-desktop">
            {banners.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                sizes="(min-width: 769px) 1280px"
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

          <div className="banner-mobile">
            {banners.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw"
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

          <style jsx>{`
            .banner-desktop, .banner-mobile {
              width: 100%;
              height: 0;
              position: relative;
            }
            @media (min-width: 769px) {
              .banner-desktop {
                display: block;
                padding-top: 30%; /* Proporção customizada para desktop */
              }
              .banner-mobile {
                display: none;
              }
            }
            @media (max-width: 768px) {
              .banner-desktop {
                display: none;
              }
              .banner-mobile {
                display: block;
                padding-top: 75%; /* Proporção 4:3 para mobile */
              }
            }
          `}</style>
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
          <Link href="/ca
