import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getProfile } from "../../firebase/services/User";
import { Spinner, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { getUserStories } from "../../firebase/services/Stories";
import { getUserPublications } from "../../firebase/services/Publications";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileContent from "../../components/Profile/ProfileContent";

export default function UserProfile() {
  const [profileData, setProfileData] = useState(undefined);
  const [userPublications, setUserPublications] = useState([]);
  const [userStories, setUserStories] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  // Obtengo el perfil del usuario con el ID de la url
  useEffect(() => {
    id && getProfile(id, setProfileData);
  }, [id]);

  // Una vez que tengo el perfil del usuario, traigo las publicaciones e historias
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

            <ProfileContent
              userPublications={userPublications}
              userStories={userStories}
            />
          </motion.div>
        )}
      </Layout>
    </>
  );
}
