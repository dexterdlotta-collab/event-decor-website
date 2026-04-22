<eta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Ensure this file exists in /components
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Scroll Animations (AOS)
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-in-out'
    });
    
    // Splash Screen duration: 2.5 seconds
    const timer = setTimeout(() => setLoading(false), 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          /* CINEMATIC SPLASH SCREEN */
          <motion.div 
            key="loader"
            className="splash-screen"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.img 
              src="/logo/m2.png" 
              alt="M Square Events Logo"
              initial={{ scale: 0.5, opacity: 0, filter: "brightness(0)" }}
              animate={{ 
                scale: [0.5, 1.2, 1], 
                opacity: 1, 
                filter: "brightness(1.2)" 
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="gradient-text"
            >
            
            </motion.h1>
          </motion.div>
        ) : (
          /* MAIN WEBSITE CONTENT */
          <motion.div 
            key="content"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}