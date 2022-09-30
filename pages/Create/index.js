import Head from "next/head";
import CreateForm from "../../components/Create/CreateForm";
import Layout from "../../components/Layout";

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
