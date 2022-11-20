import { Avatar, Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const FollowProfile = () => {
  return (
    <HStack spacing={"3"} align={"center"}>
      <Avatar src="" />
      <Box>
        <Text>Luciano Mariotti</Text>
        <Text fontSize={"14px"} fontWeight={400} color="gray.50">
          @reactlove
        </Text>
      </Box>
      <Button variant={"primary"} h="30px">
        Seguir
      </Button>
    </HStack>
  );
};
