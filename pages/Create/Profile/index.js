import React, { useState } from "react";
import { Add } from "../../../components/Icons";
import useUser from "../../../hooks/useUser";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Input,
  FormLabel,
  Textarea,
  CircularProgress,
  Wrap,
  WrapItem,
  Divider,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { Skill } from "../../../components/Common/Skill";
import { createProfile } from "../../../firebase/services/User";
import { useRouter } from "next/router";

const SkillsList = [
  {
    name: "Javascript",
    color: "#CFA22D",
  },
  {
    name: "Php",
    color: "#787cb4",
  },
  {
    name: "Java",
    color: "#0d8ac7",
  },
  {
    name: "Vue",
    color: "#00b77f",
  },
  {
    name: "React",
    color: "#5ed3f3",
  },
  {
    name: "Angular",
    color: "#fe140d",
  },
  {
    name: "HTML",
    color: "#e96228",
  },
  {
    name: "CSS",
    color: "#0068ba",
  },
  {
    name: "NodeJS",
    color: "#3c823b",
  },
  {
    name: "Python",
    color: "#ffe05e",
  },
  {
    name: "Ruby",
    color: "#930e03",
  },
  {
    name: "Go",
    color: "#00add8",
  },
];

export default function CreateProfilePage() {
  const user = useUser();
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [tecnologies, setTecnologies] = useState([]);

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

  const handleCreateProfile = () => {
    const { userId, avatar, name } = user;
    const profileData = { tecnologies, description, userId, avatar, name };
    createProfile(userId, profileData);
    router.replace("/Profile");
  };

  const isButtonDisabled = !description.length || !tecnologies.length;

  // Eliminar saltos de linea
  // var textarea = data.replace(/(\r\n|\n|\r)/gm, "")

  return (
    <>
      {user ? (
        <Flex justify={"center"}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Flex direction={"column"} align="center" pb="30px" width="350px">
              <Image
                src={user?.avatar}
                layerStyle={"primaryBox"}
                mt="100px"
                h="100px"
                w="100px"
              />
              <Text mt="15px" fontSize="25px">
                {user?.name}
              </Text>

              {/* Description Form */}
              <Box w="100%" mt="50px">
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
                />
              </Box>

              {/* Tecnolgies List */}
              <Box w="100%" mt="30px">
                <Text color="gray.50" fontSize={"16px"}>
                  Stack
                </Text>
                <Box mt="20px" p="10px">
                  {tecnologies.length === 0 ? (
                    <Box h="40px">
                      <Text fontSize={"14px"} color="gray.50">
                        Seleccione las tecnologías que mas te gusten! <br /> (4
                        máximo)
                      </Text>
                    </Box>
                  ) : (
                    <Wrap w="100%" display="flex" justifyContent="center">
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
              <Button
                mt="30px"
                variant="primary"
                disabled={isButtonDisabled}
                onClick={handleCreateProfile}
              >
                Crear usuario
              </Button>
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
