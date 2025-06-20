import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Link href="/" className="logo">
          <img src="/logo-lili-cabral.png" alt="Lili Cabral" />
        </Link>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
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

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span className="hamburger-icon">☰</span>
        </button>
      </header>

      <style jsx>{`
        .header {
          background: #fff;
          padding: 1rem 1.5rem;
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
          height: 42px;
          max-width: 160px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          font-size: 0.95rem;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #d693a8;
          font-weight: 500;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          z-index: 1100;
        }

        .hamburger-icon {
          font-size: 1.8rem;
          color: #d693a8;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .nav-links {
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

          .nav-links.open {
            display: flex;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
