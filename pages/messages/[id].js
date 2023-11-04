import React, { useState, useEffect, useRef } from "react";
import ChatLayoutPage from "../../components/Chats/ChatLayoutPage";
import { useRouter } from "next/router";
import {
  getChat,
  getMessagesFromChat,
  sendMessage,
} from "../../firebase/services/Chats";
import { Flex, Input, Box, Text, Button } from "@chakra-ui/react";
import Message from "../../components/Chats/Message";
import useProfile from "../../hooks/useProfile";
import ChatHeader from "../../components/Chats/BodyChat/ChatHeader";
import { Timestamp } from "firebase/firestore";
import { getProfile } from "../../firebase/services/User";
import MessagesContainer from "../../components/Chats/BodyChat/MessagesContainer";
import ChatFooter from "../../components/Chats/BodyChat/ChatFooter";
import Head from "next/head";

export default function ChatSinglePage() {
  const router = useRouter();
  const { id } = router.query;

  const profile = useProfile();
  const [receptorProfile, setReceptorProfile] = useState();
  const [messages, setMessages] = useState();

  useEffect(() => {
    if (id && profile) {
      // Obtengo del chatID: el userId del usuario que va a recibir mensajes
      const chatIds = id.split("-");
      const receptorId = chatIds.find((id) => id !== profile.id);

      // Obtengo el profile del usuario receptor
      getProfile(receptorId, setReceptorProfile);
      // Obtengo los mensajes del chat
      getMessagesFromChat(id, setMessages);
    }
  }, [id, profile]);

  return (
    <>
      <Head>
        <title>Messages / Codeparty</title>
        <meta name="Social media for devs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChatLayoutPage>
        {id === "home" ? (
          <Flex
            direction={"column"}
            h={"100vh"}
            justify={"center"}
            align={"center"}
          >
            <Text fontSize={"4xl"}>Selecciona un mensaje</Text>
            <Text color={"gray.300"} fontSize={"xl"} fontWeight={"light"}>
              Elegi entre tus conversaciones o empieza una nueva
            </Text>
          </Flex>
        ) : (
          <Flex w={"100%"} h={"100vh"} direction={"column"}>
            <ChatHeader
              name={receptorProfile?.name}
              avatar={receptorProfile?.avatar}
            />

            {/* Chat Messages */}
            <MessagesContainer messages={messages} myUserId={profile?.id} />

            {/* Footer Chat  */}
            <ChatFooter profile={profile} chatId={id} />
          </Flex>
        )}
      </ChatLayoutPage>
    </>
  );
}
