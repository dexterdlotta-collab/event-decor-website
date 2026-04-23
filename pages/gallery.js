import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  // 1. Generate the array of images
  const images = Array.from({ length: 52 }, (_, i) => i + 1);

  // 2. Format images for the Lightbox component
  const slides = images.map((num) => ({
    src: `/gallery/decor${num}.jpg`,
    title: num <= 18 ? "view image" : "view image",
  }));

  // 3. State to handle opening/closing lightbox
  const [index, setIndex] = useState(-1);

  return (
    <div className="gallery-container" style={{ paddingTop: '100px', background: '#000' }}>
      
      {/* Title with fade-down animation */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-header"
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <h1 className="section-title gradient-text">DECOR IMAGES</h1>
        <p className="section-subtitle" style={{ color: '#888' }}>
          Click any image to view full screen and swipe through our work
        </p>
      </motion.div>

      <div className="gallery">
        {images.map((num, i) => (
          <motion.div 
            key={num}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            onClick={() => setIndex(i)} // Opens lightbox at this specific image
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={`/gallery/decor${num}.jpg`} 
              alt={`M Square Event Decor ${num}`} 
              loading="lazy"
            />

            <motion.div 
              className="caption-overlay"
              variants={{
                hover: { opacity: 1, y: 0 }
              }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <span className="caption-text">
                {num <= 18 ? " View Image" : "View Image"}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* 4. THE LIGHTBOX (The magic "Swapper") */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        // This adds a dark blur behind the full-screen image
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }} 
      />
    </div>
  );
}

