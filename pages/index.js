import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics'; import Image from 'next/image'; import Link from 'next/link'; import { useEffect, useState } from 'react';

const banners = [ '/banner1.jpg', '/banner2.jpg', '/banner3.jpg' ];

export default function Home() { const [current, setCurrent] = useState(0);

useEffect(() => { const interval = setInterval(() => { setCurrent((prev) => (prev + 1) % banners.length); }, 4000); return () => clearInterval(interval); }, []);

return ( <> <Head> <title>Lili Cabral – Conforto que Presenteia</title> <meta name="description" content="Pijamas, lingeries e presentes especiais para quem você ama – ou para você mesma." /> </Head>

<Analytics />
  <Header />

  <main style={{ marginTop: '80px', fontFamily: 'sans-serif' }}>
    {/* Carrossel de banners */}
    <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
      {banners.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          layout="fill"
          objectFit="cover"
          style={{ transition: 'opacity 0.5s', opacity: index === current ? 1 : 0, position: 'absolute' }}
          priority={index === 0}
        />
      ))}
    </div>

    {/* Ícones de categorias */}
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <Link href="/catalogo?pijamas">
        <div>
          <Image src="/icon-pijama.png" alt="Pijamas" width={64} height={64} />
          <p>Pijamas</p>
        </div>
      </Link>
      <Link href="/catalogo?lingeries">
        <div>
          <Image src="/icon-lingerie.png" alt="Lingeries" width={64} height={64} />
          <p>Lingeries</p>
        </div>
      </Link>
      <Link href="/catalogo?promocoes">
        <div>
          <Image src="/icon-promocao.png" alt="Promoções" width={64} height={64} />
          <p>Promoções</p>
        </div>
      </Link>
      <Link href="/catalogo?colecoes">
        <div>
          <Image src="/icon-especial.png" alt="Coleções Especiais" width={64} height={64} />
          <p>Coleções Especiais</p>
        </div>
      </Link>
    </section>
  </main>

  <FloatingButton />
  <Footer />
</>

); }

              
