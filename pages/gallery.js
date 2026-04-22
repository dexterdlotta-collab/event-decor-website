import { motion } from "framer-motion";

export default function Gallery() {
  // Generates an array from 1 to 36 to match your decor1.jpg to decor36.jpg
  const images = Array.from({ length: 36 }, (_, i) => i + 1);

  return (
    <div className="gallery-container">
      {/* Title with fade-down animation */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-header"
      >
        <h1 className="section-title">Our Happy Moments</h1>
        <p className="section-subtitle">A glimpse into the beautiful events we've decorated</p>
      </motion.div>

      <div className="gallery">
        {images.map((num) => (
          <motion.div 
            key={num}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover" // This triggers the caption animation below
          >
            {/* The Image - Looking inside /public/gallery/ */}
            <img 
              src={`/gallery/decor${num}.jpg`} 
              alt={`M Square Event Decor ${num}`} 
              loading="lazy"
            />

            {/* Cinematic Caption Overlay */}
            <motion.div 
              className="caption-overlay"
              variants={{
                hover: { opacity: 1, y: 0 }
              }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="caption-text">
                {num <= 18 ? "💍 A New Beginning" : "🎂 Joyful Years"}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

