import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import useUser from "../../hooks/useUser";
import SectionBar from "../../components/SectionBar";
import { Add } from "../../components/Icons";
import { motion } from "framer-motion";
import ToggleButton from "../../components/Common/ToggleButton";
import { createProfile, getProfile } from "../../firebase/services/User";
import { useRouter } from "next/router";
import { Skill } from "../../components/Common/Skill";

const LOADING_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

const USER_PROFILE_STATES = {
  NOT_KNOWN: undefined,
  NOT_PROFILE: false,
  HAVE_PROFILE: true,
};

export default function Profile() {
  const [timelineMode, setTimelineMode] = useState(false);
  const [userProfileData, setUserProfileData] = useState(
    USER_PROFILE_STATES.NOT_KNOWN
  );

  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      let userData = { ...user };
      console.log(userData, "esto que trae");
      // Cambiar nombre? userprofiledata State
      // Un estado para traer la data y otro para manejar el estado ---> false: no hay data, true: hay data
      // getProfile(user.userId, setUserProfileData, setUserStatusData);

      getProfile(user.userId, setUserProfileData);
    }
  }, [user]);

  const goToCreateProfile = () => {
    router.replace("/Create/Profile");
  };

  // useEffect(() => {
  //   if (userProfileData === USER_PROFILE_STATES.HAVE_PROFILE) {
  //     GetProfile(setProfileData)
  //   }
  // }, [userProfileData]);

  return (
    <Layout>
      {userProfileData === USER_PROFILE_STATES.NOT_KNOWN && (
        <Flex h="100vh" justify="center" align="center">
          <Spinner color="brand.100" />
        </Flex>
      )}

      {userProfileData === USER_PROFILE_STATES.NOT_PROFILE && (
        <Flex direction={"column"}>
          <Text fontSize={"2rem"}>
            Hola {user.name}, veo que eres nuevo!. Crea tu perfil para que otros
            devs lo vean!
          </Text>
          <Button onClick={goToCreateProfile}>Crear Perfil</Button>
        </Flex>
      )}

      {userProfileData === USER_PROFILE_STATES.HAVE_PROFILE && (
        <Box>
          <Box bg="black">
            <SectionBar text={"Perfil"} back />

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
                <Text
                  mt="20px"
                  fontWeight={400}
                  color="gray.50"
                  fontSize={"15px"}
                  textAlign="center"
                >
                  Que miras brodi ta en desarrollo esto
                </Text>
              </Box>
              <HStack mt="20px" spacing={"5px"}>
                <Skill text={"Javascript"} color={"#CFA22D"} />
                <Skill text={"Php"} color={"#787cb4"} />
                <Add />
              </HStack>
            </Flex>
          </Box>
          <ToggleButton
            timelineMode={timelineMode}
            setTimelineMode={setTimelineMode}
          />

          {timelineMode ? (
            <Box p="15px">
              <Box> hISTORIAS</Box>
            </Box>
          ) : (
            <Text>PUBLICACIONES</Text>
          )}
        </Box>
      )}
    </Layout>
  );
}
