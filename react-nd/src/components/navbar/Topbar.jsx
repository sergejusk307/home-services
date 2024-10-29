import { useContext } from "react";
import { Text, Link, Box, Flex, Avatar, Button, HStack, Stack, Menu, MenuList, MenuDivider, MenuButton, MenuItem, useDisclosure } from "@chakra-ui/react";
import { UserContext } from "@/context/UserContext";
import Logo from "@/components/common/Logo";

import {
  HamburgerIcon,
  CloseIcon
} from '@chakra-ui/icons'


const Links = [
  {name: 'Home', href: '/' },
  {name: 'Services', href: '/search'},
  {name: 'About', href : '/about'}
];

const Topbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <NavBarContainer {...props}>
      <MenuToggle isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};


const MenuToggle = ({ isOpen, onOpen, onClose }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={isOpen ? onClose : onOpen}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      textDecoration={props.href === window.location.pathname ? 'underline' : 'none'}
      _hover={{
        textDecoration: 'none',
        bg:'primary.500',
        color: 'white'
      }}
      href={props.href}>
      {children}
    </Box>
  )
}

const MenuLinks = ({ isOpen }) => {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <HStack spacing={20} alignItems={'center'}>
        <Link href="/">
          <Logo
            w="100px"
            color={["white", "white", "primary.500", "primary.500"]}
          />
        </Link>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link.name} href={link.href}>
              <Text fontSize="1.2rem" fontWeight="bold">
                {link.name} 
              </Text>
            </NavLink>
          ))}
        </HStack>
      </HStack>

      
      <Flex alignItems={'center'}>
        <Menu>
          {!user ? (
            <Link href="/login">
              <Button
                size="md"
                rounded="md"
                color="white"
                bg="primary.500"
                _hover={{
                  bg: "primary.600"
                }}
              >
              Login / Sign Up
              </Button>
            </Link>) : (
            <>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <HStack>
                  <Avatar
                    size={'md'}
                    src={
                      'https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                  <Text
                    as="p"
                    marginTop="2"
                    color='primary.700'
                    fontSize="lg">
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
            {Links.map((link) => (
              <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};

const NavBarContainer = ({ children, ...props }) => {
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
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      borderBottom="2px solid #f1f1f1;"
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Topbar;