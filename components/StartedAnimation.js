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
      {/* <Grid templateColumns="repeat(3, 1fr)" gap={5} p={5} mt="30px">
        <GridItem layerStyle="loginBox" mt="30px"></GridItem>
        <GridItem layerStyle="loginBox" mt="50px" bg="green"></GridItem>
        <GridItem layerStyle="loginBox"></GridItem>
        <GridItem layerStyle="loginBox"></GridItem>
        <GridItem layerStyle="loginBox">
          <Logo />
        </GridItem>
        <GridItem layerStyle="loginBox">
          <Image src="" />
        </GridItem>
        <GridItem layerStyle="loginBox"></GridItem>
        <GridItem layerStyle="loginBox"></GridItem>
        <GridItem layerStyle="loginBox"></GridItem>
      </Grid> */}
      <Stack
        direction="row"
        spacing="24px"
        border="1px"
        w="50%"
        h="100%"
        justify="center"
        align="center"
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
        <VStack spacing="14px" pb="100px">
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
        <VStack spacing="14px" pb="40px">
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
          <Box layerStyle="loginBox"></Box>
        </VStack>
      </Stack>
    </>
  );
}
