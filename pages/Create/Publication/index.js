import { Box } from "@chakra-ui/react";
import Head from "next/head";
import CreateForm from "../../../components/Create/CreateForm";
import Layout from "../../../components/Layout";

export default function CreatePublicationPage() {
  return (
    <>
      <Head>
        <title>Write / Codeparty</title>
      </Head>
      <Layout>
        <Box p="20px 10px">
          <CreateForm />
        </Box>
      </Layout>
    </>
  );
}
