import { Flex, Like, Text } from "@chakra-ui/react";
import React from "react";
import { Comment } from "../Icons";

export default function CommentButton({ commentsCount }) {
  return (
    <Flex cursor="pointer" align={"center"}>
      <Comment />
      <Flex w="20px" align="center" justify="center" ml="3px">
        <Text fontWeight={"light"}>{commentsCount}</Text>
      </Flex>
    </Flex>
  );
}
