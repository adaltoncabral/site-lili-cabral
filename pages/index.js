import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const banners = ['/banners/banner1.jpg', '/banners/banner2.jpg', '/banners/banner3.jpg'];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000); // Intervalo de 5 segundos
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % banners.length);

  return (
    <>
      <Head>
        <title>Lili Cabral – Conforto que Presenteia</title>
        <meta name="description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." />
        <meta property="og:title" content="Lili Cabral – Conforto que Presenteia" />
        <meta property="og:description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." />
        <meta property="og:image" content="/banners/banner1.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={{ marginTop: '80px', fontFamily: 'sans-serif' }}>
        {/* Carrossel de banners */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden' }}>
          {banners.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              style={{
                objectFit: 'cover',
                opacity: index === current ? 1 : 0,
                transition: 'opacity 0.6s ease',
                position: 'absolute'
              }}
              priority={index === 0}
            />
          ))}

          {/* Botões laterais */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              top: '50%',
              left: '1rem',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >‹</button>

          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              top: '50%',
              right: '1rem',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >›</button>

          {/* Indicadores */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px'
          }}>
            {banners.map((_, i) => (
              <span key={i} style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: i === current ? '#d693a8' : '#fff',
                border: '1px solid #d693a8'
              }} />
            ))}
          </div>
        </div>

        {/* Ícones de categorias */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/catalogo?pijamas">
            <div>
              <Image src="/icons/icon-pijama.png" alt="Pijamas" width={64} height={64} />
              <p>Pijamas</p>
            </div>
          </Link>
          <Link href="/catalogo?lingeries">
            <div>
              <Image src="/icons/icon-lingerie.png" alt="Lingeries" width={64} height={64} />
              <p>Lingeries</p>
            </div>
          </Link>
          <Link href="/catalogo?promocoes">
            <div>
              <Image src="/icons/icon-promocao.png" alt="Promoções" width={64} height={64} />
              <p>Promoções</p>
            </div>
          </Link>
          <Link href="/catalogo?colecoes">
            <div>
              <Image src="/icons/icon-especial.png" alt="Coleções Especiais" width={64} height={64} />
              <p>Coleções Especiais</p>
            </div>
          </Link>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
                }
