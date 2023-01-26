import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  LinkBox,
  LinkOverlay,
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
import { Github, Google, Logo } from "../components/Icons";
// import StartedAnimation from "../components/StartedAnimation";
import { useForm } from "react-hook-form";
import { Login } from "../firebase/services/Auth";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [dev, setDev] = useState(undefined);
  const [error, setError] = useState("");

  const MotionFlex = motion(Flex);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    sessionChange(setDev);
  }, [dev]);

  useEffect(() => {
    dev && router.replace("/Home");
  }, [dev]);

  return (
    <>
      <Head>
        <title>Codeparty</title>
        <meta name="Social media for devs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display={{ base: "block", desktop: "none" }} h="10vh" bg="black">
        <Flex
          borderBottomLeftRadius="40px"
          borderBottomRightRadius="40px"
          bg={"black.100"}
          h="100%"
          justify={"center"}
          align="center"
        >
          <Logo />
          <Text p="0px 20px" fontSize={"20px"}>
            Codeparty
          </Text>
        </Flex>
      </Box>

      <MotionFlex
        direction={{ base: "column", desktop: "row" }}
        justify="start"
        align="center"
        h="100vh"
        bg={"black.200"}
        pt={{ base: "30px", desktop: "0px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* 1er Div*/}
        <Flex
          direction={"column"}
          align="center"
          width={{ base: "100%", desktop: "40%" }}
          p="0px 50px"
        >
          <Text fontWeight={600} fontSize="3rem">
            Bienvenido!
          </Text>
          <Text fontWeight={400} fontSize="15px" m="10px 0px">
            Por favor, ingresa tus datos.
          </Text>
          <VStack spacing={"15px"}>
            {dev !== null ? (
              <Spinner color="brand.100" />
            ) : (
              <>
                {/* Login */}
                <FormControl>
                  <FormLabel>Email </FormLabel>
                  <Input
                    id="loginEmail"
                    type={"email"}
                    {...register("email")}
                    w={"100%"}
                  />
                  <FormLabel mt="10px">Contraseña </FormLabel>
                  <Input
                    id="loginPassword"
                    type={"password"}
                    {...register("password")}
                    w={"100%"}
                  />

                  <Button
                    onClick={handleSubmit((data) => {
                      Login(data, setError);
                    })}
                    w="full"
                    variant={"primary"}
                    mt="25px"
                  >
                    Entrar
                  </Button>
                  <Box h="50px">
                    {error && <Text color={"red.400"}>{error}</Text>}
                  </Box>
                </FormControl>

                {/* CreateAccount */}
                <Center
                  display={dev ? "none" : "flex"}
                  fontSize={{ base: "12px", desktop: "18px" }}
                >
                  <Text>Todavia no tienes una cuenta?</Text>
                  <Link href={"Create/Account"}>
                    <Text
                      fontWeight="600"
                      padding="5px"
                      color="#159BFF"
                      cursor={"pointer"}
                    >
                      Registrate
                    </Text>
                  </Link>
                </Center>
              </>
            )}
          </VStack>
        </Flex>

        {/* 2do Div */}
        <Box
          display={{ base: "none", desktop: "block" }}
          width={"60%"}
          h="100vh"
          bg={"black.100"}
          borderTopLeftRadius="40px"
          borderBottomLeftRadius="40px"
        ></Box>
      </MotionFlex>
    </>
  );
}
