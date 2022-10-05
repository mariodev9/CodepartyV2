import {
  Avatar,
  Box,
  Flex,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";
import getTimeAgo from "../hooks/useTimeago";
import { Like, Comment, Save } from "./Icons";
import Link from "next/link";
import useTimeAgo from "../hooks/useTimeago";

export default function Code({
  id,
  avatar,
  userName,
  img,
  content,
  createdAt,
  userId,
}) {
  const timeago = useTimeAgo(createdAt);

  return (
    <>
      <Box
        layerStyle="primaryBox"
        width="100%"
        padding="15px"
        margin="25px 0px"
        cursor="pointer"
        _hover={{ bgColor: "#2d2f30", transition: "0.5s" }}
      >
        <LinkBox>
          <Flex p={1}>
            <Avatar size="sm" alt={userName} src={avatar} mr={3} />

            <Box>
              <Link fontSize="15px" href="/Profile">
                {userName}
              </Link>
              <Text fontWeight="400" fontSize="12px" color="gray">
                {timeago}
              </Text>
            </Box>
          </Flex>
          <Link href={`/Code/${id}`}>
            <LinkOverlay>
              <Flex direction="column">{content}</Flex>
            </LinkOverlay>
          </Link>
          <Box width="100%" mt={5} w="100%" borderRadius="10px">
            {img && <Image src={img} width="100%" borderRadius="10px" />}
          </Box>
        </LinkBox>
        <Flex mt={4}>
          <Like />
          <Comment />
          <Save />
        </Flex>
      </Box>
    </>
  );
}
