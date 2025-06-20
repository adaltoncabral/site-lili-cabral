import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Quem Somos – Lili Cabral</title>
        <meta name="description" content="Conheça a história da Lili Cabral, criada em Manhuaçu-MG para valorizar o conforto e a autoestima feminina." />
        <meta property="og:title" content="Quem Somos – Lili Cabral" />
        <meta property="og:description" content="Conheça a história da Lili Cabral, criada em Manhuaçu-MG para valorizar o conforto e a autoestima feminina." />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        color: '#191919'
      }}>
        <h1 style={{
          color: '#d693a8',
          fontSize: '2rem',
          marginBottom: '2rem'
        }}>
          Quem somos
        </h1>

        <div style={{
          lineHeight: '1.7',
          fontSize: '1rem'
        }}>
          A <strong>Lili Cabral</strong> é mais do que uma loja virtual de pijamas e lingeries. É uma marca que nasceu do desejo de levar conforto, autoestima e beleza ao dia a dia de mulheres reais, com peças pensadas para transformar o descanso em um momento especial.
          <br /><br />
          Criada por <strong>Liriane Cabral</strong>, a Lili Cabral nasceu em Manhuaçu-MG e alcança todo o Brasil com uma proposta clara: entregar delicadeza, qualidade e acolhimento em cada peça.
        </div>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
