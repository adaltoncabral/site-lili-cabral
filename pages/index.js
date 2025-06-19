
export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', color: '#191919', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#d693a8', marginTop: '80px' }}>
        Bem-vinda Ã  Lili Cabral â€“ Pijamas e Lingeries
      </h1>
      <p style={{ marginTop: '10px' }}>
        Nosso novo site estÃ¡ em construÃ§Ã£o. Em breve, vocÃª poderÃ¡ conhecer nossas coleÃ§Ãµes e falar diretamente conosco pelo WhatsApp e Instagram.
      </p>

      <div style={{ marginTop: '30px' }}>
        <a
          href="https://api.whatsapp.com/send?phone=5533984142006&text=Ol%C3%A1!%20Vim%20pelo%20site,%20quero%20saber%20mais%20sobre%20os%20produtos%20da%20Lili%20Cabral!"
          target="_blank"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginRight: '10px'
          }}
        >
          Falar no WhatsApp
        </a>

        <a
          href="https://instagram.com/lili.cabral_"
          target="_blank"
          style={{
            backgroundColor: '#E1306C',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Ver no Instagram
        </a>
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=5533984142006&text=Ol%C3%A1!%20Vim%20pelo%20site,%20quero%20saber%20mais%20sobre%20os%20produtos%20da%20Lili%20Cabral!"
        target="_blank"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '55px',
          height: '55px',
          fontSize: '30px',
          lineHeight: '55px',
          textAlign: 'center',
          textDecoration: 'none'
        }}
      >
        ðŸ’¬
      </a>
    </main>
  );
}
