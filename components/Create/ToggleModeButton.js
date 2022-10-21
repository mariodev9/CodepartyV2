import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";

export default function ToggleModeButton({ setPublicationMode }) {
  const [active, setActive] = useState(true);

  function onTapPublicationMode() {
    setActive(true);
    setPublicationMode(false);
  }

  function onTapStoryMode() {
    setActive(false);
    setPublicationMode(true);
  }

  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);

  return (
    <Flex justify={"center"} m="20px 0px">
      <MotionFlex w="300px">
        <MotionBox
          borderTopLeftRadius={"10px"}
          borderBottomLeftRadius={"10px"}
          cursor={"pointer"}
          w="50%"
          p="6px 12px"
          onTap={onTapPublicationMode}
          animate={{
            scale: active ? 1.1 : 0.9,
            backgroundColor: active ? "#159BFF" : "#333",
          }}
          transition={{ duration: 0.8, type: "spring" }}
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
          animate={{
            scale: active ? 0.9 : 1.1,
            backgroundColor: active ? "#333" : "#159BFF",
          }}
          onTap={onTapStoryMode}
        >
          <Text textAlign="center" color={!active ? "white" : "#adadad"}>
            Historia
          </Text>
        </MotionBox>
      </MotionFlex>
    </Flex>
  );
}
