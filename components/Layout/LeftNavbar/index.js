import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Avatar,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import {
  Logo,
  Home,
  User,
  Settings,
  Options,
  CommonSave,
  Chat,
} from "../../Icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { logOut } from "../../../firebase/services/User";
import useProfile from "../../../hooks/useProfile";

const NavLink = [
  {
    name: "Inicio",
    link: "/Home",
    icon: <Home fill={"none"} height={"26px"} />,
  },
  {
    name: "Guardados",
    link: "/Saves",

    icon: <CommonSave height={26} strokeWidth={2} />,
  },
  {
    name: "Perfil",
    link: "/Profile",
    icon: <User fill={"none"} height={26} strokeWidth={2} />,
  },
  {
    name: "Mensajes",
    link: "/Mensajes",
    icon: <Chat fill={"none"} height={26} strokeWidth={2} />,
  },
];

function BoxLink({ item }) {
  return (
    <Link href={`${item.link}`}>
      <Flex
        key={item.name}
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
        <Text
          ml="10px"
          fontSize={{ base: "16px", desktop: "26px" }}
          fontWeight={400}
        >
          {item.name}
        </Text>
      </Flex>
    </Link>
  );
}

export default function LeftNavbar() {
  const router = useRouter();

  const profile = useProfile();

  const handleRoute = () => {
    router.push("/Create/Publication");
  };

  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", tablet: "flex" }}
        w="23%"
      >
        <Box position="fixed" w="23%" p="20px" zIndex={2} h="100vh">
          <Box mb="20px" p="0px 10px">
            <Logo />
          </Box>
          <Box mt="60px">
            {NavLink.map((item) => (
              <BoxLink key={item.name} item={item} />
            ))}
          </Box>
          <Flex justify="center">
            <Button
              variant="primary"
              borderRadius="20px"
              w="100%"
              mt="10px"
              onClick={handleRoute}
            >
              Compartí
            </Button>
          </Flex>
          <Flex
            layerStyle="primaryBox"
            h="150px"
            mt="20px"
            justify="center"
            align="center"
            direction="column"
          >
            <Flex layerStyle="tabletButton" w="80%" justify={"center"}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Settings />
              </Box>
              <Text
                ml="10px"
                fontSize="20px"
                fontWeight={400}
                textOverflow={"ellipsis"}
                whiteSpace="nowrap"
                overflow={"hidden"}
              >
                Configuracion
              </Text>
            </Flex>
            <Menu>
              <MenuButton as={Flex} layerStyle="tabletButton" w="60%">
                <Flex align="center" justify="space-between">
                  <Avatar mr="10px" src={profile?.avatar} size="xs" />
                  <Options />
                </Flex>
              </MenuButton>
              <MenuList bg={"black.50"} borderColor="gray.100" p="10px">
                <MenuItem
                  fontSize={"20px"}
                  borderRadius="10px"
                  onClick={logOut}
                >
                  Cerrar sesion
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
