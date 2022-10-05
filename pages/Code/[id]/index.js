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
import CommentForm from "../../../components/Comments/CommentForm";

export default function CodePage({ codeId }) {
  const [data, setData] = useState(null);
  const user = useUser();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL_API}${codeId}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

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
          <CommentForm
            codeId={codeId}
            avatar={user.avatar}
            userName={user.name}
            userId={user.userId}
          />
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
