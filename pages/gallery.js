import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

export default function Gallery() {
  // Dynamically generate the array of 36 images
  const images = Array.from({ length: 36 }, (_, i) => `/gallery/decor${i + 1}.jpg`);

  return (
    <div className="gallery-container">
      {/* Animated Page Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Our Decoration Work
      </motion.h1>

      <div className="gallery">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: (index % 6) * 0.1 // Stagger effect based on grid row
            }}
            whileHover={{ scale: 1.03 }} // Slight zoom on hover
          >
            <img 
              src={src} 
              alt={`Design ${index + 1}`} 
              loading="lazy" // Improves performance for 36 images
            />
          </motion.div>
        ))}
      </div>

      {/* Modernized Bottom Contact Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{ marginTop: "60px", paddingBottom: "40px" }}
      >
        <h3 style={{ marginBottom: "20px", color: "#0d0d0d" }}>
          For more designs and details, just connect with us.
        </h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <WhatsAppButton />
          <CallButton />
        </div>
      </motion.div>
    </div>
  );
}

