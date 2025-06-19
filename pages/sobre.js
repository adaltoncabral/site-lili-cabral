import Footer from '../components/Footer';
import Header from '../components/Header';
import Analytics from '../components/Analytics';
import Head from 'next/head';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Quem Somos – Lili Cabral</title>
        <meta name="description" content="Conheça a história da marca Lili Cabral, criada em Manhuaçu-MG para valorizar o conforto e a autoestima feminina." />
      </Head>
      
      <Analytics />
      <Header />
      <Footer />

      <main style={{
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        lineHeight: 1.6
      }}>
        <h1 style={{ color: '#d693a8', textAlign: 'center', marginBottom: '2rem' }}>
          Quem somos – Lili Cabral
        </h1>
        <p style={{ marginBottom: '1.5rem' }}>
          A <strong>Lili Cabral</strong> é mais do que uma loja virtual de pijamas e lingeries.
          É uma marca que nasceu do desejo de levar conforto, autoestima e beleza ao dia a dia de mulheres reais,
          com peças pensadas para o descanso, o carinho e o amor.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Criada por <strong>Liriane Cabral</strong>, a Lili Cabral nasceu em Manhuaçu-MG e alcança todo o Brasil com uma proposta clara:
          entregar delicadeza, qualidade e acolhimento em cada peça.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Trabalhamos com modelos exclusivos, tecidos selecionados e um atendimento acolhedor, feito por quem entende que vestir-se bem
          vai muito além da estética — é uma forma de se cuidar.
        </p>
        <p style={{ fontStyle: 'italic', color: '#8d7974', textAlign: 'center', marginTop: '2rem' }}>
          💗 Lili Cabral – O conforto que valoriza a sua beleza.
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
          <a href="https://wa.me/5533984142006?text=Olá!%20Vim%20pelo%20site,%20quero%20saber%20mais%20sobre%20os%20produtos%20da%20Lili%20Cabral!" target="_blank" rel="noopener noreferrer">📱 WhatsApp</a>
          <a href="https://instagram.com/lili.cabral_" target="_blank" rel="noopener noreferrer" className="instagram">📸 Instagram</a>
        </div>
      </main>
    </>
  );
}
