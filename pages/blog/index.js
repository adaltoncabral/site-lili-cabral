
import Head from 'next/head';
import Header from '../../components/Header';
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
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ color: '#d693a8', marginBottom: '2rem' }}>Blog Lili Cabral</h1>
        <ul>
          <li style={{ marginBottom: '1rem' }}>
            <Link href="/blog/presentes-com-pijamas" style={{ color: '#191919', textDecoration: 'underline' }}>
              🎁 5 ideias de presente com pijamas para surpreender com carinho
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
