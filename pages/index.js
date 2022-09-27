import { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import {
  loginWithGitHub,
  loginWithGoogle,
  sessionChange,
} from "../firebase/Client";
import { useRouter } from "next/router";
import { Github, Google } from "../components/Icons";
import StartedAnimation from "../components/StartedAnimation";

export default function Home() {
  const [dev, setDev] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    sessionChange(setDev);
  }, []);

  useEffect(() => {
    dev && router.replace("/Home");
  }, [dev]);

  const SignWithGithub = () => {
    loginWithGitHub().catch((error) => {
      console.log(error);
    });
  };

  const SignWithGoogle = () => {
    loginWithGoogle().catch((error) => {
      console.log(error);
    });
  };
  return (
    <>
      <Head>
        <title>Codeparty</title>
        <meta
          name="Social media for devs"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction={{ base: "column", desktop: "row" }}
        justify="center"
        align="center"
        h="100vh"
        border="1px"
      >
        <Box h="100vh" bg="red" width="100%">
          <StartedAnimation />
        </Box>
        {/* <StartedAnimation /> */}
        {/* <Flex
          display="flex"
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          bg={{ base: "none", desktop: "black" }}
          h={{ base: "50%", desktop: "100vh" }}
        >
          <Text
            textAlign="center"
            fontWeight={800}
            fontSize={{ base: "25px", desktop: "30px" }}
          >
            Find New Devs With
            <span style={{ color: "#159BFF", marginLeft: "6px" }}>
              Codeparty
            </span>
          </Text>
          <Text
            textAlign="center"
            fontWeight={400}
            fontSize="15px"
            w="200px"
            mt="15px"
            color="gray"
          >
            Talk and share with others developers around the world
          </Text>
          <VStack
            p={{ base: 5, desktop: 12 }}
            h={{ base: "140px", desktop: "200px" }}
            width="350px"
          >
            {dev === undefined && <Text>loading</Text>}
            {dev === null && (
              <>
                <Center>
                  <Button
                    onClick={SignWithGithub}
                    variant={"primary"}
                    leftIcon={<Github />}
                    w="300px"
                    color="#fff"
                    mb="2"
                  >
                    <Center>
                      <Text>Sign in with Github</Text>
                    </Center>
                  </Button>
                </Center>
                <Center display={dev ? "none" : "flex"}>
                  <Button
                    onClick={SignWithGoogle}
                    variant={"outline"}
                    leftIcon={<Google />}
                    w="300px"
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button>
                </Center>
              </>
            )}
          </VStack>
        </Flex> */}
      </Flex>
    </>
  );
}
