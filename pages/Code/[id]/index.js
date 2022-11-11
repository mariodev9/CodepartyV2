import React from "react";
import { useState, useEffect } from "react";
import {
  Avatar,
  Text,
  Box,
  Flex,
  Image,
  Divider,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import Layout from "../../../components/Layout";
import SectionBar from "../../../components/SectionBar";
import CommentForm from "../../../components/Comments/CommentForm";
import Comment from "../../../components/Comments/Comment";
import { setIfPublicationIsLiked } from "../../../firebase/services/Interactions";
import { listenLatestComments } from "../../../firebase/services/Comments";
import SavePublicationButton from "../../../components/Interactions/SavePublicationButton";
import useUser from "../../../hooks/useUser";
import LikePublicationButton from "../../../components/Interactions/LikePublicationButton";

export default function CodePage({ data, userOnSession, message }) {
  const [comments, setComments] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(undefined);

  const { id, avatar, userName, img, content, createdAt, creatorId, saves } =
    data;

  const user = useUser();

  useEffect(() => {
    listenLatestComments(setComments, id);
  }, []);

  useEffect(() => {
    // Cambiar: Ahora la publicacion tiene un array con el id del user --> array.some

    setIfPublicationIsLiked(id, userOnSession, setIsLiked, setLikesCount);
  }, []);

  return (
    <Layout>
      <SectionBar text={"Code"} back />
      {message && <Text>{message}</Text>}
      {!data ? (
        <Flex justify="center" align="center" h="50vh">
          <Spinner color="brand.100" />
        </Flex>
      ) : (
        <Box p="15px" mb="70px">
          <Flex align="center">
            <Avatar src={avatar} />
            <Text ml="10px">{userName}</Text>
          </Flex>
          <Box p="15px 0px">
            <Text pb="10px" fontWeight={"normal"} fontSize="20px">
              {content}
            </Text>
            {img && <Image src={img} borderRadius="10px" />}
          </Box>
          <Flex p="15px 5px" justify="space-evenly" align={"center"}>
            <Flex>
              <Text color="white">{likesCount} </Text>
              <Text color="gray.50" ml="5px" fontWeight={"normal"}>
                Me gusta
              </Text>
            </Flex>
            <Flex>
              <Text color="white">{comments?.length}</Text>
              <Text color="gray.50" ml="5px" fontWeight={"normal"}>
                Comentarios
              </Text>
            </Flex>
            <Flex>
              <LikePublicationButton
                userOnSession={userOnSession}
                publicationId={id}
                withoutNumber
              />
            </Flex>
            <Flex>
              <SavePublicationButton
                userOnSession={userOnSession}
                saves={saves}
                publicationId={id}
              />
            </Flex>
          </Flex>

          <Divider />
          <HStack p="15px 5px">
            <CommentForm codeId={id} fontSize="20px" avatarSize="md" />
          </HStack>
          <Box>
            {!comments ? (
              <Flex justify="center" align="center" h="50vh">
                <Spinner color="brand.100" />
              </Flex>
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
            )}
          </Box>
        </Box>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { id, userOnSession } = query;

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}${id}`);
  const data = await res.json();
  if (!data) {
    return {
      redirect: {
        destination: "/Home",
        permanent: false,
      },
    };
  }
  return {
    props: { data: data, userOnSession: userOnSession },
  };
}
