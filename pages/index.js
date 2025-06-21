import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics'; import { useEffect, useState } from 'react';

const banners = [ '/banner1.jpg', '/banner2.jpg', '/banner3.jpg' ];

export default function Home() { const [current, setCurrent] = useState(0);

useEffect(() => { const interval = setInterval(() => { setCurrent((prev) => (prev + 1) % banners.length); }, 4000); return () => clearInterval(interval); }, []);

return ( <> <Head> <title>Lili Cabral – Pijamas & Lingeries</title> <meta name="description" content="Pijamas e lingeries que transformam conforto em presente. Descubra a Lili Cabral." /> </Head> <Analytics /> <Header />

<main className="main">
    <section className="carousel">
      <img src={banners[current]} alt="Banner" className="carousel-img" />
    </section>

    <section className="icones">
      <div className="icone">
        <img src="/icons/pijama.png" alt="Pijamas" />
        <span>Pijamas</span>
      </div>
      <div className="icone">
        <img src="/icons/lingerie.png" alt="Lingeries" />
        <span>Lingeries</span>
      </div>
      <div className="icone">
        <img src="/icons/promocao.png" alt="Promoções" />
        <span>Promoções</span>
      </div>
      <div className="icone">
        <img src="/icons/colecao.png" alt="Coleções" />
        <span>Coleções</span>
      </div>
    </section>
  </main>

  <FloatingButton />
  <Footer />

  <style jsx>{`
    .main {
      margin-top: 80px;
      padding: 1rem;
    }

    .carousel {
      width: 100%;
      height: 280px;
      overflow: hidden;
      border-radius: 12px;
      margin-bottom: 2rem;
    }

    .carousel-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease-in-out;
    }

    .icones {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 1.5rem;
      text-align: center;
    }

    .icone img {
      width: 60px;
      height: 60px;
      margin-bottom: 0.5rem;
    }

    .icone span {
      display: block;
      font-weight: 500;
      color: #d693a8;
    }
  `}</style>
</>

); }

  
