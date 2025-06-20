
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Fale Conosco – Lili Cabral</title>
        <meta name="description" content="Entre em contato com a Lili Cabral pelo WhatsApp ou Instagram. Atendimento acolhedor e personalizado." />
      </Head>
      <Analytics />
      <Header />
      <main style={{ maxWidth: '800px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif', color: '#191919' }}>
        <h1 style={{ color: '#d693a8', fontSize: '2rem', marginBottom: '2rem' }}>Fale com a Lili Cabral</h1>
        <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
          Nosso atendimento é feito com carinho e atenção. Fale conosco pelo WhatsApp ou envie uma mensagem no Instagram.
        </div>
      </main>
      <FloatingButton />
      <Footer />
    </>
  );
}
