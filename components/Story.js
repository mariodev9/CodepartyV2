import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Flex,
  useDisclosure,
  Button,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function Story({ avatar, stories }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Avatar
        src={avatar}
        onClick={onOpen}
        size="lg"
        border="1px solid #333"
        cursor="pointer"
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", desktop: "xl" }}
      >
        <ModalOverlay />
        <ModalContent bg="rgba(255,255,255,0.1)" backdropFilter="blur(10px)">
          <ModalCloseButton />
          <ModalBody display={"flex"} alignContent={"center"}>
            <Flex align={"center"}>
              {stories.map((item, key) => (
                <Image key={key} h="350px" src={item.img} borderRadius="10px" />
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
