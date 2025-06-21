import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics';

export default function Home() { return ( <> <Head> <title>Lili Cabral – Pijamas, Lingeries e Presentes com Carinho</title> <meta name="description" content="Descubra pijamas e lingeries de altíssima qualidade para presentear ou se presentear. Conforto, carinho e elegância com entrega para todo o Brasil." /> </Head>

<Analytics />
  <Header />

  {/* Banner Principal */}
  <section style={{ marginTop: '80px' }}>
    <img
      src="/banner-principal.png"
      alt="Banner Principal"
      style={{
        width: '100%',
        maxHeight: '380px',
        objectFit: 'cover',
        borderRadius: '8px'
      }}
    />
  </section>

  {/* Ícones de Acesso Rápido */}
  <section style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '2rem 1rem'
  }}>
    <a href="/catalogo" style={iconStyle}><img src="/icone-pijamas.png" alt="Pijamas" style={iconImageStyle} /><p>Pijamas</p></a>
    <a href="/catalogo" style={iconStyle}><img src="/icone-lingeries.png" alt="Lingeries" style={iconImageStyle} /><p>Lingeries</p></a>
    <a href="/catalogo" style={iconStyle}><img src="/icone-promocoes.png" alt="Promoções" style={iconImageStyle} /><p>Promoções</p></a>
    <a href="/catalogo" style={iconStyle}><img src="/icone-especiais.png" alt="Coleções Especiais" style={iconImageStyle} /><p>Especiais</p></a>
  </section>

  <FloatingButton />
  <Footer />

  <style jsx>{`
    p {
      font-size: 0.9rem;
      color: #191919;
      margin-top: 0.5rem;
    }
  `}</style>
</>

); }

const iconStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', margin: '1rem' };

const iconImageStyle = { width: '60px', height: '60px', objectFit: 'contain' };

      
