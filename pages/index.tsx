import type { NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";
import { Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* @ts-ignore */}
      <Flex h="100vh">
        <Sidebar />
      </Flex>
    </div>
  );
};

export default Home;
