import { motion } from "framer-motion";

export default function Services() {
  const serviceList = [
    { title: "Wedding Stage Decoration", icon: "💍" },
    { title: "Birthday Party Decoration", icon: "🎂" },
    { title: "Balloon Decoration", icon: "🎈" },
    { title: "Flower Decoration", icon: "🌸" },
    { title: "Lighting & Theme Decoration", icon: "✨" }
  ];

  return (
    <div className="section">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        M Square Event – Decoration Services
      </motion.h1>

      <div className="cards">
        {serviceList.map((service, index) => (
          <motion.div 
            key={index}
            className="card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{service.icon}</div>
            <h3>{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
