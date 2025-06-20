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

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

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
          background: #fff;
          border-bottom: 1px solid #eee;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }

        .logo img {
          height: 40px;
        }

        .nav {
          display: flex;
          gap: 1.5rem;
        }

        .nav a {
          text-decoration: none;
          color: #d693a8;
          font-weight: 500;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #d693a8;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .nav {
            display: none;
            position: absolute;
            top: 60px;
            right: 1rem;
            background: #fff;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            border: 1px solid #eee;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .nav.open {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
