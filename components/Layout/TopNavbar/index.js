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
  Divider,
  HStack,
  VStack,
  DrawerFooter,
  DrawerCloseButton,
  Grid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { logOut } from "../../../firebase/services/User";
import { Chat, CommonSave, Logo, Options, SearchIcon, User } from "../../Icons";
import { useUserContext } from "../../../context/userContext";

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { user } = useUserContext();

  const handlePush = (url) => {
    router.push(`${url}`);
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        display={{ base: "grid", tablet: "none" }}
        p={" 10px 20px"}
      >
        <Flex w="100%">
          <Avatar
            size="sm"
            src={user?.avatar}
            onClick={onOpen}
            cursor="pointer"
          />
        </Flex>
        <Flex justify={"center"} w="100%">
          <Logo />
        </Flex>
        <Flex></Flex>
      </Grid>

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
                onClick={() => handlePush("/messages/home")}
              >
                <Chat width="30px" height="30px" />
                <Text fontSize={"24px"}>Mensajes</Text>
              </HStack>
              <HStack
                align={"center"}
                spacing={"10px"}
                layerStyle="tabletButton"
                onClick={() => handlePush("/search")}
              >
                <SearchIcon strokeWidth="1" width="30px" height="30px" />
                <Text fontSize={"24px"}>Explorar</Text>
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
              <Button
                onClick={handleLogOut}
                bg="none"
                _hover={{ bg: "red.400" }}
                fontSize="20px"
                fontWeight={"semibold"}
              >
                Cerrar sesion
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
