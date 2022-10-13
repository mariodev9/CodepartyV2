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
  Switch,
  Divider,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { logOut } from "../../../firebase/Client";
import useUser from "../../../hooks/useUser";
import { Logo, User } from "../../Icons";

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useUser();
  const router = useRouter();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        display={{ base: "flex", tablet: "none" }}
        p="10px 20px"
      >
        <Avatar
          size="sm"
          src={user?.avatar}
          onClick={onOpen}
          cursor="pointer"
        />
        <Logo />
        <Switch colorScheme="blue" />
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
              />
              <Text mt="3px">{user?.name}</Text>
            </Box>
            <Divider m="20px 0px 30px 0px" />
            <VStack align={"start"} spacing="20px">
              <HStack align={"center"} spacing={"10px"}>
                <User fill={"none"} height="30px" />
                <Text fontSize={"24px"}>Perfil</Text>
              </HStack>
              <HStack align={"center"} spacing={"10px"}>
                <User fill={"none"} height="30px" />
                <Text
                  fontSize={"24px"}
                  textOverflow={"ellipsis"}
                  whiteSpace="nowrap"
                  overflow={"hidden"}
                >
                  Elementos guardados
                </Text>
              </HStack>{" "}
              <HStack align={"center"} spacing={"10px"}>
                <User fill={"none"} height="30px" />
                <Text fontSize={"24px"}>Perfil</Text>
              </HStack>
            </VStack>

            <Button onClick={handleLogOut}>Log Out</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
