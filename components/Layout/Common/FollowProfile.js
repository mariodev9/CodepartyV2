import {
  Avatar,
  Box,
  Button,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const FollowProfile = () => {
  const router = useRouter();
  return (
    <LinkBox
      cursor={"pointer"}
      _hover={{ bg: "gray.100", transitionDuration: "0.3s" }}
      w={"full"}
      p={"5px 10px"}
      borderRadius={"20px"}
    >
      <LinkOverlay as={NextLink} href={`/Profile/J9vCuWsgRsM7dt1Atl4whIoTjse2`}>
        <Flex gap={3} align={"center"}>
          <Avatar src="https://avatars.githubusercontent.com/u/85541756?v=4" />
          <Box>
            <Text fontSize={"15px"} fontWeight={700}>
              Luciano Mariotti{" "}
            </Text>
            <Text color={"#71767b"} fontSize={"15px"} fontWeight={"normal"}>
              CEO
            </Text>
          </Box>
        </Flex>
      </LinkOverlay>
    </LinkBox>
    // <HStack spacing={"3"} align={"center"}>
    //   <Avatar src="https://avatars.githubusercontent.com/u/85541756?v=4" />
    //   <Box>
    //     <Text>Luciano Mariotti</Text>
    //     <Text fontSize={"14px"} fontWeight={400} color="gray.50">
    //       @frontdev
    //     </Text>
    //   </Box>
    //   <Link href={"/Profile/J9vCuWsgRsM7dt1Atl4whIoTjse2"}>
    //     <a>
    //       <Button
    //         variant={"primary"}
    //         h="30px"
    //         // onClick={() => router.replace("/Profile/J9vCuWsgRsM7dt1Atl4whIoTjse2")}
    //       >
    //         Ver perfil
    //       </Button>
    //     </a>
    //   </Link>
    // </HStack>
  );
};
