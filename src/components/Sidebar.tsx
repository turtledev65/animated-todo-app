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
import { BsArrowLeftShort, BsFillInboxFill } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { auth } from "../../firebase.config.ts";
import ColorModeSwitch from "./ColorModeSwitch";
import NavLinkButton from "./NavLinkButton";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const user = auth.currentUser;

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
                <Avatar size="2xl" src={user.photoURL || ""} />
                <Heading color="text-normal">{user.displayName}</Heading>
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

          <DrawerFooter gap={5}>
            <Button
              w="full"
              bg={user ? "red" : "blue"}
              _hover={{ backgroundColor: "none" }}
            >
              {user ? "Sign Out" : "Sign In"}
            </Button>
            <ColorModeSwitch />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
