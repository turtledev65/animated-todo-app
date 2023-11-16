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
          {...(isActive && { bg: "blue" })}
          color={isActive ? "text-normal" : "text-secondary"}
          variant={isActive ? "solid" : "unstyled"}
          _hover={{ backgroundColor: "none" }}
          onClick={onClick}
          display="flex"
          justifyContent="start"
          gap="10px"
          p="20px"
        >
          {icon && <Icon as={icon} boxSize={6} />}
          <Text fontSize="xl">{label}</Text>
        </Button>
      )}
    </NavLink>
  );
};

export default NavLinkButton;
