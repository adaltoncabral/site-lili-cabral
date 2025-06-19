import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Catálogo – Lili Cabral</title>
        <meta name="description" content="Veja nossas peças exclusivas: pijamas femininos, conjuntos de lingerie e kits presenteáveis com conforto e delicadeza." />
        <meta property="og:title" content="Catálogo – Lili Cabral" />
        <meta property="og:description" content="Veja nossas peças exclusivas: pijamas femininos, conjuntos de lingerie e kits presenteáveis com conforto e delicadeza." />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={ maxWidth: '800px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif', color: '#191919' }>
        <h1 style={ color: '#d693a8', fontSize: '2rem', marginBottom: '2rem' }>Catálogo Lili Cabral</h1>
        <div style={ lineHeight: '1.7', fontSize: '1rem' }>
          Confira nossos pijamas, lingeries e kits presenteáveis pensados com carinho para mulheres e casais. Clique nos produtos para falar direto no WhatsApp.
        </div>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}