import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  AvatarBadge,
  Spinner,
  Text,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../styleSettings";
import useUser from "../hooks/useUser";
import { Add, Cross, Photo, Upload } from "./Icons";
import { addStory, listenLatestStories, uploadImage } from "../firebase/Client";
import Story from "./Story";

const STORIES_STATE = {
  NOT_KNOWN: undefined,
};

export default function Stories() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [stories, setStories] = useState(STORIES_STATE.NOT_KNOWN);
  const [userStories, setUserStories] = useState(STORIES_STATE.NOT_KNOWN);
  const [img, setImg] = useState("");
  const [file, setFile] = useState("");

  const user = useUser();

  useEffect(() => {
    if (user) {
      listenLatestStories(setStories, setUserStories, user.userId);
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
        {stories === STORIES_STATE.NOT_KNOWN ? (
          <Flex h="100px" p={5} justify="center" align={"center"}>
            <Spinner color="brand.100" size="xs" />
          </Flex>
        ) : (
          <>
            <Slider {...settings}>
              <Flex p={5}>
                {userStories.length !== 0 ? (
                  <>
                    <Story
                      avatar={userStories[0].avatar}
                      stories={userStories[0].stories}
                    />
                  </>
                ) : (
                  <>
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
                        src={user?.avatar}
                        size="lg"
                        border="2px solid #4DB0FA"
                        onClick={onOpen}
                      >
                        <AvatarBadge
                          boxSize="1em"
                          border="0px"
                          bg="black.50"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Add />
                        </AvatarBadge>
                      </Avatar>
                    </FormLabel>
                  </>
                )}
              </Flex>

              {stories.map((item, key) => (
                <Flex p={5} key={key} h="100px">
                  <Story avatar={item.avatar} stories={item.stories} />
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
          <ModalHeader mt="20px">
            <Text textAlign={"center"}>Subí una historia</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {img && (
              /* component */

              <Flex>
                <Button
                  borderRadius="full"
                  position="absolute"
                  _hover={{
                    bg: "red.500",
                  }}
                  onClick={handleDeleteImg}
                >
                  <Cross />
                </Button>
                <Image src={img} width={"100%"} borderRadius="10px" />
              </Flex>
            )}

            {!img && !file && (
              <FormLabel htmlFor="file-input" cursor="pointer" mt="20px">
                <Flex w="100%" justify="center">
                  <Upload height="30px" width="30px" />
                </Flex>
              </FormLabel>
            )}
            {file && !img && (
              <Flex w="100%" justify="center" align="center">
                <Spinner color="brand.100" />
              </Flex>
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
