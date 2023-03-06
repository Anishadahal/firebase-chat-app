import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../components/Sidebar";
import Head from "next/head";

const TopBar = () => {
  return (
    // @ts-ignore
    <Flex bg={"gray.100"} h="81px" w="100%" align={"center"} p={5} gap={2}>
      <Avatar />
      <Heading size={"lg"}>user@gmail.com</Heading>
    </Flex>
  );
};

const BottomBar = () => {
  return (
    <FormControl p={3}>
      <Input placeholder="Type your message here..." />
      <Button type="submit" hidden>
        Submit
      </Button>
    </FormControl>
  );
};
const ChatDetail = () => {
  return (
    <>
      <Head>
        <title>Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      // @ts-ignore
      <Flex h="100vh">
        <Sidebar />
        <Flex flex={1} direction={"column"}>
          <TopBar />
          <Flex
            flex={1}
            direction={"column"}
            pt={4}
            marginX={5}
            overflowY={"auto"}
            sx={{ scrollbarWidth: "none" }}
          >
            <Flex
              bg={"blue.100"}
              width={"fit-content"}
              minW={"100px"}
              borderRadius={"lg"}
              p={3}
              m={1}
            >
              <Text>This is a dummy message.</Text>
            </Flex>
            <Flex
              bg={"blue.100"}
              width={"fit-content"}
              minW={"100px"}
              borderRadius={"lg"}
              p={3}
              m={1}
            >
              <Text>ok</Text>
            </Flex>
            <Flex
              bg={"green.100"}
              width={"fit-content"}
              minW={"100px"}
              borderRadius={"lg"}
              p={3}
              m={1}
              alignSelf={"flex-end"}
            >
              <Text>This is a dummy message.</Text>
            </Flex>
          </Flex>
          <BottomBar />
        </Flex>
      </Flex>
    </>
  );
};

export default ChatDetail;
