import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Scroll Animations
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
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ 
              position: 'fixed', 
              top: 0, left: 0, 
              width: '100%', height: '100vh', 
              zIndex: 9999, 
              background: '#000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <motion.img 
              src="/logo/m2.png" 
              alt="M Square Events Logo"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1.2, 1], 
                opacity: 1, 
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ width: '120px' }}
            />
    
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
