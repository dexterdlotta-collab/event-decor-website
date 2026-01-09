export default function CallButton() {
  return (
    <a href="tel:918592001421" className="call">
      Call
      <style jsx>{`
        .call {
          position: fixed;
          bottom: 80px;
          right: 20px;
          background: #007bff;
          color: white;
          padding: 14px 20px;
          border-radius: 50px;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 1000;
        }
      `}</style>
    </a>
  );
}
