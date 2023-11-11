import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import bannerImage from "../assets/about-banner.png";

const AboutPage = () => {
  return (
    <VStack h="100vh" pos="relative" gap={0} bg="blue">
      <Box
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundImage={bannerImage}
        flex={1.5}
        w="full"
        h="full"
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        px="15px"
        py="10px"
      >
        <Heading fontSize="4xl" color="white">
          About this app
        </Heading>
      </Box>
      <Box
        w="full"
        h="full"
        bg="bg"
        borderTopRadius="15px"
        overflowX="hidden"
        position="relative"
        px="10px"
        py="20px"
        flex={3}
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text fontSize="xl">
          This is a React web app meant to be used as a PWA. It uses Chakra UI
          and Framer Motion for animations.
        </Text>
        <Button
          as="a"
          href="https://github.com/turtledev65/animated-todo-app"
          target="_blank"
          leftIcon={<BsGithub />}
          w="full"
          mt="10px"
        >
          Source Code
        </Button>
      </Box>
    </VStack>
  );
};

export default AboutPage;
