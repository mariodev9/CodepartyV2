import React, { useState, useEffect } from "react";
import { Add, Upload } from "../../../components/Icons";
import useUser from "../../../hooks/useUser";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Text,
  HStack,
  Input,
  FormLabel,
  Textarea,
  CircularProgress,
  Wrap,
  WrapItem,
  Divider,
  Button,
  Spinner,
  FormControl,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { Skill } from "../../../components/Common/Skill";
import { createProfile } from "../../../firebase/services/User";
import { useRouter } from "next/router";
import { SkillsList } from "../../../components/Common/SkillsList";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../../firebase/services/Stories";

export default function CreateProfilePage() {
  const user = useUser();
  const router = useRouter();
  const [tecnologies, setTecnologies] = useState([]);
  const [avatar, setAvatarImage] = useState("");
  const [avatarFile, setAvatarFile] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const descriptionText = watch("description");
  // const avatarArchivo = watch("avatar");

  useEffect(() => {
    avatarFile && uploadImage(avatarFile, setAvatarImage);

    // console.log(avatarArchivo?.files[0], "HOOK FORM");
  }, [avatarFile]);

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

  const handleDeleteImg = () => {
    setAvatarImage("");
    setAvatarFile("");
  };

  const handleCreateProfileForm = (data) => {
    const { userId } = user;
    const profileData = { ...data, avatar, tecnologies };
    createProfile(userId, profileData);
    router.replace("/Profile");
  };

  return (
    <>
      {user ? (
        <Flex justify={"center"}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Flex
              direction={"column"}
              pb="30px"
              width={{ base: "100%", tablet: "350px" }}
              p="60px 15px"
            >
              <form
                onSubmit={handleSubmit((data) => {
                  handleCreateProfileForm(data);
                })}
              >
                <Flex justify={"center"} align={"center"} gap={"20px"}>
                  {avatar && (
                    <Image
                      src={avatar}
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

                <FormControl>
                  {/* Username Input */}
                  <FormLabel
                    mt="15px"
                    color="gray.50"
                    fontSize={"16px"}
                    htmlFor="name"
                  >
                    Nombre de usuario
                  </FormLabel>
                  <Input
                    id="name"
                    layerStyle={"primaryBox"}
                    bg="black.50"
                    border="none"
                    fontSize={{ base: "20px", desktop: "18px" }}
                    fontWeight={600}
                    {...register("name", {
                      required: "This is required",
                    })}
                  />
                </FormControl>

                <FormControl>
                  {/* Description Input */}
                  <Box w="100%" mt="50px">
                    <Flex
                      justify={"space-between"}
                      align={"center"}
                      p="5px 0px"
                    >
                      <FormLabel
                        mt="15px"
                        color="gray.50"
                        fontSize={"16px"}
                        htmlFor="name"
                      >
                        Descripcion
                      </FormLabel>
                      <CircularProgress
                        value={descriptionText.length}
                        max={100}
                        size={"20px"}
                        color={"brand.100"}
                      />
                    </Flex>
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
                      })}
                    />
                  </Box>
                </FormControl>

                {/* Tecnologies List */}
                <Box w="100%" mt="30px">
                  <Flex justify={"space-between"}>
                    <Text color="gray.50" fontSize={"16px"}>
                      Stack
                    </Text>
                    <Text color="gray.50" fontSize={"16px"}>
                      {tecnologies.length}/4
                    </Text>
                  </Flex>
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
                <Flex justify={"center"}>
                  <Button
                    w={"full"}
                    variant="primary"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Crear usuario
                  </Button>
                </Flex>
              </form>
            </Flex>
          </motion.div>
        </Flex>
      ) : (
        <Flex h="100vh" justify="center" align="center">
          <Spinner color="brand.100" />
        </Flex>
      )}
    </>
  );
}
