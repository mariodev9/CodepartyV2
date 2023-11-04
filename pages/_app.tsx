import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styleSettings";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "../context/userContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
    </>
  );
} 

export default MyApp;
