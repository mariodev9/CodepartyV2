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
import Publication from "../../components/Publication";
import ProfileHeader from "../../components/Profile/ProfileHeader";

export default function UserProfile() {
  const [profileData, setProfileData] = useState(undefined);
  const [userPublications, setUserPublications] = useState([]);
  const [userStories, setUserStories] = useState([]);

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
              <Text>Este desarrollador no se creo un perfil!</Text>
            </Flex>
          </motion.div>
        )}

        {profileData && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* PROFILE HEADER */}

            <ProfileHeader {...profileData} />

            {/* PROFILE HEADER */}

            <Tabs variant="soft-rounded" isFitted mt={"30px"}>
              <TabList align="center" px={4}>
                <Tab _selected={{ color: "white", bg: "brand.100" }}>
                  Publicaciones
                </Tab>
                <Tab _selected={{ color: "white", bg: "brand.100" }}>
                  Historias
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel pb={"40px"}>
                  {userPublications.map(
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
                </TabPanel>
                <TabPanel>
                  <Flex p="45px 15px">
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
