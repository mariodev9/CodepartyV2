import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import {
  likedPublication,
  setIfPublicationIsLiked,
  unlikedPublication,
} from "../../firebase/Client";
import { Like } from "../Icons";

export default function LikePublicationButton({ userOnSession, codeId }) {
  const [isLiked, setIsLiked] = useState(undefined);
  const [likesCount, setLikesCount] = useState(undefined);

  useEffect(() => {
    setIfPublicationIsLiked(codeId, userOnSession, setIsLiked, setLikesCount);
  }, []);

  const handleLikePublication = () => {
    if (isLiked) {
      unlikedPublication(codeId, userOnSession);
      setIsLiked(!isLiked);
    } else {
      likedPublication(codeId, userOnSession);
      setIsLiked(!isLiked);
    }
  };

  return (
    <Flex
      onClick={handleLikePublication}
      cursor="pointer"
      align={"center"}
      // mb="10px"
    >
      <Like isLiked={isLiked} />
      <Flex w="20px" align="center" justify="center">
        <Text fontWeight={"light"}>{likesCount}</Text>
      </Flex>
    </Flex>
  );
}
