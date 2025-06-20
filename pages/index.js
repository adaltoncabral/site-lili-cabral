import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral – Pijamas e Lingeries com Conforto e Delicadeza</title>
        <meta name="description" content="Descubra a Lili Cabral – sua loja de pijamas e lingeries que valorizam o bem-estar e a autoestima com aconchego e charme." />
      </Head>
      <Header />
      <main style={{
        marginTop: '80px',
        padding: '2rem',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ color: '#d693a8', textAlign: 'center' }}>
          Bem-vinda à Lili Cabral
        </h1>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Loja especializada em pijamas, lingeries e kits presenteáveis para mulheres reais.
        </p>
      </main>
      <Footer />
    </>
  );
}
