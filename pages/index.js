import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics'; import Image from 'next/image'; import Link from 'next/link'; import { useEffect, useState } from 'react';

const banners = [ '/banners/banner1.jpg', '/banners/banner2.jpg', '/banners/banner3.jpg' ];

export default function Home() { const [current, setCurrent] = useState(0);

useEffect(() => { const interval = setInterval(() => { setCurrent((prev) => (prev + 1) % banners.length); }, 5000); return () => clearInterval(interval); }, []);

const handlePrev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length); const handleNext = () => setCurrent((prev) => (prev + 1) % banners.length);

return ( <> <Head> <title>Lili Cabral – Conforto que Presenteia</title> <meta name="description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." /> </Head>

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
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '1.5rem',
      padding:

