import { Logo } from '@/components/common/Logo';
import { NavLink } from '@/components/navbar/NavLink';
import { ROUTES } from '@/consts/Routes';
import { useAuth } from '@/context/UserContext';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const links = [ROUTES.HOME, ROUTES.SERVICES, ROUTES.ABOUT];

export const MenuLinks = ({ isOpen }) => {
  const { user, logout } = useAuth();

  return (
    <>
      <HStack spacing={20} alignItems={'center'}>
        <Link as={RouterLink} to={'/'}>
          <Logo w="100px" color={['white', 'white', 'primary.500', 'primary.500']} />
        </Link>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <NavLink route={link} key={link.name} />
          ))}
        </HStack>
      </HStack>

      <Flex alignItems={'center'}>
        <Menu>
          {!user ? (
            <Link as={RouterLink} to={ROUTES.LOGIN.path}>
              <Button
                size="md"
                rounded="md"
                color="white"
                bg="primary.500"
                _hover={{
                  bg: 'primary.600',
                }}
              >
                Login / Sign Up
              </Button>
            </Link>
          ) : (
            <>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <HStack>
                  <Avatar
                    size={'md'}
                    src={
                      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <Text as="p" marginTop="2" color="primary.700" fontSize="lg">
                    {user}
                  </Text>
                </HStack>
              </MenuButton>
            </>
          )}
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuDivider />
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {links.map((link) => (
              <NavLink route={link} key={link.name} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};
