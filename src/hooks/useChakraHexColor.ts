import { useColorMode, useToken } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function getCssVarValue(variable: string) {
  const variableName = variable.match(/var\((.+)\)/)?.[1];
  if (variableName) {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(variableName).trim();
  }
  return null;
}

const useChakraHexColor = (color: string, defaultColor: string) => {
  const colorToken = useToken("colors", color);
  const [hexColor, setHexColor] = useState("");
  const { colorMode } = useColorMode();

  useEffect(() => {
    setHexColor(getCssVarValue(colorToken) ?? defaultColor);
  }, [colorMode]);

  return hexColor;
};

export default useChakraHexColor;
