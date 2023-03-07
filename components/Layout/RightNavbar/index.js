import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  ShirtStoreIcon,
  PortfolioIcon,
  InmobiliariaIcon,
  GithubIcon,
  LinkedinIcon,
  WorldIcon,
} from "../../Icons";
import { FollowProfile } from "../Common/FollowProfile";
import FutureProyect from "../Common/FutureProyect";

export default function RightNavbar() {
  return (
    <>
      <Flex
        direction="column"
        display={{ base: "none", desktop: "flex" }}
        w="27%"
      >
        <Box position="fixed" w="27%" h="100vh" p="25px">
          <VStack align="start" spacing={"25px"}>
            <Text fontSize={"20px"}>Personas a seguir</Text>
            <FollowProfile />
            <Box mt="25px">
              <Flex align={"center"}>
                <GithubIcon />
                <Text p="0px 10px" fontWeight={400}>
                  <Link href="https://github.com/mariodev9/ " target={"_blank"}>
                    Github
                  </Link>
                </Text>
              </Flex>
              <Flex align={"center"} mt={"10px"}>
                <LinkedinIcon />
                <Text p="0px 10px" fontWeight={400}>
                  <Link
                    href="https://www.linkedin.com/in/luciano-mariotti/"
                    target={"_blank"}
                  >
                    Linkedin
                  </Link>
                </Text>
              </Flex>
              <Flex align={"center"} mt={"10px"}>
                <WorldIcon />
                <Text p="0px 10px" fontWeight={400}>
                  <Link href="https://mariodev2.vercel.app/" target={"_blank"}>
                    Portfolio
                  </Link>
                </Text>
              </Flex>
            </Box>
          </VStack>

          {/* Futuros Proyectos */}
          <VStack
            align="start"
            mt="25px"
            p="10px"
            spacing={"10px"}
            layerStyle="primaryBox"
          >
            <Text fontSize={"20px"}>Mis proximos proyectos</Text>
            <FutureProyect name={"Shirt Store"} status={"En desarrollo"}>
              <ShirtStoreIcon />
            </FutureProyect>

            <FutureProyect name={"E-commerce"} status={"En desarrollo"}>
              <PortfolioIcon />
            </FutureProyect>
            <FutureProyect name={"Inmobiliaria"} status={"Proximamente"}>
              <InmobiliariaIcon />
            </FutureProyect>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}
