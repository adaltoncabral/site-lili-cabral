// pages/index.js

import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral – Pijamas e Lingeries</title>
        <meta name="description" content="Pijamas, lingeries e kits presenteáveis com conforto e estilo. Encontre delicadeza e autoestima na Lili Cabral." />
      </Head>

      <Analytics />
      <Header />

      <main style={{ marginTop: '80px', fontFamily: 'sans-serif', color: '#191919' }}>
        {/* Banner Principal */}
        <section style={{ textAlign: 'center', padding: '3rem 1rem', background: '#FDF3E7' }}>
          <img src="/banner-principal.png" alt="Banner Lili Cabral" style={{ maxWidth: '100%', borderRadius: '12px', marginBottom: '2rem' }} />
          <h1 style={{ color: '#d693a8', marginTop: '1.5rem' }}>Conforto, delicadeza e autoestima para seu descanso</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
            Pijamas, lingeries e kits presenteáveis pensados para transformar sua rotina de descanso em um momento especial.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/catalogo" legacyBehavior>
              <a style={{ backgroundColor: '#d693a8', color: '#fff', padding: '12px 24px', marginRight: '1rem', borderRadius: '8px', textDecoration: 'none' }}>Ver Catálogo</a>
            </Link>
            <a href="https://wa.me/5533984142006" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: '#25d366', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
              Falar no WhatsApp
            </a>
          </div>
        </section>

        {/* Categorias principais */}
        <section style={{ padding: '3rem 1rem', background: '#fff' }}>
          <h2 style={{ textAlign: 'center', color: '#d693a8' }}>Categorias</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2rem' }}>
            <Link href="/catalogo" legacyBehavior>
              <a style={categoriaStyle}><img src="/cat-pijamas.jpg" style={imgStyle} />Pijamas</a>
            </Link>
            <Link href="/catalogo" legacyBehavior>
              <a style={categoriaStyle}><img src="/cat-lingeries.jpg" style={imgStyle} />Lingeries</a>
            </Link>
            <Link href="/catalogo" legacyBehavior>
              <a style={categoriaStyle}><img src="/cat-promocoes.jpg" style={imgStyle} />Promoções</a>
            </Link>
            <Link href="/catalogo" legacyBehavior>
              <a style={categoriaStyle}><img src="/cat-especiais.jpg" style={imgStyle} />Coleções Especiais</a>
            </Link>
          </div>
        </section>

        {/* Destaques */}
        <section style={{ padding: '3rem 1rem', background: '#FADADD' }}>
          <h2 style={{ textAlign: 'center', color: '#fff' }}>Destaques</h2>
          <p style={{ textAlign: 'center', color: '#fff', marginBottom: '2rem' }}>Novidades e peças favoritas da semana</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <div style={produtoStyle}>
              <img src="/Kit_Pijamas_Casal.png" style={imgProd} alt="Kit Pijamas Casal" />
              <h3>Kit Pijamas Casal</h3>
              <p style={{ color: '#555' }}>Conforto e carinho para dormir juntinhos.</p>
              <a href="https://wa.me/5533984142006?text=Olá! Vi o Kit Pijamas Casal e quero saber mais!" target="_blank" rel="noopener noreferrer"
                style={botaoZap}>Falar no WhatsApp</a>
            </div>
            <div style={produtoStyle}>
              <img src="/Conjunto_Renda_Rose.png" style={imgProd} alt="Conjunto Renda Rosé" />
              <h3>Conjunto Renda Rosé</h3>
              <p style={{ color: '#555' }}>Delicado e elegante com toque especial.</p>
              <a href="https://wa.me/5533984142006?text=Olá! Vi o Conjunto Renda Rosé e quero saber mais!" target="_blank" rel="noopener noreferrer"
                style={botaoZap}>Falar no WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}

const categoriaStyle = {
  width: '150px',
  textAlign: 'center',
  textDecoration: 'none',
  color: '#d693a8',
  fontWeight: 'bold'
};

const imgStyle = {
  width: '100%',
  borderRadius: '12px',
  marginBottom: '0.5rem'
};

const produtoStyle = {
  width: '280px',
  background: '#fff',
  padding: '1rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const imgProd = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '1rem'
};

const botaoZap = {
  display: 'inline-block',
  backgroundColor: '#25d366',
  color: '#fff',
  padding: '10px 16px',
  marginTop: '1rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold'
};
