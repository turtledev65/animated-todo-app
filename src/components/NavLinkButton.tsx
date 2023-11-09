import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface NavLinkButtonProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavLinkButton = ({ to, label, onClick }: NavLinkButtonProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Button
          w="full"
          colorScheme={isActive ? "blue" : "gray"}
          onClick={onClick}
        >
          {label}
        </Button>
      )}
    </NavLink>
  );
};

export default NavLinkButton;
