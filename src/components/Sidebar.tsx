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
import {
  UserInfo,
  signOut as firebaseSignOut,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort, BsFillInboxFill, BsGoogle } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { auth, db, provider } from "../../firebase.config.ts";
import ColorModeSwitch from "./ColorModeSwitch";
import NavLinkButton from "./NavLinkButton";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

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
              rightIcon={user ? <FaSignOutAlt /> : <BsGoogle />}
              _hover={{ backgroundColor: "none" }}
              onClick={() => {
                user ? signOut() : signIn();
              }}
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

const signIn = () => {
  signInWithPopup(auth, provider)
    .then(res => addUserToDB(res.user))
    .catch(err => console.log("An unexpected error occured: ", err));
};

const signOut = () => {
  firebaseSignOut(auth)
    .then(_ => console.log("Sign Out Succesful"))
    .catch(err => console.log("An unexpected error occured: ", err));
};

const addUserToDB = (user: UserInfo) => {
  const userRef = doc(db, "users", user.uid);

  getDoc(userRef)
    .then(docSnapshot => {
      if (docSnapshot.exists()) return;
      return setDoc(userRef, { tasks: [] });
    })
    .then(() => console.log("User added to the database"))
    .catch(err => console.log("An unexpected error occurred: ", err));
};

export default Sidebar;
