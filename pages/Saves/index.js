import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import SectionBar from "../../components/SectionBar";
import { GetAllUserSaves } from "../../firebase/services/Saves";
import useUser from "../../hooks/useUser";
import PublicationSaved from "../../components/Saves/publicationSaved";
import { motion } from "framer-motion";
import Publication from "../../components/Publication";

export default function Saves() {
  const [saves, setSaves] = useState(undefined);
  const userId = useUser();

  useEffect(() => {
    if (userId) {
      GetAllUserSaves(userId, setSaves);
    }
  }, [userId]);

  return (
    <Layout>
      <SectionBar text={"Guardados"} back />
      {saves === undefined && (
        <Flex h="100vh" justify="center" align="center" bg={"brand.200"}>
          <Spinner color="brand.100" />
        </Flex>
      )}
      {saves && (
        <Box h={"100vh"} bg={"brand.200"}>
          {saves.length === 0 ? (
            <Flex h="80vh" justify="center" align="center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Text fontSize={"25px"} color="gray.50" textAlign={"center"}>
                  No tienes publicaciones guardadas
                </Text>
              </motion.div>
            </Flex>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Grid templateColumns="repeat(1, 1fr)" gap={3} padding={"10px"}>
                {saves.map((item) => (
                  <Publication key={item.id} {...item} userId={userId} />
                ))}
              </Grid>
            </motion.div>
          )}
        </Box>
      )}
    </Layout>
  );
}
