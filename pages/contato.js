import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import Analytics from '../components/Analytics';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contato() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tl1ewvp', 'template_ju8s93h', form.current, 'q4PZYFIcv2Utb1ZZ5')
      .then(() => {
        setEnviado(true);
        setErro(false);
        form.current.reset();
      }, () => {
        setErro(true);
      });
  };

  return (
    <>
      <Head>
        <title>Fale Conosco – Lili Cabral</title>
        <meta name="description" content="Entre em contato com a Lili Cabral pelo WhatsApp, Instagram ou formulário. Atendimento acolhedor e personalizado." />
      </Head>

      <Analytics />
      <Header />

      <main style={{
        maxWidth: '800px',
        margin: '80px auto 0',
        padding: '2rem',
        fontFamily: 'sans-serif',
        color: '#191919'
      }}>
        <h1 style={{ color: '#d693a8', fontSize: '2rem', marginBottom: '2rem' }}>Fale com a Lili Cabral</h1>

        <p style={{ lineHeight: '1.7', marginBottom: '2rem' }}>
          Nosso atendimento é feito com carinho e atenção. Fale conosco pelo WhatsApp, Instagram ou envie sua mensagem pelo formulário abaixo.
        </p>

        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" name="user_name" placeholder="Seu nome" required style={estiloInput} />
          <input type="email" name="user_email" placeholder="Seu e-mail" required style={estiloInput} />
          <textarea name="message" rows="5" placeholder="Digite sua mensagem" required style={estiloTextArea}></textarea>
          <button type="submit" style={estiloBotao}>Enviar mensagem</button>
        </form>

        {enviado && <p style={{ color: 'green', marginTop: '1rem' }}>Mensagem enviada com sucesso! 💌</p>}
        {erro && <p style={{ color: 'red', marginTop: '1rem' }}>Erro ao enviar. Tente novamente.</p>}
      </main>

      <FloatingButton />
      <Footer />
    </>
  );
}

const estiloInput = {
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem'
};

const estiloTextArea = {
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem',
  resize: 'vertical'
};

const estiloBotao = {
  backgroundColor: '#d693a8',
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer'
};
