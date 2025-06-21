import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Analytics from '../components/Analytics';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contato() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_tl1ewvp',
      'template_ju8s93h',
      form.current,
      'q4PZYFIcv2Utb1ZZ5'
    )
      .then(() => setStatus('sent'))
      .catch(() => setStatus('error'));

    form.current.reset();
  };

  return (
    <>
      <Head>
        <title>Fale Conosco – Lili Cabral</title>
        <meta name="description" content="Entre em contato com a equipe da Lili Cabral. Envie dúvidas, sugestões ou mensagens personalizadas." />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        maxWidth: '700px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        color: '#191919'
      }}>
        <h1 style={{ color: '#d693a8', fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Fale com a Lili Cabral
        </h1>

        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Preencha o formulário abaixo e retornaremos o mais breve possível.
        </p>

        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            name="user_name"
            placeholder="Seu nome"
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Seu e-mail"
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button type="submit" style={buttonStyle}>
            Enviar mensagem
          </button>
        </form>

        {status === 'sent' && <p style={{ color: 'green', marginTop: '1rem' }}>Mensagem enviada com sucesso!</p>}
        {status === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>Erro ao enviar. Tente novamente.</p>}
      </main>

      <Footer />
    </>
  );
}

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#d693a8',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem'
};
