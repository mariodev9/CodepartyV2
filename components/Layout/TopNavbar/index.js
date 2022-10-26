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
  DrawerFooter,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { logOut } from "../../../firebase/services/User";
import useUser from "../../../hooks/useUser";
import { CommonSave, Cross, Logo, Message, Options, User } from "../../Icons";

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
              <HStack
                align={"center"}
                spacing={"10px"}
                layerStyle="tabletButton"
              >
                <User fill={"none"} height="30px" />
                <Text fontSize={"24px"}>Perfil</Text>
              </HStack>
              <HStack
                align={"center"}
                spacing={"10px"}
                layerStyle="tabletButton"
              >
                <CommonSave width="30px" height="30px" />
                <Text
                  fontSize={"24px"}
                  textOverflow={"ellipsis"}
                  whiteSpace="nowrap"
                  overflow={"hidden"}
                >
                  Guardados
                </Text>
              </HStack>
              <HStack
                align={"center"}
                spacing={"10px"}
                layerStyle="tabletButton"
              >
                <Message width="30px" height="30px" />
                <Text fontSize={"24px"}>Mensajes</Text>
              </HStack>
              <HStack
                align={"center"}
                spacing={"10px"}
                layerStyle="tabletButton"
              >
                <Options width="30px" height="30px" />
                <Text fontSize={"24px"}>Configuración</Text>
              </HStack>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Flex w="100%">
              {/* <Cross></Cross> */}
              <Button
                onClick={handleLogOut}
                bg="none"
                _hover={{ bg: "red.400" }}
                fontSize="20px"
                fontWeight={"semibold"}
              >
                Log Out
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
