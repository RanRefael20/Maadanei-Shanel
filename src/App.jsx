import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import borderr from "./border";

import logo from './logo/LL.jpg';

import MenuSection from "./menu";
//dcdc
export default function DairyRestaurantWebsite() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", color: "#333" }}> 
      {/* Header */}
      <header style={{ backgroundColor: "#000", color: "#fff", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Dairy Delights Logo" style={{ height: "50px", marginRight: "1rem" }} />
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>מעדני שנאל</h1>
        </div>
        <a href="https://wa.me/c/972503225482" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#25D366", color: "#fff", padding: "0.5rem 1rem", borderRadius: "5px", textDecoration: "none", display: "flex", alignItems: "center" }}>
          <FaWhatsapp size={20} style={{ marginRight: "0.5rem" }} /> WhatsApp
        </a>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "4rem 1rem", backgroundImage: `url(${logo})`, color: "#099900" ,  backgroundSize: 'cover',   backgroundRepeat: 'no-repeat' , width:"98%" , backgroundPosition: 'right 20px center'}}>
     
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>

      < div style={{ fontSize: "1.5rem", fontWeight: "bold" , textAlign: "center" , backgroundColor:"#ffc64c" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      !מגשי אירוח חלביים יוקרתיים
      
      </div>
       
          


      {/* Menu Section */}
      <MenuSection></MenuSection>
   

      
      {/* Contact Section */}
      <section style={{ textAlign: "center", padding: "2rem 1rem", backgroundColor: "#ff9800", color: "#fff" }}>
      <section style={{ 
  textAlign: "center", 
  padding: "1rem 1rem", 
  backgroundColor: "#ff9800", 
  color: "#fff",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // 2 קוביות בשורה
  gap: "1rem",
  justifyContent: "center",
  maxWidth: "400px", // מגביל את הרוחב כדי למנוע גלילה אופקית
  margin: "0 auto", // ממקם במרכז הדף
  overflow: "hidden" // מונע הרחבה לא רצויה
}}>
  {["לחמי כוסמין ושיפון 100%", "מגשי אירוח", "מארזים מפנקים עד הפרט האחרון", "קייטרינג חלבי ייחודי לאירועים"].map((text, index) => (
    <div key={index} style={{
      width: "140px",
      height: "90px",
      border: "2px solid rgba(255, 255, 255, 0.8)", // מסגרת שקופה
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backdropFilter: "blur(10px)", // אפקט זכוכית מט
      backgroundColor: "rgba(255, 255, 255, 0.1)", // רקע שקוף למחצה
      fontSize: "1.1rem",
      fontWeight: "bold",
      margin: "auto" // מוודא שהקוביות ממורכזות
    }}>
      {text}
    </div>
  ))}
</section>

      <h2 style={{ fontSize: "4vh" , fontWeight: "400" }}>אירוח שמרגשים בו את הלב</h2>
      <h3 style={{ color:"black", fontSize: "2rem", fontWeight: "1000" }}>?חוגגים יום הולדת<br></br> ?אירועי חברה? עליה לתורה</h3>
        <h3 style={{ fontSize: "2rem", fontWeight: "600" }}>!הזמינו עכשיו</h3>
        <p style={{ marginTop: "1rem" }}>⬇️עיין בקטלוג המלא שלנו בוואטסאפ. לחץ מטה</p>
        <a href="https://wa.me/c/972503225482" target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.5rem", display: "inline-block", backgroundColor: "#fff", color: "#25D366", padding: "0.75rem 1.5rem", borderRadius: "5px", textDecoration: "none", fontSize: "1rem", fontWeight: "bold" }}>
          <FaWhatsapp size={20} style={{ marginRight: "0.5rem" }} /> WhatsApp Catalog
        </a>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>📞 להזמנות חייגו / שילחו הודעת וואטסאפ: <strong>050-322-5482</strong></p>
      </section>
    </div>
  );
}
