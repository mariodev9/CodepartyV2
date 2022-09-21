import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import getTimeAgo from "../hooks/useTimeago";
import useUser from "../hooks/useUser";
import { Like, Comment, Save } from "./Icons";

export default function Code({
  id,
  avatar,
  userName,
  img,
  content,
  createdAt,
  userId,
}) {
  const user = useUser();
  const timeago = getTimeAgo(createdAt);

  return (
    <>
      <Box layerStyle="code">
        <Flex p={1}>
          <Avatar size="sm" alt={userName} src={avatar} mr={3} />
          <Box>
            <Text fontSize="15px">{user?.name}</Text>
            <Text fontWeight="400" fontSize="12px" color="gray">
              {timeago}
            </Text>
          </Box>
        </Flex>
        <Flex direction="column">{content}</Flex>

        <Box width="100%" mt={5} w="100%" borderRadius="10px">
          {img && <Image src={img} width="100%" borderRadius="10px" />}
        </Box>
        <Flex mt={4}>
          <Like />
          <Comment />
          <Save />
        </Flex>
      </Box>
    </>
  );
}
