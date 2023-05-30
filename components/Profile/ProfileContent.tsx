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
} from "@chakra-ui/react";
import Image from "next/image";
import Publication from "../Publications/components/Publication";
import useUser from "../../hooks/useUser";
import { ProfileContent } from "./models";

const ProfileContent:React.FC<ProfileContent> = ({ userPublications, userStories }) => {

  const userId:string = useUser();

  return (
    <Tabs variant="soft-rounded" isFitted mt={"30px"}>
      <TabList  px={4}>
        <Tab _selected={{ color: "white", bg: "brand.100" }}>Publicaciones</Tab>
        <Tab _selected={{ color: "white", bg: "brand.100" }}>Historias</Tab>
      </TabList>
      <TabPanels>
        <TabPanel pb={"40px"}>
          {userPublications.map((item) => (
            <Publication key={item.id} {...item} userId={userId} />
          ))}
        </TabPanel>
        <TabPanel>
          <Flex p="45px 15px">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {userStories.map((item) => (
                <GridItem key={item.id} >
                  <Image
                    src={item.img}
                    alt={`${item.userName} story`}
                    width="300px"
                    height="300px"
                    style={{borderRadius: "10px"}}
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

export default ProfileContent
