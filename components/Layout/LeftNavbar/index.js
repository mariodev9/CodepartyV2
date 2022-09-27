import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { Logo, Home, User, Save } from "../../Icons";
import { useRouter } from "next/router";
import Link from "next/link";
import CreateForm from "../../Create/CreateForm";

const NavLink = [
  {
    name: "Home",
    link: "/Home",
    icon: <Home fill={"none"} />,
  },
  {
    name: "Save",
    link: "/Saves",

    icon: <Save />,
  },
  {
    name: "Profile",
    link: "/Profile",
    icon: <User fill={"none"} />,
  },
];

function BoxLink({ item }) {
  return (
    <Link href={`${item.link}`}>
      <Flex
        key={item.name}
        pt="5px"
        align="center"
        p="10px 16px"
        borderRadius="14px"
        cursor="pointer"
        _hover={{
          bg: "gray.100",
          boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
        }}
        mb="10px"
        w="auto"
      >
        <Box>{item.icon}</Box>
        <Text ml="10px" fontSize="20px" fontWeight={400}>
          {item.name}
        </Text>
      </Flex>
    </Link>
  );
}

export default function LeftNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", desktop: "flex" }}
        w="23%"
        pt="30px"
        pl="50px"
      >
        <Box position="fixed" width="15%">
          <Box mb="20px" p="0px 10px">
            <Logo />
          </Box>
          <Box mt="80px">
            {NavLink.map((item) => (
              <BoxLink key={item.name} item={item} />
            ))}
          </Box>
          <Flex justify="center">
            <Button
              variant="primary"
              borderRadius="20px"
              w="100%"
              mt="30px"
              onClick={onOpen}
            >
              Share
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black.50" pt="30px">
          <ModalCloseButton />
          <ModalBody>
            <CreateForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
