import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  // ESTILOS GLOBALES
  styles: {
    global: {
      body: {
        bg: "black.100",
        color: "white",
      },
      a: {
        textDecoration: "none",
      },
    },
  },

  breakpoints: {
    mobile: "360px",
    tablet: "834px",
    desktop: "1024px",
  },
  // COLORES
  colors: {
    brand: {
      100: "#159BFF",
    },
    black: {
      50: "#2B2D2E",
      100: "#222124",
      200: "#0A0A0A",
    },
    gray: {
      50: "#72757a",
      100: "#434547",
    },
  },
  // LAYER
  layerStyles: {
    primaryBox: {
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
      boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
    },
    loginBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: {
        base: "60px",
        desktop: "80px",
      },
      width: {
        base: "50px",
        desktop: "80px",
      },
      // repeat
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: {
        base: "10px",
        desktop: "20px",
      },
      boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
      //
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
    tabletButton: {
      pt: "5px",
      align: "center",
      p: "10px 16px",
      borderRadius: "14px",
      cursor: "pointer",
      _hover: {
        bg: "gray.100",
        boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
      },
      mb: "10px",
      w: "auto",
    },
  },
  // COMPONENTES
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
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
          padding: "12px 24px",
          _hover: {
            bg: "#3ba0f9",
          },
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

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.8,
  slidesToScroll: 2,
  arrows: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4.7,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4.3,
      },
    },
  ],
};
