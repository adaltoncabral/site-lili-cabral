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
        <meta name="description" content="Surpreenda com carinho. Veja 5 formas de presentear usando pijamas que encantam, acolhem e valorizam momentos especiais." />
        <meta property="og:title" content="5 ideias de presente com pijamas – Blog Lili Cabral" />
        <meta property="og:description" content="Surpreenda com carinho. Veja 5 formas de presentear usando pijamas que encantam, acolhem e valorizam momentos especiais." />
        <meta property="og:image" content="/presentes-pijamas.jpg" />
        <meta property="og:type" content="article" />
      </Head>

      <Analytics />
      <Header />
      <main style={{ maxWidth: '800px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif', color: '#191919' }}>
        <h1 style={{ color: '#d693a8', marginBottom: '1.5rem' }}>
          🎁 5 ideias de presente com pijamas para surpreender com carinho
        </h1>
        <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Procurando um presente delicado, funcional e cheio de afeto? Os pijamas da <strong>Lili Cabral</strong> são uma ótima escolha para tornar qualquer data mais especial.
        </p>

        <ol style={{ paddingLeft: '1.2rem', fontSize: '1rem', lineHeight: '1.7' }}>
          <li><strong>Pijama + Cartão escrito à mão:</strong> um gesto simples e afetivo para aniversários ou datas comemorativas.</li>
          <li><strong>Kit casal de inverno:</strong> ideal para casais apaixonados, recém-casados ou para celebrar o Dia dos Namorados.</li>
          <li><strong>Pijama com chocolate:</strong> uma opção charmosa e acolhedora para presentear alguém que está precisando de carinho.</li>
          <li><strong>Pijama + vela aromática:</strong> para criar uma atmosfera de autocuidado e relaxamento, ideal para mães, amigas ou colaboradoras.</li>
          <li><strong>Pijama em caixa presenteável:</strong> nossa embalagem personalizada valoriza o presente e transmite cuidado.</li>
        </ol>

        <p style={{ marginTop: '2rem' }}>
          Todos os modelos estão disponíveis no nosso <a href="/catalogo" style={{ color: '#d693a8', textDecoration: 'underline' }}>catálogo online</a>.
        </p>

        <p style={{ marginTop: '1.5rem' }}>
          <a href="https://wa.me/5533984142006?text=Olá! Vi o post do blog sobre pijamas e quero montar um presente personalizado." target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              backgroundColor: '#25d366',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
            👉 Montar um presente agora
          </a>
        </p>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}