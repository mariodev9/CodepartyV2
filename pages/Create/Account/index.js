import { useState } from "react";
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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Login, Register } from "../../../firebase/services/Auth";
import { useRouter } from "next/router";

export default function CreateAccountPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");

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
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Crea una cuenta
        </Heading>
        <form
          onSubmit={handleSubmit((data) => {
            Register(data, setError);
          })}
        >
          <FormControl id="email" isRequired>
            <FormLabel>Email </FormLabel>
            <Input
              placeholder="E-mail@ejemplo.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              {...register("email", { required: "Este campo es obligatorio" })}
            />
            <Box height="40px">
              <Text color="red.600">{error}</Text>
              <Text color="red.600">{errors.email?.message}</Text>
            </Box>
          </FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input
            placeholder="Contraseña"
            _placeholder={{ color: "gray.500" }}
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

          <Box height="40px" marginBottom="1">
            <Text color="red.600">{errors.password?.message}</Text>
          </Box>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg={"none"}
              color={"white"}
              w="full"
              _hover={{
                color: "red.500",
              }}
              onClick={() => router.back()}
            >
              Atrás
            </Button>
            <Button
              bg={"brand.100"}
              color={"white"}
              w="full"
              _hover={{
                bg: "brand.50",
              }}
              onClick={handleSubmit((data) => {
                Register(data, setError);
              })}
            >
              Crear
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
