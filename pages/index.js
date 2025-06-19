import Header from '../components/Header';
import Analytics from '../components/Analytics';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral – Pijamas e Lingeries com Conforto e Delicadeza</title>
        <meta name="description" content="Loja virtual especializada em pijamas, lingeries e kits presenteáveis. Enviamos para todo o Brasil. Compre com conforto e charme." />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <h1 style={{
          color: '#d693a8',
          fontSize: '2rem',
          marginBottom: '1rem'
        }}>
          Bem-vinda à Lili Cabral – Pijamas e Lingeries
        </h1>
        <p style={{ maxWidth: '600px' }}>
          Nosso novo site está em construção. Em breve, você poderá conhecer nossas coleções
          e falar diretamente conosco pelo WhatsApp e Instagram.
        </p>

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
          <a
            href="https://wa.me/5533984142006?text=Olá!%20Vim%20pelo%20site,%20quero%20saber%20mais%20sobre%20os%20produtos%20da%20Lili%20Cabral!"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
          <a
            href="https://instagram.com/lili.cabral_"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            📸 Instagram
          </a>
        </div>
      </main>
    </>
  );
}
