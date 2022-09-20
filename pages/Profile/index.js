import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Code from "../../components/Code";
import MobileBottomNavbar from "../../components/Layout/MobileBottomNav";
import python from "../../public/Python.png";

export default function Profile() {
  const img =
    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
  return (
    <>
      <Box bgImage={`url('${img}')`}>
        <Flex
          direction="column"
          bgGradient="linear(to-b, #7928ca00 0%, #222124 65%)"
          align="center"
        >
          <Avatar size="lg" mt="100px" />
          <Text mt="15px" fontSize="20px">
            Luciano Mariotti
          </Text>
          <Text>Description</Text>
          <Flex mt="20px">
            <Image src={python} />
            <Image src={python} />
            <Image src={python} />
          </Flex>
        </Flex>
      </Box>
      <Flex>
        <Box>post - followers - following</Box>
      </Flex>
      {[1, 2, 3, 4, 5, 6].map((key) => (
        <Code key={key} />
      ))}
      <MobileBottomNavbar />
    </>
  );
}
