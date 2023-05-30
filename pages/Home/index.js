import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Timeline from "../../components/Publications/components/Timeline";
import { Box } from "@chakra-ui/react";
import Stories from "../../components/Stories/components/Stories";
import TopNav from "../../components/Layout/TopNavbar";
import SectionBar from "../../components/SectionBar";
import useProfile from "../../hooks/useProfile";

export default function Home() {
  const [session, onSession] = useState(true);

  const profile = useProfile();
  const router = useRouter();

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  return (
    <>
      <Layout>
        <TopNav />
        <Box display={{ base: "none", tablet: "flex" }}>
          <SectionBar text={"Inicio"} />
        </Box>
        <Stories />
        <Timeline />
      </Layout>
    </>
  );
}
