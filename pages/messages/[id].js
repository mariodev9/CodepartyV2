import React, { useState, useEffect, useRef } from "react";
import ChatLayoutPage from "../../components/Chats/ChatLayoutPage";
import { useRouter } from "next/router";
import {
  getMessagesFromChat,
  sendMessage,
} from "../../firebase/services/Chats";
import { Flex, Input, Box, useMediaQuery, Text } from "@chakra-ui/react";
import Message from "../../components/Chats/Message";
import useProfile from "../../hooks/useProfile";
import ChatHeader from "../../components/Chats/BodyChat/ChatHeader";
import { Timestamp } from "firebase/firestore";

export default function ChatSinglePage() {
  // Get Chat Id
  const router = useRouter();
  const { id } = router.query;

  const profile = useProfile();
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState();
  const [message, setMessage] = useState();

  const scrollToBottom = () => {
    const container = messageContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, []);

  useEffect(() => {
    id && getMessagesFromChat(id, setMessages);
  }, [id]);

  function handleChange(event) {
    setMessage(event.target.value);
  }

  function SendNewMessage(event) {
    event.preventDefault();
    if (profile) {
      const messageData = {
        creatorId: profile.id,
        content: message,
        viewed: false,
        createdAt: Timestamp.fromDate(new Date()),
      };
      sendMessage(messageData, id);
      setMessage("");
    }
    // TODO: Focus al final del chat
    scrollToBottom();
  }

  return (
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
        <Flex w={"100%"} h={"100vh"} direction={"column"} px={"10px"}>
          <ChatHeader
            name={
              "Chat "
              //   activeChat?.members[1] === profile?.name
              //     ? activeChat?.members[0]
              //     : activeChat?.members[1]
            }
            avatar={
              profile?.avatar
              //   activeChat?.avatars[0] === profile?.avatar
              //     ? activeChat?.avatars[1]
              //     : activeChat?.avatars[0]
            }
          />
          {/* Chat Messages */}

          <Box
            flex={1}
            overflowY={"scroll"}
            pr={"10px"}
            css={{
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                width: "7px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#159BFF",
                borderRadius: "24px",
              },
            }}
            ref={messageContainerRef}
          >
            {messages &&
              messages.map((message, index) => (
                <Message
                  key={index}
                  {...message}
                  isMyMessage={message.creatorId === profile.id}
                />
              ))}
          </Box>

          {/* Footer Chat  */}
          <Flex h={"auto"} align={"end"} py={"10px"} mb={"60px"}>
            <form
              style={{ width: "100%" }}
              onSubmit={() => SendNewMessage(event)}
            >
              <Flex gap={4}>
                <Input
                  borderRadius={"full"}
                  w={"75%"}
                  placeholder="Escribe un mensaje"
                  onChange={handleChange}
                  value={message}
                />
                <Input
                  cursor={"pointer"}
                  bg={"brand.100"}
                  _hover={{ bg: "blue" }}
                  borderRadius={"full"}
                  w={"25%"}
                  type="submit"
                />
              </Flex>
            </form>
          </Flex>
        </Flex>
      )}
    </ChatLayoutPage>
  );
}
