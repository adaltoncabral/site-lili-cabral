import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';

export default function PresentesComPijamas() {
  return (
    <>
      <Head>
        <title>5 ideias de presente com pijamas – Blog Lili Cabral</title>
        <meta name="description" content="Veja como transformar pijamas em presentes delicados e significativos para quem você ama." />
        <meta property="og:title" content="5 ideias de presente com pijamas – Blog Lili Cabral" />
        <meta property="og:description" content="Veja como transformar pijamas em presentes delicados e significativos para quem você ama." />
        <meta property="og:image" content="/banners/blog-presentes-pijamas.jpg" />
        <meta property="og:type" content="article" />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '80px auto 0',
        fontFamily: 'Montserrat, sans-serif',
        lineHeight: '1.7',
        color: '#191919'
      }}>
        <h1 style={{
          color: '#d693a8',
          fontSize: '2rem',
          fontFamily: 'Modish, serif',
          marginBottom: '1rem'
        }}>
          5 ideias de presente com pijamas para surpreender
        </h1>

        <p style={{ fontStyle: 'italic', color: '#8d7974', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Publicado por Lili Cabral – {new Date().getFullYear()}
        </p>

        <p>🎁 Escolher um presente especial pode ser um desafio, mas os pijamas são sempre uma opção certeira: delicados, úteis e cheios de carinho. Confira 5 formas criativas de presentear com estilo e afeto:</p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>1. Kit aconchego</h2>
        <p>Monte um conjunto com pijama, pantufa e uma vela aromática. Ideal para quem valoriza o autocuidado e pequenos momentos de relaxamento.</p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>2. Pijama personalizado</h2>
        <p>Escolha um pijama com a estampa preferida da pessoa presenteada e embale com uma mensagem escrita à mão. Um toque de personalidade que faz toda a diferença.</p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>3. Presente para mãe e filha</h2>
        <p>Conjuntos combinando para mãe e filha são encantadores e reforçam laços afetivos. Um presente que emociona e surpreende.</p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>4. Caixa de boas-vindas</h2>
        <p>Perfeita para recém-casados, aniversariantes ou novas mamães. Inclua o pijama, chá, hidratante e um cartão carinhoso.</p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>5. Pijamas temáticos</h2>
        <p>Datas como Natal, Dia dos Namorados ou aniversários pedem pijamas temáticos que deixam tudo mais especial. Aposte em cores, estampas e embalagens criativas.</p>

        <p style={{ marginTop: '2rem', fontWeight: 500, color: '#8d7974' }}>
          Gostou das ideias? Encontre o modelo perfeito no nosso{' '}
          <a href="/catalogo" style={{ color: '#d693a8', textDecoration: 'underline' }}>catálogo</a>{' '}
          e surpreenda com um presente inesquecível 💝
        </p>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
