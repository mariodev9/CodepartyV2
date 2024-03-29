import { Flex, Input, Box, Spinner, Avatar, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ConversationBox from "../ConversationBox";
import {
  createChat,
  getAllChats,
  searchChat,
} from "../../../firebase/services/Chats";
import Layout from "../../Layout";
import SectionBar from "../../SectionBar";
import { useRouter } from "next/router";
import Link from "next/link";
import { getAllProfiles } from "../../../firebase/services/User";
import useProfile from "../../../hooks/useProfile";
import { Back } from "../../Icons";
import MobileBottomNavbar from "../../Layout/MobileBottomNav";

export default function ChatLayoutPage({ children }) {
  const [chats, setChats] = useState();
  const [users, setUsers] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const profile = useProfile();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const router = useRouter();
  const { id } = router.query;

  const handleFocus = () => {
    // Lógica para mostrar los resultados y ocultar otros elementos
    setShowResults(true);
  };

  function filterMember(member) {
    return member.id != profile.id;
  }

  function filterAvatar(avatar) {
    return avatar != profile.avatar;
  }

  async function initChat(user) {
    // Busco el chat con el usuario
    const chatExists = await searchChat(profile, user);

    // Si existe, se redirecciona al chat
    if (chatExists) {
      router.push(chatExists);

      // Se procede a crear un chat con esa persona y posteriormente se redirecciona
    } else {
      const chatData = {
        members: [
          {
            id: profile.id,
            name: profile.name,
          },
          {
            id: user.id,
            name: user.name,
          },
        ],
        avatars: [profile.avatar, user.avatar],
      };
      const newChatId = await createChat(chatData);
      newChatId && router.push(`/messages/${newChatId}`);
      setShowResults(false);
      setSearchTerm("");
    }
  }

  useEffect(() => {
    if (profile) {
      getAllChats(setChats, profile.name, profile.id);
      getAllProfiles(setUsers);
    }
  }, [profile]);

  // Filtro los usuarios con el buscador
  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      // Quito mi usuario de los usuarios buscados
      user.id != profile.id
  );

  return (
    <Layout hideRightNavbar hideBottomNavbar={true}>
      <Flex px={{ base: "0px", tablet: "10px" }} h={"100vh"}>
        {/* Buscador */}
        <Box
          w={{ base: "100%", tablet: "30%" }}
          h={{ base: "auto", tablet: "100vh" }}
          // En Mobile no se muestra el buscador para ver solo el chat
          display={{
            base: id != "home" ? "none" : "block",
            tablet: "inline-block",
          }}
          borderLeft={{ base: "none", tablet: "2px solid #2b2a2d" }}
        >
          <>
            <Flex px="10px" h="50px" align="center">
              <Text fontWeight="700" fontSize="20px" letterSpacing="1px">
                Mensajes
              </Text>
            </Flex>
            <Flex gap={3} px="5px" h={"10%"} align={"center"} mb={"10px"}>
              {showResults && (
                <Box
                  cursor={"pointer"}
                  ml={2}
                  onClick={() => setShowResults(false)}
                >
                  <Back />
                </Box>
              )}

              <Input
                onFocus={handleFocus}
                value={searchTerm}
                onChange={handleSearch}
                borderRadius={"full"}
                border={"none"}
                placeholder="Buscar"
                bg={"black.50"}
                autoComplete="off"
                _focus={{
                  border: "1px",
                  borderColor: "brand.100",
                  boxShadow: "none",
                }}
              />
            </Flex>

            {/* Resultados de busqueda */}
            {showResults && (
              <Box px={"5px"}>
                {!searchTerm && (
                  <Text fontWeight={400} color={"gray.50"} textAlign={"center"}>
                    Busca personas para chatear
                  </Text>
                )}
                {searchTerm &&
                  filteredUsers?.map((user) => (
                    <Flex
                      key={user.id}
                      p={"5px"}
                      my={"5px"}
                      gap={3}
                      align={"center"}
                      cursor={"pointer"}
                      borderRadius={"15px"}
                      _hover={{ bg: "black.50" }}
                      onClick={() => initChat(user)}
                    >
                      <Avatar src={user.avatar} />
                      <Text>{user.name}</Text>
                    </Flex>
                  ))}
              </Box>
            )}

            {/* Lista de Chats */}
            {!showResults && (
              <Box>
                {chats ? (
                  chats.map((chat) => (
                    <Box
                      key={chat.id}
                      cursor={"pointer"}
                      onClick={() => router.push(`/messages/${chat.id}`)}
                    >
                      <ConversationBox
                        isActive={id === chat.id}
                        name={chat.members.filter(filterMember)[0].name}
                        avatar={chat.avatars.filter(filterAvatar)[0]}
                      />
                    </Box>
                  ))
                ) : (
                  <Flex mt={"10px"} justify={"center"}>
                    <Spinner color="brand.100" />
                  </Flex>
                )}
              </Box>
            )}
          </>
          <MobileBottomNavbar />
        </Box>

        {/* Chat */}
        <Box
          display={{
            base: id == "home" ? "none" : "flex",
            tablet: "inline-block",
          }}
          w={{ base: "100%", tablet: "70%" }}
          borderLeft={{ base: "none", tablet: "2px solid #2b2a2d" }}
        >
          {/* Body Chat */}
          {children}
        </Box>
      </Flex>
    </Layout>
  );
}
