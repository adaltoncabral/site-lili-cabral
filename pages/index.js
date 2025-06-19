
import Head from 'next/head';
import Header from '../components/Header';
import Analytics from '../components/Analytics';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral â€“ Pijamas e Lingeries com Conforto e Delicadeza</title>
        <meta name="description" content="Descubra a Lili Cabral â€“ sua loja de pijamas e lingeries que valorizam o bem-estar e a autoestima com aconchego e charme." />
      </Head>

      <Analytics />
      <Header />

      <main style={{ marginTop: '80px', padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
        {/* HERO SECTION */}
        <section style={{ padding: '3rem 1rem' }}>
          <h1 style={{ color: '#d693a8', fontSize: '2.2rem', marginBottom: '1rem' }}>
            Conforto, delicadeza e autoestima para seu descanso
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1rem', color: '#444' }}>
            Pijamas, lingeries e kits presenteÃ¡veis pensados para transformar sua rotina de descanso em um momento especial.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/catalogo" style={{
              backgroundColor: '#d693a8',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Ver CatÃ¡logo
            </Link>
            <a href="https://wa.me/5533984142006?text=OlÃ¡!%20Quero%20conhecer%20os%20produtos%20da%20Lili%20Cabral!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25d366',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>

        {/* BLOCO INSTITUCIONAL */}
        <section style={{ marginTop: '3rem', padding: '2rem 1rem', backgroundColor: '#fafafa', borderRadius: '12px' }}>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1rem', color: '#555' }}>
            A <strong>Lili Cabral</strong> Ã© mais do que uma loja virtual. Ã‰ uma marca criada para mulheres reais que valorizam o conforto,
            a delicadeza e o autocuidado. Todas as nossas peÃ§as sÃ£o escolhidas com carinho para oferecer aconchego e elevar a autoestima
            de quem veste.
          </p>
        </section>

        {/* CHAMADA FINAL */}
        <section style={{ marginTop: '3rem', padding: '2rem 1rem' }}>
          <h2 style={{ color: '#d693a8', marginBottom: '1rem' }}>
            Receba um atendimento acolhedor e personalizado
          </h2>
          <a href="https://wa.me/5533984142006?text=OlÃ¡!%20Quero%20conhecer%20os%20produtos%20da%20Lili%20Cabral!"
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

        <style jsx>{`
          .floating-buttons {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 1000;
          }
          .floating-buttons a {
            background-color: #25d366;
            color: white;
            padding: 12px 16px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
          }
          .floating-buttons a.instagram {
            background-color: #E1306C;
          }
        `}</style>

        <div className="floating-buttons">
          <a href="https://wa.me/5533984142006?text=OlÃ¡! Vim pelo site, quero saber mais sobre os produtos da Lili Cabral!" target="_blank" rel="noopener noreferrer">ðŸ“± WhatsApp</a>
          <a href="https://instagram.com/lili.cabral_" target="_blank" rel="noopener noreferrer" className="instagram">ðŸ“¸ Instagram</a>
        </div>
      </main>
    </>
  );
}
