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
        <AnimatedBox
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          zIndex={-10}
          exit={{
            translateX: -SCREEN_WIDTH!,
            transition: {
              delay: 0.25,
              duration: 0.1,
            },
          }}
        >
          {backElement}
        </AnimatedBox>
      )}
      <AnimatedBox
        drag="x"
        dragConstraints={{
          right: 0,
          left: 0,
        }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x < threshold) onSwipe();
        }}
        exit={{
          translateX: -SCREEN_WIDTH!,
          transition: { duration: 0.2 },
        }}
      >
        {children}
      </AnimatedBox>
    </AnimatedBox>
  );
};

export default Swipeable;
