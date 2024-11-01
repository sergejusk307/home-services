import { Box, Text } from '@chakra-ui/react';

const NavLink = (props) => {
  const { children } = props;
  const { route } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      textDecoration={route.path === window.location.pathname ? 'underline' : 'none'}
      _hover={{
        textDecoration: 'none',
        bg: 'primary.500',
        color: 'white'
      }}
      href={route.path}>
      <Text fontSize="1.2rem" fontWeight="bold">
        {route.name}
      </Text>
      {children}
    </Box>
  )
}

export default NavLink;