import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export const LoginComponent = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center h="100vh">
        {/* @ts-ignore */}
        <Stack
          align={"center"}
          bgColor={"gray.600"}
          p={16}
          rounded={"3xl"}
          spacing={12}
          boxShadow={"lg"}
        >
          <Box bgColor={"blue"} width={"fit-content"} padding={5} rounded={"3xl"}>
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <Button boxShadow={"md"}>Sign in with Google</Button>
        </Stack>
      </Center>
    </>
  );
};
