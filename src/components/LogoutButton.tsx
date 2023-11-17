import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const LogoutButton = () => {
  return (
    <Button
      w="full"
      bg="blue"
      _hover={{ bg: "blue" }}
      onClick={() => signOut(auth)}
    >
      Logout
    </Button>
  );
};
export default LogoutButton;
