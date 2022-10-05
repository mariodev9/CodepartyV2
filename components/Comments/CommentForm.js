import { Avatar, Button, HStack, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { addComment } from "../../firebase/Client";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function CommentForm({ codeId, avatar, userName, userId }) {
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value);
    console.log(value);
  };

  const handleClick = () => {
    setStatus(COMPOSE_STATES.LOADING);

    addComment({
      codeId,
      avatar: avatar,
      content: comment,
      userId: userId,
      userName: userName,
    });
    setComment("");
    setStatus(COMPOSE_STATES.SUCCES);
  };

  const isButtonDisabled =
    !comment.length && (status || COMPOSE_STATES.LOADING);

  return (
    <>
      <HStack p="15px 5px">
        <Avatar src={avatar} />
        <Input
          placeholder="Escribe un comentario"
          onChange={handleChange}
          value={comment}
        />
        <Button
          variant="primary"
          onClick={handleClick}
          disabled={isButtonDisabled}
        >
          Comentar
        </Button>
      </HStack>
    </>
  );
}
