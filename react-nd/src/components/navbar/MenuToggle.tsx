import { Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type MenuToggleProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const MenuToggle = ({ isOpen, onOpen, onClose }: MenuToggleProps) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={isOpen ? onClose : onOpen}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};
