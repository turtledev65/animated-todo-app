import { extendTheme } from "@chakra-ui/react";

const colors = {
  bg: {
    _light: "gray.100",
    _dark: "gray.900",
  },
  fg: {
    _light: "#0a0a0a",
    _dark: "gray.200",
  },
  fgSecondary: {
    _light: "gray.400",
    _dark: "gray.500",
  },
  fgCrossed: {
    _light: "gray.400",
    _dark: "gray.600",
  },
  border: {
    _light: "gray.400",
    _dark: "gray.700",
  },
  blue: {
    _light: "blue.300",
    _dark: "blue.500",
  },
  yellow: {
    _light: "yellow.300",
    _dark: "yellow.500",
  },
  purple: {
    _light: "purple.300",
    _dark: "purple.600",
  },
  red: {
    _light: "red.400",
    _dark: "red.500",
  },
};

const theme = extendTheme({
  // necessary for animating theme changes
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
        overflow: "hidden",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    disableTransitionOnChange: false, // don't disable transitions when changing the theme
  },
  semanticTokens: {
    colors: {
      ...colors,
      "chakra-body-bg": { ...colors.bg },
      "icon-color": { ...colors.fg },
      "text-normal": { ...colors.fg },
      "text-secondary": { ...colors.fgSecondary },
      "text-crossed": { ...colors.fgCrossed },
    },
  },
  components: {
    Checkbox: {
      parts: ["control"],
      baseStyle: {
        control: {
          borderRadius: "5px",
          _checked: {
            _hover: {
              bg: "blue",
              borderColor: "blue",
            },
            bg: "blue",
            borderColor: "blue",
          },
        },
      },
    },
  },
});

export default theme;
