import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export const LoginComponent = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Center h="100vh">
        {/* @ts-ignore */}
        <Stack
          align={"center"}
          bgColor={"gray.400"}
          p={16}
          rounded={"3xl"}
          spacing={12}
          boxShadow={"lg"}
        >
          <Box bgColor={"blue"} width={"fit-content"} padding={5} rounded={"3xl"}>
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <Button
            boxShadow={"md"}
            onClick={() => signInWithGoogle([""], { prompt: "select_account" })}
          >
            Sign in with Google
          </Button>
        </Stack>
      </Center>
    </>
  );
};
