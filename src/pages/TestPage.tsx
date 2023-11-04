import { SimpleGrid } from "@chakra-ui/react";
import ColorModeSwitch from "../components/ColorModeSwitch";

const TestPage = () => {
  return (
    <SimpleGrid placeItems="center" height={"100vh"}>
      <ColorModeSwitch />
    </SimpleGrid>
  );
};

export default TestPage;
