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
        <meta name="description" content="Presença e poder com toque de cetim." />
      </Head>
      <Analytics />
      <Header />
      <main style={ {
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        color: '#191919'
      } }>
        <h1 style={ { color: '#d693a8', marginBottom: '1rem', fontSize: '1.8rem' } }>Robe Sensual em Cetim</h1>
        <img src="/Robe_Sensual_Cetim.png" alt="Robe Sensual em Cetim" style={ { width: '100%', borderRadius: '12px', marginBottom: '1.5rem' } } />
        <p style={ { fontSize: '1rem', lineHeight: '1.7' } }>
          Presença e poder com toque de cetim.
        </p>
        <p style={ { marginTop: '2rem' } }>
          <a href="https://wa.me/5533984142006?text=Olá!%20Vi%20o%20Robe%20Sensual%20em%20Cetim%20no%20site%20da%20Lili%20Cabral%20e%20gostaria%20de%20saber%20mais!" target="_blank" rel="noopener noreferrer"
             style={ {
               backgroundColor: '#25d366',
               color: '#fff',
               padding: '12px 20px',
               borderRadius: '8px',
               textDecoration: 'none',
               fontWeight: 'bold'
             } }>
            Falar no WhatsApp
          </a>
        </p>
      </main>
      <FloatingButton />
      <Footer />
    </>
  );
}
