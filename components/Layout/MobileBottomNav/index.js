import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Home from "../../Icons/Home";
import Save from "../../Icons/Save";
import User from "../../Icons/User";

export default function MobileBottomNavbar() {
  return (
    <>
      <Flex layerStyle="mobilenav">
        <Home />
        <Button bg="brand.100" borderRadius={999} h={10} w={10}>
          <Text fontWeight="800" fontSize="20px" textAlign="center">
            +
          </Text>
        </Button>
        <User />
      </Flex>
    </>
  );
}
