import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";

export default function ToggleModeButton({ setPublicationMode }) {
  const [active, setActive] = useState(true);

  const toggleVariants = {
    active: {
      backgroundColor: "#159BFF",
    },
    inactive: {
      backgroundColor: "#333",
      transition: { duration: 1 },
    },
  };

  function onTapPublicationMode(event, info) {
    setActive(true);
    setPublicationMode(false);
  }

  function onTapStoryMode(event, info) {
    setActive(false);
    setPublicationMode(true);
  }

  const MotionBox = motion(Box);
  return (
    <Flex justify={"center"} m="20px 0px">
      <Flex w="300px">
        <AnimatePresence>
          <MotionBox
            borderTopLeftRadius={"10px"}
            borderBottomLeftRadius={"10px"}
            cursor={"pointer"}
            w="50%"
            p="6px 12px"
            variants={toggleVariants}
            onTap={onTapPublicationMode}
            animate={active ? "active" : "inactive"}
            exit={"inactive"}
          >
            <Text textAlign={"center"} color={active ? "white" : "#adadad"}>
              Publicacion
            </Text>
          </MotionBox>
          <MotionBox
            borderTopRightRadius={"10px"}
            borderBottomRightRadius={"10px"}
            cursor={"pointer"}
            w="50%"
            p="6px 12px"
            variants={toggleVariants}
            initial={"inactive"}
            animate={active ? "inactive" : "active"}
            onTap={onTapStoryMode}
            exit={"inactive"}
          >
            <Text textAlign="center" color={!active ? "white" : "#adadad"}>
              Historia
            </Text>
          </MotionBox>
        </AnimatePresence>
      </Flex>
    </Flex>
  );
}
