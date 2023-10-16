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
import { getPublication } from "../../../firebase/services/Publications";
import { useRouter } from "next/router";

export default function CodePage() {
  const router = useRouter();
  const publicationId = router.query.id;
  const userOnSession = router.query.userOnSession;

  const [comments, setComments] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(undefined);
  const [publicationData, setPublicationData] = useState(null);

  // TODO: Obtener data de la pub con la funcion creada
  useEffect(() => {
    getPublication(publicationId, setPublicationData);
  }, []);

  // TODO: Obtener Comentarios de la pub
  useEffect(() => {
    listenLatestComments(setComments, publicationId);
  }, [publicationId]);

  // TODO: Verificar quye la publicacion esta likeada o no
  //   // refactor: Ahora la publicacion tiene un array con el id del user --> array.some
  useEffect(() => {
    setIfPublicationIsLiked(
      publicationId,
      userOnSession,
      setIsLiked,
      setLikesCount
    );
  }, [publicationId, userOnSession]);

  return (
    <Layout>
      <SectionBar text={"Code"} back />
      {publicationData === null ? (
        <Flex justify="center" align="center" h="50vh">
          <Spinner color="brand.100" />
        </Flex>
      ) : (
        <Box p="15px" mb="70px">
          <Flex align="center">
            <Avatar src={publicationData.avatar} />
            <Text ml="10px">{publicationData.userName}</Text>
          </Flex>
          <Box p="15px 0px">
            <Text pb="10px" fontWeight={"normal"} fontSize="20px">
              {publicationData.content}
            </Text>
            {publicationData.img && (
              <Image
                src={publicationData.img}
                alt={"publication image"}
                borderRadius="10px"
              />
            )}
          </Box>

          {/* Me gusta */}
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
                publicationId={publicationId}
                withoutNumber={true}
              />
            </Flex>
            <Flex>
              <SavePublicationButton
                userOnSession={userOnSession}
                saves={publicationData.saves}
                publicationId={publicationId}
              />
            </Flex>
          </Flex>

          <Divider />
          <HStack p="15px 5px">
            <CommentForm
              codeId={publicationData.id}
              fontSize="20px"
              avatarSize="md"
            />
          </HStack>
          {/* Comentarios */}
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
                  userName={comment.name}
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

// export async function getServerSideProps(context) {
//   const { query } = context;
//   const { id, userOnSession } = query;

//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}${id}`);
//   console.log(`${process.env.NEXT_PUBLIC_URL_API}${id}`, "url");
//   const data = await res.json();

//   console.log(data, "que trae");
//   if (!data) {
//     return {
//       redirect: {
//         destination: "/Home",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { data: data, userOnSession: userOnSession },
//   };
// }
