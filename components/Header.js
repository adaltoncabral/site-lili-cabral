import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link href="/">
            <a>
              <img src="/logo-lili-cabral.png" alt="Lili Cabral" className="logo" />
            </a>
          </Link>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/"><a>Início</a></Link>
          <Link href="/catalogo"><a>Catálogo</a></Link>
          <Link href="/sobre"><a>Sobre</a></Link>
          <Link href="/contato"><a>Contato</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
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
          padding: 0.8rem 1.2rem;
        }

        .logo {
          height: 36px;
          max-width: 160px;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .bar {
          width: 22px;
          height: 2px;
          background-color: #d693a8;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 0.5rem 0 1rem 0;
        }

        .nav a {
          color: #d693a8;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          font-family: 'Segoe UI', sans-serif;
          display: block;
          transition: color 0.3s ease;
        }

        .nav a:hover {
          color: #a55e77;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .nav {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            background: #fff;
            border-top: 1px solid #eee;
            padding: 1rem 1.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          }

          .nav.open {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
