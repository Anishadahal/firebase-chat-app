import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { cursorTo } from "readline";

const Chat = () => {
  return (
    <Flex _hover={{ bg: "gray.100", cursor: "pointer" }} align={"center"} p={3}>
      <Avatar src="" marginEnd={3} />
      <Text>user@gmail.com</Text>
    </Flex>
  );
};
export const Sidebar = () => (
  <Flex
    //    bgColor={"blue.100"}
    w="300px"
    h="100vh"
    borderEnd={"1px"}
    borderColor={"gray.200"}
    direction={"column"}
  >
    <Flex
      h="81px"
      //   bgColor={"red.100"}
      w="100%"
      align={"center"}
      justifyContent={"space-between"}
      p={3}
      borderBottom={"1px solid"}
      borderColor={"gray.200"}
    >
      <Flex align={"center"}>
        <Avatar margin={3} />
        <Text>Alex</Text>
      </Flex>
      <IconButton aria-label="" size="sm" isRound icon={<ArrowLeftIcon />} />
    </Flex>
    <Button margin={5} padding={4}>
      New Chat
    </Button>
    <Flex overflowY={"auto"} direction={"column"} sx={{ scrollbarWidth: "none" }}>
      <Chat />
    </Flex>
  </Flex>
);
