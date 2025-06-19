
import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      background: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #eee',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', color: '#d693a8', fontSize: '1.2rem' }}>
        Lili Cabral
      </div>
      <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem' }}>
        <Link href="/">Início</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
        <Link href="/blog">Blog</Link>
        <a href="https://wa.me/5533984142006?text=Olá!%20Acessei%20o%20site%20da%20Lili%20Cabral%20e%20gostaria%20de%20falar%20com%20você!" target="_blank" rel="noopener noreferrer">
          Fale Conosco
        </a>
      </nav>
    </header>
  );
}
