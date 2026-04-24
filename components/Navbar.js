import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar"
    >
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <img src="/logo/m2.png" alt="M Square Logo" />
          <span></span>
        </Link>
        
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/services">Services</Link>
          <Link href="/book" className="nav-btn">Book Now</Link>
        </div>
      </div>
    </motion.nav>
  );
}
