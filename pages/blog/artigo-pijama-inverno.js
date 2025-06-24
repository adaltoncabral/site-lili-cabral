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
        <meta property="og:image" content="/banners/blog-pijama-inverno.jpg" />
        <meta property="og:type" content="article" />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        margin: '80px auto 0',
        padding: '2rem',
        maxWidth: '800px',
        fontFamily: 'Montserrat, sans-serif',
        lineHeight: '1.7',
        color: '#191919'
      }}>
        <h1 style={{
          color: '#d693a8',
          marginBottom: '1rem',
          fontSize: '2rem',
          fontFamily: 'Modish, serif'
        }}>
          Como escolher o pijama ideal para o inverno
        </h1>

        <p style={{
          fontStyle: 'italic',
          color: '#8d7974',
          fontSize: '0.9rem',
          marginBottom: '2rem'
        }}>
          Publicado por Lili Cabral – {new Date().getFullYear()}
        </p>

        <p>
          Com a chegada do frio, escolher o pijama certo vai além da estética: é uma decisão que envolve conforto, saúde e bem-estar. A seguir, veja o que considerar para acertar na escolha.
        </p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>1. Tecidos ideais para noites frias</h2>
        <p>
          Aposte em tecidos como fleece, flanela e soft. Eles proporcionam calor, aconchego e são ótimos para manter a temperatura do corpo. Dê preferência a materiais respiráveis para evitar suor e desconforto térmico.
        </p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>2. Modelagem que valoriza e conforta</h2>
        <p>
          Escolha pijamas com mangas e calças longas, cintura ajustável e cortes que não apertam. Peças com gola alta ou punhos nas extremidades ajudam a reter o calor e tornam a experiência mais acolhedora.
        </p>

        <h2 style={{ color: '#d693a8', marginTop: '2rem' }}>3. Estilo também aquece a alma</h2>
        <p>
          Cores suaves, estampas delicadas e combinações que refletem sua personalidade transformam o ato de dormir em um ritual de autocuidado. Um pijama bonito eleva a autoestima e faz diferença na sua rotina.
        </p>

        <p style={{ marginTop: '2rem', fontWeight: 500, color: '#8d7974' }}>
          Que tal renovar seu pijama neste inverno? Conheça os modelos disponíveis no nosso{' '}
          <a href="/catalogo" style={{
            color: '#d693a8',
            textDecoration: 'underline'
          }}>catálogo</a>{' '}
          e peça direto pelo WhatsApp com um clique!
        </p>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
