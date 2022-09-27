import { Flex } from "@chakra-ui/react";
import React from "react";

export default function RightNavbar() {
  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", desktop: "flex" }}
        w="27%"
        bg="black"
      ></Flex>
    </>
  );
}
