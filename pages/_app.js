import Layout from "../components/Layout";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  // ESTILOS GLOBALES
  styles: {
    global: {
      body: {
        bg: "black.100",
        color: "white",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  // COLORES
  colors: {
    brand: {
      100: "#159BFF",
    },
    black: {
      50: "#2B2D2E",
      100: "#222124",
    },
    gray: {
      100: "#434547",
    },
  },
  // LAYER
  layerStyles: {
    stories: {
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
      height: {
        base: "130px",
        md: "120px",
      },
      width: {
        base: "110px",
        md: "110px",
      },
      boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
    },
    loginBox: {
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
      height: {
        base: "100px",
        md: "120px",
      },
      width: {
        base: "80px",
        md: "100px",
      },
      boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
    },
    code: {
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
      width: "100%",
      padding: "15px",
      margin: "25px 0px",
    },
    mobilenav: {
      position: "fixed",
      bottom: "0px",
      height: "55px",
      bg: "black.50",
      w: "100%",
      padding: "5px",
      borderTopRightRadius: "25px",
      borderTopLeftRadius: "25px",
      borderTop: "1px",
      borderColor: "gray.100",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  // COMPONENTES
  components: {
    Avatar: {},
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        // solid: () => ({
        //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
        // }),
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
        primary: {
          bg: "brand.100",
          fontSize: "md",
        },
      },
    },
    // TEXT
    Text: {
      baseStyle: {
        fontWeight: "600",
      },
    },
    // CONTAINER
    Container: {
      variants: {
        main: {
          padding: "20px",
          maxWidth: "100%",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
