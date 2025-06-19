import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog – Lili Cabral</title>
        <meta name="description" content="Dicas sobre conforto, autoestima, presentes e pijamas. Leia o blog da Lili Cabral." />
        <meta property="og:title" content="Blog – Lili Cabral" />
        <meta property="og:description" content="Dicas sobre conforto, autoestima, presentes e pijamas. Leia o blog da Lili Cabral." />
        <meta property="og:image" content="/blog-preview.jpg" />
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
          textAlign: 'center',
          fontSize: '1.8rem',
          marginBottom: '1rem'
        }}>Blog Lili Cabral</h1>

        <p style={{
          textAlign: 'center',
          color: '#555',
          marginBottom: '2rem',
          fontSize: '1rem'
        }}>
          Inspirações para presentear, descansar e se sentir bem. 💖
        </p>

        <section style={{
          background: '#fff',
          border: '1px solid #eee',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
        }}>
          <Link href="/blog/presentes-com-pijamas" style={{ textDecoration: 'none', color: '#191919' }}>
            <h3 style={{ color: '#d693a8', marginBottom: '0.5rem' }}>🎁 5 ideias de presente com pijamas</h3>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>
              Dicas práticas para surpreender com carinho usando kits com pijamas confortáveis.
            </p>
          </Link>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}