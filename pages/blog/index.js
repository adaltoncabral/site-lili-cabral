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
        <meta name="description" content="Conteúdo sobre pijamas, presentes, conforto e autoestima feminina. Leia o blog da Lili Cabral." />
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
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Blog Lili Cabral
        </h1>

        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '1.5rem' }}>
            <Link
              href="/blog/presentes-com-pijamas"
              style={{
                color: '#d693a8',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              🎁 5 ideias de presente com pijamas para surpreender com carinho →
            </Link>
          </li>
          {/* Inserir outros artigos aqui futuramente */}
        </ul>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
