import { MenuLinks, MenuToggle, NavBarContainer } from "@/components/navbar";
import { useDisclosure } from "@chakra-ui/react";

export const Topbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <NavBarContainer {...props}>
      <MenuToggle isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Topbar;