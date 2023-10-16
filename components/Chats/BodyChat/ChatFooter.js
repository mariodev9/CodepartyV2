import { Flex, Box, Input, Button } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { sendMessage } from "../../../firebase/services/Chats";
import { Timestamp } from "firebase/firestore";

export default function ChatFooter({ profile, chatId }) {
  const [message, setMessage] = useState();
  const messageContainerRef = useRef(null);

  function handleChange(event) {
    setMessage(event.target.value);
  }

  const scrollToBottom = () => {
    const container = messageContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  function SendNewMessage(event) {
    event.preventDefault();
    if (profile && message) {
      const messageData = {
        creatorId: profile.id,
        content: message,
        viewed: false,
        createdAt: Timestamp.fromDate(new Date()),
      };
      sendMessage(messageData, chatId);
      setMessage("");
    }
    // TODO: Focus al final del chat
    scrollToBottom();
  }

  return (
    <Flex
      pos={{ base: "fixed", tablet: "inherit" }}
      bottom={"0px"}
      w={"full"}
      p={"5px 15px"}
    >
      <Box borderRadius={"full"} w={"full"} bg={"black.50"}>
        <form
          style={{ width: "100%", height: "100%" }}
          onSubmit={() => SendNewMessage(event)}
        >
          <Flex gap={4} p={"5px 10px"}>
            <Input
              borderRadius={"full"}
              placeholder="Escribe un mensaje"
              onChange={handleChange}
              value={message}
              border={"none"}
              focusBorderColor="none"
            />
            <Button
              type="submit"
              cursor={"pointer"}
              bg={"brand.100"}
              _hover={{ bg: "#158BFF" }}
              borderRadius={"full"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_8_10)">
                  <path
                    d="M5.35327 11.9548L20.9096 11.9548M5.35327 11.9548L2.8784 19.3794C2.84173 19.4782 2.83417 19.5853 2.85662 19.6882C2.87907 19.7911 2.93059 19.8854 3.00506 19.9599C3.07953 20.0343 3.17382 20.0859 3.27671 20.1083C3.37961 20.1308 3.48678 20.1232 3.58551 20.0865L20.9096 11.9548M5.35327 11.9548L2.8784 4.53019C2.84173 4.43147 2.83416 4.32429 2.85662 4.2214C2.87907 4.1185 2.93059 4.02422 3.00506 3.94975C3.07953 3.87528 3.17382 3.82375 3.27671 3.8013C3.37961 3.77885 3.48678 3.78641 3.58551 3.82308L20.9096 11.9548"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_10">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
