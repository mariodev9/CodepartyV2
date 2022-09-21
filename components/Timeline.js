import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Code from "./Code";

export default function Timeline() {
  return (
    <>
      <Box p="20px">
        <Text m="20px 0 15px 0">Last Codes</Text>
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <Code key={key} />
        ))}
      </Box>
    </>
  );
}
