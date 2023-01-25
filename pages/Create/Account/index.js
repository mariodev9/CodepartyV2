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
import { Login, Register } from "../../../firebase/services/Auth";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateAccountPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const [isSuccesfull, setIsSuccesfull] = useState(false);

  const toast = useToast();

  const succesfullCreated = () => {
    toast({
      title: "Cuenta creada!",
      description: "Ya tienes tu propia cuenta.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg="black.200">
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
            Register(data, setError, succesfullCreated);
          })}
        >
          {/* {isSuccesfull && <Button onClick={succesfullCreated}>jeje</Button>} */}
          {/* <Button onClick={() => registerSuccesfull()}>Show Toast</Button> */}
          <VStack spacing={"15px"}>
            <FormControl id="email" isRequired>
              <FormLabel>Email </FormLabel>
              <Input
                type="email"
                {...register("email", {
                  required: "Este campo es obligatorio",
                })}
              />
              <Box>
                <Text color="red.600">{error}</Text>
                <Text color="red.600">{errors.email?.message}</Text>
              </Box>
            </FormControl>
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
            <Box marginBottom="1">
              <Text color="red.600">{errors.password?.message}</Text>
              <Text color="red.600">{errors.confirm_password?.message}</Text>
            </Box>
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
