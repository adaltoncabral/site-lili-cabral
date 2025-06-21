import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';

export default function Produto() {
  return (
    <>
      <Head>
        <title>Robe Sensual em Cetim – Lili Cabral</title>
        <meta name="description" content="Presença e poder com toque de cetim. Elegância e sensualidade para todos os momentos." />
      </Head>

      <Analytics />
      <Header />

      <main style={
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        lineHeight: '1.7',
        color: '#333'
      }>
        <img src="/Robe_Sensual_Cetim.png" alt="Robe Sensual em Cetim" style={ width: '100%', borderRadius: '12px', marginBottom: '1.5rem' } />
        <h1 style={ color: '#d693a8', marginBottom: '1rem', fontSize: '1.8rem' }>Robe Sensual em Cetim</h1>
        <p style={ fontSize: '1rem', marginBottom: '1.5rem' }>Presença e poder com toque de cetim. Elegância e sensualidade para todos os momentos.</p>

        <a href="https://wa.me/5533984142006?text=Olá! Vi o Robe Sensual em Cetim no site da Lili Cabral e gostaria de saber mais!"
          target="_blank"
          rel="noopener noreferrer"
          style={
            backgroundColor: '#25d366',
            color: '#fff',
            padding: '14px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }
        >
          Falar no WhatsApp
        </a>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
