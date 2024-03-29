import { useState, useEffect } from "react";
import {
  addStory,
  listenLatestStories,
  uploadImage,
} from "../../../firebase/services/Stories";
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
import { settings } from "../../../styleSettings";
import useUser from "../../../hooks/useUser";
import useProfile from "../../../hooks/useProfile";
import { Add, Cross, Upload } from "../../Icons";
import Story from "./Story";
import { Stories } from "../models";

const STORIES_STATE = {
  NOT_KNOWN: undefined,
};

const Stories:React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [otherUserStories, setOtherUserStories] = useState<Array<Stories>>(STORIES_STATE.NOT_KNOWN);
  const [myStories, setMyStories] = useState(STORIES_STATE.NOT_KNOWN);
  const [img, setImg] = useState("");
  const [file, setFile] = useState(undefined);


  const userId = useUser();
  const profile = useProfile();
  // user
  useEffect(() => {
    if (profile) {
      listenLatestStories(setOtherUserStories, setMyStories, profile.userId);
    }
  }, [profile]);

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
      creatorId: userId,
      avatar: profile.avatar,
      userName: profile.name,
      img: img,
    });
    handleDeleteImg();
    onClose();
  };

  return (
    <>
      <Box p="15px 0px">
        {otherUserStories === STORIES_STATE.NOT_KNOWN ? (
          <Flex h="100px" p={5} justify="center" align={"center"}>
            <Spinner color="brand.100" size="xs" />
          </Flex>
        ) : (
          <>
            <Slider {...settings}>
              <Flex p={5}>
                {myStories.length !== 0 ? (
                  <>
                    <Story
                      avatar={myStories[0].avatar}
                      stories={myStories[0].stories}
                    />
                  </>
                ) : (
                  <>
                    <Input
                      type="file"
                      accept="image/png, .jpeg, .jpg"
                      name="Add photo"
                      id="file-input"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      display="none"
                    />
                    <FormLabel htmlFor="file-input" cursor="pointer">
                      <Avatar
                        src={profile?.avatar}
                        size="lg"
                        border="2px solid #4DB0FA"
                        onClick={onOpen}
                      >
                        <AvatarBadge
                          boxSize="1em"
                          border="2px"
                          bg="#4DB0FA"
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

              {otherUserStories.map((item, key) => (
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

export default Stories
