import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import CreateForm from "../../components/Create/CreateForm";
import Layout from "../../components/Layout";
import LeftNavbar from "../../components/Layout/LeftNavbar";

export default function Create() {
  return (
    <>
      <Head>
        <title>Write / Codeparty</title>
      </Head>
      <Layout>
        <CreateForm />
      </Layout>
    </>
  );
}
