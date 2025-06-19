export default function Home() {
  return (
    <main>
      <h1 style={{ color: '#d693a8', textAlign: 'center', paddingTop: '50px' }}>
        Bem-vinda à Lili Cabral – Pijamas e Lingeries
      </h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '20px auto' }}>
        Nosso novo site está em construção. Em breve, você poderá conhecer nossas coleções
        e falar diretamente conosco pelo WhatsApp e Instagram.
      </p>
    </main>
  )
}
{/* Botão flutuante de WhatsApp */}
<a href="https://api.whatsapp.com/send?phone=5533984242006&text=Olá!%20Quero%20saber%20mais%20sobre%20os%20produtos%20da%20Lili%20Cabral" 
   target="_blank" 
   style={{
     position: 'fixed',
     bottom: '20px',
     right: '20px',
     backgroundColor: '#25d366',
     color: 'white',
     borderRadius: '50%',
     padding: '15px',
     fontSize: '24px',
     zIndex: 1000,
     boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
     textDecoration: 'none',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     width: '55px',
     height: '55px',
   }}
   title="Fale conosco no WhatsApp">
   💬
</a>

{/* Link para Instagram no rodapé */}
<footer style={{
  textAlign: 'center',
  marginTop: '50px',
  fontSize: '16px',
}}>
  <p>
    Siga-nos no Instagram:{" "}
    <a href="https://instagram.com/lili.cabral_" target="_blank" style={{ color: '#d693a8', textDecoration: 'none' }}>
      @lili.cabral_
    </a>
  </p>
</footer>
