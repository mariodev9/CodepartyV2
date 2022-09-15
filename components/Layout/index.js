import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import MobileBottomNavbar from "./MobileBottomNav";
import TopNav from "./TopNavbar";

export default function Layout({ children }) {
  return (
    <>
      <Container variant="main" h="100%">
        <TopNav />
        {children}
      </Container>
      <MobileBottomNavbar />
    </>
  );
}
