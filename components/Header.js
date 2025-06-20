import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/">
            <img src="/logo-lili-cabral.png" alt="Lili Cabral" className="logo" />
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir Menu">
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
            href="https://wa.me/5533984142006?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Lili%20Cabral"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </nav>
      </header>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: #fff;
          border-bottom: 1px solid #eee;
          z-index: 1000;
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          max-width: 1140px;
          margin: 0 auto;
        }

        .logo {
          height: auto;
          max-height: 40px;
          max-width: 160px;
        }

        .menu-toggle {
          display: none;
          font-size: 1.8rem;
          background: none;
          border: none;
          color: #d693a8;
          cursor: pointer;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          font-family: 'Segoe UI', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.5rem 0 1rem 0;
        }

        .nav a {
          color: #d693a8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav a:hover {
          color: #a55e77;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            background: #fff;
            border-top: 1px solid #eee;
            padding: 1rem 1.5rem;
          }

          .nav.open {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
