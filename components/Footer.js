export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f8f8',
      padding: '2rem 1rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#555',
      marginTop: '4rem',
      borderTop: '1px solid #eee',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <img
          src="/logo-lili-cabral.png"
          alt="Lili Cabral"
          style={{ height: '40px', opacity: 0.9 }}
        />
      </div>
      
      <p style={{ margin: '0.3rem 0' }}>
        © {new Date().getFullYear()} <strong>Lili Cabral</strong> – Todos os direitos reservados.
      </p>
      
      <p style={{ margin: '0.3rem 0', color: '#888' }}>
        Desenvolvido com 💖 por Liriane & Adalton Cabral
      </p>

      <div style={{
        marginTop: '1.2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }}>
        <a
          href="https://wa.me/5533984142006"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#25d366',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '0.95rem'
          }}
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com/lili.cabral_"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#E1306C',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '0.95rem'
          }}
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
