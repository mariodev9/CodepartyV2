import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import SectionBar from "../../components/SectionBar";
import { GetAllUserSaves } from "../../firebase/services/Saves";
import useUser from "../../hooks/useUser";
import { motion } from "framer-motion";
import Publication from "../../components/Publications/components/Publication";

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
        <Box p={"0px 10px 30px"}>
          {saves.length === 0 ? (
            <motion.div
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Text fontSize={"25px"} color="gray.50" textAlign={"center"}>
                No tienes publicaciones guardadas
              </Text>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Box>
                {saves.map((item) => (
                  <Publication key={item.id} {...item} userId={userId} />
                ))}
              </Box>
            </motion.div>
          )}
        </Box>
      )}
    </Layout>
  );
}
