import { MenuLinks, MenuToggle, NavBarContainer } from '@/components/navbar';
import { useDisclosure } from '@chakra-ui/react';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

export const Topbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const location = useLocation();
  useEffect(() => {
    onClose();
  }, [location]);

  return (
    <NavBarContainer>
      <MenuToggle isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
