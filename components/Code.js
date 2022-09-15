import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import useUser from "../hooks/useUser";
import Comment from "./Icons/Comment";
import Like from "./Icons/Like";
import Save from "./Icons/Save";

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
        {/* <Box width="100%" mt={5}>
          <Image
            src={
              "https://pbs.twimg.com/media/FcnmMNNWIAQYEnd?format=jpg&name=small"
            }
            width="300px"
            height="300px"
          />
        </Box> */}
        <Flex mt={4}>
          <Like />
          <Comment />
          <Save />
        </Flex>
      </Box>
    </>
  );
}
