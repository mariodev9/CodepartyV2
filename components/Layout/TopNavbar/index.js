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
import { useRouter } from "next/router";
import { logOut } from "../../../firebase/Client";
import useUser from "../../../hooks/useUser";
import { Logo } from "../../Icons";

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useUser();
  const router = useRouter();

  const handleLogOut = () => {
    logOut();
    router.push("/");
  };

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        display={{ base: "flex", desktop: "none" }}
        p="10px 20px"
      >
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
            <Button onClick={handleLogOut}>Log Out</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
