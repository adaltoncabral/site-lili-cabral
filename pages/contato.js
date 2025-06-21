import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Analytics from '../components/Analytics';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contato() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sent | error

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
      <Head>…</Head>
      <Analytics />
      <Header />
      <main style={/* ... */}>
        <h1>Fale com a Lili Cabral</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input name="user_name" placeholder="Seu nome" required />
          <input name="user_email" type="email" placeholder="Seu e-mail" required />
          <textarea name="message" placeholder="Sua mensagem" required />
          <button type="submit">Enviar mensagem</button>
        </form>

        {status === 'sent' && <p style={{ color: 'green' }}>Mensagem enviada com sucesso!</p>}
        {status === 'error' && <p style={{ color: 'red' }}>Erro ao enviar. Tente novamente.</p>}
      </main>
      <Footer />
    </>
  );
}
