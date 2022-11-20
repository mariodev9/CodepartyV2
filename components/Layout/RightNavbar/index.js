import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FollowProfile } from "../Common/FollowProfile";

export default function RightNavbar() {
  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", desktop: "flex" }}
        w="27%"
      >
        <Box position="fixed" w="27%" h="100vh" p="25px">
          <VStack align="start" spacing={"10px"}>
            <Text fontSize={"20px"}>Personas a seguir</Text>
            <FollowProfile />
            <FollowProfile />
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
