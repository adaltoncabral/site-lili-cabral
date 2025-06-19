import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog – Lili Cabral</title>
        <meta name="description" content="Dicas sobre conforto, autoestima, presentes e pijamas. Leia o blog da Lili Cabral." />
        <meta property="og:title" content="Blog – Lili Cabral" />
        <meta property="og:description" content="Dicas sobre conforto, autoestima, presentes e pijamas. Leia o blog da Lili Cabral." />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={ maxWidth: '800px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif', color: '#191919' }>
        <h1 style={ color: '#d693a8', fontSize: '2rem', marginBottom: '2rem' }>Blog Lili Cabral</h1>
        <div style={ lineHeight: '1.7', fontSize: '1rem' }>
          <ul><li><a href='/blog/presentes-com-pijamas'>🎁 5 ideias de presente com pijamas</a></li></ul>
        </div>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}