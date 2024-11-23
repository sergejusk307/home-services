import { Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export const MenuToggle = ({ isOpen, onOpen, onClose }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={isOpen ? onClose : onOpen}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};
