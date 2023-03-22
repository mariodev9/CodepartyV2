import { useState, useEffect } from "react";
import {
  Button,
  Stack,
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  VStack,
  Center,
  createStandaloneToast,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Register } from "../../../firebase/services/Auth";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CreateAccountPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const [isSuccesfullRegister, setIsSuccesfullRegister] = useState(false);

  const toast = useToast();

  const MotionFlex = motion(Flex);

  const succesfullCreated = () => {
    toast({
      title: "Cuenta creada!",
      description: "Ahora haz un perfil",
      status: "success",
      duration: 6000,
      isClosable: true,
      position: "top",
    });
    router.replace("/Create/Profile");
  };

  useEffect(() => {
    isSuccesfullRegister && succesfullCreated();
  }, [isSuccesfullRegister]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Flex minH={"101vh"} align={"center"} justify={"center"} bg="black.200">
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg="black.300"
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        layerStyle="primaryBox"
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "4xl" }}>
          Empecemos
        </Heading>
        <Text fontSize={"15px"} color={"gray"}>
          Create una cuenta ahora.
        </Text>
        <form
          onSubmit={handleSubmit((data) => {
            Register(data, setError, setIsSuccesfullRegister);
          })}
        >
          <VStack spacing={"15px"}>
            <FormControl id="email" isRequired>
              <FormLabel>Email </FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: "Este campo es obligatorio",
                })}
              />
            </FormControl>
            <Text color="red.600">{error}</Text>
            <Text color="red.600">{errors.email?.message}</Text>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                autoComplete="on"
                {...register("password", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 6,
                    message: "Minimo debe tener 6 digitos",
                  },
                })}
              />
            </FormControl>
            <Text color="red.600">{errors.password?.message}</Text>

            <FormControl>
              <FormLabel>Confirmar Contraseña</FormLabel>
              <Input
                type="password"
                {...register("confirm_password", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") != value) {
                      return "Las contraseñas deben coincidir";
                    }
                  },
                })}
              />
            </FormControl>
            <Text color="red.600">{errors.confirm_password?.message}</Text>
            <Button
              bg={"brand.100"}
              color={"white"}
              w="full"
              _hover={{
                bg: "brand.50",
              }}
              type="submit"
            >
              Crear Cuenta
            </Button>
          </VStack>
          <Center fontSize={{ base: "12px", desktop: "16px" }} mt={"15px"}>
            <Text>Ya tienes una cuenta?</Text>
            <Link href={"/"}>
              <Text
                fontWeight="600"
                padding="5px"
                color="#159BFF"
                cursor={"pointer"}
              >
                Iniciar sesion
              </Text>
            </Link>
          </Center>
        </form>
      </Stack>
    </Flex>
  );
}
