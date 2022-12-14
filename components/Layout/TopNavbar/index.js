import {
  Drawer,
  DrawerOverlay,
  Button,
  DrawerBody,
  DrawerContent,
  useDisclosure,
  Text,
  Flex,
  Avatar,
  Box,
  Switch,
  Divider,
  HStack,
  VStack,
  DrawerFooter,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { logOut } from "../../../firebase/services/User";
import useUser from "../../../hooks/useUser";
import { Chat, CommonSave, Cross, Logo, Options, User } from "../../Icons";

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useUser();
  const router = useRouter();

  const handlePush = (url) => {
    router.push(`${url}`);
  };

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
          <DrawerCloseButton />

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
                onClick={() => handlePush("/Profile")}
              >
                <User fill={"none"} height="30px" />
                <Text fontSize={"24px"}>Perfil</Text>
              </HStack>
              <HStack
                align={"center"}
                spacing={"10px"}
                layerStyle="tabletButton"
                onClick={() => handlePush("/Saves")}
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
                onClick={() => handlePush("/Mensajes")}
              >
                <Chat width="30px" height="30px" />
                <Text fontSize={"24px"}>Mensajes</Text>
              </HStack>
              <HStack
                align={"center"}
                spacing={"10px"}
                layerStyle="tabletButton"
              >
                <Options width="30px" height="30px" />
                <Text fontSize={"24px"}>Configuraci??n</Text>
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
