import React from 'react'

const borderr = () => {
  return (
    <section style={{ 
        textAlign: "center", 
        padding: "3rem 1rem", 
        backgroundColor: "#ff9800", 
        color: "#fff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem"
      }}>
        {["כרטיס 1", "כרטיס 2", "כרטיס 3", "כרטיס 4"].map((text, index) => (
          <div key={index} style={{
            width: "150px",
            height: "100px",
            border: "2px solid rgba(255, 255, 255, 0.8)", // גבול שקוף למחצה
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)", // אפקט זכוכית מט
            backgroundColor: "rgba(255, 255, 255, 0.1)", // רקע שקוף למחצה
            fontSize: "1.2rem",
            fontWeight: "bold"
          }}>
            {text}
          </div>
        ))}
      </section>
  )
}

export default borderr