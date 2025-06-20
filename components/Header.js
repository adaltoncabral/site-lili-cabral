import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Link href="/">
            <img
              src="/logo-lili-cabral.png"
              alt="Lili Cabral"
              className="logo"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-toggle"
            aria-label="Abrir Menu"
          >
            ☰
          </button>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/">Início</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
          <a
            href="https://wa.me/5533984142006?text=Olá!%20Acessei%20o%20site%20da%20Lili%20Cabral%20e%20gostaria%20de%20falar%20com%20você!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </nav>
      </header>

      <style jsx>{`
        .header {
          background: #fff;
          padding: 1rem 1.5rem;
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid #eee;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .logo-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          height: 32px;
          max-width: 160px;
          object-fit: contain;
        }

        nav {
          display: flex;
          gap: 1.2rem;
          font-size: 0.95rem;
          justify-content: center;
          margin-top: 1rem;
        }

        nav a {
          text-decoration: none;
          color: #d693a8;
          font-weight: 500;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #d693a8;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          nav {
            display: none;
            flex-direction: column;
            background: #fff;
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin-top: 1rem;
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
