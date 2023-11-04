import { Icon, useColorMode } from "@chakra-ui/react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Icon
      as={colorMode === "dark" ? FaRegSun : FaRegMoon}
      boxSize={8}
      onClick={() => toggleColorMode()}
    />
  );
};

export default ColorModeSwitch;
