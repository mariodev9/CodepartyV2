import { Avatar, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { addComment } from "../../firebase/services/Comments";
import useUser from "../../hooks/useUser";
import useProfile from "../../hooks/useProfile";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function CommentForm({ codeId, fontSize, avatarSize }) {
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const user = useUser();
  const profile = useProfile();

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value);
  };

  const handleClick = () => {
    setStatus(COMPOSE_STATES.LOADING);

    addComment({
      codeId,
      avatar: profile?.avatar,
      content: comment,
      userId: user?.userId,
      userName: user?.name,
    });
    setComment("");
    setStatus(COMPOSE_STATES.SUCCES);
  };

  const isButtonDisabled =
    !comment.length && (status || COMPOSE_STATES.LOADING);

  return (
    <>
      <Avatar src={profile?.avatar} size={avatarSize} />
      <Input
        placeholder="Escribe un comentario"
        onChange={handleChange}
        value={comment}
        fontSize={fontSize}
      />
      <Button
        variant="primary"
        onClick={handleClick}
        disabled={isButtonDisabled}
      >
        Comentar
      </Button>
    </>
  );
}
