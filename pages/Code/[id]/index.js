import React from "react";
import { useState, useEffect } from "react";
import {
  Avatar,
  Text,
  Box,
  Flex,
  Image,
  Input,
  Button,
  HStack,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import Layout from "../../../components/Layout";
import SectionBar from "../../../components/SectionBar";
import { Like, Save } from "../../../components/Icons";
import useUser from "../../../hooks/useUser";
import CommentForm from "../../../components/Comments/CommentForm";
import CommentsList from "../../../components/Comments/CommentsList";
import Comment from "../../../components/Comments/Comment";
import { listenLatestComments } from "../../../firebase/Client";
import SavePublicationButton from "../../../components/Interactions/SavePublicationButton";

export default function CodePage({ codeId }) {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);

  const user = useUser();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL_API}${codeId}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

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
        <Box p="15px">
          <Flex align="center">
            <Avatar src={data.avatar} />
            <Text ml="10px">{data.userName}</Text>
          </Flex>
          <Box p="15px 0px">
            <Text pb="10px" fontWeight={"normal"} fontSize="20px">
              {data.content}
            </Text>
            {data.img && <Image src={data.img} borderRadius="10px" />}
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
                userOnSession={user?.userId}
                codeId={codeId && codeId}
              />
            </Flex>
          </Flex>
          <Divider />
          <CommentForm
            codeId={codeId}
            avatar={user?.avatar}
            userName={user?.name}
            userId={user?.userId}
          />
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
  const { params, res } = context;
  const { id } = params;

  return { props: { codeId: id } };
}
