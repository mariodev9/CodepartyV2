import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [{ name: "Publicaciones" }, { name: "Historias" }];

const duration = 0.3;

export function Toggle({ setPublicationMode, publicationMode }) {
  const [selected, setSelected] = useState(0);

  return (
    <div style={containerStyle}>
      {tabs.map(({ name }, i) => (
        <motion.div
          style={tabStyle}
          key={i}
          initial={{
            color: i === selected ? "#fff" : "#444",
          }}
          animate={{
            color: i === selected ? "#fff" : "#444",
          }}
          transition={{ duration }}
          onTap={() => {
            setSelected(i);
            {
              i != selected && setPublicationMode(!publicationMode);
            }
          }}
        >
          <span style={{ position: "relative", zIndex: 1 }}>{name}</span>
          {i === selected && (
            <motion.div
              style={selectionStyle}
              layoutId="selected"
              initial={{ backgroundColor: "#159BFF" }}
              animate={{ backgroundColor: "#159BFF" }}
              transition={{ duration }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

const containerStyle = {
  position: "relative",
  borderRadius: 15,
  backgroundColor: "#2B2D2E",
  padding: "10px 20px",
  display: "flex",
  alignContent: "flex-start",
  alignItems: "start",
  justifyContent: "center",
  width: "300px",
  borderColor: "gray.500",
  boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
};

const tabStyle = {
  height: 30,
  position: "relative",
  padding: "5px 15px",
  margin: 0,
  fontFamily: "sans-serif",
  fontSize: 20,
  fontWeight: 700,
  color: "#222",
  cursor: "pointer",
};

const selectionStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: 10,
  top: 3,
  left: 0,
};
