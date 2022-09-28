import { Box, Flex, Container, Text } from "@chakra-ui/react";
import React from "react";
import LeftNavbar from "./LeftNavbar";
import MobileBottomNavbar from "./MobileBottomNav";
import RightNavbar from "./RightNavbar";

export default function Layout({ children }) {
  return (
    <>
      <Flex w="100%">
        <LeftNavbar />
        <Box
          w={{ base: "100%", tablet: "65%", desktop: "50%" }}
          h={{ desktop: "100vh" }}
        >
          {children}
          <MobileBottomNavbar />
        </Box>
        <RightNavbar />
      </Flex>
    </>
  );
}
