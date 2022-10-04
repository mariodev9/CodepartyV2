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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {stories.map((item, key) => (
              <Image key={key} w="350px" src={item.img} />
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
