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
  Image,
  Box,
  UseDisclosureProps,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { StoryData } from "../models";


interface Props {
  avatar:string
  stories: Array<StoryData>
}

const Story:React.FC<Props> = ({ avatar, stories })  => {
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
          <ModalBody  >
            <Flex border={"1px solid red"} justify="center" align="center" h="80vh">
              <Box w="100%">
                <Slider>
                  {stories.map((item, key) => (
                    <Box m="50px 0px" p="5px" key={key}>
                      <Image
                        h={{ base: "200px", desktop: "400px" }}
                        src={item.img}
                        borderRadius="10px"
                      />
                    </Box>
                  ))}
                </Slider>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Story