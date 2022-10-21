import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import python from "../../public/Python.png";
import Layout from "../../components/Layout";
import useUser from "../../hooks/useUser";
import SectionBar from "../../components/SectionBar";

export const LOADING_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function Profile() {
  // const [publications, setPublications] = useState(null);
  const user = useUser();
  // const img =
  //   "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

  useEffect(() => {
    // user && getUserPublications(setPublications);
  }, []);

  return (
    <>
      <Layout>
        <Box
          // bgImage={`url('${img}')`}
          bg="black"
        >
          <SectionBar text={"Perfil"} back></SectionBar>

          <Flex
            direction="column"
            bgGradient="linear(to-b, #7928ca00 0%, #222124 65%)"
            align="center"
          >
            <Box
              mt="100px"
              layerStyle={"primaryBox"}
              h="70px"
              w="70px"
              bgSize={"70px"}
              bgImage={user?.avatar}
            ></Box>
            <Text mt="15px" fontSize="20px">
              Luciano Mariotti
            </Text>
            <Text>descripcion.....</Text>
            <Flex mt="20px">
              {/* <Image src={python} /> */}
              <Box bg="yellow.400" p="4px 12px" borderRadius={"10px"}>
                <Text color={"gray"} fontSize="12px">
                  Javascript
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Flex p="30px 0px" justify="center" align="center">
          <Box>Publicaciones - Historias </Box>
        </Flex>
        <Box p="15px">
          <Box> pub 1</Box>
        </Box>
      </Layout>
    </>
  );
}
