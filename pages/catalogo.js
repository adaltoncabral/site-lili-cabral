
import Head from 'next/head';
import Header from '../components/Header';
import Analytics from '../components/Analytics';
import FloatingButton from '../components/FloatingButton';

const produtos = [
  {
    nome: "Conjunto Renda Rosé",
    imagem: "/Conjunto_Renda_Rose.png",
    frase: "Delicadeza que abraça, conforto que encanta.",
    mensagemZap: "Olá! Vi o Conjunto Renda Rosé no site da Lili Cabral e gostaria de saber mais!"
  },
  {
    nome: "Robe Sensual em Cetim",
    imagem: "/Robe_Sensual_Cetim.png",
    frase: "Presença e poder com toque de cetim.",
    mensagemZap: "Olá! Vi o Robe Sensual em Cetim no site da Lili Cabral e gostaria de saber mais!"
  },
  {
    nome: "Kit Pijamas Casal – Conforto & Amor",
    imagem: "/Kit_Pijamas_Casal.png",
    frase: "Para dormir juntinho, com estilo e carinho.",
    mensagemZap: "Olá! Vi o Kit Pijamas Casal no site da Lili Cabral e gostaria de saber mais!"
  }
];

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Catálogo – Lili Cabral</title>
        <meta name="description" content="Conheça os produtos da Lili Cabral: pijamas, lingeries e kits que combinam conforto, beleza e autoestima." />
      </Head>
      <Analytics />
      <Header />
      <main style={{ marginTop: '80px', padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#d693a8', textAlign: 'center', marginBottom: '2rem' }}>Nosso Catálogo</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem'
        }}>
          {produtos.map((produto, i) => (
            <div key={i} style={{
              border: '1px solid #eee',
              borderRadius: '10px',
              padding: '1rem',
              textAlign: 'center',
              backgroundColor: '#fff'
            }}>
              <img src={produto.imagem} alt={produto.nome} style={{ width: '100%', borderRadius: '8px' }} />
              <h2 style={{ margin: '1rem 0 0.5rem', color: '#191919' }}>{produto.nome}</h2>
              <p style={{ fontStyle: 'italic', color: '#8d7974' }}>{produto.frase}</p>
              <a href={`https://wa.me/5533984142006?text=${encodeURIComponent(produto.mensagemZap)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '1rem',
                  backgroundColor: '#25d366',
                  color: 'white',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Pedir no WhatsApp
              </a>
            </div>
          ))}
        </div>
        <FloatingButton />
      </main>
    </>
  );
}
