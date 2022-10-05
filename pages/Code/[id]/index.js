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
} from "@chakra-ui/react";
import Layout from "../../../components/Layout";
import SectionBar from "../../../components/SectionBar";
import { Like, Save } from "../../../components/Icons";
import useUser from "../../../hooks/useUser";
import { addComment } from "../../../firebase/Client";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function CodePage({ id }) {
  const [data, setData] = useState(null);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);

  const user = useUser();

  useEffect(() => {
    fetch(`http://${process.env.NEXT_PUBLIC_URL_API}/api/codes/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setComment(value);
    console.log(value);
  };

  const handleClick = () => {
    setStatus(COMPOSE_STATES.LOADING);

    addComment({
      id,
      avatar: user.avatar,
      content: comment,
      userId: user.userId,
      userName: user.name,
    });
    setComment("");
    setStatus(COMPOSE_STATES.SUCCES);
  };

  const isButtonDisabled =
    !comment.length && (status || COMPOSE_STATES.LOADING);

  return (
    <Layout>
      <SectionBar text={"Code"} back />
      {!data ? (
        <Text>Loading...</Text>
      ) : (
        <Box p="15px">
          <Flex align="center">
            <Avatar src={data.avatar} />
            <Text ml="10px">{data.userName}</Text>
          </Flex>
          <Box p="15px 0px">
            <Text pb="10px">{data.content}</Text>
            {data.img && <Image src={data.img} borderRadius="10px" />}
          </Box>
          <Divider colorScheme="gray.100" color="gray.100" />

          <Flex p="15px 5px" justify="space-evenly">
            <Flex align="center">
              <Like width="30px" height="30px" stroke="gray.100" />
              <Text color="gray.50">140 Me gusta</Text>
            </Flex>
            <Flex>
              <Save width="30px" height="30px" />
            </Flex>
          </Flex>
          <Divider />
          <HStack p="15px 5px">
            <Avatar src={user?.avatar} />
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
        </Box>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;

  return { props: { id: id } };
}
