import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ConversationBox({ avatar, name, isActive }) {
  return (
    <Flex
      borderRight={isActive && "2px solid #159BFF"}
      bg={isActive && "#2B2D2E"}
      p={"10px 20px"}
      gap={5}
    >
      <Avatar src={avatar} />
      <Text>{name}</Text>
    </Flex>
  );
}
