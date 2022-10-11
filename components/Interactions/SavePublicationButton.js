import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  savePublication,
  setIfPublicationIsSave,
  unsavedPublication,
} from "../../firebase/Client";
import { Save } from "../Icons";

export default function SavePublicationButton({ userOnSession, codeId }) {
  const [isSave, setIsSave] = useState(undefined);

  useEffect(() => {
    setIfPublicationIsSave(codeId, userOnSession, setIsSave);
  }, []);

  const handleSavePublication = () => {
    if (isSave) {
      unsavedPublication(codeId, userOnSession);
      setIsSave(false);
    } else {
      savePublication(codeId, userOnSession);
      setIsSave(true);
    }
  };

  return (
    <Box onClick={handleSavePublication} cursor="pointer">
      <Save width="30px" height="30px" isSave={isSave} />
    </Box>
  );
}
