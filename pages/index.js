
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lili Cabral – Pijamas e Lingeries com Conforto e Delicadeza</title>
        <meta name="description" content="Loja virtual especializada em pijamas, lingeries e kits presenteáveis. Enviamos para todo o Brasil. Compre com conforto e charme." />
      </Head>
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center'
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
      </main>
    </>
  );
}
