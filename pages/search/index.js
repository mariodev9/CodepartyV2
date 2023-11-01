import React, { useState, useCallback } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getProfiles } from "../../firebase/services/User";
import { SearchBar } from "../../components/Layout/Common/SearchBar";
import {
  Box,
  Text,
  Flex,
  Avatar,
  LinkBox,
  LinkOverlay,
  Spinner,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { getPublicationsWithParams } from "../../firebase/services/Publications";
import Publication from "../../components/Publications/components/Publication";

export default function SearchPage() {
  const router = useRouter();
  const searchParam = router.query.q;

  const [results, setResults] = useState([]);
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  const isNoResults = !publications && !results && !loading;

  useEffect(() => {
    const searchProfiles = async () => {
      setLoading(true);

      const profilesData = await getProfiles(searchParam);
      const publicationsData = await getPublicationsWithParams(searchParam);
      console.log(publicationsData, "publicaiones");
      setResults(profilesData);
      setPublications(publicationsData);
      setLoading(false);
    };

    searchProfiles();
  }, [searchParam]);

  return (
    <Layout showSearchBar={true}>
      <Box pt="10px">
        <SearchBar />

        {loading ? (
          <Flex w={"full"} justify={"center"}>
            <Spinner color="brand.100" />
          </Flex>
        ) : (
          <>
            {results?.map((profile) => (
              <LinkBox
                cursor={"pointer"}
                bg={"black.100"}
                _hover={{ bg: "black.50", transitionDuration: "0.3s" }}
                p={"5px"}
              >
                <LinkOverlay as={NextLink} href={`/Profile/${profile.id}`}>
                  <Flex gap={3}>
                    <Box>
                      <Avatar src={profile.avatar} />
                    </Box>
                    <Box>
                      <Text>{profile.name}</Text>

                      <Text fontWeight={"normal"} color={"#71767b"}>
                        {profile.position}
                      </Text>
                      <Text fontWeight={"normal"}>{profile.description}</Text>
                    </Box>
                  </Flex>
                </LinkOverlay>
              </LinkBox>
            ))}

            <Box mt={5} h={"1px"} borderRadius={"full"} bg={"black.50"}></Box>

            {publications?.map((publication) => (
              <Publication {...publication} />
            ))}

            {publications.length === 0 && results.length === 0 && !loading && (
              <Text color={"white"}>
                No hay resultados para "{searchParam}"
              </Text>
            )}
          </>
        )}
      </Box>
    </Layout>
  );
}
