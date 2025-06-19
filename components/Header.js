import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <Link href="/" aria-label="Página inicial">
          <img
            src="/logo-lili-cabral.png"
            alt="Lili Cabral – Logo"
            style={{ height: '48px' }}
          />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href="/" onClick={handleCloseMenu}>Início</Link>
          <Link href="/catalogo" onClick={handleCloseMenu}>Catálogo</Link>
          <Link href="/sobre" onClick={handleCloseMenu}>Sobre</Link>
          <Link href="/contato" onClick={handleCloseMenu}>Contato</Link>
          <Link href="/blog" onClick={handleCloseMenu}>Blog</Link>
          <a
            href="https://wa.me/5533984142006?text=Olá!%20Acessei%20o%20site%20da%20Lili%20Cabral%20e%20gostaria%20de%20falar%20com%20você!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCloseMenu}
          >
            Fale Conosco
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </header>

      <style jsx>{`
        .header {
          background: #fff;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          font-size: 0.95rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #d693a8;
          font-weight: 500;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.6rem;
          color: #d693a8;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 72px;
            right: 20px;
            background: white;
            border: 1px solid #eee;
            border-radius: 8px;
            flex-direction: column;
            padding: 1rem;
            width: 220px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .nav-links.open {
            display: flex;
            }
        }
      `}</style>
    </>
  );
}
