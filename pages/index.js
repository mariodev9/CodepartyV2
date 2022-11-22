import { useEffect, useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Flex,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  loginWithGitHub,
  loginWithGoogle,
  sessionChange,
} from "../firebase/services/User";
import { useRouter } from "next/router";
import { Github, Google } from "../components/Icons";
import StartedAnimation from "../components/StartedAnimation";

export default function Home() {
  const [dev, setDev] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    sessionChange(setDev);
  }, [dev]);

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
      >
        <StartedAnimation />
        <Flex
          display="flex"
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          bg={{ base: "none", desktop: "black" }}
          h={{ base: "50%", desktop: "100vh" }}
          w="400px"
        >
          <Box width="290px">
            <Text
              textAlign="center"
              fontWeight={800}
              fontSize={{ base: "25px", desktop: "30px" }}
            >
              {/* Agregar gradient a letras (probar efecto) */}
              Find New Devs With
              <span style={{ color: "brand.100", marginLeft: "6px" }}>
                Codeparty
              </span>
            </Text>
            <Text
              textAlign="center"
              fontWeight={400}
              fontSize="15px"
              mt="15px"
              color="gray"
            >
              Talk and share with others developers around the world
            </Text>
          </Box>
          <VStack
            p={{ base: 5, desktop: 12 }}
            h={{ base: "140px", desktop: "200px" }}
            width="350px"
          >
            {dev !== null && <Spinner color="brand.100" />}
            {dev === null && (
              <>
                <Center>
                  <Button
                    onClick={SignWithGithub}
                    variant={"primary"}
                    leftIcon={<Github />}
                    w="250px"
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
                    w="250px"
                  >
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button>
                </Center>
              </>
            )}
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}
