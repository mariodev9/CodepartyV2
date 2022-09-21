import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Add, Home, User } from "../../Icons";

export default function MobileBottomNavbar() {
  return (
    <>
      <Flex layerStyle="mobilenav" display={{ base: "flex", tablet: "none" }}>
        <Link href="/Home">
          <Box cursor="pointer">
            <Home fill={"#fff"} />
          </Box>
        </Link>
        <Link href="/Create">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="brand.100"
            borderRadius={999}
            h={10}
            w={10}
            cursor="pointer"
          >
            <Add />
          </Box>
        </Link>
        <Link href="/Profile">
          <Box cursor="pointer">
            <User fill={"#fff"} />
          </Box>
        </Link>
      </Flex>
    </>
  );
}
