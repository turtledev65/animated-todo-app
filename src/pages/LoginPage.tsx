import {
  Button,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword as signIn } from "firebase/auth";
import { useRef, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <IconButton
        variant="unstyled"
        aria-label="Back"
        boxSize="auto"
        fontSize="3xl"
        icon={<BsArrowLeftShort />}
        color="white"
        pos="fixed"
        left={3}
        top={3}
        zIndex={10}
        onClick={() => navigate(-1)}
      />
      <form
        onSubmit={e => {
          e.preventDefault();
          const email = passwordRef.current?.value;
          const password = passwordRef.current?.value;

          if (email && password)
            signIn(auth, email, password)
              .then(userCredential => {
                console.log(userCredential.user);
              })
              .catch(error => console.log(error.message));
        }}
      >
        <VStack
          h="100vh"
          direction="column"
          justifyContent="center"
          gap="12px"
          px="45px"
        >
          <FormControl isInvalid={emailError}>
            <FormErrorMessage fontSize="lg" mb="5px">
              Email cannot be empty
            </FormErrorMessage>
            <Input
              type="email"
              placeholder="Email"
              ref={emailRef}
              fontSize="xl"
              onChange={() =>
                setEmailError(emailRef.current?.value.trim().length === 0)
              }
            />
          </FormControl>
          <FormControl isInvalid={passwordError}>
            <FormErrorMessage fontSize="lg" mb="5px">
              Password cannot be empty
            </FormErrorMessage>
            <Input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              fontSize="xl"
              onChange={() =>
                setPasswordError(passwordRef.current?.value.trim().length === 0)
              }
            />
          </FormControl>
          <Button
            mt="5px"
            w="full"
            type="submit"
            bg="blue"
            _hover={{ bg: "blue" }}
          >
            Login
          </Button>
          <Text fontSize="lg" mt="20px">
            Don't have an account?{" "}
            <Link color="blue" href="register">
              Register
            </Link>
          </Text>
        </VStack>
      </form>
    </>
  );
};

export default LoginPage;