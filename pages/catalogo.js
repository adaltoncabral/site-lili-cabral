
import Image from 'next/image';

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
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', color: '#d693a8' }}>Catálogo Lili Cabral</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {produtos.map((produto, index) => (
          <div key={index} style={{
            border: '1px solid #eee',
            borderRadius: '12px',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)'
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
                textDecoration: 'none'
              }}
            >
              Pedir no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
