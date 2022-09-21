import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Logo, Home, User, Save } from "../../Icons";
import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = [
  {
    name: "Home",
    link: "/Home",
    icon: <Home fill={"none"} />,
  },
  {
    name: "Save",
    link: "/Saves",

    icon: <Save />,
  },
  {
    name: "Profile",
    link: "/Profile",
    icon: <User fill={"none"} />,
  },
];

function BoxLink({ item }) {
  return (
    <Link href={`${item.link}`}>
      <Flex
        key={item.name}
        pt="5px"
        align="center"
        p="10px 16px"
        borderRadius="14px"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
          boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
        }}
        mb="10px"
        w="auto"
      >
        <Box>{item.icon}</Box>
        <Text ml="10px" fontSize="20px" fontWeight={400}>
          {item.name}
        </Text>
      </Flex>
    </Link>
  );
}

export default function LeftNavbar() {
  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", desktop: "flex" }}
        w="23%"
        pt="30px"
        pl="50px"
      >
        <Box position="fixed" border="1px" width="15%">
          <Box mb="20px" p="0px 10px">
            <Logo />
          </Box>
          {NavLink.map((item) => (
            <BoxLink key={item.name} item={item} />
          ))}
          <Link textDecoration="none" href="/Create">
            <Flex justify="center">
              <Button variant="primary" borderRadius="20px" w="100%" mt="30px">
                Share
              </Button>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </>
  );
}
