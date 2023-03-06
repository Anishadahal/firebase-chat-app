import { Avatar, Button, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../components/Sidebar";

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
    //   @ts-ignore
    <Flex h="100vh">
      <Sidebar />
      <Flex flex={1} direction={"column"}>
        <TopBar />
        <Flex flex={1}></Flex>
        <BottomBar />
      </Flex>
    </Flex>
  );
};

export default ChatDetail;
