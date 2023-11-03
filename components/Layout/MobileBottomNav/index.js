import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Add, Home, User, SearchIcon, Message } from "../../Icons";
import { useRouter } from "next/router";

export default function MobileBottomNavbar() {
  const router = useRouter();

  const linkList = [
    {
      url: "/Home",
      icon: <Home fill={router.pathname === "/Home" ? "#fff" : ""} />,
    },
    {
      url: "/search",
      icon: (
        <SearchIcon
          width="21"
          height="21"
          fill={router.pathname === "/search" ? "#fff" : "red"}
        />
      ),
    },
  ];

  return (
    <>
      <Box>
        <Flex
          layerStyle="mobilenav"
          display={{ base: "flex", tablet: "none" }}
          zIndex={99}
        >
          <Link href="/Home">
            <Box cursor="pointer">
              <Home fill={router.pathname === "/Home" ? "#fff" : "#16181c"} />
            </Box>
          </Link>
          <Link href="/search">
            <Box cursor="pointer">
              <SearchIcon
                width="21"
                height="21"
                fill={router.pathname === "/search" ? "#fff" : "#16181c"}
              />
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
              <User
                fill={router.pathname === "/Profile" ? "#fff" : "#16181c"}
              />
            </Box>
          </Link>
          <Link href="/messages/home">
            <Box cursor="pointer">
              <Message
                fill={router.pathname === "/messages/[id]" ? "#fff" : "#16181c"}
              />
            </Box>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
