import { motion } from "framer-motion";

export default function Book() {
  return (
    <div className="section" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70vh" }}>
      <motion.div 
        className="card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h1 className="gradient-text">Book Your Event</h1>
        <p style={{ margin: "20px 0", fontSize: "1.2rem" }}>
          Contact us on WhatsApp for premium event decoration
        </p>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/918592001421?text=Hi,%20I%20need%20event%20decoration%20from%20M%20Square%20Event"
          className="btn"
          style={{ background: "#25D366", color: "white", border: "none" }}
        >
          Book on WhatsApp
        </motion.a>
      </motion.div>
    </div>
  );
}
