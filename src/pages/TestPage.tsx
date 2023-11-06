import { Box, Flex } from "@chakra-ui/react";
import AddTaskButton from "../components/AddTaskButton";
import TaskList from "../components/TaskList";
import TaskItemsProvider from "../context/TaskItemsProvider";

const TestPage = () => {
  return (
    <TaskItemsProvider>
      <Flex
        direction="column"
        height="100vh"
        justify="center"
        align="center"
        overflow="hidden"
      >
        <TaskList />
        <Box pos="absolute" right={2} bottom={2}>
          <AddTaskButton />
        </Box>
      </Flex>
    </TaskItemsProvider>
  );
};

export default TestPage;
