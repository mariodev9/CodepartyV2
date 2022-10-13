import { Avatar, Button, HStack, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { addComment } from "../../firebase/Client";
import useUser from "../../hooks/useUser";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};
// export default function CommentForm({ codeId, avatar, userName, userId }) {

export default function CommentForm({ codeId, fontSize, avatarSize }) {
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const user = useUser();

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value);
  };

  const handleClick = () => {
    setStatus(COMPOSE_STATES.LOADING);

    addComment({
      codeId,
      avatar: user?.avatar,
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
      <Avatar src={user?.avatar} size={avatarSize} />
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
