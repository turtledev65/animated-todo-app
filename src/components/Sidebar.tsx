import {
  Avatar,
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
import {
  BsArrowLeftShort,
  BsFillInboxFill,
  BsQuestionLg,
} from "react-icons/bs";
import { RxRows } from "react-icons/rx";
import ColorModeSwitch from "./ColorModeSwitch";
import NavLinkButton from "./NavLinkButton";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        variant="unstyled"
        aria-label="Sidebar button"
        size="lg"
        fontSize="3xl"
        icon={<RxRows />}
        onClick={onOpen}
        pos="absolute"
        color="white"
        top={2}
        left={2}
        zIndex={10}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton as={BsArrowLeftShort} size="lg" />
          <DrawerHeader
            w="full"
            display="flex"
            flexDir="column"
            alignItems="center"
            pt="40px"
          >
            <Avatar size="2xl" />
            <Heading>Username</Heading>
          </DrawerHeader>

          <DrawerBody display="flex" flexDir="column" gap="15px">
            <NavLinkButton
              to="/"
              label="Tasks"
              icon={BsFillInboxFill}
              onClick={onClose}
            />
            <NavLinkButton
              to="/test"
              label="Test"
              icon={BsQuestionLg}
              onClick={onClose}
            />
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <ColorModeSwitch />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
