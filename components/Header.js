import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link href="/">
            <img src="/logo-lili-cabral.png" alt="Lili Cabral" />
          </Link>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/">Início</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          <span className="hamburger" />
        </button>
      </header>

      <style jsx>{`
        .header {
          background: #fff;
          padding: 0.8rem 1.2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .logo img {
          height: auto;
          max-width: 140px;
          width: 100%;
          object-fit: contain;
        }

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
          cursor: pointer;
        }

        .hamburger {
          display: inline-block;
          width: 24px;
          height: 2px;
          background: #d693a8;
          position: relative;
        }

        .hamburger::before,
        .hamburger::after {
          content: "";
          position: absolute;
          left: 0;
          width: 24px;
          height: 2px;
          background: #d693a8;
        }

        .hamburger::before {
          top: -8px;
        }

        .hamburger::after {
          top: 8px;
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
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
