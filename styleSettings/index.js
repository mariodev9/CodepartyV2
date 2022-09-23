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
    },
    gray: {
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
    stories: {
      height: {
        base: "130px",
        md: "120px",
      },
      width: {
        base: "110px",
        md: "110px",
      },
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
      boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
    },
    loginBox: {
      height: {
        base: "100px",
        md: "120px",
      },
      width: {
        base: "80px",
        md: "100px",
      },
      bg: "black.50",
      borderColor: "gray.500",
      borderRadius: "20px",
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
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
