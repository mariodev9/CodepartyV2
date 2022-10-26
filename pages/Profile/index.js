import React, { useState, useEffect } from "react";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import python from "../../public/Python.png";
import Layout from "../../components/Layout";
import useUser from "../../hooks/useUser";
import SectionBar from "../../components/SectionBar";
import { Add } from "../../components/Icons";
import { AnimatePresence, motion } from "framer-motion";
import ToggleButton from "../../components/Common/ToggleButton";

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

const USER_PROFILE_STATES = {
  NOT_KNOWN: undefined,
  NOT_PROFILE: null,
};

export default function Profile() {
  const [timelineMode, setTimelineMode] = useState(false);
  const [userProfile, setUserProfile] = useState(USER_PROFILE_STATES.NOT_KNOWN);

  const user = useUser();

  useEffect(() => {
    // user && getUserPublications(user.userId);
  }, []);

  useEffect(() => {
    // user && getUserPublications(setPublications);
  }, [user]);

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
          <Box w="50%">
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
      {user && (
        <ToggleButton
          timelineMode={timelineMode}
          setTimelineMode={setTimelineMode}
        />
      )}

      {timelineMode ? (
        <Box p="15px">
          <Box> hISTORIAS</Box>
        </Box>
      ) : (
        <Text>PUBLICACIONES</Text>
      )}
    </Layout>
  );
}
