import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Back } from "../../Icons";
import { Router, useRouter } from "next/router";

export default function ChatHeader({ name, avatar }) {
  const router = useRouter();

  return (
    <Flex
      h={"10%"}
      gap={5}
      align={"center"}
      bg="black.100"
      backdropFilter="blur(20px)"
      px={"15px"}
    >
      {/* TODO: Cambiar icono y solo mostrar en mobile */}
      <Box onClick={() => router.back()}>
        <Back />
      </Box>
      <Avatar size={"sm"} src={avatar} />
      <Text>{name}</Text>
    </Flex>
  );
}
