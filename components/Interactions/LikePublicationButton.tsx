import React, { useEffect, useState } from "react";
import { Text, Flex } from "@chakra-ui/react";
import {
  likedPublication,
  setIfPublicationIsLiked,
  unlikedPublication,
} from "../../firebase/services/Interactions";
import { Like } from "../Icons";

interface Props {
  userOnSession: string
  publicationId: string
  withoutNumber: boolean
}

const LikePublicationButton:React.FC<Props> = ({
  userOnSession,
  publicationId,
  withoutNumber,
})  => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(undefined);

  useEffect(() => {
    setIfPublicationIsLiked(
      publicationId,
      userOnSession,
      setIsLiked,
      setLikesCount
    );
  }, []);

  const handleLikePublication = () => {
    if (isLiked) {
      unlikedPublication(publicationId, userOnSession);
      setIsLiked(!isLiked);
    } else {
      likedPublication(publicationId, userOnSession);
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
        {!withoutNumber && <Text fontWeight={"light"}>{likesCount}</Text>}
      </Flex>
    </Flex>
  );
}


export default LikePublicationButton