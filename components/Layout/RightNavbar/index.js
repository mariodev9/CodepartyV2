import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function RightNavbar() {
  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", desktop: "flex" }}
        w="27%"
      >
        <Box
          borderLeft="1px"
          borderColor="gray.100"
          position="fixed"
          w="100%"
          h="100vh"
        >
          asd
        </Box>
      </Flex>
    </>
  );
}
