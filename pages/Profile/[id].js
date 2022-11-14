import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getProfile } from "../../firebase/services/User";
import { Spinner, Flex } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";

export default function UserProfile() {
  const [profileData, setProfileData] = useState(undefined);
  const router = useRouter();
  const user = useUser();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getProfile(id, setProfileData);
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
          <Flex h="100vh" justify="center" align="center">
            este dev no tiene perfil!
          </Flex>
        )}

        {profileData && (
          <Flex h="100vh" justify="center" align="center">
            perfil de {id}
          </Flex>
        )}
      </Layout>
    </>
  );
}
