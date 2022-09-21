import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../styleSettings";
import useUser from "../hooks/useUser";
import StorieBottom from "../components/Svg/StorieBottom";

export default function Histories() {
  const user = useUser();
  const img =
    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

  return (
    <>
      <Text mt="20px" p="20px">
        Stories
      </Text>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
          <Box p={5} key={key}>
            <Flex
              layerStyle="stories"
              alignItems="end"
              justifyContent="center"
              bgImage={`url('${img}')`}
            >
              <Avatar
                src={user?.avatar}
                w="23px"
                h="23px"
                position="absolute"
                bottom="22%"
              />
              <Text position="absolute" bottom="14%" fontSize="7px">
                Luciano Mariotti
              </Text>
              <StorieBottom />
            </Flex>
          </Box>
        ))}
      </Slider>
    </>
  );
}
