import { Box, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Back } from "./Icons";

interface SectionBarProps {
  text: string
  back: boolean
}

const SectionBar:React.FC<SectionBarProps> = ({ text, back }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <Box display={"flex"} mb="50px">
      <Box
        position="fixed"
        zIndex="3"
        w={{ base: "100%", tablet: "70%", desktop: "50%" }}
        h="50px"
        bg="#22212475"
        backdropFilter="blur(20px)"
        p="10px"
      >
        <Flex align="center">
          <Box onClick={handleBack} cursor="pointer" mr="10px">
            {back && <Back width="28px" height="28px" />}
          </Box>
          <Text
            fontWeight="700"
            fontSize="20px"
            letterSpacing="1px"
            p="0px 10px"
          >
            {text}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default SectionBar