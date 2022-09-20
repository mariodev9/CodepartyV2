import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import useUser from "../hooks/useUser";
import Comment from "./Icons/Comment";
import Like from "./Icons/Like";
import Save from "./Icons/Save";

const img =
  "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

export default function Code() {
  const user = useUser();
  return (
    <>
      <Box layerStyle="code">
        <Flex p={1}>
          <Avatar size="sm" src={user?.avatar} mr={3} />
          <Box>
            <Text fontSize="15px">{user?.name}</Text>
            <Text fontWeight="400" fontSize="12px" color="gray">
              15min ago
            </Text>
          </Box>
        </Flex>
        <Flex direction="column">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minus
          molestias illum pariatur ab dolorum beatae. Tempora quisquam aliquid,
          distinctio eius hic unde.
        </Flex>

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
