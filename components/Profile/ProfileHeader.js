import { Box, Flex, Avatar, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { SkillProfile } from "../Common/Skill";
import SectionBar from "../SectionBar";

export default function ProfileHeader({
  children,
  avatar,
  name,
  description,
  tecnologies,
  position,
}) {
  return (
    <Box>
      <SectionBar text={"Perfil"} back={true} />
      <Flex direction="column" align="center">
        <Box>
          {children}
          <Avatar size={"2xl"} src={avatar} />
        </Box>
        <Text mt="15px" fontSize="20px">
          {name}
        </Text>
        <Text mt="2px" fontSize="16px" color={"#dddddd"}>
          {position}
        </Text>
        <Box w="50%">
          <Text mt="20px" fontWeight={400} fontSize={"15px"} textAlign="center">
            {description}
          </Text>
        </Box>
        <Flex
          mt="20px"
          justify={"center"}
          gap={1}
          spacing={"5px"}
          wrap={"wrap"}
        >
          {tecnologies.map((item) => (
            <SkillProfile key={item.name} text={item.name} color={item.color} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
