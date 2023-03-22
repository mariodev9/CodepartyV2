import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Publication from "../Publication";
import useUser from "../../hooks/useUser";

export default function ProfileContent({ userPublications, userStories }) {
  const user = useUser();
  return (
    <Tabs variant="soft-rounded" isFitted mt={"30px"}>
      <TabList align="center" px={4}>
        <Tab _selected={{ color: "white", bg: "brand.100" }}>Publicaciones</Tab>
        <Tab _selected={{ color: "white", bg: "brand.100" }}>Historias</Tab>
      </TabList>
      <TabPanels>
        <TabPanel pb={"40px"}>
          {userPublications.map((item) => (
            <Publication {...item} userId={user} />
          ))}
        </TabPanel>
        <TabPanel>
          <Flex p="45px 15px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {userStories.map((item) => (
                <GridItem key={item.id} layerStyle={"primaryBox"}>
                  <Image
                    width="300px"
                    height="300px"
                    src={item.img}
                    borderRadius="10px"
                  />
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
