import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import Back from "../../components/Icons/Back";
import Photo from "../../components/Icons/Photo";

import { addCode, uploadImage } from "../../firebase/Client";
import Head from "next/head";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";

const COMPOSE_STATES = {
  USER_NOT_KNOWN: 0,
  LOADING: 1,
  SUCCES: 2,
  ERROR: -1,
};

export default function Create() {
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
    <>
      <Head>
        <title>Write / Codeparty</title>
      </Head>
      <FormControl onSubmit={handleSubmit}>
        <Textarea
          placeholder="¿Qué estas pensando?"
          type="textarea"
          onChange={handleChange}
          value={message}
        ></Textarea>
        {img && (
          <div className="img-container">
            <button className="delete-img" onClick={handleDeleteImg}>
              X
            </button>
            <Image src={img} width={250} height={250} />
          </div>
        )}
        <Flex>
          <Box onClick={() => router.replace("/Home")}>
            <Back />
          </Box>
          <Button disable={isButtonDisabled} onClick={handleSubmit}>
            Share
          </Button>
        </Flex>
        <input
          type="file"
          name="Add photo"
          id="file-input"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        {!img && (
          <label htmlFor="file-input">
            <Photo />
          </label>
        )}
      </FormControl>

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: row;
        }
        form {
          display: flex;
          flex-direction: column;
          margin: 15px 5px;
          color: "green";
        }

        textarea {
          border: 0;
          padding: 15px;
          border-radius: 10px;
          font-size: 21px;
          min-height: 200px;
          padding: 15px;
          outline: 0;
          resize: none;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        img {
          border-radius: 10px;
          width: 100%;
          max-width: 500px;
        }

        .code-container {
          padding: 15px;
          margin: 40px 0px;
          border-radius: 10px;
        }

        .delete-img {
          position: relative;
          top: 25px;
          background-color: #000;
        }

        #file-input {
          display: none;
        }

        label {
          cursor: pointer;
        }

        @media screen and (max-width: 642px) {
          .buttons-container {
            order: 1;
          }
          .code-container {
            order: 2;
          }

          label {
            order: 3;
          }
        }
      `}</style>
    </>
  );
}
