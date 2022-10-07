import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Avatar,
  FormLabel,
  FormControl,
  Textarea,
  Input,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import {
  Logo,
  Home,
  User,
  Save,
  Settings,
  Options,
  Photo,
  Back,
} from "../../Icons";
import Link from "next/link";
import CreateForm from "../../Create/CreateForm";
import { useRouter } from "next/router";
import useUser from "../../../hooks/useUser";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

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
  const router = useRouter();

  const user = useUser();

  const handleRoute = () => {
    router.push("/Create");
  };

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);

    addCode({
      avatar: user.avatar,
      content: message,
      userId: user.userId,
      userName: user.name,
      img: img,
    });

    router.push("/Home");
  };

  const isButtonDisabled =
    !message.length && (status || COMPOSE_STATES.LOADING);

  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", tablet: "flex" }}
        w="23%"
      >
        <Box position="fixed" w="23%" pt="30px" pl="50px">
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
              onClick={handleRoute}
            >
              Share
            </Button>
          </Flex>
          <Flex
            layerStyle="primaryBox"
            h="150px"
            mt="50px"
            justify="center"
            align="center"
            direction="column"
          >
            <Flex layerStyle="tabletButton">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Settings />
              </Box>
              <Text ml="10px" fontSize="20px" fontWeight={400}>
                Settings
              </Text>
            </Flex>
            <Menu>
              <MenuButton as={Flex} layerStyle="tabletButton" w="60%">
                <Flex align="center" justify="space-between">
                  <Avatar mr="10px" src={user?.avatar} size="xs" />
                  <Options />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Cerrar sesion</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
