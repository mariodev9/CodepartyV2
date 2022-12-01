import { Avatar, Box, Button, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const FollowProfile = () => {
  const router = useRouter();
  return (
    <HStack spacing={"3"} align={"center"}>
      <Avatar src="https://avatars.githubusercontent.com/u/85541756?v=4" />
      <Box>
        <Text>Luciano Mariotti</Text>
        <Text fontSize={"14px"} fontWeight={400} color="gray.50">
          @frontdev
        </Text>
      </Box>
      <Link href={"/Profile/J9vCuWsgRsM7dt1Atl4whIoTjse2"}>
        <a>
          <Button
            variant={"primary"}
            h="30px"
            // onClick={() => router.replace("/Profile/J9vCuWsgRsM7dt1Atl4whIoTjse2")}
          >
            Ver perfil
          </Button>
        </a>
      </Link>
    </HStack>
  );
};
