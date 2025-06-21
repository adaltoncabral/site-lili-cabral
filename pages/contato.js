import Head from 'next/head'; import Header from '../components/Header'; import Footer from '../components/Footer'; import FloatingButton from '../components/FloatingButton'; import Analytics from '../components/Analytics';

export default function Contato() { return ( <> <Head> <title>Fale Conosco – Lili Cabral</title> <meta name="description" content="Entre em contato com a equipe da Lili Cabral para dúvidas, pedidos ou parcerias." /> </Head>

<Analytics />
  <Header />

  <main style={{ maxWidth: '800px', margin: '80px auto 0', padding: '2rem', fontFamily: 'sans-serif', color: '#191919' }}>
    <h1 style={{ color: '#d693a8', fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Fale Conosco</h1>

    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        type="text"
        name="nome"
        placeholder="Seu nome"
        required
        style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        required
        style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <textarea
        name="mensagem"
        placeholder="Escreva sua mensagem..."
        required
        rows="5"
        style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{
        backgroundColor: '#d693a8',
        color: '#fff',
        padding: '0.8rem',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Enviar mensagem
      </button>
    </form>

    <div style={{ marginTop: '3rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
      <p><strong>E-mail:</strong> lilicabral8385@gmail.com</p>
      <p><strong>WhatsApp:</strong> <a href="https://wa.me/5533984142006" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', textDecoration: 'none' }}>(33) 98414-2006</a></p>
      <p><strong>Instagram:</strong> <a href="https://www.instagram.com/lilicabral_" target="_blank" rel="noopener noreferrer" style={{ color: '#d693a8', textDecoration: 'none' }}>@lilicabral_</a></p>
    </div>
  </main>

  <FloatingButton />
  <Footer />
</>

); }

  
