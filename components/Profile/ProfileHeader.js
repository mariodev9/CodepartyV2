import { Box, Button, Flex, Avatar, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { SkillProfile } from "../Common/Skill";
import { Edit } from "../Icons";
import SectionBar from "../SectionBar";

export default function ProfileHeader({
  children,
  avatar,
  name,
  description,
  tecnologies,
}) {
  return (
    <Box>
      <SectionBar text={"Perfil"} back />
      <Flex direction="column" align="center">
        <Box>
          {children}
          <Avatar size={"2xl"} src={avatar} />
        </Box>
        <Text mt="15px" fontSize="20px">
          {name}
        </Text>
        <Box w="50%">
          <Text mt="20px" fontWeight={400} fontSize={"15px"} textAlign="center">
            {description}
          </Text>
        </Box>
        <HStack mt="20px" spacing={"5px"}>
          {tecnologies.map((item) => (
            <SkillProfile key={item.name} text={item.name} color={item.color} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
