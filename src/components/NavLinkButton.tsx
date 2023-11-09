import { Button, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface NavLinkButtonProps {
  to: string;
  label: string;
  icon?: IconType;
  onClick?: () => void;
}

const NavLinkButton = ({ to, label, icon, onClick }: NavLinkButtonProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Button
          w="full"
          colorScheme={isActive ? "blue" : "gray"}
          variant={isActive ? "solid" : "unstyled"}
          onClick={onClick}
          display="flex"
          justifyContent="start"
          gap="10px"
          p="20px"
        >
          <Icon as={icon} boxSize={6} />
          <Text fontSize="xl">{label}</Text>
        </Button>
      )}
    </NavLink>
  );
};

export default NavLinkButton;
