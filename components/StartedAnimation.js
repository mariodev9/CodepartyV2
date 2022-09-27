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
import React from "react";
import { Logo } from "./Icons";

export default function StartedAnimation() {
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
        border="1px"
      >
        <VStack spacing="14px">
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
        </VStack>
        <VStack spacing="14px" pt="70px">
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
        </VStack>
        <VStack spacing="14px">
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox">
            <Logo />
          </Box>
          <Box layerStyle="loginBox"></Box>
        </VStack>
        <VStack spacing="14px" pt="40px">
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
        </VStack>
      </Stack>
    </>
  );
}
