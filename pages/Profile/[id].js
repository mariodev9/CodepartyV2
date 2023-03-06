import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getProfile } from "../../firebase/services/User";
import {
  Spinner,
  Flex,
  HStack,
  Image,
  Box,
  Text,
  GridItem,
  Grid,
  Avatar,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import { motion } from "framer-motion";
import { Skill } from "../../components/Common/Skill";
import SectionBar from "../../components/SectionBar";
import { getUserStories } from "../../firebase/services/Stories";
import { getUserPublications } from "../../firebase/services/Publications";
import { Toggle } from "../../components/Common/Toggle";
import Publication from "../../components/Publication";

export default function UserProfile() {
  const [profileData, setProfileData] = useState(undefined);
  const [userPublications, setUserPublications] = useState([]);
  const [userStories, setUserStories] = useState([]);
  const [timelineMode, setTimelineMode] = useState(false);

  const router = useRouter();
  const user = useUser();
  const { id } = router.query;

  useEffect(() => {
    id && getProfile(id, setProfileData);
  }, [id]);

  useEffect(() => {
    if (profileData) {
      getUserPublications(profileData.userId, setUserPublications);
      getUserStories(profileData.userId, setUserStories);
    }
  }, [profileData]);

  return (
    <>
      <Layout>
        {profileData === undefined && (
          <Flex h="100vh" justify="center" align="center">
            <Spinner color="brand.100" />
          </Flex>
        )}

        {profileData === false && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Flex h="100vh" justify="center" align="center">
              este dev no tiene perfil!
            </Flex>
          </motion.div>
        )}

        {profileData && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* PROFILE HEADER */}
            <Box>
              <SectionBar text={"Perfil"} back />
              <Flex direction="column" align="center">
                <Avatar size={"2xl"} src={profileData.avatar} mt={"60px"} />

                <Text mt="15px" fontSize="20px">
                  {profileData.name}
                </Text>
                <Box w="50%">
                  <Text
                    mt="20px"
                    fontWeight={400}
                    color="gray.50"
                    fontSize={"15px"}
                    textAlign="center"
                  >
                    {profileData.description}
                  </Text>
                </Box>
                <HStack mt="20px" spacing={"5px"}>
                  {profileData.tecnologies.map((item) => (
                    <Skill
                      key={item.name}
                      text={item.name}
                      color={item.color}
                    />
                  ))}
                </HStack>
              </Flex>
            </Box>
            {/* PROFILE HEADER */}

            <Tabs>
              <TabList>
                <Tab>Publicaciones</Tab>
                <Tab>Historias</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Box p="0px 10px 40px 10px">
                    {profileData &&
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
                </TabPanel>
                <TabPanel>
                  <Flex p="45px 15px">
                    {/* 2 */}
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
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
                </TabPanel>
              </TabPanels>
            </Tabs>
          </motion.div>
        )}
      </Layout>
    </>
  );
}
