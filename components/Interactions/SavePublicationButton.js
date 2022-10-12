import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  savePublication,
  setIfPublicationIsSave,
  unsavedPublication,
} from "../../firebase/Client";
import { Save } from "../Icons";

export default function SavePublicationButton({ userOnSession, codeId, data }) {
  const [isSave, setIsSave] = useState(undefined);

  useEffect(() => {
    setIfPublicationIsSave(codeId, userOnSession, setIsSave);
  }, []);

  const handleSavePublication = () => {
    if (isSave) {
      unsavedPublication(codeId, userOnSession);
      setIsSave(false);
    } else {
      savePublication(codeId, userOnSession, data);
      setIsSave(true);
    }
  };

  return (
    <Flex
      onClick={handleSavePublication}
      cursor="pointer"
      display="flex"
      justify="center"
      align="center"
    >
      <Save width="30px" height="30px" isSave={isSave} />
    </Flex>
  );
}
