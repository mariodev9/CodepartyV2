import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Logo404 } from "../../components/Icons";
import Layout from "../../components/Layout";
import SectionBar from "../../components/SectionBar";

export default function MensajesPage() {
  return (
    <>
      <Layout>
        <SectionBar text={"Mensajes"} back />

        <Flex direction="column" h="100vh" justify={"center"} align={"center"}>
          <Logo404 width="70px" height="70" />
          <Text pt="15px" fontSize={"40px"}>
            Proximamente
          </Text>
        </Flex>
      </Layout>
    </>
  );
}
