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
import { listenLatestComments } from "../../../firebase/Client";
import SavePublicationButton from "../../../components/Interactions/SavePublicationButton";
import useUser from "../../../hooks/useUser";

export default function CodePage({ codeId, data }) {
  const [comments, setComments] = useState(null);
  const user = useUser();

  const {
    id,
    avatar,
    userName,
    img,
    content,
    createdAt,
    creatorId,
    userOnSession,
  } = data;

  useEffect(() => {
    listenLatestComments(setComments, codeId);
  }, []);

  return (
    <Layout>
      <SectionBar text={"Code"} back />
      {!data ? (
        <Flex justify="center" align="center" h="50vh">
          <Spinner />
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

          <Flex p="15px 5px" justify="space-evenly">
            <Flex>
              <Text color="white">140 </Text>
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
              <SavePublicationButton
                userOnSession={userOnSession}
                codeId={id && id}
                data={data}
              />
            </Flex>
          </Flex>
          <Divider />
          <HStack p="15px 5px">
            <CommentForm codeId={codeId} fontSize="20px" avatarSize="md" />
          </HStack>
          {/* LIST */}
          <Box>
            {!comments ? (
              <Flex justify="center" align="center" h="50vh">
                <Spinner />
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
  const { params, res, query } = context;
  const { id } = params;
  return { props: { codeId: id, data: query } };
}
