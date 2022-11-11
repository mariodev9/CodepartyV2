import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import useTimeAgo from "../../hooks/useTimeago";

export default function PublicationSaved({
  avatar,
  userName,
  createdAt,
  content,
  saves,
}) {
  const timeago = useTimeAgo(createdAt);

  return (
    <Box p="10px">
      <Flex align={"center"}>
        <Avatar src={avatar} size={"sm"} />
        <Text p="0px 5px">{userName}</Text>
        <Text fontWeight={"normal"} fontSize="12px" color="gray" ml="10px">
          {timeago}
        </Text>
      </Flex>
      {/* <Text mt="10px">{content}</Text> */}
      <Box
        mt="20px"
        height={"65px"}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
      >
        <Text>{content}</Text>
      </Box>
    </Box>
  );
}
