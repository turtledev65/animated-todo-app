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
  const threshold = -SCREEN_WIDTH * 0.4;

  return (
    <AnimatedBox
      width="full"
      initial={{ scale: 0 }}
      animate={{ scale: "100%", transition: { type: "spring", bounce: 0.35 } }}
    >
      {backElement && (
        <AnimatedBox
          position="absolute"
          // Hacky fix for the back element being bigger than the children during animations
          top={0.5}
          left={0}
          right={0}
          bottom={0.5}
          zIndex={-10}
          exit={{
            translateX: -SCREEN_WIDTH,
            transition: { delay: 0.15, duration: 0.1 },
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
        dragElastic={{ left: 0.3 }}
        onDragEnd={(_, info) => {
          if (info.offset.x < threshold) onSwipe();
        }}
        exit={{ translateX: -SCREEN_WIDTH, transition: { duration: 0.2 } }}
      >
        {children}
      </AnimatedBox>
    </AnimatedBox>
  );
};

export default Swipeable;
