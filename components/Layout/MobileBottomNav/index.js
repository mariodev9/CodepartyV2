import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Home from "../../Icons/Home";
import User from "../../Icons/User";

export default function MobileBottomNavbar() {
  return (
    <>
      <Flex layerStyle="mobilenav">
        <Link href="/">
          <Box cursor="pointer">
            <Home />
          </Box>
        </Link>
        <Button bg="brand.100" borderRadius={999} h={10} w={10}>
          <Text fontWeight="800" fontSize="20px" textAlign="center">
            +
          </Text>
        </Button>
        <Link href="/Profile">
          <Box cursor="pointer">
            <User />
          </Box>
        </Link>
      </Flex>
    </>
  );
}
