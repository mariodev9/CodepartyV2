import { Box, Button, Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { logOut } from "../../firebase/firebaseConfig";
import useUser from "../../hooks/useUser";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Code from "../../components/Code";
import Layout from "../../components/Layout";

export default function Home() {
  const [session, onSession] = useState(true);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  const handleLogOut = () => {
    logOut();
    onSession(false);
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    arrows: false,
    variableWidth: false,
  };
  return (
    <>
      <Layout>
        <Button onClick={handleLogOut}>Log Out</Button>
        <Text mt="20px">Stories</Text>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((key) => (
            <Box p={5} key={key}>
              <Box layerStyle="stories"></Box>
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
