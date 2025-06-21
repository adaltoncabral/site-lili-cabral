import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre a Lili Cabral – Pijamas & Lingeries</title>
        <meta name="description" content="A história da Lili Cabral: uma marca criada para valorizar o conforto, a delicadeza e a autoestima das mulheres, direto de Manhuaçu-MG para todo o Brasil." />
        <meta property="og:title" content="Sobre a Lili Cabral – Pijamas & Lingeries" />
        <meta property="og:description" content="A história da Lili Cabral: uma marca criada para valorizar o conforto, a delicadeza e a autoestima das mulheres, direto de Manhuaçu-MG para todo o Brasil." />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        maxWidth: '900px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        color: '#191919'
      }}>
        <h1 style={{
          color: '#d693a8',
          fontSize: '2rem',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Quem Somos
        </h1>

        <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          A <strong>Lili Cabral</strong> nasceu do desejo de transformar o ato de vestir em uma experiência de cuidado, conforto e beleza. Criada por <strong>Liriane Cabral</strong> em Manhuaçu-MG, a marca surgiu com um propósito claro: oferecer pijamas e lingeries que valorizem o bem-estar, a autoestima e a delicadeza das mulheres em todos os momentos.
        </p>

        <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          Mais do que vender roupas, a Lili Cabral entrega acolhimento. Cada peça é pensada para proporcionar aconchego, sofisticação e funcionalidade, desde noites tranquilas de descanso até momentos especiais que merecem ser celebrados com elegância.
        </p>

        <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          Hoje, atendemos clientes de todo o Brasil com uma loja virtual intuitiva e atendimento humanizado. Seguimos firmes no nosso compromisso: espalhar carinho e conforto, peça por peça.
        </p>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
