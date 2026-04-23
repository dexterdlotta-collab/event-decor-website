import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();
  const { service } = router.query; // This gets "Birthday Decoration" from the URL

  // Create a custom WhatsApp message based on the chosen service
  const baseMessage = service 
    ? `Hi, I am interested in booking the ${service} package from M Square Events.` 
    : "Hi, I need event decoration from M Square Events.";

  const whatsappLink = `https://wa.me/9162384 33287?text=${encodeURIComponent(baseMessage)}`;

  return (
    <div className="section" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", background: "#000" }}>
      <motion.div 
        className="card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ 
          maxWidth: "500px", 
          width: "100%", 
          textAlign: "center", 
          padding: "40px",
          border: "1px solid rgba(212, 175, 55, 0.3)",
          background: "rgba(20, 20, 20, 0.8)",
          borderRadius: "20px"
        }}
      >
        <h1 className="gradient-text" style={{ fontSize: "2.5rem" }}>Book Your Event</h1>
        
        {/* Dynamic Subtitle: Shows the service name if chosen */}
        <p style={{ margin: "20px 0", fontSize: "1.2rem", color: "#ddd" }}>
          {service ? (
            <span>You selected: <strong>{service}</strong></span>
          ) : (
            "Contact us on WhatsApp for premium event decoration"
          )}
        </p>
        
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappLink}
          className="btn"
          style={{ 
            background: "#25D366", 
            color: "white", 
            border: "none",
            display: "inline-block",
            padding: "15px 30px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "50px",
            textDecoration: "none"
          }}
        >
          Confirm on WhatsApp
        </motion.a>

        <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#666" }}>
          Directly chat with our team in Kannur
        </p>
      </motion.div>
    </div>
  );
}
