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
import { getUserStories } from "../../firebase/services/Stories";
import { Edit } from "../../components/Icons";
import { SkillsList } from "../../components/Common/SkillsList";

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
  const [description, setDescription] = useState("");
  const [tecnologies, setTecnologies] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    user && getProfile(user.userId, setUserProfileData);
  }, [user]);

  useEffect(() => {
    if (userProfileData) {
      setDescription(userProfileData.description);
      setTecnologies(userProfileData.tecnologies);
    }
  }, [userProfileData]);

  useEffect(() => {
    if (user && userProfileData) {
      getUserPublications(user.userId, setUserPublications);
      getUserStories(user.userId, setUserStories);
    }
  }, [userProfileData]);

  const goToCreateProfile = () => {
    router.replace("/Create/Profile");
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
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

  const handleUpdateProfile = () => {
    if (user) {
      updateProfile(user.userId, description, tecnologies);
    }
    onClose();
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
                    color="gray.50"
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
              <Flex p="45px 15px">
                {/* 2 */}
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  {userStories.map((item) => (
                    <GridItem key={item.id} layerStyle={"primaryBox"}>
                      <Image
                        width="300px"
                        height="300px"
                        src={item.img}
                        borderRadius="10px"
                      />
                    </GridItem>
                  ))}
                </Grid>
              </Flex>
            ) : (
              <Box p="20px 15px" bg={{ base: "black.100" }}>
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
            {/* Descripcion */}
            <Box w="100%" m="50px 0px">
              <FormLabel>
                <Flex justify={"space-between"}>
                  <Text color="gray.50" fontSize={"16px"}>
                    Descripción
                  </Text>
                  <CircularProgress
                    value={description.length}
                    max={100}
                    size={"20px"}
                    color={"brand.100"}
                  />
                </Flex>
              </FormLabel>
              <Textarea
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
                onChange={handleChange}
                value={description}
              />
            </Box>

            {/* Tecnologias */}
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

            <Divider mt="5px" />

            <Wrap p="30px 0px" display="flex" justify="center" align="center">
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
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              variant="ghost"
              colorScheme="green"
              onClick={() => handleUpdateProfile()}
            >
              Guardar Cambios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  );
}
