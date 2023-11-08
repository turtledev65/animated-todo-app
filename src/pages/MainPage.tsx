import { Box, VStack } from "@chakra-ui/react";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import TaskItemsProvider from "../context/TaskItemsProvider";
import useBannerBackground from "../hooks/useBannerBackground";

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
        <Box
          w="full"
          bg="gray.800"
          pt="20px"
          borderTopRadius="15px"
          overflowX="hidden"
          position="relative"
          flex={3}
        >
          <TaskList />
        </Box>
      </VStack>
      <AddTaskButton pos="absolute" bottom={3} right={3} />
    </TaskItemsProvider>
  );
};

export default MainPage;
