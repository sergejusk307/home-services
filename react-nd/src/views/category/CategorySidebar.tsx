import { Box, Heading, Icon, VStack, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { services } from '@/consts/Services';
import { ROUTES } from '@/consts/Routes';

export const CategorySidebar = ({ service }) => {
  return (
    <Box
      as="nav"
      w="250px"
      bg="gray.50"
      p={5}
      borderRight="1px solid"
      borderColor="gray.200"
      height="100vh"
    >
      <Heading as="h3" size="md" mb={4}>
        Services
      </Heading>
      <VStack spacing={3} align="stretch">
        {services.map((serviceSide) => (
          <Link
            as={RouterLink}
            to={ROUTES.servicePage(serviceSide.name)}
            key={serviceSide.name}
            _hover={{ textDecoration: 'none', bg: 'gray.100' }}
            borderRadius="md"
            p={2}
            display="flex"
            alignItems="center"
            color={serviceSide.color}
            fontWeight={serviceSide.name === service.name ? 'bold' : 'normal'}
            bg={serviceSide.name === service.name ? 'gray.100' : 'transparent'}
          >
            <Icon as={serviceSide.icon} mr={3} />
            <Text color={serviceSide.name === service.name ? serviceSide.color : 'gray.600'}>
              {serviceSide.name.charAt(0).toUpperCase() + serviceSide.name.slice(1)}
            </Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};
