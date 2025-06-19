
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
        <Link href="/">
          <img src="/logo-lili-cabral.png" alt="Lili Cabral" style={{ height: '48px' }} />
        </Link>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/">Início</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
          <a href="https://wa.me/5533984142006?text=Olá!%20Acessei%20o%20site%20da%20Lili%20Cabral%20e%20gostaria%20de%20falar%20com%20você!" target="_blank" rel="noopener noreferrer">
            Fale Conosco
          </a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-toggle"
          aria-label="Abrir Menu"
        >
          ☰
        </button>
      </header>

      <style jsx>{`
        nav {
          display: flex;
          gap: 1.5rem;
          font-size: 0.95rem;
        }
        a {
          text-decoration: none;
          color: #d693a8;
          font-weight: 500;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #d693a8;
        }

        @media (max-width: 768px) {
          nav {
            display: none;
            position: absolute;
            top: 70px;
            right: 20px;
            background: white;
            border: 1px solid #eee;
            border-radius: 8px;
            flex-direction: column;
            padding: 1rem;
            width: 200px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          nav.open {
            display: flex;
          }
          .menu-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
