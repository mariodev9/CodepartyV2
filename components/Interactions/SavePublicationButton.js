import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import {
  savePublication,
  setIfPublicationIsSave,
  unsavedPublication,
} from "../../firebase/services/Interactions";
import { Save } from "../Icons";

export default function SavePublicationButton({
  userOnSession,
  saves,
  publicationId,
}) {
  const [isSave, setIsSave] = useState(undefined);

  const publicationIsSave = (element) => element === userOnSession;

  useEffect(() => {
    // Se busca el idUsuario dentro del array "saves"
    // true = se encontro el id por lo tanto el usuario guardo la publicacion
    saves && setIsSave(saves.some(publicationIsSave));
  });

  const handleSavePublication = () => {
    if (isSave) {
      unsavedPublication(publicationId, userOnSession);
      setIsSave(false);
    } else {
      savePublication(publicationId, userOnSession);
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
