import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';

export default function PresentesComPijamas() {
  return (
    <>
      <Head>
        <title>5 ideias de presente com pijamas – Lili Cabral</title>
        <meta name="description" content="Veja como transformar pijamas em presentes delicados e significativos para quem você ama." />
      </Head>

      <Analytics />
      <Header />

      <main style={{ padding: '2rem', maxWidth: '800px', margin: '80px auto 0', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#d693a8' }}>5 ideias de presente com pijamas para surpreender</h1>
        <p>🎁 Escolher um presente especial pode ser um desafio... [conteúdo do artigo]</p>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
