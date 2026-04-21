import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import CallButton from "../components/CallButton";

export default function Home() {
  // Animation variants for the "Why Choose Us" list
  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <motion.div 
          className="brand"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/logo/m2.png"
            alt="M Square Events Logo"
            className="brand-logo"
          />
          <h1 className="gradient-text">M Square Events</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Creating Beautiful Wedding, Birthday & Event Decorations
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="/gallery" className="btn">View Gallery</a>
          <a href="/book" className="btn outline">Book Decor</a>
        </motion.div>

        <WhatsAppButton />
        <CallButton />
      </section>

      {/* SERVICES SECTION */}
      <section className="section">
        <h2 className="section-title" data-aos="fade-up">Our Decoration Services</h2>
        <div className="cards">
          <motion.div 
            className="card" 
            data-aos="zoom-in" 
            data-aos-delay="100"
            whileHover={{ y: -10 }}
          >
            <div className="icon-box">🌸</div>
            <h3>Wedding Decoration</h3>
            <p>Stage, Mandap, Flower & Lighting Decoration</p>
          </motion.div>

          <motion.div 
            className="card" 
            data-aos="zoom-in" 
            data-aos-delay="200"
            whileHover={{ y: -10 }}
          >
            <div className="icon-box">🎈</div>
            <h3>Birthday Decoration</h3>
            <p>Balloon Themes, Kids & Surprise Decor</p>
          </motion.div>

          <motion.div 
            className="card" 
            data-aos="zoom-in" 
            data-aos-delay="300"
            whileHover={{ y: -10 }}
          >
            <div className="icon-box">✨</div>
            <h3>Event & Party Decor</h3>
            <p>Corporate, Engagement & Special Events</p>
          </motion.div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="section light">
        <h2 className="section-title" data-aos="fade-right">Why Choose Us</h2>
        <motion.div 
          className="why"
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={listItem} className="why-pill">✔ Premium Quality Decor</motion.div>
          <motion.div variants={listItem} className="why-pill">✔ Affordable Pricing</motion.div>
          <motion.div variants={listItem} className="why-pill">✔ On-Time Setup</motion.div>
          <motion.div variants={listItem} className="why-pill">✔ Experienced Team</motion.div>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="cta" data-aos="flip-up">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>Let’s Make Your Event Beautiful</h2>
          <p>Contact us today for stunning decorations</p>
          <a href="/book" className="btn btn-cta">Contact Now</a>
        </motion.div>
      </section>
    </>
  );
}



