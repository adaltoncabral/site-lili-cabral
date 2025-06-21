import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics';

export default function Sobre() { return ( <> <Head> <title>Sobre a Lili Cabral – Pijamas & Lingeries</title> <meta name="description" content="Uma marca feita para quem ama transformar conforto em presente. Conheça a essência da Lili Cabral." /> <meta property="og:title" content="Sobre a Lili Cabral – Pijamas & Lingeries" /> <meta property="og:description" content="Uma marca feita para quem ama transformar conforto em presente. Conheça a essência da Lili Cabral." /> <meta property="og:image" content="/banner-lili.jpg" /> <meta property="og:type" content="website" /> </Head>

<Analytics />
  <Header />

  <main className="container">
    <h1>Sobre a Lili Cabral</h1>

    <p>
      A <strong>Lili Cabral</strong> nasceu em Manhuaçu-MG com um propósito sensível e poderoso: transformar peças de vestir em gestos de carinho. Criada por <strong>Liriane Cabral</strong>, a marca é uma celebração da autoestima, da elegância e do afeto, com produtos que unem beleza, conforto e significado.
    </p>

    <p>
      Cada pijama, lingerie ou acessório que oferecemos é pensado como uma forma de presentear — seja a si mesma ou alguém especial. Mais do que moda íntima, entregamos experiências: para noites de autocuidado, manhãs de tranquilidade ou momentos únicos a dois.
    </p>

    <p>
      Com uma curadoria delicada, atendimento próximo e uma loja virtual que atende todo o Brasil, a Lili Cabral convida cada mulher a se sentir lembrada, valorizada e amada em cada detalhe.
    </p>
  </main>

  <FloatingButton />
  <Footer />
</>

); }

