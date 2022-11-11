import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import SectionBar from "../../components/SectionBar";
import { GetAllUserSaves } from "../../firebase/services/Saves";
import useUser from "../../hooks/useUser";

export default function Saves() {
  const [saves, setSaves] = useState([]);
  const user = useUser();

  useEffect(() => {
    if (user) {
      GetAllUserSaves(user.userId, setSaves);
    }
  }, [user]);

  return (
    <Layout>
      <SectionBar text={"Guardados"} back />

      <Grid templateColumns="repeat(2, 1fr)" gap={6} padding={"10px"}>
        {saves &&
          saves.map((item, key) => (
            <GridItem key={item.id} layerStyle={"primaryBox"} h="150px" />
          ))}
      </Grid>
    </Layout>
  );
}
