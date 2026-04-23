import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a href="tel:+916238433287" className="call-btn" aria-label="Call Us">
      <FaPhoneAlt />
      <style jsx>{`
        .call-btn {
          position: fixed;
          bottom: 90px; /* Positioned exactly above the WhatsApp circle */
          right: 20px;
          background: #007bff;
          color: white;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          z-index: 9999;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .call-btn:hover {
          transform: scale(1.1) translateY(-5px);
          background: #006ae0;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        @media (max-width: 768px) {
          .call-btn {
            width: 50px;
            height: 50px;
            bottom: 80px;
            right: 15px;
            font-size: 18px;
          }
        }
      `}</style>
    </a>
  );
}
