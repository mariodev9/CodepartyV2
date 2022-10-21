import React, { useState, useEffect } from "react";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import python from "../../public/Python.png";
import Layout from "../../components/Layout";
import useUser from "../../hooks/useUser";
import SectionBar from "../../components/SectionBar";
import { Add } from "../../components/Icons";
import { AnimatePresence, motion } from "framer-motion";

const LOADING_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

const Skill = ({ text, color }) => {
  return (
    <Box
      layerStyle={"primaryBox"}
      bg={color}
      p="5px 15px"
      borderRadius={"10px"}
    >
      <Text color="white" fontSize="15px">
        {text}
      </Text>
    </Box>
  );
};

export default function Profile() {
  const [isOn, setIsOn] = useState(false);

  // const [publications, setPublications] = useState(null);
  const user = useUser();
  // const img =
  //   "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

  useEffect(() => {
    // user && getUserPublications(setPublications);
  }, []);

  const MotionBox = motion(Box);

  return (
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
          <Image
            src={user?.avatar}
            layerStyle={"primaryBox"}
            mt="100px"
            h="100px"
            w="100px"
          />
          <Text mt="15px" fontSize="20px">
            Luciano Mariotti
          </Text>
          <Box w="40%">
            <Text mt="20px" fontWeight={400} color="gray.50" fontSize={"15px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Box>
          <HStack mt="20px" spacing={"5px"}>
            <Skill text={"Javascript"} color={"#ffcc13"} />
            <Skill text={"Php"} color={"#787cb4"} />
            <Add />
          </HStack>
        </Flex>
      </Box>
      <Flex p="30px 0px" justify="center" align="center">
        <Flex
          layerStyle={"primaryBox"}
          w="300px"
          h="70px"
          p="12px 32px"
          align={"center"}
          onClick={() => setIsOn(!isOn)}
        >
          <Box w="50%" zIndex={3}>
            <Text textAlign={"center"}>Publicaciones</Text>
          </Box>
          <Box w="50%" zIndex={3}>
            <Text textAlign={"center"}>Historias</Text>
          </Box>
          <AnimatePresence initial={false}>
            {user && (
              <MotionBox
                w="122px"
                h="40px"
                bg={"brand.100"}
                position="absolute"
                borderRadius="10px"
                initial={{ x: isOn ? 0 : 120 }}
                animate={{ x: isOn ? 120 : 0 }}
                exit={{ x: 0 }}
                transition={{ duration: 1 }}
                // style={{ marginLeft: isOn ? "115px" : "0px" }}
              ></MotionBox>
            )}
          </AnimatePresence>
        </Flex>
      </Flex>
      <Box p="15px">
        <Box> pub 1</Box>
      </Box>
    </Layout>
  );
}
