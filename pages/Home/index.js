import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Timeline from "../../components/Timeline";
import Histories from "../../components/Histories";

export default function Home() {
  const [session, onSession] = useState(true);
  const router = useRouter();

  useEffect(() => {
    !session && router.replace("/");
  }, [session]);

  return (
    <>
      <Layout>
        <Histories />
        <Timeline />
      </Layout>
    </>
  );
}
