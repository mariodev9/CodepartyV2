import { Avatar, Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import useUser from "../../hooks/useUser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Code from "../../components/Code";
import Layout from "../../components/Layout";
import StorieBottom from "../../components/Svg/StorieBottom";
export default function Home() {
  const [session, onSession] = useState(true);
  const user = useUser();
  const router = useRouter();

  const img =
    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.8,
    slidesToScroll: 2,
    arrows: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3.4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.8,
        },
      },
    ],
  };
  return (
    <>
      <Layout>
        <Text mt="20px">Stories</Text>
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
        <Text m="20px 0 15px 0">Last Codes</Text>
        {[1, 2, 3, 4, 5, 6].map((key) => (
          <Code key={key} />
        ))}
      </Layout>
    </>
  );
}
