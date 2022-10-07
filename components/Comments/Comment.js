import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useTimeAgo from "../../hooks/useTimeago";

export default function Comment({ content, avatar, userName, createdAt }) {
  const timeago = useTimeAgo(createdAt);

  return (
    <Flex
      m="10px 0px"
      p="16px 8px"
      border="1px"
      borderRadius={"10px"}
      borderColor="gray.100"
    >
      <Box mr="10px">
        <Avatar src={avatar} size={"sm"} />
      </Box>
      <Box>
        <Flex align="center">
          <Text>{userName}</Text>
          <Text fontWeight={"normal"} fontSize="12px" color="gray" ml="10px">
            {timeago}
          </Text>
        </Flex>
        <Text fontWeight={"light"}>{content}</Text>
      </Box>
    </Flex>
  );
}
