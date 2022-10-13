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
          <Flex h="100px" p={5} justify="center">
            <Spinner />
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
