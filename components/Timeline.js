import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Code from "./Code";
import useUser from "../hooks/useUser";
import { listenLatestCodes } from "../firebase/Client";

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
      <Box p="20px">
        <Text m="20px 0 15px 0">Last Codes</Text>
        {timeline.length ? (
          timeline.map(
            ({ id, userName, avatar, content, createdAt, userId, img }) => (
              <Code
                avatar={avatar}
                id={id}
                key={id}
                content={content}
                userName={userName}
                img={img}
                createdAt={createdAt}
                userId={userId}
              />
            )
          )
        ) : (
          <Text>CARGANDO...</Text>
        )}
      </Box>
    </>
  );
}
