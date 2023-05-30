import {
  Box,
  Flex,
  Button,
  Textarea,
  Input,
  FormLabel,
  Image,
  Avatar,
  FormControl,
  Text,
  Spinner,
  CircularProgress,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addCode } from "../../firebase/services/Publications";
import { addStory, uploadImage } from "../../firebase/services/Stories";
import useProfile from "../../hooks/useProfile";
import useUser from "../../hooks/useUser";
import { Toggle } from "../Common/Toggle";
import { Back, Photo, Upload } from "../Icons";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function CreateForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const [file, setFile] = useState("");
  const [img, setImg] = useState("");
  const [publicationMode, setPublicationMode] = useState(false);

  const router = useRouter();
  const userId = useUser();
  const profile = useProfile();

  useEffect(() => {
    file && uploadImage(file, setImg);
  }, [file]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleDeleteImg = () => {
    setImg("");
    setFile("");
  };

  const handleAddStory = (event) => {
    event.preventDefault();
    addStory({
      creatorId: userId,
      avatar: profile.avatar,
      userName: profile.name,
      img: img,
    });
    handleDeleteImg();
  };

  const handleAddPublication = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);

    addCode({
      avatar: profile.avatar,
      content: message,
      creatorId: userId,
      userName: profile.name,
      img: img,
    });

    router.push("/Home");
  };

  const isButtonDisabled =
    !message.length && (status || COMPOSE_STATES.LOADING);

  return (
    <>
      {/* BACK nav */}
      <Box
        onClick={() => router.replace("/Home")}
        cursor="pointer"
        display={{ base: "flex", desktop: "none" }}
        p="20px 10px"
      >
        <Back width="30px" height="30px" />
      </Box>
      {/* Back nav */}

      {profile ? (
        <>
          <Tabs variant="soft-rounded" isFitted mt={"30px"}>
            <TabList px={4}>
              <Tab _selected={{ color: "white", bg: "brand.100" }}>
                Publicaciones
              </Tab>
              <Tab _selected={{ color: "white", bg: "brand.100" }}>
                Historias
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel pb={"40px"}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Flex>
                    <Box pr="10px">
                      <Avatar src={profile?.avatar} size="md" />
                    </Box>
                    <FormControl>
                      <Box>
                        <Box
                          border="1px"
                          borderColor="gray.100"
                          borderRadius="20px"
                          p="10px"
                        >
                          <Textarea
                            placeholder="¿Qué está pasando?"
                            type="textarea"
                            onChange={handleChange}
                            value={message}
                            border="none"
                            resize="none"
                            _focusVisible={{
                              boxShadow: "none",
                            }}
                            maxLength={120}
                          />

                          {img && (
                            <Box>
                              <Button
                                borderRadius="99px"
                                onClick={handleDeleteImg}
                                position="absolute"
                                bg="red.400"
                                zIndex="2"
                                _hover={{
                                  bg: "gray",
                                }}
                              >
                                X
                              </Button>
                              <Image
                                src={img}
                                width={"100%"}
                                borderRadius="10px"
                              />
                            </Box>
                          )}
                        </Box>
                        <Flex
                          align={"center"}
                          justify="space-between"
                          mt="10px"
                        >
                          <Box>
                            {!img && (
                              <FormLabel htmlFor="file-input" cursor="pointer">
                                <Photo />
                              </FormLabel>
                            )}
                          </Box>
                          {file && !img && (
                            <Box w="100%">
                              <Spinner color="brand.100" />
                            </Box>
                          )}
                          <Box>
                            <CircularProgress
                              value={message.length}
                              max={120}
                              size={"20px"}
                              color={"brand.100"}
                              p="0px 10px"
                            />
                            <Button
                              disabled={isButtonDisabled}
                              onClick={handleAddPublication}
                              variant="primary"
                              p="12px 32px"
                            >
                              Compartir
                            </Button>
                          </Box>
                        </Flex>
                      </Box>
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
                    </FormControl>
                  </Flex>
                </motion.div>
              </TabPanel>
              <TabPanel>
                <Flex p="45px 15px">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <Flex
                      justify={"center"}
                      align={"center"}
                      direction="column"
                    >
                      <Flex
                        justify={"center"}
                        align={"center"}
                        direction={"column"}
                        p="15px"
                        w={{ base: "250px", desktop: "400px" }}
                        h={{ base: "250px", desktop: "350px" }}
                        border="1px"
                        borderColor={"gray.50"}
                        borderRadius={"20px"}
                      >
                        {img && (
                          <Box>
                            <Button
                              borderRadius="full"
                              onClick={handleDeleteImg}
                              position="absolute"
                              zIndex="2"
                              bg="red.400"
                              _hover={{
                                bg: "gray",
                              }}
                            >
                              X
                            </Button>
                            <Image
                              src={img}
                              width={"100%"}
                              borderRadius="10px"
                            />
                          </Box>
                        )}

                        {!img && (
                          <>
                            <Text mb="10px" color="gray.50">
                              Subí una historia
                            </Text>
                            <FormLabel htmlFor="file-input" cursor="pointer">
                              <Upload width="30px" height="30px" />
                            </FormLabel>
                          </>
                        )}
                      </Flex>
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
                      <Button
                        disabled={!img}
                        onClick={handleAddStory}
                        variant="primary"
                        p="12px 32px"
                        mt="20px"
                      >
                        Compartir
                      </Button>
                    </Flex>
                  </motion.div>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      ) : (
        <Flex align={"center"} justify={"center"} h="70vh" color={"brand.100"}>
          <Spinner />
        </Flex>
      )}
    </>
  );
}
