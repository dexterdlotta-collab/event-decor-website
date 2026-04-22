import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

export default function Home() {
  return (
    <>
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="video-hero">
        {/* Background Video Layer */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        <div className="hero-content">
          <motion.div 
            className="brand"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/logo/m2.png" alt="Logo" style={{ width: '80px' }} />
            <h1 className="gradient-text">M Square Events</h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ margin: '20px 0', fontSize: '1.2rem', color: '#fff' }}
          >
            Creating Happy Moments: Weddings, Birthdays & Family Celebrations
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="/gallery" className="btn">View Gallery</a>
            <a href="/book" className="btn outline">Book Now</a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section">
        <h2 className="section-title" data-aos="fade-up">Our Decoration Services</h2>
        <div className="cards">
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">🌸</div>
            <h3>Wedding Decoration</h3>
            <p>Stage, Mandap, Flower & Lighting Decoration</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">🎈</div>
            <h3>Birthday Decoration</h3>
            <p>Balloon Themes, Kids & Surprise Decor</p>
          </div>

          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">✨</div>
            <h3>Event & Party Decor</h3>
            <p>Corporate, Engagement & Special Events</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="cta">
        <div data-aos="fade-up">
          <h2>Ready to Make Your Event Beautiful?</h2>
          <p>Contact us today for stunning decorations</p>
          <a href="/book" className="btn-cta">Contact Now</a>
        </div>
      </section>

      {/* FLOATING ACTION BUTTONS */}
      <WhatsAppButton />
      <CallButton />
    </>
  );
}


