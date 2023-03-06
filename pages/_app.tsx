import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";
import { LoginComponent } from "../components/Login";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <ChakraProvider>
        <Center h={"100vh"}>
          {/* @ts-ignore */}
          <Spinner size={"lg"} color="blue.200" />
        </Center>
      </ChakraProvider>
    );
  }

  if (!user) {
    return (
      <ChakraProvider>
        <LoginComponent />
      </ChakraProvider>
    );
  }
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
