import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Timeline from "../../components/Timeline";
import { Box, Button, Text, Image, Avatar } from "@chakra-ui/react";
import Stories from "../../components/Stories";
import TopNav from "../../components/Layout/TopNavbar";
import { sessionStories } from "../../firebase/Client";

export default function Home() {
  const [session, onSession] = useState(true);
  const router = useRouter();

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  return (
    <>
      <Layout>
        <TopNav />
        <Box display={{ base: "none", desktop: "flex" }} mb="50px">
          <Box
            position="fixed"
            zIndex="3"
            w="50%"
            h="50px"
            bg="#22212475"
            backdropFilter="blur(20px)"
            p="10px"
          >
            <Box>
              <Text fontWeight="700" fontSize="20px" letterSpacing="1px">
                Inicio
              </Text>
            </Box>
          </Box>
        </Box>
        <Stories />
        <Timeline />
      </Layout>
    </>
  );
}
