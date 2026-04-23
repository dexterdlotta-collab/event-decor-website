import { FaInstagram } from "react-icons/fa";

export default function InstagramButton() {
  return (
    <a
      href="https://www.instagram.com/m_square__events"
      target="_blank"
      rel="noopener noreferrer"
      className="insta-float"
    >
      <FaInstagram />
      <style jsx>{`
        .insta-float {
          position: fixed;
          bottom: 150px; /* Positioned above the Call button */
          right: 20px;
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.3);
          z-index: 9999;
          transition: transform 0.3s ease;
        }

        .insta-float:hover {
          transform: scale(1.1) rotate(5deg);
        }

        @media (max-width: 768px) {
          .insta-float {
            width: 50px;
            height: 50px;
            font-size: 24px;
            bottom: 135px;
            right: 15px;
          }
        }
      `}</style>
    </a>
  );
}