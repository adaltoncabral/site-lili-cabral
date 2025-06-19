export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f8f8',
      padding: '2rem 1rem',
      textAlign: 'center',
      fontSize: '0.9rem',
      color: '#777',
      marginTop: '4rem',
      borderTop: '1px solid #eee'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src="/logo-lili-cabral.png" alt="Lili Cabral" style={{ height: '40px', opacity: 0.8 }} />
      </div>
      <p style={{ margin: '0.5rem 0' }}>
        © {new Date().getFullYear()} Lili Cabral – Todos os direitos reservados.
      </p>
      <p style={{ margin: '0.5rem 0' }}>
        Desenvolvido com 💖 por Liriane e Adalton Cabral
      </p>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <a href="https://wa.me/5533984142006" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', fontWeight: 'bold', textDecoration: 'none' }}>
          WhatsApp
        </a>
        <a href="https://instagram.com/lili.cabral_" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C', fontWeight: 'bold', textDecoration: 'none' }}>
          Instagram
        </a>
      </div>
    </footer>
  );
}