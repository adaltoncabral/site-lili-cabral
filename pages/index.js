import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics';

export default function Home() { return ( <> <Head> <title>Lili Cabral – Pijamas & Lingeries</title> <meta name="description" content="Conforto, delicadeza e autoestima em cada peça. Pijamas, lingeries e kits presenteáveis pensados para você e para quem você ama." /> </Head> <Analytics /> <Header />

<section style={{ background: '#fef3e7', padding: '2rem 1rem', textAlign: 'center' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem' }}>
        <img
          src="/banner-principal.png"
          alt="Banner Lili Cabral"
          style={{
            width: '100%',
            maxHeight: '380px',
            objectFit: 'cover',
            display: 'block',
            borderRadius: '12px'
          }}
        />
      </div>

      <h2 style={{ color: '#d693a8', fontSize: '1.8rem', marginBottom: '1rem' }}>
        Conforto, delicadeza e autoestima para seu descanso
      </h2>

      <p style={{ fontSize: '1rem', color: '#333', maxWidth: '700px', margin: '0 auto 2rem' }}>
        Pijamas, lingeries e kits presenteáveis pensados para transformar sua rotina de descanso em um momento especial.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="/catalogo" style={{
          backgroundColor: '#d693a8',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Ver Catálogo
        </a>

        <a href="https://wa.me/5533984142006?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Lili%20Cabral"
          target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: '#25d366',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>

  <FloatingButton />
  <Footer />
</>

); }

