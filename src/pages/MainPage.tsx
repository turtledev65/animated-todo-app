import { Box, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import TaskItemsProvider from "../context/TaskItemsProvider";
import useBannerBackground from "../hooks/useBannerBackground";

const AnimatedBox = motion(Box);

const MainPage = () => {
  const { image: bannerImage, color: bannerBgColor } = useBannerBackground();

  return (
    <TaskItemsProvider>
      <VStack h="100vh" pos="relative" gap={0} bg={bannerBgColor}>
        <Box
          backgroundSize="cover"
          backgroundPosition="top"
          backgroundRepeat="no-repeat"
          backgroundImage={bannerImage}
          flex={1.5}
          w="full"
          h="full"
        />
        <AnimatedBox
          w="full"
          h="full"
          bg="bg"
          pt="20px"
          borderTopRadius="15px"
          overflowX="hidden"
          position="relative"
          flex={3}
        >
          <TaskList />
          <AddTaskButton pos="fixed" bottom="25px" right="25px" />
        </AnimatedBox>
      </VStack>
    </TaskItemsProvider>
  );
};

export default MainPage;
