import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics'; import Image from 'next/image'; import Link from 'next/link'; import { useEffect, useState } from 'react';

const banners = [ '/banners/banner1.jpg', '/banners/banner2.jpg', '/banners/banner3.jpg' ];

export default function Home() { const [current, setCurrent] = useState(0);

useEffect(() => { const interval = setInterval(() => { setCurrent((prev) => (prev + 1) % banners.length); }, 4000); return () => clearInterval(interval); }, []);

return ( <> <Head> <title>Lili Cabral – Conforto que Presenteia</title> <meta name="description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." /> </Head>

<Analytics />
  <Header />

  <main style={{ marginTop: '80px', fontFamily: 'sans-serif' }}>
    {/* Carrossel de banners */}
    <div style={{ position: 'relative', width: '100%', maxHeight: '450px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
        {banners.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Banner ${index + 1}`}
            fill
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

      {/* Indicadores do carrossel */}
      <div style={{ position: 'absolute', bottom: '10px', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: current === i ? '#d693a8' : '#fff',
              border: '1px solid #ccc',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>

    {/* Ícones de categorias */}
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <Link href="/catalogo?pijamas">
        <div>
          <Image src="/icones/icon-pijama.png" alt="Pijamas" width={64} height={64} />
          <p>Pijamas</p>
        </div>
      </Link>
      <Link href="/catalogo?lingeries">
        <div>
          <Image src="/icones/icon-lingerie.png" alt="Lingeries" width={64} height={64} />
          <p>Lingeries</p>
        </div>
      </Link>
      <Link href="/catalogo?promocoes">
        <div>
          <Image src="/icones/icon-promocao.png" alt="Promoções" width={64} height={64} />
          <p>Promoções</p>
        </div>
      </Link>
      <Link href="/catalogo?colecoes">
        <div>
          <Image src="/icones/icon-especial.png" alt="Coleções Especiais" width={64} height={64} />
          <p>Coleções Especiais</p>
        </div>
      </Link>
    </section>
  </main>

  <FloatingButton />
  <Footer />
</>

); }

