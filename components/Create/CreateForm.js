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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { addCode, uploadImage } from "../../firebase/Client";
import useUser from "../../hooks/useUser";
import { Back, Photo } from "../Icons";

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

  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    file && uploadImage(file, setImg);
  }, [file]);

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleDeleteImg = (event) => {
    event.preventDefault();
    setImg("");
    setFile("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(COMPOSE_STATES.LOADING);

    addCode({
      avatar: user.avatar,
      content: message,
      userId: user.userId,
      userName: user.name,
      img: img,
    });

    router.push("/Home");
  };

  const isButtonDisabled =
    !message.length && (status || COMPOSE_STATES.LOADING);

  return (
    <Flex padding="20px 10px" direction="column">
      <Flex
        justify={{ base: "space-between", desktop: "end" }}
        mb="20px"
        order={{ base: 0, desktop: 1 }}
      >
        <Box
          onClick={() => router.replace("/Home")}
          cursor="pointer"
          display={{ base: "flex", desktop: "none" }}
        >
          <Back />
        </Box>
        <Button
          disabled={isButtonDisabled}
          onClick={handleSubmit}
          variant="primary"
          h="25px"
        >
          Share
        </Button>
      </Flex>

      <Flex>
        <Box pr="10px">
          <Avatar src={user?.avatar} size="md" />
        </Box>
        <FormControl onSubmit={handleSubmit}>
          <Box border="1px" borderColor="gray.100" borderRadius="10px">
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
            ></Textarea>
            {/* component */}

            {img && (
              <Box>
                <Button
                  borderRadius="99px"
                  onClick={handleDeleteImg}
                  position="absolute"
                  zIndex="2"
                  _hover={{
                    bg: "gray",
                  }}
                >
                  X
                </Button>
                <Image src={img} width={250} height={250} borderRadius="10px" />
              </Box>
            )}
            {/* component */}
          </Box>
          <Input
            type="file"
            name="Add photo"
            id="file-input"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
            display="none"
          />
          {!img && (
            <FormLabel htmlFor="file-input" cursor="pointer" mt="20px">
              <Photo />
            </FormLabel>
          )}
        </FormControl>
      </Flex>
    </Flex>
  );
}
