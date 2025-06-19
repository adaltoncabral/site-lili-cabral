
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Head from 'next/head';
import Header from '../components/Header';
import Analytics from '../components/Analytics';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral – Pijamas e Lingeries com Conforto e Delicadeza</title>
        <meta name="description" content="Descubra a Lili Cabral – sua loja de pijamas e lingeries que valorizam o bem-estar e a autoestima com aconchego e charme." />
      </Head>

      <Analytics />
      <Header />

      <main style={{ marginTop: '80px', padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
        {/* HERO SECTION */}
        <section style={{ padding: '4rem 1rem', minHeight: '90vh' }}>
          <h1 style={{ color: '#d693a8', fontSize: '2.4rem', marginBottom: '1.5rem' }}>
            Conforto, delicadeza e autoestima para seu descanso
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', color: '#444' }}>
            Pijamas, lingeries e kits presenteáveis pensados para transformar sua rotina de descanso em um momento especial.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/catalogo" style={{
              backgroundColor: '#d693a8',
              color: '#fff',
              padding: '14px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              Ver Catálogo
            </Link>
            <a href="https://wa.me/5533984142006?text=Olá! Quero conhecer os produtos da Lili Cabral!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25d366',
                color: '#fff',
                padding: '14px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        {/* BLOCO INSTITUCIONAL */}
        <section style={{ marginTop: '4rem', padding: '2rem 1rem', backgroundColor: '#fafafa', borderRadius: '12px' }}>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1rem', color: '#555' }}>
            A <strong>Lili Cabral</strong> é mais do que uma loja virtual. É uma marca criada para mulheres reais que valorizam o conforto,
            a delicadeza e o autocuidado. Todas as nossas peças são escolhidas com carinho para oferecer aconchego e elevar a autoestima
            de quem veste.
          </p>
        </section>

        {/* CHAMADA FINAL */}
        <section style={{ marginTop: '4rem', padding: '2rem 1rem' }}>
          <h2 style={{ color: '#d693a8', marginBottom: '1.5rem' }}>
            Receba um atendimento acolhedor e personalizado
          </h2>
          <a href="https://wa.me/5533984142006?text=Olá! Quero conhecer os produtos da Lili Cabral!"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#25d366',
              color: '#fff',
              padding: '14px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
          >
            Quero conhecer os produtos
          </a>
        </section>
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}
