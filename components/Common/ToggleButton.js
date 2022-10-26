import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Text, Flex } from "@chakra-ui/react";

export default function ToggleButton({ timelineMode, setTimelineMode }) {
  const MotionBox = motion(Box);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Flex p="30px 0px" justify="center" align="center" cursor={"pointer"}>
        <Flex
          layerStyle={"primaryBox"}
          w="300px"
          h="70px"
          p="12px 32px"
          align={"center"}
          onClick={() => setTimelineMode(!timelineMode)}
        >
          <Box w="50%" zIndex={3}>
            <Text textAlign={"center"}>Publicaciones</Text>
          </Box>
          <Box w="50%" zIndex={3}>
            <Text textAlign={"center"}>Historias</Text>
          </Box>
          <MotionBox
            w="122px"
            h="40px"
            bg={"brand.100"}
            position="absolute"
            borderRadius="10px"
            initial={{ x: timelineMode ? 120 : 0 }}
            animate={{ x: timelineMode ? [0, 120] : [120, 0] }}
            exit={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Flex>
      </Flex>
    </motion.div>
  );
}
