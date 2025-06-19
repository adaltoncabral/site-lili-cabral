import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

const produtos = [
  {
    nome: "Conjunto Renda Rosé",
    categoria: "Lingerie",
    imagem: "/Conjunto_Renda_Rose.png",
    frase: "Delicadeza que abraça, conforto que encanta.",
    mensagemZap: "Olá! Vi o Conjunto Renda Rosé no site da Lili Cabral e gostaria de saber mais!"
  },
  {
    nome: "Robe Sensual em Cetim",
    categoria: "Lingerie",
    imagem: "/Robe_Sensual_Cetim.png",
    frase: "Presença e poder com toque de cetim.",
    mensagemZap: "Olá! Vi o Robe Sensual em Cetim no site da Lili Cabral e gostaria de saber mais!"
  },
  {
    nome: "Kit Pijamas Casal – Conforto & Amor",
    categoria: "Kit Presenteável",
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
        <meta name="description" content="Veja nossas peças exclusivas: pijamas femininos, conjuntos de lingerie e kits presenteáveis com conforto e delicadeza." />
        <meta property="og:title" content="Catálogo – Lili Cabral" />
        <meta property="og:description" content="Veja nossas peças exclusivas: pijamas femininos, conjuntos de lingerie e kits presenteáveis com conforto e delicadeza." />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main style={{ maxWidth: '1200px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#d693a8', textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>
          Catálogo Lili Cabral
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {produtos.map((produto, index) => (
            <div key={index} style={{
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <img src={produto.imagem} alt={produto.nome} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
              <h2 style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#191919' }}>{produto.nome}</h2>
              <p style={{ fontStyle: 'italic', color: '#8d7974', fontSize: '0.95rem' }}>{produto.frase}</p>
              <a href={\`https://wa.me/5533984142006?text=\${encodeURIComponent(produto.mensagemZap)}\`}
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
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}