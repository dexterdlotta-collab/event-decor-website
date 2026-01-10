import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", marginTop: "40px" }}>
      <a
        href="https://www.instagram.com/m_square__events"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "28px", color: "#E1306C" }}
      >
        <FaInstagram />
      </a>

      <p style={{ marginTop: "10px" }}>
        © 2026 M-Square Event
      </p>
    </footer>
  );
}