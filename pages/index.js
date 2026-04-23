import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router"; // Import the router
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";
import Tilt from 'react-parallax-tilt';
import InstagramButton from "../components/InstagramButton"; // Add this import

export default function Home() {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    // FORCE the video to play and stay playing
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Playback error:", e));
    }
  }, []);

  return (
    <>
      <section className="video-hero">
        <video 
          ref={videoRef}
          key="permanent-bg-video"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`background-video ${videoLoaded ? 'v-visible' : 'v-hidden'}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
          }}
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        
        <div className="video-overlay" style={{ zIndex: 2 }}></div>

        <div className="hero-content" style={{ zIndex: 3, position: 'relative' }}>
          <motion.div 
            className="brand"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/logo/m2.png" alt="Logo" style={{ width: '80px' }} />
            <h1 className="gradient-text">M Square Events</h1>
          </motion.div>
          
          <p style={{ margin: '20px 0', fontSize: '1.2rem', color: '#fff' }}>
            Creating Happy Moments: Weddings, Birthdays & Family Celebrations
          </p>
          
          <div className="hero-buttons">
            <a href="/gallery" className="btn">View Gallery</a>
            <a href="/book" className="btn outline">Book Now</a>
          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="section">
        <h2 className="section-title">Our Decoration Services</h2>
        <div className="cards">
          {[
            { icon: "🌸", title: "Wedding Decoration", desc: "Stage, Mandap & Lighting" },
            { icon: "🎈", title: "Birthday Decoration", desc: "Balloon Themes & Surprise Decor" },
            { icon: "✨", title: "Event & Party Decor", desc: "Corporate & Engagement" }
          ].map((service, index) => (
            <Tilt key={index} perspective={800} glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
              <div 
                className="card" 
                onClick={() => router.push(`/book?service=${service.title}`)} // Redirects with service name
                style={{ cursor: 'pointer' }}
              >
                <div className="icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <WhatsAppButton />
      <CallButton />
      <InstagramButton />
    </>
  );
}