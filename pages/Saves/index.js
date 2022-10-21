import { Box, Divider, Flex, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/Layout";
import SectionBar from "../../components/SectionBar";

export default function Saves() {
  return (
    <Layout>
      <SectionBar text={"Guardados"} back></SectionBar>
      <Wrap spacing={"25px"} justify={"center"}>
        <WrapItem layerStyle={"primaryBox"} h="150px" w="200px" />
        <WrapItem layerStyle={"primaryBox"} h="150px" w="200px" />
        <WrapItem layerStyle={"primaryBox"} h="150px" w="200px" />
        <WrapItem layerStyle={"primaryBox"} h="150px" w="200px" />
        <WrapItem layerStyle={"primaryBox"} h="150px" w="200px" />
      </Wrap>
    </Layout>
  );
}
