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

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/">Início</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      <style jsx>{`
        .header {
          background: #fff;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid #eee;
        }

        .logo img {
          height: 48px;
          max-width: 160px;
          width: auto;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #d693a8;
        }

        .nav {
          display: flex;
          gap: 1.2rem;
        }

        .nav a {
          text-decoration: none;
          color: #d693a8;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .nav {
            display: none;
            position: absolute;
            top: 70px;
            right: 1.5rem;
            background: white;
            border: 1px solid #eee;
            border-radius: 8px;
            padding: 1rem;
            flex-direction: column;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .nav.open {
            display: flex;
          }

          .nav a {
            padding: 0.5rem 0;
          }
        }
      `}</style>
    </>
  );
}
