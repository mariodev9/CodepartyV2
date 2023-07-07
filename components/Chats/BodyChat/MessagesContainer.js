import React from "react";
import Message from "../Message";
import { Box, Spinner } from "@chakra-ui/react";

export default function MessagesContainer({ messages, myUserId }) {
  return (
    <Box
      // ref={messageContainerRef}
      flex={1}
      overflowY={"scroll"}
      px={"10px"}
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
      mb={{ base: "55px", tablet: "5px" }}
    >
      {messages ? (
        messages.map((message, index) => (
          <Message
            key={index}
            {...message}
            isMyMessage={message.creatorId === myUserId}
          />
        ))
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
