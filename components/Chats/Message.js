import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function Message({ content, isMyMessage }) {
  return (
    <Flex my={"5px"} justify={isMyMessage ? "end" : "start"}>
      <Box
        p={"16px 16px"}
        borderRadius={isMyMessage ? "25px 25px 0px 25px" : "25px 25px 25px 0px"}
        bg={isMyMessage ? "brand.100" : "black.50"}
        maxW={"70%"}
      >
        {content}
      </Box>
      {/* {messages[index--].creatorId === profile.id &&
      "El anterior mensaje es tuyo!"} */}
    </Flex>
  );
}
