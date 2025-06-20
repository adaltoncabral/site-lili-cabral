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
          fontSize: '2rem',
          marginBottom: '0.5rem'
        }}>
          Blog Lili Cabral
        </h1>

        <p style={{
          textAlign: 'center',
          color: '#555',
          marginBottom: '2.5rem',
          fontSize: '1rem'
        }}>
          Inspirações para presentear, descansar e se sentir bem. 💖
        </p>

        {/* Artigo 1 */}
        <section style={{
          background: '#fff',
          border: '1px solid #eee',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          transition: 'all 0.3s ease'
        }}>
          <Link href="/blog/presentes-com-pijamas" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ color: '#d693a8', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
              🎁 5 ideias de presente com pijamas
            </h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Dicas práticas para surpreender com carinho usando kits com pijamas confortáveis.
            </p>
          </Link>
        </section>

        {/* Artigo 2 - Exemplo adicional, se desejar expandir */}
        <section style={{
          background: '#fff',
          border: '1px solid #eee',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <Link href="/blog/artigo-pijama-inverno" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 style={{ color: '#d693a8', marginBottom: '0.75rem', fontSize: '1.25rem' }}>
              ❄️ Como escolher o pijama ideal para o inverno
            </h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Descubra os tecidos, cortes e estilos perfeitos para noites frias com aconchego e charme.
            </p>
          </Link>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
