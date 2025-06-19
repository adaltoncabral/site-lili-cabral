
import Link from 'next/link';

export default function FloatingButton() {
  return (
    <>
      <style jsx>{\`
        @media (max-width: 768px) {
          .floating-button {
            display: none;
          }
        }
        .floating-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          padding: 14px 16px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          z-index: 1000;
        }
      \`}</style>
      <a
        href="https://wa.me/5533984142006?text=Olá! Vim pelo site, quero saber mais sobre os produtos da Lili Cabral!"
        className="floating-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        📱 Fale no WhatsApp
      </a>
    </>
  );
}
