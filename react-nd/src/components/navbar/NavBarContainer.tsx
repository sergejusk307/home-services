import { Flex, FlexProps } from '@chakra-ui/react';

type NavBarContainerProps = {
  children: React.ReactNode;
};

export const NavBarContainer = ({ children }: NavBarContainerProps) => {
  return (
    <Flex
      as="nav"
      display="flex"
      top="0"
      left="0"
      right="0"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      paddingLeft={20}
      paddingRight={20}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      borderBottom="2px solid #f1f1f1;"
      color={['white', 'white', 'primary.700', 'primary.700']}
    >
      {children}
    </Flex>
  );
};
