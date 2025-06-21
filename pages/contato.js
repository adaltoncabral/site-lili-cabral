import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics'; import emailjs from '@emailjs/browser'; import { useRef, useState } from 'react';

export default function Contato() { const form = useRef(null); const [status, setStatus] = useState('idle');

const sendEmail = (e) => { e.preventDefault(); emailjs.sendForm( 'service_tl1ewvp', 'template_ju8s93h', form.current, 'q4PZYFIcv2Utb1ZZ5' ) .then(() => setStatus('sent')) .catch(() => setStatus('error'));

form.current.reset();

};

return ( <> <Head> <title>Contato – Lili Cabral</title> <meta name="description" content="Entre em contato com a equipe Lili Cabral. Atendimento personalizado e acolhedor para você." /> </Head>

<Analytics />
  <Header />

  <main style={{
    maxWidth: '700px',
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
      Fale com a Lili Cabral
    </h1>

    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        type="text"
        name="user_name"
        placeholder="Seu nome"
        required
        style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <input
        type="email"
        name="user_email"
        placeholder="Seu e-mail"
        required
        style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <textarea
        name="message"
        placeholder="Escreva sua mensagem..."
        rows="5"
        required
        style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', resize: 'vertical' }}
      />
      <button
        type="submit"
        style={{
          padding: '0.8rem 1.2rem',
          backgroundColor: '#d693a8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Enviar mensagem
      </button>
    </form>

    {status === 'sent' && <p style={{ color: 'green', marginTop: '1rem' }}>Mensagem enviada com sucesso! Em breve entraremos em contato.</p>}
    {status === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>Erro ao enviar. Tente novamente.</p>}
  </main>

  <FloatingButton />
  <Footer />
</>

); }

        
