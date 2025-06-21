import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import Link from 'next/link';

const produtos = [
  {
    nome: 'Conjunto Renda Rosé',
    imagem: '/Conjunto_Renda_Rose.png',
    frase: 'Delicadeza que abraça, conforto que encanta.',
    link: '/produtos/conjunto-renda-rose'
  },
  {
    nome: 'Robe Sensual em Cetim',
    imagem: '/Robe_Sensual_Cetim.png',
    frase: 'Presença e poder com toque de cetim.',
    link: '/produtos/robe-sensual-cetim'
  },
  {
    nome: 'Kit Pijamas Casal – Conforto & Amor',
    imagem: '/Kit_Pijamas_Casal.png',
    frase: 'Para dormir juntinho, com estilo e carinho.',
    link: '/produtos/kit-pijamas-casal'
  }
];

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Catálogo – Lili Cabral</title>
        <meta name="description" content="Explore nossa coleção de pijamas e lingeries com conforto e elegância." />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        marginTop: '80px'
      }}>
        <h1 style={{
          color: '#d693a8',
          textAlign: 'center',
          fontSize: '2rem',
          marginBottom: '2rem'
        }}>
          Nosso Catálogo
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {produtos.map((p, i) => (
            <Link key={i} href={p.link} style={{
              textDecoration: 'none',
              border: '1px solid #eee',
              padding: '1rem',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'box-shadow 0.3s ease',
              backgroundColor: '#fff'
            }}>
              <img
                src={p.imagem}
                alt={p.nome}
                loading="lazy"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}
              />
              <h2 style={{
                marginBottom: '0.5rem',
                color: '#191919',
                fontSize: '1.1rem'
              }}>
                {p.nome}
              </h2>
              <p style={{
                fontStyle: 'italic',
                color: '#8d7974',
                fontSize: '0.95rem'
              }}>
                {p.frase}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
