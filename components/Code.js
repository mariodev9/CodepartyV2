import {
  Avatar,
  Box,
  Flex,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { Like, Comment, Save } from "./Icons";
import Link from "next/link";
import useTimeAgo from "../hooks/useTimeago";
import SavePublicationButton from "./Interactions/SavePublicationButton";
import LikePublicationButton from "./Interactions/LikePublicationButton";
import CommentButton from "./Interactions/CommentButton";

export default function Code({
  id,
  avatar,
  userName,
  img,
  content,
  createdAt,
  creatorId,
  userOnSession,
}) {
  const timeago = useTimeAgo(createdAt);

  const data = {
    id,
    avatar,
    userName,
    img,
    content,
    createdAt,
    creatorId,
    userOnSession,
  };

  return (
    <>
      <Accordion allowToggle borderColor="black.100">
        <AccordionItem>
          <Box
            layerStyle="primaryBox"
            padding="15px"
            margin="25px 0px"
            cursor="pointer"
          >
            <Flex width="100%">
              <Avatar size="sm" alt={userName} src={avatar} mr={3} />
              <LinkBox w="100%">
                <Box>
                  <Flex align={"center"}>
                    <Link fontSize="15px" href="/Profile">
                      <Text fontWeight={"semibold"}>{userName}</Text>
                    </Link>
                    <Text
                      fontWeight={"normal"}
                      fontSize="12px"
                      color="gray"
                      ml="10px"
                    >
                      {timeago}
                    </Text>
                  </Flex>
                  <Link
                    href={{
                      pathname: `/Code/${id}`,
                      query: data,
                    }}
                  >
                    <LinkOverlay>
                      <Flex direction="column">{content}</Flex>
                    </LinkOverlay>
                  </Link>
                  <Box width="100%" mt={5} w="100%" borderRadius="10px">
                    {img && (
                      <Image src={img} width="100%" borderRadius="10px" />
                    )}
                  </Box>
                </Box>
              </LinkBox>
            </Flex>
            <Flex mt={4} justify={"space-around"}>
              <AccordionButton w={"35px"} _hover={{ bg: "none" }}>
                <CommentButton />
              </AccordionButton>

              <LikePublicationButton
                userOnSession={userOnSession}
                codeId={id}
              />
              <SavePublicationButton
                userOnSession={userOnSession}
                codeId={id}
              />
            </Flex>
          </Box>
          <AccordionPanel pb={4}>Comentar Pub</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
