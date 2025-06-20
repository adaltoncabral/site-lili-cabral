export default function FloatingButton() {
  return (
    <>
      <a
        href="https://wa.me/5533984142006?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20produtos%20da%20Lili%20Cabral!"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
      <style jsx>{`
        .floating-whatsapp {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25d366;
          color: white;
          padding: 12px 16px;
          border-radius: 50%;
          text-decoration: none;
          font-size: 24px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          z-index: 1000;
        }
        @media (max-width: 768px) {
          .floating-whatsapp {
            display: none;
          }
        }
      `}</style>
    </>
  );
}