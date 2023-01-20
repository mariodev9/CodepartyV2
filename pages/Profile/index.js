import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spinner,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Wrap,
  WrapItem,
  Divider,
  FormLabel,
  CircularProgress,
  Textarea,
  Input,
  Avatar,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import useUser from "../../hooks/useUser";
import SectionBar from "../../components/SectionBar";
import { motion } from "framer-motion";
import { getProfile, updateProfile } from "../../firebase/services/User";
import { useRouter } from "next/router";
import { Skill, SkillProfile } from "../../components/Common/Skill";
import { getUserPublications } from "../../firebase/services/Publications";
import Publication from "../../components/Publication";
import { Toggle } from "../../components/Common/Toggle";
import { getUserStories, uploadImage } from "../../firebase/services/Stories";
import { Edit, Upload } from "../../components/Icons";
import { SkillsList } from "../../components/Common/SkillsList";
import useProfile from "../../hooks/useProfile";
import { useForm } from "react-hook-form";

const LOADING_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

const USER_PROFILE_STATES = {
  NOT_KNOWN: undefined,
  NOT_PROFILE: false,
  HAVE_PROFILE: true,
};

export default function Profile() {
  const [timelineMode, setTimelineMode] = useState(false);
  const [userPublications, setUserPublications] = useState([]);
  const [userStories, setUserStories] = useState([]);
  const [userProfileData, setUserProfileData] = useState(
    USER_PROFILE_STATES.NOT_KNOWN
  );
  // Estados para el formulario
  const [descriptionInputValue, setDescription] = useState("");
  const [tecnologies, setTecnologies] = useState([]);
  const [username, setUsername] = useState("");
  // image
  const [avatarImage, setAvatarImage] = useState("");
  const [avatarFile, setAvatarFile] = useState("");

  // close modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const user = useUser();
  const profile = useProfile();

  useEffect(() => {
    avatarFile && uploadImage(avatarFile, setAvatarImage);
  }, [avatarFile]);

  useEffect(() => {
    user && getProfile(user.userId, setUserProfileData);
  }, [user]);

  useEffect(() => {
    if (userProfileData) {
      setValue("name", userProfileData.name);
      setValue("description", userProfileData.description);
      setTecnologies(userProfileData.tecnologies);
      setAvatarImage(userProfileData.avatar);
    }
  }, [userProfileData]);

  useEffect(() => {
    if (user && userProfileData) {
      getUserPublications(user.userId, setUserPublications);
      getUserStories(user.userId, setUserStories);
    }
  }, [userProfileData]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const descriptionText = watch("description");

  const goToCreateProfile = () => {
    router.replace("/Create/Profile");
  };

  const handleDeleteSkill = (tecnologieName) => {
    let arrayWithoutSkill = tecnologies.filter(
      (element) => element.name != tecnologieName
    );
    setTecnologies(arrayWithoutSkill);
  };

  const handleAddSkill = (text, color) => {
    let skillData = {
      name: text,
      color: color,
    };
    // No repeeat
    let isRepeat = tecnologies.some((element) => element.name === text);

    if (tecnologies.length < 4 && isRepeat === false) {
      setTecnologies([...tecnologies, skillData]);
    }
  };

  const onSubmitForm = (values) => {
    let DataProfileForUpdate = {
      name: values.name,
      description: values.description,
      tecnologies: tecnologies,
      avatar: avatarImage,
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        updateProfile(user.userId, DataProfileForUpdate);
        onClose();
        resolve();
      }, 500);
    });
  };

  return (
    <Layout>
      <Box bg={"brand.200"}>
        {userProfileData === USER_PROFILE_STATES.NOT_KNOWN && (
          <Flex
            h="100vh"
            justify="center"
            align="center"
            bg={{ base: "black.100" }}
          >
            <Spinner color="brand.100" />
          </Flex>
        )}

        {userProfileData === USER_PROFILE_STATES.NOT_PROFILE && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Flex justify="center" align="center" h="100vh">
              <Flex direction={"column"} justify={"center"}>
                <Text textAlign={"center"} fontSize={"2rem"}>
                  Bienvenido a codeparty!
                </Text>
                <Text textAlign={"center"}>
                  Crea tu perfil para que otros devs lo vean!
                </Text>
                <Button
                  mt="20px"
                  variant={"primary"}
                  onClick={goToCreateProfile}
                >
                  Crear Perfil
                </Button>
              </Flex>
            </Flex>
          </motion.div>
        )}

        {userProfileData && (
          <Box>
            {/* Component: ProfileHeader */}
            <Box>
              <SectionBar text={"Perfil"} back />
              <Flex direction="column" align="center">
                <Box mt="100px">
                  <Box position={"relative"} left="80%" top="25px">
                    <Button p="0px 0px" onClick={onOpen}>
                      <Edit />
                    </Button>
                  </Box>
                  <Image
                    src={userProfileData.avatar}
                    layerStyle={"primaryBox"}
                    h="100px"
                    w="100px"
                  />
                </Box>
                <Text mt="15px" fontSize="20px">
                  {userProfileData.name}
                </Text>
                <Box w="50%">
                  <Text
                    mt="20px"
                    fontWeight={400}
                    fontSize={"15px"}
                    textAlign="center"
                  >
                    {userProfileData.description}
                  </Text>
                </Box>
                <HStack mt="20px" spacing={"5px"}>
                  {userProfileData.tecnologies.map((item) => (
                    <SkillProfile
                      key={item.name}
                      text={item.name}
                      color={item.color}
                    />
                  ))}
                </HStack>
              </Flex>
            </Box>
            {/* Component: ProfileHeader */}
            <Flex justify={"center"} pt="30px" bg="black.100">
              {/* 1 */}
              <Toggle
                setPublicationMode={setTimelineMode}
                publicationMode={timelineMode}
              />
            </Flex>
            {timelineMode ? (
              <Flex p="60px 15px">
                {/* 2 */}
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  {userStories.map((item) => (
                    <GridItem
                      key={item.id}
                      layerStyle={"primaryBox"}
                      display="flex"
                      justifyContent={"center"}
                      alignContent="center"
                    >
                      <Image
                        height="200px"
                        src={item.img}
                        borderRadius="10px"
                      />
                    </GridItem>
                  ))}
                </Grid>
              </Flex>
            ) : (
              <Box p="50px 15px" bg={{ base: "black.100" }}>
                {userProfileData &&
                  userPublications.map(
                    ({
                      id,
                      userName,
                      avatar,
                      content,
                      createdAt,
                      img,
                      saves,
                      creatorId,
                    }) => (
                      <Publication
                        userOnSession={user?.userId}
                        creatorId={creatorId}
                        avatar={avatar}
                        id={id}
                        key={id}
                        content={content}
                        userName={userName}
                        img={img}
                        createdAt={createdAt}
                        saves={saves}
                      />
                    )
                  )}
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Modal Edit Profile */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"black.100"}>
          <ModalHeader>Editar Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justify={"center"} align={"center"} gap={"20px"}>
              {avatarImage && (
                <Image
                  src={avatarImage}
                  w={"100px"}
                  h="100px"
                  layerStyle="primaryBox"
                  borderRadius="10px"
                />
              )}
              <Box h="40px">
                <FormLabel htmlFor="avatar" cursor="pointer">
                  <Input
                    type="file"
                    id="avatar"
                    onChange={(e) => {
                      setAvatarFile(e.target.files[0]);
                    }}
                    display="none"
                  />
                  <Flex gap={"10px"}>
                    <Text color={"gray.300"}>Foto de perfil</Text>

                    <Upload strokeWidth={"2px"} />
                  </Flex>
                </FormLabel>
              </Box>
            </Flex>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name" m={"20px 0px"} fontSize={"16px"}>
                  Nombre de usuario
                </FormLabel>

                <Flex direction={"column"}>
                  <Input
                    id="name"
                    type={"text"}
                    layerStyle={"primaryBox"}
                    bg="black.50"
                    border="none"
                    fontSize={{ base: "20px", desktop: "18px" }}
                    fontWeight={600}
                    {...register("name", {
                      required: "Campo obligatorio",
                      minLength: {
                        value: 4,
                        message: "Longitud minima: 4 caracteres",
                      },
                    })}
                  />
                </Flex>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.description}>
                <Flex justify={"space-between"} align={"center"}>
                  <FormLabel
                    htmlFor="description"
                    m={"20px 0px"}
                    fontSize={"16px"}
                  >
                    Descripcion
                  </FormLabel>
                  <CircularProgress
                    value={descriptionText?.length}
                    max={100}
                    size={"20px"}
                    color={"brand.100"}
                  />
                </Flex>

                <Flex direction={"column"}>
                  <Textarea
                    id="description"
                    resize={"none"}
                    layerStyle={"primaryBox"}
                    bg="black.50"
                    border="none"
                    fontSize={{ base: "20px", desktop: "18px" }}
                    fontWeight={600}
                    h="130px"
                    borderRadius={"10px"}
                    _focus={{ borderColor: "white" }}
                    maxLength={100}
                    {...register("description", {
                      required: "This is required",
                      maxLength: {
                        value: 100,
                      },
                    })}
                  />
                </Flex>
                <FormErrorMessage>
                  {errors.description && errors.description.message}
                </FormErrorMessage>
              </FormControl>
              {/* Tecnologias */}
              <Box mt={"20px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"16px"}>Stack</Text>
                  <Text fontSize={"16px"}>{tecnologies.length}/4</Text>
                </Flex>
                <Wrap w="100%" display="flex" h={"50px"} justifyContent="start">
                  <Box mt="20px" p="10px">
                    {tecnologies.length === 0 ? (
                      <Box h="40px">
                        <Text fontSize={"14px"} color="gray.50">
                          Seleccione las tecnologías que mas te gusten!
                        </Text>
                      </Box>
                    ) : (
                      <Wrap w="100%" display="flex" justifyContent="start">
                        {tecnologies.map((item) => (
                          <WrapItem
                            key={item.name}
                            display="flex"
                            justify="center"
                            align="center"
                          >
                            <Skill
                              text={item.name}
                              color={item.color}
                              handleClick={handleDeleteSkill}
                            />
                          </WrapItem>
                        ))}
                      </Wrap>
                    )}
                    <Divider mt="5px" />
                  </Box>
                </Wrap>

                <Divider mt="5px" />

                <Wrap
                  p="30px 0px"
                  display="flex"
                  justify="center"
                  align="center"
                >
                  {SkillsList.map((item) => (
                    <WrapItem key={item.name}>
                      <Skill
                        text={item.name}
                        color={item.color}
                        handleClick={handleAddSkill}
                      />
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
              <Flex justify={"end"}>
                <Button
                  mt={4}
                  variant={"primary"}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Guardar Cambios
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Layout>
  );
}
