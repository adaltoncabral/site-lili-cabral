import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre a Lili Cabral – Pijamas & Lingeries</title>
        <meta
          name="description"
          content="Uma marca feita para quem ama transformar conforto em presente. Conheça a essência da Lili Cabral."
        />
        <meta property="og:title" content="Sobre a Lili Cabral – Pijamas & Lingeries" />
        <meta
          property="og:description"
          content="Uma marca feita para quem ama transformar conforto em presente. Conheça a essência da Lili Cabral."
        />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Analytics />
      <Header />

      <main className="container" style={{ maxWidth: '800px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif', color: '#191919' }}>
        <h1 style={{ color: '#d693a8', fontSize: '2rem', marginBottom: '2rem' }}>
          Sobre a Lili Cabral
        </h1>

        <p style={{ lineHeight: '1.7', fontSize: '1rem', marginBottom: '1.5rem' }}>
          A <strong>Lili Cabral</strong> nasceu em Manhuaçu-MG com um propósito sensível e poderoso:
          transformar peças de vestir em gestos de carinho. Criada por <strong>Liriane Cabral</strong>,
          a marca é uma celebração da autoestima, da elegância e do afeto, com produtos que unem beleza,
          conforto e significado.
        </p>

        <p style={{ lineHeight: '1.7', fontSize: '1rem', marginBottom: '1.5rem' }}>
          Cada pijama, lingerie ou acessório que oferecemos é pensado como uma forma de presentear —
          seja a si mesma ou alguém especial. Mais do que moda íntima, entregamos experiências: para noites
          de autocuidado, manhãs de tranquilidade ou momentos únicos a dois.
        </p>

        <p style={{ lineHeight: '1.7', fontSize: '1rem' }}>
          Com uma curadoria delicada, atendimento próximo e uma loja virtual que atende todo o Brasil,
          a Lili Cabral convida cada mulher a se sentir lembrada, valorizada e amada em cada detalhe.
        </p>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
            }
