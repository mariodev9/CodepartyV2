import { useEffect, useState } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import Publication from "./Publication";
import useUser from "../hooks/useUser";
import { listenLatestCodes } from "../firebase/services/Publications";

export default function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const userId = useUser();

  useEffect(() => {
    if (userId) {
      listenLatestCodes(setTimeline);
    }
  }, [userId]);

  return (
    <>
      <Box p="10px 20px" mb="70px">
        <Text m="20px 0 15px 0" textAlign="" fontSize={"25px"}>
          Ultimas publicaciones
        </Text>
        {timeline.length === 0 ? (
          <Flex h="70vh" p={5} justify="center" align={"center"}>
            <Spinner color="brand.100" />
          </Flex>
        ) : (
          timeline.map((item) => <Publication {...item} userId={userId} />)
        )}
      </Box>
    </>
  );
}
