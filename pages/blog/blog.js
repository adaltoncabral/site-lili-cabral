import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';
import Link from 'next/link';

const posts = [
  {
    title: '🎁 5 ideias de presente com pijamas para surpreender com carinho',
    href: '/blog/presentes-com-pijamas',
    date: 'Junho 2025',
    summary: 'Descubra como transformar conforto em demonstração de afeto com sugestões criativas e acolhedoras.'
  },
  {
    title: '❄️ Como escolher o pijama ideal para o inverno',
    href: '/blog/artigo-pijama-inverno',
    date: 'Junho 2025',
    summary: 'Dicas práticas para escolher o pijama ideal nos dias mais frios, sem abrir mão do estilo e bem-estar.'
  }
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog – Lili Cabral</title>
        <meta name="description" content="Conteúdo sobre pijamas, presentes, conforto e autoestima feminina. Leia o blog da Lili Cabral." />
        <meta property="og:title" content="Blog – Lili Cabral" />
        <meta property="og:description" content="Conteúdo sobre pijamas, presentes, conforto e autoestima feminina. Leia o blog da Lili Cabral." />
        <meta property="og:image" content="/blog-preview.jpg" />
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
          fontSize: '2.2rem',
          marginBottom: '2.5rem',
          textAlign: 'center'
        }}>
          Blog Lili Cabral
        </h1>

        {posts.map((post, index) => (
          <div key={index} style={{
            marginBottom: '2rem',
            padding: '1.5rem',
            border: '1px solid #eee',
            borderRadius: '8px',
            backgroundColor: '#fafafa'
          }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              <Link href={post.href} style={{ color: '#d693a8', textDecoration: 'none' }}>
                {post.title}
              </Link>
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#8d7974', marginBottom: '0.5rem' }}>{post.date}</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{post.summary}</p>
          </div>
        ))}
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
