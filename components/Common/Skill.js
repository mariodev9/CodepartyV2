import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Skill = ({ text, color, handleClick }) => {
  const [isVisible, setVisible] = useState(true);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, type: "spring" }}
      style={{ padding: "2px" }}
    >
      <Box
        cursor={"pointer"}
        layerStyle={"primaryBox"}
        bg={color}
        p="5px 15px"
        borderRadius={"10px"}
        onClick={() => handleClick(text, color)}
      >
        <Text color="white" fontSize="15px">
          {text}
        </Text>
      </Box>
    </motion.div>
  );
};
