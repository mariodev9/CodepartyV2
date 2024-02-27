import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { sessionChange } from "../firebase/services/User";
import { useRouter } from "next/router";
import { Logo } from "../components/Icons";
import { useForm } from "react-hook-form";
import { Login } from "../firebase/services/Auth";
import Link from "next/link";
import { motion } from "framer-motion";
import { Skill } from "../components/Common/Skill";

export const inputStyle = {
  w: "100%",
  py: "22px",
  borderRadius: "full",
  mb: "25px",
  borderColor: "gray.600",
  borderWidth: "2px",
};

export default function Home() {
  const [dev, setDev] = useState(undefined);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    sessionChange(setDev);
    dev && router.replace("/Home");
  }, [dev]);

  const SkillList = [
    {
      title: "Javascript",
      color: "#FFF500",
      rotate: 20,
      top: -20,
      left: 40,
      bottom: 0,
      right: 0,
    },
    {
      title: "Php",
      color: "#A09EFF",
      rotate: -20,
      top: -160,
      left: 0,
      bottom: 0,
      right: 0,
    },
    {
      title: "Java",
      color: "#FE2222",
      rotate: 20,
      top: -40,
      left: -150,
      bottom: 0,
      right: 0,
    },
    {
      title: "React",
      color: "#11B8FF",
      rotate: 20,
      top: 160,
      left: 0,
      bottom: 0,
      right: 20,
    },
    {
      title: "Node.js",
      color: "#64BB4E",
      rotate: -20,
      top: 10,
      left: -200,
      bottom: 0,
      right: 0,
    },
    {
      title: "Python",
      color: "#F1C144",
      rotate: -25,
      top: 100,
      left: 170,
      bottom: 0,
      right: 0,
    },
  ];

  const SkillBox = ({ color, text, rotate, right, bottom, top, left }) => (
    <Box
      bg={color}
      color={"#000"}
      p={"5px 10px"}
      fontWeight={500}
      borderRadius={"2xl"}
      pos={"relative"}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      transform={`rotate(${rotate}deg)`}
      textAlign={"center"}
    >
      <Box>{text}</Box>
    </Box>
  );

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

      <Flex
        direction={{ base: "column", desktop: "row" }}
        justify="start"
        align="center"
        h="100vh"
        bg={"#000"}
        pt={{ base: "30px", desktop: "0px" }}
        px={{ base: "0px", desktop: "80px" }}
      >
        {/* 1er Div*/}
        <Flex
          direction={"column"}
          align="center"
          width={{ base: "100%", desktop: "40%" }}
          p="0px 50px"
        >
          <VStack spacing={6}>
            {dev !== null ? (
              <Spinner color="brand.100" />
            ) : (
              <>
                {/* Login */}
                <Box mb={"20px"}>
                  <Text fontWeight={600} fontSize="3rem">
                    Bienvenido!
                  </Text>
                  <Text fontWeight={400} fontSize="sm" textAlign={"center"}>
                    Por favor, ingresa tus datos.
                  </Text>
                </Box>
                <form>
                  <FormControl px={"24px"}>
                    {/* <FormLabel>Email </FormLabel> */}
                    <Input
                      id="loginEmail"
                      type={"email"}
                      {...register("email")}
                      placeholder="Email"
                      {...inputStyle}
                    />
                    {/* <FormLabel mt="10px">Contraseña</FormLabel> */}
                    <Input
                      id="loginPassword"
                      type={"password"}
                      {...register("password")}
                      placeholder="Contraseña"
                      {...inputStyle}
                    />

                    <Button
                      onClick={handleSubmit((data) => {
                        Login(data, setError);
                      })}
                      w="full"
                      variant={"primary"}
                      fontWeight={"medium"}
                    >
                      Entrar
                    </Button>
                    <Box h="50px">
                      {error && <Text color={"red.400"}>{error}</Text>}
                    </Box>
                  </FormControl>
                </form>

                {/* CreateAccount */}
                <Center
                  display={dev ? "none" : "flex"}
                  fontSize={{ base: "12px", desktop: "sm" }}
                >
                  <Text fontWeight="400">Todavia no tienes una cuenta?</Text>
                  <Link href={"Create/Account"}>
                    <Text
                      fontWeight="600"
                      padding="5px"
                      color="#159BFF"
                      cursor={"pointer"}
                    >
                      Crea una!
                    </Text>
                  </Link>
                </Center>
              </>
            )}
          </VStack>
        </Flex>

        {/* 2do Div */}
        <Flex
          display={{ base: "none", desktop: "flex" }}
          width={"60%"}
          align={"center"}
          justify={"center"}
          h={"100vh"}
          p={"25px 0px"}
        >
          <Flex
            bg={"black.100"}
            h={"100%"}
            w={"80%"}
            align={"center"}
            borderRadius={"40px"}
            justify={"center"}
            bgGradient="linear(to-br, #141414, #051931)"
          >
            <VStack spacing={5}>
              <Logo height={"70px"} />
              <Text fontSize={"2xl"} fontWeight={500}>
                Codeparty
              </Text>
              <Text
                fontSize={"sm"}
                fontWeight={400}
                w={"80%"}
                textAlign={"center"}
              >
                Compartí e interactua con otros desarrolladores alrededor del
                mundo
              </Text>
              <Box pos={"absolute"}>
                {SkillList.map((skill) => (
                  <SkillBox
                    text={skill.title}
                    color={skill.color}
                    top={skill.top}
                    left={skill.left}
                    right={skill.right}
                    bottom={skill.bottom}
                    rotate={skill.rotate}
                  />
                ))}
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
