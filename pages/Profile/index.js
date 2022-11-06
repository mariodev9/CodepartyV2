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
import { Add, Logo } from "../../components/Icons";
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
      // let userData = { ...user };
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Flex justify="center" align="center" h={"100vh"}>
            <Flex direction={"column"} justify={"center"}>
              <Text textAlign={"center"} fontSize={"2rem"}>
                Bienvenido a codeparty!
              </Text>
              <Text textAlign={"center"}>
                Crea tu perfil para que otros devs lo vean!
              </Text>
              <Button mt="20px" variant={"primary"} onClick={goToCreateProfile}>
                Crear Perfil
              </Button>
            </Flex>
          </Flex>
        </motion.div>
      )}

      {/* {userProfileData === USER_PROFILE_STATES.HAVE_PROFILE && ( */}
      {userProfileData && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Box bg="black">
            <SectionBar text={"Perfil"} back />
            <Flex
              direction="column"
              bgGradient="linear(to-b, #7928ca00 0%, #222124 65%)"
              align="center"
            >
              <Image
                src={userProfileData.avatar}
                layerStyle={"primaryBox"}
                mt="100px"
                h="100px"
                w="100px"
              />
              <Text mt="15px" fontSize="20px">
                {userProfileData.name}
              </Text>
              <Box w="50%">
                <Text
                  mt="20px"
                  fontWeight={400}
                  color="gray.50"
                  fontSize={"15px"}
                  textAlign="center"
                >
                  {userProfileData.description}
                </Text>
              </Box>
              <HStack mt="20px" spacing={"5px"}>
                {userProfileData.tecnologies.map((item) => (
                  <Skill key={item.name} text={item.name} color={item.color} />
                ))}
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
        </motion.div>
      )}
    </Layout>
  );
}
