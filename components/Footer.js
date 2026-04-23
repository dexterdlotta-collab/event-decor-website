import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        
        {/* Column 1: About */}
        <div className="footer-col">
          <h2 className="gradient-text">M Square Events</h2>
          <p className="footer-description">
            Premium cinematic decorations in Kannur. We turn your dream events into reality.
          </p>
        </div>


        {/* Column 3: Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Get In Touch</h3>
          <p className="contact-info"><FaMapMarkerAlt /> Kannur, Kerala</p>
          <p className="contact-info"><FaPhoneAlt /> +91 62384 33287</p>
          <a 
            href="https://www.instagram.com/m_square__events" 
            target="_blank" 
            className="insta-link"
          >
            <FaInstagram /> @_m_square__events
          </a>
        </div>

      </div>

      <div className="footer-copyright">
        <div className="divider-line"></div>
        <p>&copy; {new Date().getFullYear()} M Square Events VP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
