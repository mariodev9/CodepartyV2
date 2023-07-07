import { Box, Flex, Container, Text } from "@chakra-ui/react";
import React from "react";
import LeftNavbar from "./LeftNavbar";
import MobileBottomNavbar from "./MobileBottomNav";
import RightNavbar from "./RightNavbar";

export default function Layout({
  children,
  hideRightNavbar,
  hideBottomNavbar,
}) {
  return (
    <>
      <Flex w="100%">
        <LeftNavbar />
        <Box
          w={{
            base: "100%",
            tablet: "65%",
            desktop: hideRightNavbar ? "80%" : "50%",
          }}
          bg={{ base: "black.100" }}
        >
          {children}
          {hideBottomNavbar ? null : <MobileBottomNavbar />}
        </Box>
        {!hideRightNavbar && <RightNavbar />}
      </Flex>
    </>
  );
}
