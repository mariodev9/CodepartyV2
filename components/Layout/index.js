import { Box, Flex, Container, Text } from "@chakra-ui/react";
import React from "react";
import LeftNavbar from "./LeftNavbar";
import MobileBottomNavbar from "./MobileBottomNav";
import RightNavbar from "./RightNavbar";
import TopNav from "./TopNavbar";

export default function Layout({ children }) {
  return (
    <>
      <Flex direction="column">
        <TopNav />
        <Flex w="100%">
          <LeftNavbar />
          <Box
            w={{ base: "100%", desktop: "50%" }}
            borderLeft="1px"
            borderRight="1px"
            borderColor="gray.100"
          >
            <Text>Inicio</Text>
            {children}
          </Box>
          <RightNavbar />
        </Flex>
      </Flex>
      <MobileBottomNavbar />
    </>
  );
}
