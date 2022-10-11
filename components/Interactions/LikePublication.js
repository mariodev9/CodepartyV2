import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  savePublication,
  setIfPublicationIsSave,
  unsavedPublication,
} from "../../firebase/Client";
import { Like } from "../Icons";

export default function LikePublicationButton({ userOnSession, codeId }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // setIfPublicationIsSave(codeId, userOnSession, setIsSave);
  }, []);

  const handleLikePublication = () => {
    if (isLiked) {
      //   unsavedPublication(codeId, userOnSession);
      setIsLiked(!isLiked);
    } else {
      //   savePublication(codeId, userOnSession);
      setIsLiked(!isLiked);
    }
  };

  return (
    <Box onClick={handleLikePublication} cursor="pointer">
      <Like isLiked={isLiked} />
    </Box>
  );
}
