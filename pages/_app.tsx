import { ChakraProvider } from "@chakra-ui/react";
import { LoginComponent } from "../components/Login";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Sidebar } from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
