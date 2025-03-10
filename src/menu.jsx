import { motion } from "framer-motion";
import breads from '/public/photos/vv.jpg';

const images = {
 "טונה" : '/photos/tt.jpg',
 "סלמון": '/photos/סלמון.jpg',
 "טורטיות במילוי טונה": '/photos/טורטיה.jpg',
"גבינות ואנטי פסטי": '/photos/פטה.jpg',
  פריקסה: '/photos/פריקסה.jpg',
פסטה:'/photos/פסטה.jpg',
  סלט: '/photos/סלט2.jpg',
  "לחמי כוסמין ושיפון 100%": '/photos/vv.jpg',
 "מגשי פירות מפנקים": '/photos/פירות.jpg',
  קינוחים: '/photos/קינוחים.jpg'
 
};

export default function MenuSection() {
  return (
    <section
      style={{
        padding: "1rem 2rem",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {Object.entries(images).map(([item, imageUrl], index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          style={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "1.5rem",
            textAlign: "center",
            borderRadius: "8px",
            backgroundColor: "#fff",
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px", // גובה קבוע לכל כרטיסיה
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>{item}</h3>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
