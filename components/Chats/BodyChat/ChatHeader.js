import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Back } from "../../Icons";

export default function ChatHeader({ name, avatar }) {
  return (
    <Flex
      h={"10%"}
      gap={5}
      align={"center"}
      bg="black.100"
      backdropFilter="blur(20px)"
    >
      {/* TODO: Cambiar icono y solo mostrar en mobile */}
      {/* <Back /> */}
      <Avatar src={avatar} />
      <Text>{name}</Text>
    </Flex>
  );
}
