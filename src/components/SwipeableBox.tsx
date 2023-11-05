import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import useWindowDimensions from "../hooks/useWindoDimensions";

interface SwipeableBoxProps {
  children: ReactNode | ReactNode[];
  backElement?: ReactNode;
  onSwipe: () => void;
}

const AnimatedBox = motion(Box);

const Swipeable = ({ children, backElement, onSwipe }: SwipeableBoxProps) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const threshold = -SCREEN_WIDTH * 1.5;

  return (
    <AnimatedBox width="full" position="relative">
      {backElement && (
        <Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          zIndex={-10}
        >
          {backElement}
        </Box>
      )}
      <AnimatedBox
        drag="x"
        dragConstraints={{
          right: 0,
          left: 0,
        }}
        dragElastic={0.2}
        onDrag={(_, info) => {
          console.log(info.offset.x);
        }}
        onDragEnd={(_, info) => {
          if (info.offset.x < threshold) onSwipe();
        }}
      >
        {children}
      </AnimatedBox>
    </AnimatedBox>
  );
};

export default Swipeable;
