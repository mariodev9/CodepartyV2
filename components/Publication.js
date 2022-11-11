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
  HStack,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import useTimeAgo from "../hooks/useTimeago";
import SavePublicationButton from "./Interactions/SavePublicationButton";
import LikePublicationButton from "./Interactions/LikePublicationButton";
import CommentButton from "./Interactions/CommentButton";
import CommentForm from "./Comments/CommentForm";
import { useState } from "react";
import { listenLatestComments } from "../firebase/services/Comments";
import { useEffect } from "react";

export default function Publication({
  id,
  avatar,
  userName,
  img,
  content,
  createdAt,
  creatorId,
  userOnSession,
  saves,
}) {
  const timeago = useTimeAgo(createdAt);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    listenLatestComments(setComments, id);
  }, []);

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
              <LinkBox>
                <Link href={`/Profile`}>
                  <LinkOverlay>
                    <Avatar size="sm" alt={userName} src={avatar} mr={3} />
                  </LinkOverlay>
                </Link>
              </LinkBox>
              <LinkBox w="100%">
                <Box>
                  <Flex align={"center"}>
                    <Text fontWeight={"semibold"}>{userName}</Text>
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
                      query: { userOnSession: userOnSession },
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
                <CommentButton commentsCount={comments?.length} />
              </AccordionButton>

              <LikePublicationButton
                userOnSession={userOnSession}
                publicationId={id}
              />
              <SavePublicationButton
                userOnSession={userOnSession}
                publicationId={id}
                saves={saves}
              />
            </Flex>
          </Box>
          <AccordionPanel pb={4}>
            <HStack>
              <CommentForm codeId={id} fontSize="15px" avatarSize="sm" />
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
