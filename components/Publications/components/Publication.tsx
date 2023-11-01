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
import useTimeAgo from "../../../hooks/useTimeago";
import SavePublicationButton from "../../Interactions/SavePublicationButton";
import LikePublicationButton from "../../Interactions/LikePublicationButton";
import CommentButton from "../../Interactions/CommentButton";
import CommentForm from "../../Comments/CommentForm";
import { listenLatestComments } from "../../../firebase/services/Comments";
import { Trash } from "../../Icons";
import { deleteCode } from "../../../firebase/services/Publications";
import { motion } from "framer-motion";
import { Publication } from "../models";

const Publication:React.FC<Publication> = ({
  id,
  avatar,
  userName,
  img,
  content,
  createdAt,
  creatorId,
  userId,
  saves,
}) => {
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Accordion allowToggle borderColor={{ base: "black.100" }}>
          <AccordionItem>
            <Box
              layerStyle="primaryBox"
              padding="15px"
              margin="15px 0px"
              cursor="pointer"
              userSelect="none"
            >
              <Flex width="100%">
                <LinkBox>
                  <Link
                    href={
                      creatorId == userId ? `/Profile` : `/Profile/${creatorId}`
                    }
                  >
                    <LinkOverlay>
                      <Avatar size="sm" src={avatar} mr={3} />
                    </LinkOverlay>
                  </Link>
                </LinkBox>
                <LinkBox w="100%">
                  <Box>
                    <Flex align={"center"}>
                      <Text fontWeight={"semibold"} fontSize={"14px"}>
                        {userName}
                      </Text>
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
                        query: { userOnSession: userId },
                      }}
                    >
                      <LinkOverlay>
                        <Box p="15px 0px" width={"100%"}>
                          <Text pb="10px" fontWeight={"normal"} fontSize="14px">
                            {content}
                          </Text>
                        </Box>
                      </LinkOverlay>
                    </Link>
                    <Box width="100%" w="100%">
                      {img && (
                        <Image src={img} width="100%" borderRadius="14px" />
                      )}
                    </Box>
                  </Box>
                </LinkBox>
              </Flex>
              <Flex justify={"space-around"} align="center">
                <AccordionButton w={"35px"} _hover={{ bg: "none" }}>
                  <CommentButton commentsCount={comments?.length} />
                </AccordionButton>

                <LikePublicationButton
                  userOnSession={userId}
                  publicationId={id}
                  withoutNumber={false}
                />
                <SavePublicationButton
                  userOnSession={userId}
                  publicationId={id}
                  saves={saves}
                />
                {creatorId == userId && (
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

        {/* eliminar pub */}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
        >
          <AlertDialogOverlay>
            <AlertDialogContent bg={"black.100"}>
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
      </motion.div>
    </>
  );
}
export default Publication
