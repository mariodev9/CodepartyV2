import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

export default function FutureProyect({ name, status, children }) {
  return (
    <Flex align={"center"}>
      {children}
      <Box p="0px 10px">
        <Text>{name}</Text>
        <Text fontSize={"12px"} fontWeight={400} color={"#999"}>
          {status}
        </Text>
      </Box>
    </Flex>
  );
}
