import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // necessary for animating theme changes
  styles: {
    global: {
      body: {
        transitionProperty: "all",
        transitionDuration: "normal",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    disableTransitionOnChange: false, // don't disable transitions when changing the theme
  },
});

export default theme;
