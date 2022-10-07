import { Box, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { listenLatestComments } from "../../firebase/Client";
import Comment from "./Comment";

export default function CommentsList({ children }) {
  return (
    <>
      <Box>
        {/* {!comments ? (
          <Box w="100%" h="100%">
            <Spinner />
          </Box>
        ) : (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              avatar={comment.avatar}
              content={comment.content}
              userName={comment.userName}
              createdAt={comment.createdAt}
            />
          ))
        )} */}
      </Box>
    </>
  );
}
