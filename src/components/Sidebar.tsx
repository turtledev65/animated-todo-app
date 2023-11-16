import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsArrowLeftShort, BsFillInboxFill } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import ColorModeSwitch from "./ColorModeSwitch";
import NavLinkButton from "./NavLinkButton";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);
  const btnRef = useRef(null);

  const navigate = useNavigate();

  return (
    <>
      <IconButton
        variant="unstyled"
        aria-label="Sidebar button"
        boxSize="auto"
        size="lg"
        fontSize="3xl"
        icon={<RxHamburgerMenu />}
        onClick={onOpen}
        color="white"
        pos="fixed"
        left={2}
        top={2}
        zIndex={10}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="bg">
          <DrawerCloseButton as={BsArrowLeftShort} size="lg" />
          <DrawerHeader
            w="full"
            display="flex"
            flexDir="column"
            alignItems="center"
            pt="40px"
          >
            {user && (
              <>
                <Avatar size="2xl" />
                <Heading color="text-normal">Username</Heading>
              </>
            )}
          </DrawerHeader>

          <DrawerBody display="flex" flexDir="column" gap="15px">
            <NavLinkButton
              to="/"
              label="Tasks"
              icon={BsFillInboxFill}
              onClick={onClose}
            />
            <NavLinkButton
              to="/about"
              label="About"
              icon={HiOutlineInformationCircle}
              onClick={onClose}
            />
          </DrawerBody>

          <DrawerFooter display="flex" gap="10px" px="15px">
            <Button
              w="full"
              bg="blue"
              _hover={{ bg: "blue" }}
              onClick={() => navigate("/login")}
            >
              <Link to="/login">Login</Link>
            </Button>
            <ColorModeSwitch />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
