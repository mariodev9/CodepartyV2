import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Add, Home, User, SearchIcon, Message } from "../../Icons";

export default function MobileBottomNavbar() {
  return (
    <>
      <Flex
        layerStyle="mobilenav"
        display={{ base: "flex", tablet: "none" }}
        zIndex={99}
      >
        <Link href="/Home">
          <Box cursor="pointer">
            <Home fill={"#fff"} />
          </Box>
        </Link>
        <Link href="/search">
          <Box cursor="pointer">
            <SearchIcon width="21" height="21" fill={"#fff"} />
          </Box>
        </Link>
        <Link href="/Create/Publication">
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
        <Link href="/messages/home">
          <Box cursor="pointer">
            <Message fill={"#fff"} />
          </Box>
        </Link>
      </Flex>
    </>
  );
}
