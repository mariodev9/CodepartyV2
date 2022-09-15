import {
  Drawer,
  DrawerOverlay,
  Button,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  Text,
  Flex,
  Avatar,
  Icon,
  Box,
} from "@chakra-ui/react";
import React from "react";
import useUser from "../../../hooks/useUser";
import Logo from "../../Icons/Logo";

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useUser();

  return (
    <>
      <Flex align="center" justify="space-between">
        <Avatar
          size="sm"
          src={user?.avatar}
          onClick={onOpen}
          cursor="pointer"
        />
        <Logo />
        <Box>theme</Box>
      </Flex>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="black.50">
          <DrawerBody>
            <Box pt="25px">
              <Avatar
                size="md"
                src={user?.avatar}
                onClick={onOpen}
                cursor="pointer"
                border="2px solid #4DB0FA"
              />
              <Text>{user?.name}</Text>
            </Box>
            <Text>Hola</Text>
            <Text>Hola2</Text>
            <Text>Hola3</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
