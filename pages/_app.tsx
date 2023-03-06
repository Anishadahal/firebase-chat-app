import { ChakraProvider } from "@chakra-ui/react";
import { LoginComponent } from "../components/Login";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Sidebar } from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  return (
    <ChakraProvider>
      <Sidebar />
      <LoginComponent />
    </ChakraProvider>
  );
}

export default MyApp;
