
import Head from 'next/head';
import Header from '../components/Header';
import Analytics from '../components/Analytics';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato – Lili Cabral</title>
        <meta name="description" content="Entre em contato com a Lili Cabral por WhatsApp, Instagram ou e-mail. Estamos aqui para te atender com carinho." />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        lineHeight: 1.6,
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#d693a8', marginBottom: '1.5rem' }}>Entre em contato com a Lili Cabral</h1>
        <p style={{ marginBottom: '1rem' }}>
          Estamos disponíveis para tirar dúvidas, receber pedidos personalizados e atender com carinho cada cliente.
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          📱 WhatsApp:{' '}
          <a href="https://wa.me/5533984142006" target="_blank" rel="noopener noreferrer">
            (33) 98414-2006
          </a>
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          📧 E-mail: <a href="mailto:contato@lilicabral.com.br">contato@lilicabral.com.br</a>
        </p>
        <p>
          📸 Instagram:{' '}
          <a href="https://instagram.com/lili.cabral_" target="_blank" rel="noopener noreferrer">
            @lili.cabral_
          </a>
        </p>
      </main>
    </>
  );
}
