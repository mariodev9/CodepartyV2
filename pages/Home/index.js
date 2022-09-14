import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { logOut } from "../../firebase/firebaseConfig";
import useUser from "../../hooks/useUser";

export default function Home() {
  const [session, onSession] = useState(true);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  const handleLogOut = () => {
    logOut();
    onSession(false);
  };

  return (
    <>
      <Text>Bienvenido a la Home</Text>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}
