import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from './logo/LL.jpg';

export default function DairyRestaurantWebsite() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#000", color: "#fff", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Dairy Delights Logo" style={{ height: "50px", marginRight: "1rem" }} />
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>מעדני שנאל</h1>
        </div>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#25D366", color: "#fff", padding: "0.5rem 1rem", borderRadius: "5px", textDecoration: "none", display: "flex", alignItems: "center" }}>
          <FaWhatsapp size={20} style={{ marginRight: "0.5rem" }} /> WhatsApp
        </a>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "4rem 1rem", backgroundImage: `url(${logo})`, color: "#fff" ,  backgroundSize: 'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat' , width:"98%" , backgroundPosition: 'right 20px center'}}>
        <motion.h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Fresh & Delicious Dairy Cuisine
        </motion.h2>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>Quiches, Pasta, Desserts, Breads & More</p>
      </section>

      {/* Menu Section */}
      <section style={{ padding: "3rem 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
        {["Quiches", "Pasta", "Desserts", "Salads", "Breads", "Catering"].map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", padding: "1.5rem", textAlign: "center", borderRadius: "8px", backgroundColor: "#fff" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>{item}</h3>
            <p style={{ color: "#777", marginTop: "0.5rem" }}>Tasty and freshly made</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <section style={{ textAlign: "center", padding: "3rem 1rem", backgroundColor: "#ff9800", color: "#fff" }}>
        <h3 style={{ fontSize: "2rem", fontWeight: "600" }}>Order Now!</h3>
        <p style={{ marginTop: "1rem" }}>Check out our WhatsApp catalog for quick orders and inquiries.</p>
        <a href="https://wa.me/c/972503225482" target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.5rem", display: "inline-block", backgroundColor: "#fff", color: "#25D366", padding: "0.75rem 1.5rem", borderRadius: "5px", textDecoration: "none", fontSize: "1rem", fontWeight: "bold" }}>
          <FaWhatsapp size={20} style={{ marginRight: "0.5rem" }} /> WhatsApp Catalog
        </a>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>📞 Contact us: <strong>050-322-5482</strong></p>
      </section>
    </div>
  );
}
