// components/Footer.js
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa"; // Importing Instagram icon

export default function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-content">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="footer-brand"
        >
          <h2 className="gradient-text">M Square Events</h2>
          <p>Professional Decoration Services in Kannur, Kerala</p>
        </motion.div>
        
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/m_square__events" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram /> <span>Follow us on Instagram</span>
          </a>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/services">Services</a>
          <a href="/book">Book Now</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} M Square Events. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}