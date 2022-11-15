import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import SectionBar from "../../components/SectionBar";
import { GetAllUserSaves } from "../../firebase/services/Saves";
import useUser from "../../hooks/useUser";
import PublicationSaved from "../../components/Saves/publicationSaved";
import { motion } from "framer-motion";

export default function Saves() {
  const [saves, setSaves] = useState(undefined);
  const user = useUser();

  useEffect(() => {
    if (user) {
      GetAllUserSaves(user.userId, setSaves);
    }
  }, [user]);

  return (
    <Layout>
      <SectionBar text={"Guardados"} back />
      {saves === undefined && (
        <Flex h="100vh" justify="center" align="center">
          <Spinner color="brand.100" />
        </Flex>
      )}
      {saves && (
        <Box>
          {saves.length === 0 ? (
            <Flex h="80vh" justify="center" align="center">
              <Text fontSize={"25px"} color="gray.50">
                No tienes publicaciones guardadas
              </Text>
            </Flex>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Grid templateColumns="repeat(2, 1fr)" gap={3} padding={"10px"}>
                {saves.map((item, key) => (
                  <GridItem key={item.id} layerStyle={"primaryBox"} h="150px">
                    <PublicationSaved
                      content={item.content}
                      avatar={item.avatar}
                      userName={item.userName}
                      createdAt={item.createdAt}
                      saves={item.saves}
                    />
                  </GridItem>
                ))}
              </Grid>
            </motion.div>
          )}
        </Box>
      )}

      {/* 
      <Grid templateColumns="repeat(2, 1fr)" gap={3} padding={"10px"}>
        {saves && saves.length != 0 ? (
          saves.map((item, key) => (
            <GridItem key={item.id} layerStyle={"primaryBox"} h="150px">
              <PublicationSaved
                content={item.content}
                avatar={item.avatar}
                userName={item.userName}
                createdAt={item.createdAt}
                saves={item.saves}
              />
            </GridItem>
          ))
        ) : (
          <Text>No hay publicaciones guardadas</Text>
        )}
      </Grid> */}
    </Layout>
  );
}
