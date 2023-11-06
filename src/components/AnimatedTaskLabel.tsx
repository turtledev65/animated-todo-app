import { Box, Text, useTheme } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";

interface AnimatedTaskLabelProps {
  label: string;
  done: boolean;
  onClick: () => void;
}

const AnimatedText = motion(Text);
const AnimatedBox = motion(Box);

const AnimatedTaskLabel = ({
  label,
  done,
  onClick,
}: AnimatedTaskLabelProps) => {
  const theme = useTheme();
  const gray = theme.colors.gray[500];
  const white = theme.colors.white;

  // animates the margin of the text
  const labelVariants: Variants = {
    complete: {
      marginLeft: ["0px", "8px", "0px"],
      transition: {
        when: "beforeChildren",
        duration: 0.2,
        delayChildren: 0.3,
      },
    },
    incomplete: {
      marginLeft: 0,
    },
  };

  // changes the color of the text
  const textVariatns: Variants = {
    complete: {
      color: gray,
    },
    incomplete: {
      color: white,
    },
  };

  // animates the line crossing the text
  const lineVariants: Variants = {
    complete: { width: "100%", backgroundColor: gray },
    incomplete: { width: 0, backgroundColor: "#fff" },
  };

  return (
    <AnimatedBox
      initial={false}
      animate={done ? "complete" : "incomplete"}
      variants={labelVariants}
      position="relative"
      onClick={onClick}
    >
      <AnimatedBox
        variants={lineVariants}
        height="1px"
        position="absolute"
        top="50%"
      />
      <AnimatedText variants={textVariatns} fontSize="xl">
        {label}
      </AnimatedText>
    </AnimatedBox>
  );
};

export default AnimatedTaskLabel;
