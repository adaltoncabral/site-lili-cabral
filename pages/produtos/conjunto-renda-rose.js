import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';

export default function ProdutoDetalhado() {
  return (
    <>
      <Head>
        <title>Conjunto Renda Rosé – Lili Cabral</title>
        <meta name="description" content="Conjunto de lingerie em renda rosé: conforto, elegância e delicadeza para o seu dia a dia. Disponível em diversos tamanhos." />
        <meta property="og:title" content="Conjunto Renda Rosé – Lili Cabral" />
        <meta property="og:description" content="Conjunto de lingerie em renda rosé: conforto, elegância e delicadeza para o seu dia a dia." />
        <meta property="og:image" content="/Conjunto_Renda_Rose.png" />
        <meta property="og:type" content="product" />
      </Head>

      <Analytics />
      <Header />

      <main style={{ maxWidth: '800px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif', color: '#191919' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <img src="/Conjunto_Renda_Rose.png" alt="Conjunto Renda Rosé" style={{ width: '100%', borderRadius: '12px' }} />

          <div>
            <h1 style={{ color: '#d693a8', fontSize: '1.8rem', marginBottom: '1rem' }}>Conjunto Renda Rosé</h1>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              Conjunto delicado em renda rosé, com bojo e alças ajustáveis. Ideal para quem busca conforto e sofisticação.
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
              <li>Disponível nos tamanhos: P, M, G e GG</li>
              <li>Renda macia com forro suave</li>
              <li>Bojo removível</li>
              <li>Cor: rosé claro</li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>Preço: R$ 89,90</p>

            <a href="https://wa.me/5533984142006?text=Olá!%20Vi%20o%20Conjunto%20Renda%20Rosé%20no%20site%20e%20quero%20comprar!" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1.5rem',
                backgroundColor: '#25d366',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
