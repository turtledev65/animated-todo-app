import { Box, Text, useToken } from "@chakra-ui/react";
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
  const textCrossedColor = useToken("colors", "text-crossed");
  const textNormalColor = useToken("colors", "text-normal");

  // animates the margin of the text
  const labelVariants: Variants = {
    complete: {
      marginLeft: ["0px", "9px", "0px"],
      transition: { duration: 0.3 },
    },
    incomplete: { marginLeft: 0 },
  };

  // changes the color of the text
  const textVariants: Variants = {
    complete: {
      color: textCrossedColor,
      transition: { delay: 0.8 },
    },
    incomplete: { color: textNormalColor },
  };

  // animates the line crossing the text
  const lineVariants: Variants = {
    complete: {
      width: "100%",
      backgroundColor: textCrossedColor,
      transition: { duration: 0.3, backgroundColor: { delay: 0.8 } },
    },
    incomplete: { width: 0, backgroundColor: textNormalColor },
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
        height="2px"
        position="absolute"
        top="50%"
      />
      <AnimatedText variants={textVariants} fontSize="xl">
        {label}
      </AnimatedText>
    </AnimatedBox>
  );
};

export default AnimatedTaskLabel;
