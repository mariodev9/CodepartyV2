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

  // Obtengo el perfil del usuario con el ID de la url
  useEffect(() => {
    id && getProfile(id, setProfileData);
  }, [id]);

  // Una vez que tengo el perfil del usuario, traigo las publicaciones e historias
  // Refactor usar el id de la url
  useEffect(() => {
    if (id) {
      getUserPublications(id, setUserPublications);
      getUserStories(id, setUserStories);
    }
  }, []);

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
            <ProfileHeader {...profileData} />

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
                  {userPublications.map((item) => (
                    <Publication {...item} userId={user} />
                  ))}
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
