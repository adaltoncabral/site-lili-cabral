import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics';

export default function Contato() { return ( <> <Head> <title>Fale Conosco – Lili Cabral</title> <meta name="description" content="Entre em contato com a equipe Lili Cabral para dúvidas, sugestões ou atendimento personalizado." /> <meta property="og:title" content="Fale Conosco – Lili Cabral" /> <meta property="og:description" content="Entre em contato com a equipe Lili Cabral para dúvidas, sugestões ou atendimento personalizado." /> <meta property="og:image" content="/banner-lili.jpg" /> <meta property="og:type" content="website" /> </Head>

<Analytics />
  <Header />

  <main style={{
    maxWidth: '800px',
    margin: '80px auto 0',
    padding: '2rem',
    fontFamily: 'sans-serif',
    color: '#191919'
  }}>
    <h1 style={{
      color: '#d693a8',
      fontSize: '2rem',
      marginBottom: '1.5rem',
      textAlign: 'center'
    }}>
      Fale Conosco
    </h1>

    <p style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'center' }}>
      Precisa de ajuda, quer tirar dúvidas ou montar um presente especial? Nossa equipe está pronta para te atender com carinho e atenção.
    </p>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '2rem',
      gap: '1rem'
    }}>
      <a
        href="https://wa.me/5533984142006?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Lili%20Cabral"
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
        Atender via WhatsApp
      </a>

      <a
        href="https://instagram.com/lili.cabral_"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#E1306C',
          color: '#fff',
          padding: '12px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Enviar mensagem pelo Instagram
      </a>
    </div>
  </main>

  <FloatingButton />
  <Footer />
</>

); }

