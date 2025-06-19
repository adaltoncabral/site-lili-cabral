export default function FloatingButton() {
  return (
    <>
      <style jsx>{\`
        .floating-whatsapp {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          background-color: #25d366;
          color: white;
          padding: 14px 18px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .floating-whatsapp {
            display: none;
          }
        }
      \`}</style>

      <a
        href="https://wa.me/5533984142006?text=Olá!%20Vim%20pelo%20site,%20quero%20saber%20mais%20sobre%20os%20produtos%20da%20Lili%20Cabral!"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        📱 WhatsApp
      </a>
    </>
  );
}