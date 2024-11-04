import { Box, Text } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from "react-router-dom";

export const NavLink = (props) => {
  const { children } = props;
  const { route } = props;

  const navigate = useNavigate();

  return (
    <Box
      as={RouterLink}
      to={route.path}
      px={2}
      py={1}
      rounded={'md'}
      textDecoration={route.path === window.location.pathname ? 'underline' : 'none'}
      _hover={{
        textDecoration: 'none',
        bg: 'primary.500',
        color: 'white'
      }}
    >
      <Text fontSize="1.2rem" fontWeight="bold">
        {route.name}
      </Text>
      {children}
    </Box>
  )
}