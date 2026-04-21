export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918592001421"
      target="_blank"
      className="wa"
    >
      WhatsApp
      <style jsx>{`
        .wa {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #25d366;
          color: white;
          padding: 14px 20px;
          border-radius: 50px;
          font-weight: bold;
        }
      `}</style>
    </a>
  );
}
