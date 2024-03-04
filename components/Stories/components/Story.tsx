import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Flex,
  useDisclosure,
  Box,
  UseDisclosureProps,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { StoryData } from "../models";
import Image from "next/image";

interface Props {
  avatar: string;
  stories: Array<StoryData>;
}

const Story: React.FC<Props> = ({ avatar, stories }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Avatar
        src={avatar}
        onClick={onOpen}
        size="lg"
        border="1px solid #333"
        cursor="pointer"
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", desktop: "full" }}
      >
        <ModalOverlay />
        <ModalContent bg="rgba(255,255,255,0.1)" backdropFilter="blur(10px)">
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Box overflow={"hidden"} cursor={"grab"}>
              <Slider {...settings}>
                {stories.map((item, key) => (
                  <Flex
                    w={"full"}
                    h={"500px"}
                    justify={"center"}
                    p="5px"
                    key={key}
                  >
                    <Flex h={"full"} justify={"center"} align={"center"}>
                      <Box
                        width="350px"
                        height="500px"
                        overflow="hidden"
                        borderRadius="xl"
                        position="relative"
                      >
                        <Image
                          src={item.img}
                          alt="Descripción de la imagen"
                          layout="fill"
                          objectFit="cover"
                        />
                      </Box>
                    </Flex>
                  </Flex>
                ))}
              </Slider>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Story;
