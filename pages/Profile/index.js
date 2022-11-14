import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import useUser from "../../hooks/useUser";
import SectionBar from "../../components/SectionBar";
import { motion } from "framer-motion";
import { getProfile } from "../../firebase/services/User";
import { useRouter } from "next/router";
import { Skill } from "../../components/Common/Skill";
import { getUserPublications } from "../../firebase/services/Publications";
import Publication from "../../components/Publication";
import { Toggle } from "../../components/Common/Toggle";
import { getUserStories } from "../../firebase/services/Stories";

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
  const [userPublications, setUserPublications] = useState([]);
  const [userStories, setUserStories] = useState([]);

  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      getProfile(user.userId, setUserProfileData);
    }
  }, [user]);

  useEffect(() => {
    if (user && userProfileData) {
      getUserPublications(user.userId, setUserPublications);
      getUserStories(user.userId, setUserStories);
    }
  }, [userProfileData]);

  const goToCreateProfile = () => {
    router.replace("/Create/Profile");
  };

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

      {userProfileData && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Box>
            <SectionBar text={"Perfil"} back />
            <Flex
              direction="column"
              // bgGradient="linear(to-b, #7928ca00 0%, #222124 65%)"
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

          <Flex justify={"center"} p="30px 0px">
            <Toggle
              setPublicationMode={setTimelineMode}
              publicationMode={timelineMode}
            />
          </Flex>

          {timelineMode ? (
            <Flex>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} padding={"10px"}>
                {userStories.map((item) => (
                  <GridItem key={item.id} layerStyle={"primaryBox"}>
                    <Image
                      width="300px"
                      height="300px"
                      src={item.img}
                      borderRadius="10px"
                    />
                  </GridItem>
                ))}
              </Grid>
            </Flex>
          ) : (
            <Box p="40px 15px">
              {userProfileData &&
                userPublications.map(
                  ({
                    id,
                    userName,
                    avatar,
                    content,
                    createdAt,
                    userId,
                    img,
                    saves,
                  }) => (
                    <Publication
                      userOnSession={user?.userId}
                      avatar={avatar}
                      id={id}
                      key={id}
                      content={content}
                      userName={userName}
                      img={img}
                      createdAt={createdAt}
                      userId={userId}
                      saves={saves}
                    />
                  )
                )}
            </Box>
          )}
        </motion.div>
      )}
    </Layout>
  );
}
