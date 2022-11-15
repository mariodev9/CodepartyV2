import React, { useState, useEffect } from "react";
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
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import useTimeAgo from "../hooks/useTimeago";
import SavePublicationButton from "./Interactions/SavePublicationButton";
import LikePublicationButton from "./Interactions/LikePublicationButton";
import CommentButton from "./Interactions/CommentButton";
import CommentForm from "./Comments/CommentForm";
import { listenLatestComments } from "../firebase/services/Comments";
import { Trash } from "./Icons";
import { deleteCode } from "../firebase/services/Publications";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  useEffect(() => {
    listenLatestComments(setComments, id);
  }, []);

  const handleDeletePublication = () => {
    deleteCode(id);
    onClose();
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
              <LinkBox>
                <Link
                  href={
                    creatorId == userOnSession
                      ? `/Profile`
                      : `/Profile/${creatorId}`
                  }
                >
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
                      <Box p="15px 0px">
                        <Text pb="10px" fontWeight={"normal"} fontSize="16px">
                          {content}
                        </Text>
                      </Box>
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
            <Flex mt={4} justify={"space-around"} align="center">
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
              {creatorId == userOnSession && (
                <Box onClick={onOpen}>
                  <Trash />
                </Box>
              )}
            </Flex>
          </Box>
          <AccordionPanel pb={4}>
            <HStack>
              <CommentForm codeId={id} fontSize="15px" avatarSize="sm" />
            </HStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar publicacion
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estas seguro que quieres eliminar tu publicacion? No puedes
              deshacer esta accion!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeletePublication}
                ml={3}
              >
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
