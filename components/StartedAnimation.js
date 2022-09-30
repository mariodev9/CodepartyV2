import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Logo } from "./Icons";

const variants = {
  visible: (i) => ({
    opacity: 1,
    scale: [1, 1.1, 1],
    y: 0,
    transition: {
      type: "ease",
      duration: 1,
      delay: i * 0.25,
    },
  }),
  hidden: { opacity: 0, y: 100, scale: 0 },
};

const logoBox = {
  visible: (i) => ({
    scale: [1, 1.3, 1],
    transition: {
      type: "ease",
      duration: 1,
      delay: 2.6,
    },
  }),
};

const CustomBox = ({ order, children }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      layerStyle="loginBox"
      initial="hidden"
      animate="visible"
      custom={order}
      variants={variants}
    >
      {children}
    </MotionBox>
  );
};

const LogoBox = ({ children }) => {
  const MotionBox = motion(Box);
  return (
    <MotionBox layerStyle="loginBox" animate="visible" variants={logoBox}>
      {children}
    </MotionBox>
  );
};

export default function StartedAnimation() {
  const MotionBox = motion(Box);

  return (
    <>
      <Stack
        bgGradient="radial(#102a5085, #222124 50%)"
        direction="row"
        spacing="24px"
        w={{ base: "100%" }}
        h={{ base: "50%", desktop: "100vh" }}
        justify="center"
        align="center"
      >
        <VStack spacing="14px">
          <CustomBox order={3} />
          <CustomBox order={5} />
          <CustomBox order={2} />
        </VStack>
        <VStack spacing="14px" pt="70px">
          <CustomBox order={3} />
          <CustomBox order={1} />
          <CustomBox order={4} />
        </VStack>
        <VStack spacing="14px">
          <CustomBox order={1} />
          <CustomBox order={4}>
            <LogoBox>
              <Logo />
            </LogoBox>
          </CustomBox>
          <CustomBox order={4} />
        </VStack>
        <VStack spacing="14px" pt="40px">
          <CustomBox order={2} />
          <CustomBox order={5} />
          <CustomBox order={3} />
        </VStack>
      </Stack>
    </>
  );
}
