import { Button } from "@chakra-ui/react";

const TestPage = () => {
  return (
    <Button
      onClick={() => {
        console.log("Hello World");
      }}
    >
      Clear Local Storage
    </Button>
  );
};

export default TestPage;
