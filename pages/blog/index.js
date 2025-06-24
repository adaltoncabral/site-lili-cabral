import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';
import Link from 'next/link';
import Image from 'next/image';

const artigos = [
  {
    titulo: '5 ideias de presente com pijamas para surpreender com carinho',
    imagem: '/blog/presentes-pijamas.jpg',
    slug: 'presentes-com-pijamas',
    descricao: 'Descubra como transformar um simples pijama em um gesto inesquecível.',
    icone: '🎁'
  },
  {
    titulo: 'Como escolher o pijama ideal para o inverno',
    imagem: '/blog/pijama-inverno.jpg',
    slug: 'artigo-pijama-inverno',
    descricao: 'Veja dicas práticas para unir elegância e aconchego nos dias frios.',
    icone: '❄️'
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
        maxWidth: '1100px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{
          color: '#d693a8',
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Blog Lili Cabral
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {artigos.map((artigo, i) => (
            <Link key={i} href={`/blog/${artigo.slug}`} passHref>
              <a style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  border: '1px solid #f0f0f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease',
                  backgroundColor: '#fff'
                }}>
                  <div style={{ height: '180px', position: 'relative' }}>
                    <Image
                      src={artigo.imagem}
                      alt={artigo.titulo}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <h2 style={{
                      fontSize: '1.1rem',
                      color: '#d693a8',
                      marginBottom: '0.5rem'
                    }}>
                      {artigo.icone} {artigo.titulo}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: '#555' }}>{artigo.descricao}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
                        }
