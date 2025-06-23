import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import Link from 'next/link';

const todosProdutos = [
  {
    nome: 'Conjunto Renda Rosé',
    categorias: ['lingeries', 'colecoes'],
    imagem: '/Conjunto_Renda_Rose.png',
    frase: 'Delicadeza que abraça, conforto que encanta.',
    link: '/produtos/conjunto-renda-rose'
  },
  {
    nome: 'Robe Sensual em Cetim',
    categorias: ['lingeries', 'promocoes'],
    imagem: '/Robe_Sensual_Cetim.png',
    frase: 'Presença e poder com toque de cetim.',
    link: '/produtos/robe-sensual-cetim'
  },
  {
    nome: 'Kit Pijamas Casal – Conforto & Amor',
    categorias: ['pijamas'],
    imagem: '/Kit_Pijamas_Casal.png',
    frase: 'Para dormir juntinho, com estilo e carinho.',
    link: '/produtos/kit-pijamas-casal'
  }
];

export default function Catalogo() {
  const router = useRouter();
  const categoriaSelecionada = router.query?.p || null;

  const produtosFiltrados = categoriaSelecionada
    ? todosProdutos.filter(p => p.categorias.includes(categoriaSelecionada))
    : todosProdutos;

  const titulo = {
    pijamas: 'Pijamas',
    lingeries: 'Lingeries',
    promocoes: 'Promoções',
    colecoes: 'Coleções Especiais'
  }[categoriaSelecionada] || 'Nosso Catálogo';

  return (
    <>
      <Head>
        <title>Catálogo – Lili Cabral</title>
        <meta name="description" content="Explore nossa coleção de pijamas e lingeries com conforto e elegância." />
      </Head>
      <Analytics />
      <Header />

      <main style={{ padding: '2rem', fontFamily: 'sans-serif', marginTop: '80px' }}>
        <h1 style={{ color: '#d693a8', textAlign: 'center' }}>{titulo}</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {produtosFiltrados.map((p, i) => (
            <div key={i} style={{
              border: '1px solid #eee',
              padding: '1rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <Link href={p.link} style={{ textDecoration: 'none' }}>
                <img src={p.imagem} alt={p.nome} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
                <h2 style={{ marginBottom: '0.5rem', color: '#191919' }}>{p.nome}</h2>
                <p style={{ fontStyle: 'italic', color: '#8d7974' }}>{p.frase}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
