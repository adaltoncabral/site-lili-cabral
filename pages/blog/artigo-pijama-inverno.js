import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingButton from '../../components/FloatingButton';
import Analytics from '../../components/Analytics';

export default function ArtigoPijamaInverno() {
  return (
    <>
      <Head>
        <title>Como escolher o pijama ideal para o inverno – Blog Lili Cabral</title>
        <meta name="description" content="Dicas práticas para escolher o pijama ideal nos dias frios. Descubra tecidos, modelos e cuidados para noites mais confortáveis e estilosas." />
        <meta property="og:title" content="Como escolher o pijama ideal para o inverno – Blog Lili Cabral" />
        <meta property="og:description" content="Dicas práticas para escolher o pijama ideal nos dias frios. Descubra tecidos, modelos e cuidados para noites mais confortáveis e estilosas." />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="article" />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        margin: '80px auto 0',
        padding: '2rem',
        maxWidth: '800px',
        fontFamily: 'sans-serif',
        lineHeight: '1.7',
        color: '#333'
      }}>
        <h1 style={{ color: '#d693a8', marginBottom: '1rem', fontSize: '1.8rem' }}>
          Como escolher o pijama ideal para o inverno
        </h1>
        <p style={{ fontStyle: 'italic', color: '#777', fontSize: '0.95rem' }}>
          Publicado por Lili Cabral – {new Date().getFullYear()}
        </p>

        <p>
          Com a chegada do frio, é essencial escolher pijamas que ofereçam não apenas conforto térmico,
          mas também aquele toque de aconchego que faz toda a diferença nas noites de descanso.
        </p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>1. Prefira tecidos mais quentinhos</h2>
        <p>
          Pijamas de soft, fleece e flanela são os favoritos do inverno. Eles aquecem bem e trazem uma sensação deliciosa
          de abraço no corpo. Prefira materiais respiráveis para evitar suor e desconforto.
        </p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>2. Modelagem também importa</h2>
        <p>
          Prefira calças mais longas, mangas compridas e ajuste confortável na cintura. Evite elásticos muito apertados
          que incomodam durante o sono. Conjuntos com gola alta são ideais para noites mais frias.
        </p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>3. Escolha com carinho e estilo</h2>
        <p>
          Além da funcionalidade, escolha cores e estampas que combinem com seu estilo. O pijama também é autocuidado,
          e vestir algo bonito faz bem para o corpo e para a mente.
        </p>

        <p style={{ marginTop: '2rem', fontWeight: 'bold', color: '#555' }}>
          Que tal renovar seu pijama neste inverno? Confira os modelos disponíveis no nosso{' '}
          <a href="/catalogo" style={{ color: '#d693a8', textDecoration: 'none' }}>catálogo</a> e peça direto pelo WhatsApp!
        </p>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
