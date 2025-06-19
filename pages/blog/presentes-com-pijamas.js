
import Head from 'next/head';
import Header from '../../components/Header';
import Analytics from '../../components/Analytics';

export default function ArtigoPijamas() {
  return (
    <>
      <Head>
        <title>5 ideias de presente com pijamas – Blog Lili Cabral</title>
        <meta name="description" content="Confira sugestões criativas para transformar pijamas em presentes especiais para quem você ama." />
      </Head>
      <Analytics />
      <Header />
      <main style={{
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        lineHeight: 1.6
      }}>
        <h1 style={{ color: '#d693a8' }}>🎁 5 ideias de presente com pijamas</h1>
        <p>
          Presentear alguém com pijamas pode parecer simples, mas com um toque de criatividade, pode se tornar uma demonstração de carinho inesquecível. Confira 5 ideias:
        </p>
        <ol style={{ paddingLeft: '1.2rem' }}>
          <li><strong>Kit com mimo:</strong> Combine o pijama com um chocolate, chá ou vela aromática.</li>
          <li><strong>Embalagem especial:</strong> Use uma caixa bonita, laço e uma mensagem escrita à mão.</li>
          <li><strong>Dupla para casal:</strong> Ofereça kits combinando pijamas feminino e masculino.</li>
          <li><strong>Datas comemorativas:</strong> Use como presente no Dia dos Namorados, Aniversário ou Natal.</li>
          <li><strong>Autoamor:</strong> Incentive suas clientes a se presentearem com conforto e autoestima.</li>
        </ol>
        <p>
          Os pijamas da Lili Cabral foram feitos para isso: aconchegar e valorizar cada momento. 💖
        </p>
      </main>
    </>
  );
}
