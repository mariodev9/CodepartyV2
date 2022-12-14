import { useEffect, useState } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import Publication from "./Publication";
import useUser from "../hooks/useUser";
import { listenLatestCodes } from "../firebase/services/Publications";

export default function Timeline() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    if (user) {
      listenLatestCodes(setTimeline);
    }
  }, [user]);

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
          timeline.map(
            ({
              id,
              userName,
              avatar,
              content,
              createdAt,
              userId,
              img,
              saves,
              creatorId,
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
                creatorId={creatorId}
              />
            )
          )
        )}
      </Box>
    </>
  );
}
