import { IconButton, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const AnimatedIconButton = motion(IconButton);

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <AnimatedIconButton
      variant="unstyled"
      boxSize="auto"
      aria-label="Toggle theme"
      icon={colorMode === "dark" ? <FaRegSun /> : <FaRegMoon />}
      color="icon-color"
      whileTap={{ scale: 0.9 }}
      size="lg"
      fontSize="3xl"
      onClick={() => toggleColorMode()}
    />
  );
};

export default ColorModeSwitch;
