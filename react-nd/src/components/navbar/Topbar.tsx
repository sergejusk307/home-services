import { MenuLinks, MenuToggle, NavBarContainer } from '@/components/navbar';
import { useDisclosure } from '@chakra-ui/react';

export const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <NavBarContainer>
      <MenuToggle isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
