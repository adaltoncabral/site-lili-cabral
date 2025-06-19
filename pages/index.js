
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral – Pijamas e Lingeries com Conforto e Delicadeza</title>
        <meta name="description" content="Loja virtual especializada em pijamas e lingeries para mulheres e casais. Enviamos para todo o Brasil." />
        <meta property="og:title" content="Lili Cabral – Pijamas e Lingeries com Conforto e Delicadeza" />
        <meta property="og:description" content="Loja virtual especializada em pijamas e lingeries para mulheres e casais. Enviamos para todo o Brasil." />
        <meta property="og:image" content="/banner-lili.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Analytics />
      <Header />
      <main style={{
        marginTop: '80px',
        padding: '2rem',
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }}>
        {/* HERO */}
        <section style={{ padding: '4rem 1rem' }}>
          <h1 style={{ color: '#d693a8', fontSize: '2.4rem', marginBottom: '1.5rem' }}>
            Conforto, delicadeza e autoestima para seu descanso
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', color: '#444' }}>
            Pijamas, lingeries e kits presenteáveis pensados para transformar sua rotina de descanso em um momento especial.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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

        {/* SOBRE */}
        <section style={{ marginTop: '4rem', padding: '2rem 1rem', backgroundColor: '#fafafa', borderRadius: '12px' }}>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1rem', color: '#555' }}>
            A <strong>Lili Cabral</strong> é mais do que uma loja virtual. É uma marca criada para mulheres reais que valorizam o conforto,
            a delicadeza e o autocuidado. Todas as nossas peças são escolhidas com carinho para oferecer aconchego e elevar a autoestima
            de quem veste.
          </p>
        </section>

        {/* CTA FINAL */}
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
