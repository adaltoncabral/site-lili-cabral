import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const produtos = [
  {
    nome: 'Conjunto Renda Rosé',
    imagem: '/Conjunto_Renda_Rose.png',
    frase: 'Delicadeza que abraça, conforto que encanta.',
    mensagemZap: 'Olá! Vi o Conjunto Renda Rosé no site da Lili Cabral e gostaria de saber mais!'
  },
  {
    nome: 'Robe Sensual em Cetim',
    imagem: '/Robe_Sensual_Cetim.png',
    frase: 'Presença e poder com toque de cetim.',
    mensagemZap: 'Olá! Vi o Robe Sensual em Cetim no site da Lili Cabral e gostaria de saber mais!'
  },
  {
    nome: 'Kit Pijamas Casal – Conforto & Amor',
    imagem: '/Kit_Pijamas_Casal.png',
    frase: 'Para dormir juntinho, com estilo e carinho.',
    mensagemZap: 'Olá! Vi o Kit Pijamas Casal no site da Lili Cabral e gostaria de saber mais!'
  }
];

export default function Catalogo() {
  return (
    <>
      <Head>
        <title>Catálogo – Lili Cabral</title>
        <meta name="description" content="Veja os produtos da Lili Cabral: lingeries, pijamas e kits presenteáveis para mulheres reais. Compre com conforto e delicadeza." />
      </Head>

      <Header />

      <main style={{ padding: '2rem', fontFamily: 'sans-serif', marginTop: '80px' }}>
        <h1 style={{ color: '#d693a8', textAlign: 'center' }}>Nosso Catálogo</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {produtos.map((p, i) => (
            <div key={i} style={{
              border: '1px solid #eee',
              padding: '1rem',
              borderRadius: '12px',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              backgroundColor: '#fff'
            }}>
              <img
                src={p.imagem}
                alt={p.nome}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  objectFit: 'cover'
                }}
              />
              <h2 style={{
                marginBottom: '0.5rem',
                fontSize: '1.2rem',
                color: '#191919'
              }}>{p.nome}</h2>
              <p style={{
                fontStyle: 'italic',
                color: '#8d7974',
                fontSize: '0.95rem'
              }}>{p.frase}</p>
              <a
                href={`https://wa.me/5533984142006?text=${encodeURIComponent(p.mensagemZap)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '1rem',
                  display: 'inline-block',
                  backgroundColor: '#25d366',
                  color: '#fff',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Falar no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
