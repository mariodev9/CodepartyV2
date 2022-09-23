import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  Label,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../styleSettings";
import useUser from "../hooks/useUser";
import StorieBottom from "./Svg/StorieBottom";
import { Photo } from "./Icons";
import { addStory, listenLatestStories, uploadImage } from "../firebase/Client";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState("");
  const [file, setFile] = useState("");
  const user = useUser();

  useEffect(() => {
    if (user) {
      listenLatestStories(setStories);
    }
  }, [user]);

  useEffect(() => {
    file && uploadImage(file, setImg);
  }, [file]);

  const handleDeleteImg = () => {
    setImg("");
    setFile("");
  };

  const handleUpload = (event) => {
    event.preventDefault();

    addStory({
      avatar: user.avatar,
      userName: user.name,
      img: img,
    });
    handleDeleteImg();
    onClose();
  };
  const back =
    "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";

  return (
    <>
      <Box p="15px 0px">
        <Slider {...settings}>
          <FormLabel htmlFor="file-input" cursor="pointer">
            <Box p={5} onClick={onOpen} cursor="pointer" htmlFor="file-input">
              <Input
                type="file"
                name="Add photo"
                id="file-input"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                display="none"
              />
              <Flex
                border="2px"
                borderColor="brand.100"
                borderRadius="20px"
                alignItems="end"
                justifyContent="center"
                w={{
                  base: "110px",
                  md: "110px",
                }}
                h={{
                  base: "130px",
                  md: "120px",
                }}
              >
                Add Storie
              </Flex>
            </Box>
          </FormLabel>

          {stories.map((item) => (
            <Box p={5} key={item.id}>
              <Flex
                layerStyle="stories"
                alignItems="end"
                justifyContent="center"
                bgImage={`url('${item.img}')`}
              >
                <Avatar
                  src={item.avatar}
                  w="23px"
                  h="23px"
                  position="absolute"
                  bottom="22%"
                />
                <Text
                  position="absolute"
                  bottom="14%"
                  fontSize="7px"
                  fontWeight={300}
                >
                  {item.userName}
                </Text>
                <StorieBottom />
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "full", desktop: "lg" }}
      >
        <ModalOverlay />
        <ModalContent bg="black.50">
          <ModalHeader>Add storie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* component */}
            {img && (
              <Box>
                <Button
                  borderRadius="99px"
                  position="absolute"
                  zIndex="2"
                  _hover={{
                    bg: "gray",
                  }}
                  onClick={handleDeleteImg}
                >
                  X
                </Button>
                <Image src={img} width={250} height={250} borderRadius="10px" />
              </Box>
            )}
            {/* component */}

            {!img && (
              <FormLabel htmlFor="file-input" cursor="pointer" mt="20px">
                <Photo />
              </FormLabel>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleUpload}>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
