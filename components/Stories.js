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
  AvatarBadge,
  SkeletonCircle,
  Spinner,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../styleSettings";
import useUser from "../hooks/useUser";
import StorieBottom from "./Svg/StorieBottom";
import { Add, Photo } from "./Icons";
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
      creatorId: user.userId,
      avatar: user.avatar,
      userName: user.name,
      img: img,
    });
    handleDeleteImg();
    onClose();
  };

  return (
    <>
      <Box p="15px 0px">
        {stories.length === 0 ? (
          <Flex h="100px" p={5} justify="center">
            <Spinner />
          </Flex>
        ) : (
          <>
            <Slider {...settings}>
              <Flex p={5}>
                <Input
                  type="file"
                  name="Add photo"
                  id="file-input"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  display="none"
                />
                <FormLabel htmlFor="file-input" cursor="pointer">
                  <Avatar
                    src={""}
                    size="lg"
                    border="2px solid #4DB0FA"
                    onClick={onOpen}
                  >
                    <AvatarBadge
                      boxSize="1em"
                      color="green"
                      border="2px"
                      bg="brand.100"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Add />
                    </AvatarBadge>
                  </Avatar>
                </FormLabel>
              </Flex>
              {stories.map((item, key) => (
                <Flex p={5} key={key} h="100px">
                  <Avatar src={item.avatar} size="lg" border="1px solid #333" />
                </Flex>
              ))}
            </Slider>
          </>
        )}
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
            {img && (
              /* component */

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

            {!img && (
              <FormLabel htmlFor="file-input" cursor="pointer" mt="20px">
                <Photo />
              </FormLabel>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              disabled={!img}
              onClick={handleUpload}
              variant="primary"
              h="25px"
            >
              Share
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
