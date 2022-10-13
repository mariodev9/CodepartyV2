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
        blockScrollOnMount={false}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent bg="rgba(255,255,255,0.1)" backdropFilter="blur(10px)">
          <ModalCloseButton />
          <ModalBody display={"flex"} justifyContent="center">
            {stories.map((item, key) => (
              <Image key={key} w="350px" src={item.img} />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
